import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "magnetic-button",
  title: "Magnetic Button",
  category: "Button",
  tags: ["Button", "Hover", "GSAP", "Confetti"],
  status: "Production ready",
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 56,
  platforms: ["web"],
  engine: "gsap",
  summary:
    "CTA button with magnetic pull, pill morph on hover, elastic snap-back, and celebratory confetti burst on click.",
  about: [
    "Pointer proximity within a radius translates the button and label with separate strengths. Hover swaps copy and morphs the border radius to a pill with accent fill.",
    "Click triggers a scaled press animation and yellow confetti burst from the button center.",
  ],
  technicalNotes: [
    "Uses @gsap/react useGSAP for scoped listeners and elastic easing on leave.",
    "Confetti pieces are ephemeral DOM nodes removed after the GSAP timeline completes.",
  ],
  useCases: [
    {
      title: "Primary CTAs",
      description: "Hero and featured cards where the button should feel tactile.",
    },
    {
      title: "Library entry points",
      description: "Encourage exploration with satisfying click feedback.",
    },
  ],
  previewSrc: "/animations/magnetic-button/preview.mp4",
  videoSrc: "/animations/magnetic-button/preview.mp4",
};
