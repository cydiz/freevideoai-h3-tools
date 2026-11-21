# FreeVideo AI — H3 Tools & Tutorials

**FreeVideo AI** is a browser-based AI video generation platform. Its official website is [freevideoai.app](https://freevideoai.app/). The online studio creates short videos from a prompt, a photo, or first and last frames.

[Video Studio](https://freevideoai.app/ai-video-generator) · [Pricing](https://freevideoai.app/pricing) · [Product Transparency](https://freevideoai.app/product-transparency) · [H3 Image Preview](https://freevideoai.app/ai-image-generator)

This repository contains FreeVideo AI's offline prompt tools and tutorials. FreeVideo AI hosts the online studio, and MiniMax H3 is a model used in its video workflows. Cloud tasks may be processed by third-party generation services. See [Product Transparency](https://freevideoai.app/product-transparency) for workflow and data-handling details. The repository's MIT license covers the offline package and its accompanying materials.

## Offline prompt and validation tools

This repository includes **freevideoai-h3-tools**, an original, dependency-free JavaScript library and CLI. Prepare prompts and validate a generation plan locally, then use the website to generate. No network calls, API keys, tracking or installation scripts are used by the tool.

Requires Node.js 18 or newer. Install the library from npm:

```sh
npm install freevideoai-h3-tools
```

Run the CLI without a global installation:

```sh
npx freevideoai-h3-tools templates
npx freevideoai-h3-tools prompt product --subject "An unbranded perfume bottle"
```

Or clone the repository to run the included examples:

```sh
git clone https://github.com/cydiz/freevideoai-h3-tools.git
cd freevideoai-h3-tools
node bin/cli.js templates
node bin/cli.js prompt product --subject "An unbranded perfume bottle"
node bin/cli.js validate image examples/image.json
node bin/cli.js validate video examples/video.json
```

Copy a video prompt into the website when you are ready to generate. The two example files above are offline validation fixtures. A valid image configuration is suitable for planning while H3 Image remains in Preview and public generation is closed.

Read the [CLI and JavaScript tutorial](guides/offline-tools.md) for installation, programmatic usage, defaults and error handling.

## Video generation and credits

| Starting point            | Mode               | H3 Standard cost         |
| ------------------------- | ------------------ | ------------------------ |
| A written scene           | Text to Video      | 6 credits per generation |
| One photo or illustration | Image to Video     | 8 credits per generation |
| Two endpoint images       | First & Last Frame | 8 credits per generation |

Eligible new Google accounts receive **60 one-time welcome credits**, valid for **30 days**. At H3 Standard rates, 60 credits cover up to ten Text to Video tasks with no credits left, or seven Image to Video or First & Last Frame tasks with four credits left.

Cloud uses dynamic pricing by model, resolution and duration. The studio shows the quote before submission. Cloud requires eligible purchased credits. Welcome credits apply to H3 Standard only. The [Pricing page](https://freevideoai.app/pricing) lists credit packs and monthly and annual plans. Annual plans save 30% compared with 12 monthly payments.

## Make your first video

1. Open [Text to Video](https://freevideoai.app/ai-video-generator?mode=text-to-video) and sign in.
2. Choose 5 seconds and landscape 16:9.
3. Paste this example prompt.
4. Generate once and follow the task status in your history.
5. Preview the result and download the MP4.

```text
A ceramic coffee cup sits on a wooden table beside a window. A thin ribbon of steam rises slowly. The camera makes a gentle push-in toward the cup. Soft morning light, a quiet background, one continuous shot.
```

Start with one subject, one action and one camera move. Review the result, then adjust one instruction at a time. Example prompts are starting points, not guarantees of a particular output.

## Tutorials

| Guide                                                 | What you will learn                                                                          |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Getting started](guides/getting-started.md)          | Choose a mode, understand credits, preview and download                                      |
| [Text to Video](guides/text-to-video.md)              | Write single-shot prompts and troubleshoot motion                                            |
| [Image to Video](guides/image-to-video.md)            | Prepare a product photo or portrait and guide subtle movement                                |
| [First & Last Frame](guides/first-last-frame.md)      | Select compatible images and build a transition                                              |
| [Product-image concepts](guides/h3-product-images.md) | Draft product prompts while H3 Image is in Preview and use an existing photo in Video Studio |

## Plan a product-image concept

[H3 Image](https://freevideoai.app/ai-image-generator) is in **Preview**. Public image generation is currently closed. Use the offline toolkit to prepare a prompt for a tall product poster or a wider product card.

```text
An unbranded skincare serum bottle with clear glass, an ivory inner container, a white pump and brushed gold accents. The bottle floats at a slight diagonal above a glossy black pedestal. Suspended water droplets, a charcoal studio background, warm rim lighting and realistic reflections. One bottle, no lettering or logos.
```

When reviewing a concept from any image workflow, inspect shapes, labels and reflections. Use an approved product photograph when the output must depict the exact packaging.

## Current controls and limits

H3 Standard offers 5-, 10-, or 15-second MP4 clips in landscape 16:9 or portrait 9:16. For Image to Video and First & Last Frame, upload PNG, JPEG or WebP files up to 10 MB each. Cloud options vary by model. Exact typography, product identity, complex motion and endpoint matching can vary. See [Product Transparency](https://freevideoai.app/product-transparency) for practical limitations.

## Common questions

**Can I start for free?** The one-time welcome grant lets eligible new Google accounts try H3 Standard. H3 Image is in Preview and public image generation is closed.

**Do I need to install a model or supply an API key?** No for the website: sign in and use the browser interface. This repository does not provide a public generation API or local model installer.

**Does Standard include native audio?** H3 Standard MP4s retain model-generated audio, including when using welcome credits. Cloud audio options depend on the model.

**Why does a task remain queued or show a result check?** Queue time varies, and the service may still be reconciling a result. Wait for a final status before submitting a duplicate task.

**Can I reproduce a real product exactly?** Generative output can change packaging, labels and geometry. Use accurate product photography and a suitable editing workflow when exact identity is essential.

## More resources

- [Live video examples](https://freevideoai.app/examples)
- [Website video prompt guide](https://freevideoai.app/ai-video-prompt-guide)
- [Official creative guides](https://freevideoai.app/guides)

Last reviewed November 21, 2026. Refer to the website for current controls, availability and pricing.

