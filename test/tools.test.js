import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createPrompt, listTemplates, validateImageOptions, validateVideoOptions } from "../index.js";

test("templates produce editable prompts without shared mutable state", () => {
  const items = listTemplates();
  items[0].id = "changed";
  assert.equal(listTemplates()[0].id, "product");
  assert.match(createPrompt("product", { subject: "A perfume bottle" }), /^A perfume bottle\./);
  assert.match(createPrompt("product"), /skincare/);
  assert.throws(() => createPrompt("toString"), TypeError);
  assert.throws(() => createPrompt("product", { logo: "Exact logo" }), TypeError);
});
test("image ratios and area levels stay distinct from video settings", () => {
  assert.equal(validateImageOptions({ prompt: "Bottle", aspectRatio: "3:4" }).ok, true);
  assert.equal(validateImageOptions({ prompt: "Bottle", area: "4K" }).ok, false);
  assert.equal(validateImageOptions({ prompt: "Bottle", referenceImage: "photo.png" }).ok, false);
  assert.equal(validateVideoOptions({ prompt: "Bottle", aspectRatio: "3:4" }).ok, false);
});
test("empty, oversized and Unicode prompt boundaries", () => {
  for (const input of [null, [], "", {}, { prompt: "   " }])
    assert.equal(validateImageOptions(input).ok, false);
  assert.equal(validateImageOptions({ prompt: "😀".repeat(2000) }).ok, true);
  assert.equal(validateImageOptions({ prompt: "a".repeat(2001) }).ok, false);
  assert.equal(validateVideoOptions({ prompt: "😀".repeat(1001) }).ok, false);
});
test("video reference counts must match modes and duration is numeric", () => {
  for (const [mode, referenceCount] of [["text-to-video", 0], ["image-to-video", 1], ["first-last-frame", 2]])
    assert.equal(validateVideoOptions({ prompt: "Scene", mode, referenceCount }).ok, true);
  assert.equal(validateVideoOptions({ prompt: "Scene", mode: "first-last-frame", referenceCount: 1 }).ok, false);
  assert.equal(validateVideoOptions({ prompt: "Scene", duration: "5" }).ok, false);
  assert.equal(validateVideoOptions({ prompt: "Scene", referenceCount: 0.5 }).ok, false);
  assert.equal(validateVideoOptions({ prompt: "Scene", mode: "__proto__" }).ok, false);
});
test("CLI handles stdin, invalid configurations and malformed JSON", () => {
  const cli = new URL("../bin/cli.js", import.meta.url);
  const run = (args, input) => spawnSync(process.execPath, [fileURLToPath(cli), ...args], { input, encoding: "utf8" });
  const valid = run(["validate", "image", "-"], JSON.stringify({ prompt: "Bottle", aspectRatio: "4:3" }));
  assert.equal(valid.status, 0);
  assert.equal(JSON.parse(valid.stdout).value.aspectRatio, "4:3");
  assert.equal(run(["validate", "video", "-"], JSON.stringify({ prompt: "Scene", duration: 99 })).status, 1);
  assert.equal(run(["validate", "image", "-"], "{").status, 2);
  assert.equal(run(["prompt", "product", "--subject"], "").status, 2);
  assert.equal(run(["prompt", "product", "--bad", "x"], "").status, 2);
});
