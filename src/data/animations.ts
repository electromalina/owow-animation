export type AnimationParam = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  decimals: number;
  unit: string;
  defaultValue: number;
};

export type UseCase = {
  title: string;
  description: string;
};

export type Animation = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  status: string;
  version: string;
  updatedAt: string;
  frameworks: ("web" | "mobile")[];
  summary: string;
  about: string[];
  technicalNotes: string[];
  useCases: UseCase[];
  params: AnimationParam[];
};

export type AnimationState = {
  platform: "web" | "mobile";
  params: Record<string, number>;
};

export const animations: Animation[] = [
  {
    slug: "magnetic-cursor",
    title: "Magnetic Cursor",
    category: "Interaction",
    tags: ["Cursor", "Interaction", "Hover state"],
    status: "Production ready",
    version: "2.4.1",
    updatedAt: "Feb 2026",
    frameworks: ["web", "mobile"],
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
    params: [
      {
        key: "strength",
        label: "Strength",
        min: 0,
        max: 2,
        step: 0.05,
        decimals: 2,
        unit: "",
        defaultValue: 1.2,
      },
      {
        key: "radius",
        label: "Radius",
        min: 0,
        max: 280,
        step: 1,
        decimals: 0,
        unit: "px",
        defaultValue: 120,
      },
      {
        key: "stiffness",
        label: "Stiffness",
        min: 0.04,
        max: 0.5,
        step: 0.01,
        decimals: 2,
        unit: "",
        defaultValue: 0.18,
      },
      {
        key: "damping",
        label: "Damping",
        min: 0.4,
        max: 0.95,
        step: 0.01,
        decimals: 2,
        unit: "",
        defaultValue: 0.7,
      },
    ],
  },
  {
    slug: "animation-2",
    title: "Animation 2",
    category: "React Native",
    tags: ["Mobile", "Animation"],
    status: "Beta",
    version: "1.0.0",
    updatedAt: "Jan 2026",
    frameworks: ["mobile"],
    summary: "Placeholder detail page for a React Native animation entry.",
    about: ["Placeholder about text for animation 2."],
    technicalNotes: ["Placeholder technical notes."],
    useCases: [{ title: "Placeholder", description: "Placeholder use case." }],
    params: [],
  },
  {
    slug: "animation-3",
    title: "Animation 3",
    category: "GSAP",
    tags: ["Timeline", "Animation"],
    status: "Production ready",
    version: "1.2.0",
    updatedAt: "Jan 2026",
    frameworks: ["web"],
    summary: "Placeholder detail page for another timeline-based animation.",
    about: ["Placeholder about text for animation 3."],
    technicalNotes: ["Placeholder technical notes."],
    useCases: [{ title: "Placeholder", description: "Placeholder use case." }],
    params: [],
  },
  {
    slug: "animation-4",
    title: "Animation 4",
    category: "React Native",
    tags: ["Mobile", "Interaction"],
    status: "Experimental",
    version: "0.9.0",
    updatedAt: "Dec 2025",
    frameworks: ["mobile"],
    summary: "Placeholder detail page for a mobile interaction concept.",
    about: ["Placeholder about text for animation 4."],
    technicalNotes: ["Placeholder technical notes."],
    useCases: [{ title: "Placeholder", description: "Placeholder use case." }],
    params: [],
  },
  {
    slug: "animation-5",
    title: "Animation 5",
    category: "GSAP",
    tags: ["Motion", "Study"],
    status: "Beta",
    version: "1.1.0",
    updatedAt: "Jan 2026",
    frameworks: ["web"],
    summary: "Placeholder detail page for a motion study in the library.",
    about: ["Placeholder about text for animation 5."],
    technicalNotes: ["Placeholder technical notes."],
    useCases: [{ title: "Placeholder", description: "Placeholder use case." }],
    params: [],
  },
  {
    slug: "animation-6",
    title: "Animation 6",
    category: "React Native",
    tags: ["Native", "Experiment"],
    status: "Experimental",
    version: "0.8.0",
    updatedAt: "Dec 2025",
    frameworks: ["mobile"],
    summary: "Placeholder detail page for a native animation experiment.",
    about: ["Placeholder about text for animation 6."],
    technicalNotes: ["Placeholder technical notes."],
    useCases: [{ title: "Placeholder", description: "Placeholder use case." }],
    params: [],
  },
];

export function getAnimationBySlug(slug: string) {
  return animations.find((a) => a.slug === slug);
}
