import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "hover-preview-strip",
  title: "Hover Preview Strip",
  category: "Hover",
  tags: ["Hover", "GSAP", "Preview", "List"],
  status: "Production ready",
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 56,
  platforms: ["web"],
  engine: "gsap",
  summary:
    "Hover or focus a row to reveal a masked preview panel that follows your pointer; images swap via a vertical strip translate.",
  about: [
    "A portfolio-style list where each row drives a preview panel. The panel fades in on hover/focus, follows pointer Y, and cross-swaps imagery by shifting a stacked strip inside a mask.",
    "Designed for work listings and galleries where navigation should feel tactile but stay lightweight (no heavy canvas).",
  ],
  technicalNotes: [
    "Uses GSAP quickTo for buttery pointer-follow (y translate) and tweens for strip translate + fade.",
    "Reduced motion keeps transitions near-instant and removes pointer-following.",
    "Replace `/public/animations/hover-preview-strip/preview.mp4` when you capture a branded recording — current file is a temporary placeholder.",
  ],
  useCases: [
    {
      title: "Portfolio and project lists",
      description: "Preview work in-context without leaving the list.",
    },
    {
      title: "Product collections",
      description: "Hover previews for SKUs, templates, or themes.",
    },
  ],
  previewSrc: "/animations/hover-preview-strip/preview.mp4",
  videoSrc: "/animations/hover-preview-strip/preview.mp4",
};

