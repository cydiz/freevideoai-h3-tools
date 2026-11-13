# FreeVideo AI H3 Tools: CLI & JavaScript Tutorial

Prepare an H3 prompt and catch unsupported settings before you use the [FreeVideo AI website](https://freevideoai.app/). This package works offline and does not generate images or videos itself.

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

Image defaults are 1:1, 1K and PNG. Supported ratios are 1:1, 16:9, 9:16, 4:3 and 3:4; area levels are 1K and 2K; formats are jpeg, png and webp. These are package defaults for planning, not a claim about the website's initial selections. Area levels are not fixed pixel dimensions, and PNG does not imply transparency.

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

Video supports numeric durations 5, 10 and 15, and ratios 16:9 and 9:16. Text to Video needs zero references, Image to Video one, and First & Last Frame two. `referenceCount` is a planning field, not a generation API parameter. The validator does not open or validate image files.

Video defaults are text-to-video, 5 seconds, 16:9 and zero references. Unknown keys are rejected to catch misspellings or unsupported capabilities.

Both prompt limits are 2,000 after trimming. To match the current website checks, images count Unicode code points while video counts UTF-16 code units; some emoji count as two video units. The package checks syntax and current supported choices, not prompt quality or content suitability.

## Use JavaScript

```js
import {
  createPrompt,
  listTemplates,
  validateImageOptions,
  validateVideoOptions,
} from 'freevideoai-h3-tools';

const prompt = createPrompt('product', { subject: 'An unbranded perfume bottle' });
const result = validateImageOptions({ prompt, aspectRatio: '4:3' });
if (result.ok) {
  console.log(result.value);
} else {
  console.error(result.errors);
}

console.log(listTemplates());
console.log(validateVideoOptions({ prompt: 'A cup with rising steam.', duration: 5 }));
```

When running directly inside a cloned repository, import from `./index.js` instead. TypeScript declarations are included. `createPrompt` throws `TypeError` for unknown templates or invalid overrides; validators return a result object for ordinary JSON inputs.

## CLI automation

Use `-` as the file argument to read JSON from standard input. Validation writes JSON to stdout. Exit codes: 0 valid, 1 invalid configuration, 2 malformed JSON, file errors or command errors. Diagnostics for command/file errors go to stderr. Prompts are read only from arguments or the file/stdin you explicitly provide.

## Generate on the website

After validation, open [H3 Image](https://freevideoai.app/ai-image-generator) or the [video generator](https://freevideoai.app/ai-video-generator), sign in, paste the prompt and choose the matching settings manually. The CLI does not transfer settings automatically or bypass credits.

H3 Image currently has a 0-credit introductory offer with usage limits. Eligible new Google accounts receive 60 video welcome credits, valid for 30 days. Review [Pricing](https://freevideoai.app/pricing) and [FAQ](https://freevideoai.app/faq) for current terms.

Last reviewed: November 13, 2026. [Back to README](../README.md).
