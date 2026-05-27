import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "blur-cascade",
  title: "Blur Cascade",
  category: "Reveal",
  tags: ["Reveal", "Stagger", "Entrance", "Blur"],
  status: "Production ready",
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 55,
  platforms: ["web", "mobile"],
  engine: "gsap",
  summary:
    "A staggered entrance where each element enters from below, blurred, and sharpens into place — configurable easing, duration, and stagger.",
  about: [
    "Blur Cascade creates a staggered reveal where elements enter from below, blurred and offset, sharpening and settling into place. The blur adds a layer of depth that a plain fade-up can't deliver.",
    "Configurable easing means the same animation can feel sharp and editorial with expo.out, or bouncy and alive with elastic.out. The stagger controls how sequential or simultaneous the reveal feels — subtle differences that change the whole personality.",
  ],
  technicalNotes: [
    "Animates opacity, transform (translateY), and CSS filter (blur) in a single GSAP tween. clearProps: 'filter' removes the GPU compositing layer once the animation completes, keeping memory footprint clean.",
    "The mobile build uses Reanimated's withTiming and Easing to match the blur-cascade feel on-device at 60–120fps. The blur is approximated via opacity and shadow since React Native doesn't support CSS filter on all targets.",
  ],
  useCases: [
    {
      title: "Content feeds and list reveals",
      description: "Each row staggered in — makes a page feel alive on load.",
    },
    {
      title: "Marketing and landing pages",
      description: "Editorial entrances for feature sections and hero content.",
    },
    {
      title: "Dashboard panels",
      description: "Data loads with purpose, not a flash of unstyled content.",
    },
    {
      title: "Mobile app screens",
      description: "Smooth, easing-aware reveal that adapts to any screen size.",
    },
  ],
  previewSrc: "/animations/blur-cascade/preview.gif",
  videoSrc: "/animations/blur-cascade/preview.mp4",
};
