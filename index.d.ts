export type TemplateId = "product" | "cinematic" | "portrait" | "transition";
export type PromptOverrides = Partial<Record<"subject" | "action" | "camera" | "lighting" | "detail", string>>;
export type ValidationResult<T> = { ok: true; value: T } | { ok: false; errors: { field: string; message: string }[] };
export interface ImageOptions {
  prompt: string;
  aspectRatio: "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
  area: "1K" | "2K";
  format: "jpeg" | "png" | "webp";
}
export interface VideoOptions {
  prompt: string;
  mode: "text-to-video" | "image-to-video" | "first-last-frame";
  duration: 5 | 10 | 15;
  aspectRatio: "16:9" | "9:16";
  referenceCount: 0 | 1 | 2;
}
export function listTemplates(): { id: TemplateId; label: string }[];
export function createPrompt(templateId: TemplateId, overrides?: PromptOverrides): string;
export function validateImageOptions(input: unknown): ValidationResult<ImageOptions>;
export function validateVideoOptions(input: unknown): ValidationResult<VideoOptions>;
