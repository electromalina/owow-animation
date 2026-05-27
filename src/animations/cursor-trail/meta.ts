import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "cursor-trail",
  title: "Cursor Trail",
  category: "Cursor",
  tags: ["Cursor", "GSAP", "Particles", "Hover"],
  status: "Production ready",
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 58,
  platforms: ["web"],
  engine: "gsap",
  summary:
    "Pointer-driven icon trail that spawns drifting Union marks as you move — tuned for hero cards and playful brand moments.",
  about: [
    "Move the pointer inside the stage and GSAP spawns lightweight image particles at a throttled interval. Each mark drifts, rotates, and fades out without blocking interaction.",
    "Built for embedded previews on landing pages: a faint legend shows the icon set while a hint invites exploration.",
  ],
  technicalNotes: [
    "Particles are ephemeral DOM nodes capped by maxParticles; spawn rate is gated by minimum pointer travel distance.",
    "Respects prefers-reduced-motion and skips animation when the user opts out of motion.",
  ],
  useCases: [
    {
      title: "Featured animation cards",
      description: "Give library previews a tactile, on-brand cursor moment.",
    },
    {
      title: "Hero sections",
      description: "Soft delight without replacing the system cursor.",
    },
    {
      title: "Brand playgrounds",
      description: "Swap the icon set for product marks or seasonal assets.",
    },
  ],
  previewSrc: "/animations/cursor-trail/preview.mp4",
  videoSrc: "/animations/cursor-trail/preview.mp4",
};
