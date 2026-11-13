# FreeVideo AI — H3 Tools & Tutorials

**Your best ideas deserve a free start.** Turn words into short videos, animate a photo, or explore a product-image concept with [FreeVideo AI](https://freevideoai.app/).

[Start creating videos](https://freevideoai.app/ai-video-generator) · [Try H3 Image](https://freevideoai.app/ai-image-generator) · [Pricing](https://freevideoai.app/pricing) · [FAQ](https://freevideoai.app/faq)

This is a public user-guide repository maintained for FreeVideo AI. It contains tutorials and prompt examples, not model weights or the website's application source. It is not an official MiniMax repository.

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

Copy the generated prompt into the website. Validation checks your planned settings; it does not create media, submit jobs or check your credit balance. The website's sign-in, availability and credit rules still apply.

Read the [CLI and JavaScript tutorial](guides/offline-tools.md) for installation, programmatic usage, defaults and error handling.

## What can you create?

| Starting point | Mode | Website cost |
| --- | --- | --- |
| A written scene | Text to Video | 6 credits per generation |
| One photo or illustration | Image to Video | 8 credits per generation |
| Two endpoint images | First & Last Frame | 8 credits per generation |
| A description of an image | H3 Image | 0 credits during the introductory period |

**Free access:** eligible new Google accounts receive 60 welcome credits, valid for 30 days. With the full grant, that covers up to ten Text to Video generations. Sign-in and usage limits apply; free access is not unlimited.

Optional paid packs are one-time purchases: US$6.99 for 100 credits or US$29.90 for 1,000 credits. Paid credits do not expire. Check the [current pricing page](https://freevideoai.app/pricing) for purchase availability.

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

| Guide | What you will learn |
| --- | --- |
| [Getting started](guides/getting-started.md) | Choose a mode, understand credits, preview and download |
| [Text to Video](guides/text-to-video.md) | Write single-shot prompts and troubleshoot motion |
| [Image to Video](guides/image-to-video.md) | Prepare a product photo or portrait and guide subtle movement |
| [First & Last Frame](guides/first-last-frame.md) | Select compatible images and build a transition |
| [H3 product images](guides/h3-product-images.md) | Use 4:3 or 3:4, write product prompts and manually move an image into video |

## Make a product-image concept with H3 Image

Open [H3 Image](https://freevideoai.app/ai-image-generator), choose 3:4 for a tall composition or 4:3 for a wider product card, then describe the subject, materials, lighting and background.

```text
An unbranded skincare serum bottle with clear glass, an ivory inner container, a white pump and brushed gold accents. The bottle floats at a slight diagonal above a glossy black pedestal. Suspended water droplets, a charcoal studio background, warm rim lighting and realistic reflections. One bottle, no lettering or logos.
```

H3 Image creates a new image from text. It does not currently accept a reference-product upload or provide image editing. Inspect shapes, labels and reflections. Add accurate typography in an editor; do not treat an imagined package as an exact photograph of a real product.

## Current controls and limits

| | Video | H3 Image |
| --- | --- | --- |
| Output | Silent MP4 | JPEG, PNG or WebP |
| Duration | 5, 10 or 15 seconds | Not applicable |
| Ratios | 16:9, 9:16 | 1:1, 16:9, 9:16, 4:3, 3:4 |
| Resolution control | Workflow native resolution | 1K or 2K area levels; check actual result dimensions |
| Reference inputs | One image or two frames in their respective modes | Text only |
| Upload types | PNG, JPEG, WebP; up to 10 MB per image | No reference-image upload |

Image ratios do not add video output ratios. To animate a generated image, download it and upload it manually into Image to Video; that video task costs 8 credits. A PNG output does not imply transparent-background support.

The public video workflow does not generate audio or lip sync. Exact typography, product identity, complex motion and endpoint matching are not guaranteed. See [product transparency](https://freevideoai.app/product-transparency) for practical limitations.

## Common questions

**Is it really free to start?** Eligible new Google accounts receive the welcome grant described above. Image generation is currently 0 credits during the introductory period. Limits and availability still apply.

**Do I need to install a model or supply an API key?** No for the website: sign in and use the browser interface. This repository does not provide a public generation API or local model installer.

**Why is my video silent?** Silent MP4 is the current public output. Add music, speech or captions in a video editor.

**Why does a task remain queued or show a result check?** Queue time varies, and the service may still be reconciling a result. Wait for a final status before submitting a duplicate task.

**Can I reproduce a real product exactly?** Generative output can change packaging, labels and geometry. Use accurate product photography and a suitable editing workflow when exact identity is essential.

## More resources

- [Live video examples](https://freevideoai.app/examples)
- [Website video prompt guide](https://freevideoai.app/ai-video-prompt-guide)
- [Public Notion tutorial hub](https://frequent-option-c81.notion.site/4170d247536b8192a334edf9d1407979)

Last reviewed: November 13, 2026. Current website controls and pricing take precedence. Suggestions that improve clarity or correct outdated details are welcome.

