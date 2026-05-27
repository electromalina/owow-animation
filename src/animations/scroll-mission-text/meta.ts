import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "scroll-mission-text",
  title: "Scroll Text",
  category: "Text",
  tags: ["Scroll", "GSAP", "ScrollTrigger", "Typography"],
  status: "Production ready",
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 56,
  platforms: ["web"],
  engine: "gsap",
  summary:
    "Pinned fullscreen lines swap in scroll sync: outgoing characters glide up while the next phrase rises from below, letter by letter.",
  about: [
    "Each headline is split into characters so motion reads as kinetic type instead of sliding whole blocks.",
    "Scrub-linked ScrollTrigger keeps timing tied to scroll position — ideal for long-form narratives and belief statements on landing pages.",
  ],
  technicalNotes: [
    "Uses GSAP timelines with staggered y transforms on per-character spans, ScrollTrigger pinning, and invalidateOnRefresh for nested scroll previews.",
    "When prefers-reduced-motion is set, copy stacks as readable static lines with no pinning.",
    "Replace `/public/animations/scroll-mission-text/preview.mp4` when you capture a branded recording — current file is a temporary placeholder.",
  ],
  useCases: [
    {
      title: "Mission and vision beats",
      description: "Phrases that deserve time in the spotlight as the user commits scroll.",
    },
    {
      title: "Case study openers",
      description: "Hand off from hero into story with tactile type motion.",
    },
  ],
  previewSrc: "/animations/scroll-mission-text/preview.mp4",
  videoSrc: "/animations/scroll-mission-text/preview.mp4",
};
