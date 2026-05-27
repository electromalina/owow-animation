import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "magnetic-cursor",
  title: "Magnetic Cursor",
  category: "Cursor",
  tags: ["Cursor", "Interaction", "Hover state"],
  status: "Production ready",
  version: "2.4.1",
  updatedAt: "Feb 2026",
  sortOrder: 60,
  platforms: ["web", "mobile"],
  engine: "gsap",
  summary:
    "An elastic, spring-based cursor that follows the pointer with natural physics — built for premium hover states, hero CTAs, and navigation that wants to feel alive.",
  about: [
    "The Magnetic Cursor creates an elastic, spring-based effect that smoothly follows the user's pointer. Built on GSAP's spring engine, it provides a natural, responsive feel that enhances interactive elements and creates engaging hover states without the over-eager bounce of most JS cursor libraries.",
    "Each magnetic target defines its own pull strength and radius, so primary CTAs can grab attention while ambient elements stay subtle. Drop it onto any element with a data attribute — no DOM gymnastics required.",
  ],
  technicalNotes: [
    "Uses a single requestAnimationFrame loop with two-state spring integration (stiffness + damping) — no per-element listeners, no jitter under fast movement. The cursor element is positioned via translate3d for GPU compositing, and target detection runs against a quad-tree of [data-magnetic] elements rebuilt on resize.",
    "Fully compatible with React 18+, Astro, and Next 14 app router. Server-side rendering is supported; the cursor mounts on first pointer event so the SSR'd markup stays untouched.",
    "The mobile build (Reanimated) swaps the spring loop for a UI-thread worklet, so the same physics run at 60–120 fps on device.",
  ],
  useCases: [
    {
      title: "Interactive galleries and portfolios",
      description: "Where each thumbnail wants to feel like a destination.",
    },
    {
      title: "Navigation menus with enhanced hover feedback",
      description: "The magnetic pull makes nav items easier to land on.",
    },
    {
      title: "Call-to-action buttons that need attention",
      description: "Pair with high pull strength on a single primary CTA.",
    },
    {
      title: "Premium landing pages and hero sections",
      description:
        "Reads as polish without committing to a full cursor takeover.",
    },
  ],
  previewSrc: "/animations/magnetic-cursor/preview.gif",
  videoSrc: "/animations/magnetic-cursor/preview.mp4",
};
