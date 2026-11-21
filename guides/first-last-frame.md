# First & Last Frame Video: Build a Controlled Transition in FreeVideo AI

First & Last Frame uses two uploaded images to guide a video's beginning and ending. Use it for a clear before-and-after composition, such as a product photographed under two lighting setups. In H3 Standard it costs 8 credits per task and exports an MP4. Cloud quotes vary by model, resolution and duration and require eligible purchased credits.

[Open First & Last Frame](https://freevideoai.app/ai-video-generator?mode=first-last-frame)

## Choose a compatible pair

The easiest transitions begin with images that share a subject, a similar camera viewpoint and a compatible composition. A prompt has less work to do when the intended change is small and understandable.

| Pair | What to try |
| --- | --- |
| Same product, warm light → cool light | A gradual lighting transition with a fixed camera |
| Same scene, object slightly left → slightly right | A simple movement along one direction |
| Same composition, plain background → softly lit background | A gradual background-light change |

Very different objects or camera viewpoints can lead to warping or unexpected invented motion. Two reference frames guide the result; they do not guarantee exact endpoint reproduction or physically accurate interpolation.

## Prepare both files

Use PNG, JPEG or WebP, with each file no larger than 10 MB. Keep the subject's scale and placement similar. For video output, choose 16:9 or 9:16; prepare both images close to that orientation.

Use two images you have permission to upload. H3 Image remains in Preview and public image generation is closed.

## Generate the transition

1. Sign in and select **First & Last Frame**.
2. Upload the beginning image as the first reference.
3. Upload the intended ending image as the last frame.
4. Check that the images are in the correct order.
5. Choose 5, 10 or 15 seconds and the video orientation.
6. Write a prompt describing the change between the two frames.
7. Generate, review the entire transition and download the result.

## Example: a product lighting transition

```text
A continuous product shot with a locked camera. The lighting changes gradually from the warm look of the first frame to the cool look of the last frame. The product remains upright and centered, with restrained movement and a smooth transition.
```

Use this with two actual images of the same product and composition. Do not expect text alone to reconstruct a brand's exact packaging.

## Example: a small repositioning

```text
The subject moves slowly and smoothly from its position in the first image toward its position in the last image. Keep the camera fixed and the background calm. One continuous movement, without a scene cut.
```

If the movement is unclear, describe its direction explicitly, such as “slightly to the right.” Avoid simultaneously asking the camera to orbit and the subject to transform.

## Evaluate the middle, not only the endpoints

Check the opening, middle and final portions. Look for shape changes, flickering, sudden jumps and unintended scene cuts. A transition can look convincing at both ends while becoming distorted in the middle.

If the result is unstable, reduce the difference between the two reference images. Align the subject's position and scale, simplify the background or request a gentler change. Use a longer duration only when the motion needs more time; it does not guarantee a cleaner transformation.

## Common questions

**Is this video editing with exact keyframes?**  
No. The images guide a generative workflow. It is not a guarantee that every pixel or intermediate motion follows a fixed animation path.

**Can I upload a reference video?**  
This mode uses two still images. It is not a public video-to-video editing control.

**Will the result include sound?**  
H3 Standard MP4s retain model-generated audio, including when using welcome credits. Cloud audio options depend on the selected model.

See the website's [First & Last Frame guide](https://freevideoai.app/first-last-frame-guide) and [FAQ](https://freevideoai.app/faq) for current product details.

---

Last reviewed November 21, 2026. Example prompts illustrate a starting point. [Back to the tutorial index](../README.md).

