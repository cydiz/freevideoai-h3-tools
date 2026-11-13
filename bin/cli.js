#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { createPrompt, listTemplates, validateImageOptions, validateVideoOptions } from "../index.js";

const [command, ...args] = process.argv.slice(2);
const print = value => process.stdout.write(JSON.stringify(value, null, 2) + "\n");
try {
  if (!command || ["help", "--help", "-h"].includes(command)) {
    console.log([
      "FreeVideo AI H3 tools — offline prompt preparation",
      "",
      "  freevideoai-h3 templates",
      '  freevideoai-h3 prompt product --subject "An unbranded perfume bottle"',
      "  freevideoai-h3 validate image examples/image.json",
      "  freevideoai-h3 validate video -    (read JSON from stdin)",
      "  freevideoai-h3 --version",
      "",
      "Templates: product, cinematic, portrait, transition.",
      "Prompt flags: --subject, --action, --camera, --lighting, --detail.",
      "Validation writes JSON; exit 0 = valid, 1 = invalid, 2 = command/file error.",
      "Prepare prompts offline. Generate at https://freevideoai.app/",
    ].join("\n"));
  } else if (command === "--version") {
    console.log(JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")).version);
  } else if (command === "templates" && args.length === 0) {
    print(listTemplates());
  } else if (command === "prompt") {
    const [id, ...flags] = args;
    if (flags.length % 2) throw new Error("Every prompt flag needs a value.");
    const overrides = {};
    for (let i = 0; i < flags.length; i += 2) {
      if (!/^--(subject|action|camera|lighting|detail)$/.test(flags[i])) throw new Error("Unknown flag: " + flags[i]);
      const key = flags[i].slice(2);
      if (Object.hasOwn(overrides, key)) throw new Error("Duplicate flag: " + flags[i]);
      overrides[key] = flags[i + 1];
    }
    console.log(createPrompt(id, overrides));
  } else if (command === "validate" && args.length === 2 && ["image", "video"].includes(args[0])) {
    const input = JSON.parse(readFileSync(args[1] === "-" ? 0 : args[1], "utf8"));
    const result = (args[0] === "image" ? validateImageOptions : validateVideoOptions)(input);
    print(result);
    process.exitCode = result.ok ? 0 : 1;
  } else {
    throw new Error("Unknown command or arguments. Run freevideoai-h3 --help.");
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
