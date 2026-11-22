/** Offline planning helpers. No network requests or generation API. */
const templates = {
  product: {
    label: "Product image concept",
    subject: "An unbranded glass skincare bottle on a dark pedestal",
    action: "A few suspended water droplets surround the bottle",
    camera: "A carefully framed studio product photograph",
    lighting: "Soft side light and warm rim highlights",
    detail: "One main product, realistic reflections, no lettering or logos",
  },
  cinematic: {
    label: "Single-shot text-to-video",
    subject: "A ceramic coffee cup beside a window",
    action: "A thin ribbon of steam rises slowly",
    camera: "A gentle straight camera push-in",
    lighting: "Soft morning light",
    detail: "A calm background and one continuous shot",
  },
  portrait: {
    label: "Restrained portrait animation",
    subject: "The person in the reference image",
    action: "A subtle natural head movement and a gentle blink",
    camera: "A fixed camera preserving the original framing",
    lighting: "Consistent soft lighting",
    detail: "Restrained movement and a quiet background",
  },
  transition: {
    label: "First-and-last-frame transition",
    subject: "The product in the two reference images",
    action: "A gradual lighting transition from the first frame to the last",
    camera: "A locked camera",
    lighting: "Smoothly changing from warm light to cool light",
    detail: "The product stays upright and centered in one continuous shot",
  },
};

export function listTemplates() {
  return Object.entries(templates).map(([id, { label }]) => ({ id, label }));
}

export function createPrompt(templateId, overrides = {}) {
  if (!Object.hasOwn(templates, templateId)) throw new TypeError("Unknown template. Use listTemplates().");
  if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) throw new TypeError("Overrides must be an object.");
  const keys = ["subject", "action", "camera", "lighting", "detail"];
  for (const key of Object.keys(overrides)) {
    if (!keys.includes(key) || typeof overrides[key] !== "string" || !overrides[key].trim())
      throw new TypeError("Overrides must contain nonempty subject, action, camera, lighting or detail strings.");
  }
  return keys.map(key => (overrides[key] ?? templates[templateId][key]).trim().replace(/[.!?]+$/, "")).join(". ") + ".";
}

function objectErrors(input, allowed) {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return [{ field: "$", message: "Expected a configuration object." }];
  return Object.keys(input).filter(k => !allowed.includes(k)).map(field => ({ field, message: "Unknown setting." }));
}

function promptErrors(prompt, count) {
  if (typeof prompt !== "string" || !prompt.trim())
    return [{ field: "prompt", message: "Provide a nonempty prompt string." }];
  if (count(prompt.trim()) > 2000)
    return [{ field: "prompt", message: "Prompt exceeds the website's 2,000-character limit." }];
  return [];
}

function choice(errors, field, value, values) {
  if (!values.includes(value)) errors.push({ field, message: "Use one of: " + values.join(", ") + "." });
}

export function validateImageOptions(input) {
  const errors = objectErrors(input, ["prompt", "aspectRatio", "area", "format"]);
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, errors };
  const { prompt, aspectRatio = "1:1", area = "1K", format = "png" } = input;
  errors.push(...promptErrors(prompt, s => [...s].length));
  choice(errors, "aspectRatio", aspectRatio, ["1:1", "16:9", "9:16", "4:3", "3:4"]);
  choice(errors, "area", area, ["1K", "2K"]);
  choice(errors, "format", format, ["jpeg", "png", "webp"]);
  return errors.length ? { ok: false, errors } : {
    ok: true, value: { prompt: prompt.trim(), aspectRatio, area, format },
  };
}

export function validateVideoOptions(input) {
  const errors = objectErrors(input, ["prompt", "mode", "duration", "aspectRatio", "referenceCount"]);
  if (!input || typeof input !== "object" || Array.isArray(input)) return { ok: false, errors };
  const { prompt, mode = "text-to-video", duration = 5, aspectRatio = "16:9", referenceCount = 0 } = input;
  errors.push(...promptErrors(prompt, s => s.length));
  const counts = { "text-to-video": 0, "image-to-video": 1, "first-last-frame": 2 };
  choice(errors, "mode", mode, Object.keys(counts));
  choice(errors, "duration", duration, [5, 10, 15]);
  choice(errors, "aspectRatio", aspectRatio, ["16:9", "9:16"]);
  if (!Number.isInteger(referenceCount) || ![0, 1, 2].includes(referenceCount))
    errors.push({ field: "referenceCount", message: "Use an integer from 0 to 2." });
  else if (Object.hasOwn(counts, mode) && referenceCount !== counts[mode])
    errors.push({ field: "referenceCount", message: mode + " requires " + counts[mode] + " reference image(s)." });
  return errors.length ? { ok: false, errors } : {
    ok: true, value: { prompt: prompt.trim(), mode, duration, aspectRatio, referenceCount },
  };
}
