# FreeVideo AI H3 Tools: CLI & JavaScript Tutorial

Prepare prompts and check parameter syntax offline with this package. Use the official [FreeVideo AI website](https://freevideoai.app/) for browser-based video generation.

## Install from npm or run from source

Requires Node.js 18+. There are no external dependencies or build step.

Install the library in your Node project:

```sh
npm install freevideoai-h3-tools
```

Run the CLI with npx:

```sh
npx freevideoai-h3-tools templates
npx freevideoai-h3-tools prompt product --subject "An unbranded perfume bottle"
```

To run the repository's sample files and tests, clone the source:

```sh
git clone https://github.com/cydiz/freevideoai-h3-tools.git
cd freevideoai-h3-tools
node bin/cli.js --help
npm test
```

Alternatively, install from the public GitHub repository:

```sh
npm install github:cydiz/freevideoai-h3-tools
```

## Build a product prompt

```sh
node bin/cli.js templates
node bin/cli.js prompt product --subject "An unbranded clear glass perfume bottle" --lighting "Soft side light with a warm gold rim"
```

Templates: `product` for still-image concepts, `cinematic` for single-shot videos, `portrait` for image animation and `transition` for two-frame transitions. Override `subject`, `action`, `camera`, `lighting` and `detail` with nonempty strings. Templates are illustrative and do not guarantee a particular output.

## Validate an image plan

Save the following as `image.json`:

```json
{
  "prompt": "An unbranded glass perfume bottle on a dark pedestal, soft studio lighting.",
  "aspectRatio": "3:4",
  "area": "1K",
  "format": "png"
}
```

```sh
node bin/cli.js validate image image.json
```

Valid output contains `ok: true` and normalized `value`. Invalid output contains `ok: false` and an `errors` array with field names and explanations.

Image defaults in this package are 1:1, 1K and PNG. The offline validator accepts 1:1, 16:9, 9:16, 4:3 and 3:4, the 1K and 2K area levels, and the `jpeg`, `png` and `webp` format values. These fields describe an offline plan. See [H3 Image Preview](https://freevideoai.app/ai-image-generator) for the current website status.

## Validate a video plan

```json
{
  "prompt": "The product remains centered as the camera slowly pushes in.",
  "mode": "image-to-video",
  "duration": 5,
  "aspectRatio": "9:16",
  "referenceCount": 1
}
```

For a Standard video plan, the validator accepts numeric durations 5, 10 and 15, and ratios 16:9 and 9:16. Text to Video needs zero references, Image to Video one, and First & Last Frame two. `referenceCount` records the planned number of source images. Choose Cloud settings and review the actual quote on the website.

Video defaults are text-to-video, 5 seconds, 16:9 and zero references. Unknown keys are rejected to catch misspellings or unsupported capabilities.

The offline validators use a 2,000-character limit after trimming. Images count Unicode code points and video counts UTF-16 code units, so some emoji count as two video units. Validation checks the settings accepted by this package.

## Use JavaScript

```js
import {
  createPrompt,
  listTemplates,
  validateImageOptions,
  validateVideoOptions,
} from "freevideoai-h3-tools";

const prompt = createPrompt("product", {
  subject: "An unbranded perfume bottle",
});
const result = validateImageOptions({ prompt, aspectRatio: "4:3" });
if (result.ok) {
  console.log(result.value);
} else {
  console.error(result.errors);
}

console.log(listTemplates());
console.log(
  validateVideoOptions({ prompt: "A cup with rising steam.", duration: 5 }),
);
```

When running directly inside a cloned repository, import from `./index.js` instead. TypeScript declarations are included. `createPrompt` throws `TypeError` for unknown templates or invalid overrides; validators return a result object for ordinary JSON inputs.

## CLI automation

Use `-` as the file argument to read JSON from standard input. Validation writes JSON to stdout. Exit codes: 0 valid, 1 invalid configuration, 2 malformed JSON, file errors or command errors. Diagnostics for command/file errors go to stderr. Prompts are read only from arguments or the file/stdin you explicitly provide.

## Use a video prompt on the website

After validating a video plan, open [Video Studio](https://freevideoai.app/ai-video-generator), sign in, paste the prompt and select the settings in the browser. The image example is for offline planning while H3 Image remains in Preview and public generation is closed.

Eligible new Google accounts receive 60 one-time welcome credits, valid for 30 days. They apply to H3 Standard. Cloud quotes are based on model, resolution and duration, and require eligible purchased credits. Review [Pricing](https://freevideoai.app/pricing) and [FAQ](https://freevideoai.app/faq) for current terms.

Last reviewed November 21, 2026. [Back to README](../README.md).
