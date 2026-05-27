import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "particle-text",
  title: "Particle Text",
  category: "Text",
  tags: ["Text", "Canvas", "Particles", "Interaction"],
  status: "Production ready",
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 55,
  platforms: ["web"],
  engine: "other",
  summary:
    "Typography sampled into interactive particles — pointer repulsion, brownian drift, and click scatter on canvas.",
  about: [
    "Text is rasterized to a canvas mask, then sampled on a grid into particles that spring back to home positions with elasticity and damping.",
    "Pointer proximity applies chaotic repulsion; clicks add outward scatter impulses.",
  ],
  technicalNotes: [
    "Canvas 2D with ResizeObserver for responsive sizing.",
    "Supports pointer and touch; static render when prefers-reduced-motion is set.",
  ],
  useCases: [
    {
      title: "Hero headlines",
      description: "Turn a wordmark into a tactile, playable moment.",
    },
    {
      title: "Featured library cards",
      description: "Compact preview of particle typography in the atlas grid.",
    },
  ],
  previewSrc: "/animations/particle-text/preview.mp4",
  videoSrc: "/animations/particle-text/preview.mp4",
};
