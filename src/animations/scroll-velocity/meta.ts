import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "scroll-velocity",
  title: "Scroll Velocity",
  category: "Scroll",
  tags: ["Scroll", "GSAP", "Momentum"],
  status: "Production ready",
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 57,
  platforms: ["web"],
  engine: "gsap",
  summary:
    "Kinetic typography strip driven by wheel momentum — velocity meter, motion blur, and focus falloff as you scroll.",
  about: [
    "A looping vertical text strip responds to wheel input with accumulated velocity, friction, and vertical motion blur. Rows fade based on distance from the viewport center.",
    "Built for featured landing cards and scroll-driven hero moments where typography should feel physically weighted.",
  ],
  technicalNotes: [
    "Uses requestAnimationFrame with friction decay and SVG feGaussianBlur for velocity-based stretch.",
    "Respects prefers-reduced-motion by disabling the physics loop.",
  ],
  useCases: [
    {
      title: "Landing featured sections",
      description: "Preview scroll physics inside pinned horizontal galleries.",
    },
    {
      title: "Editorial scroll moments",
      description: "Pair with scrubbed ScrollTrigger sections on long pages.",
    },
  ],
  previewSrc: "/animations/scroll-velocity/preview.mp4",
  videoSrc: "/animations/scroll-velocity/preview.mp4",
};
