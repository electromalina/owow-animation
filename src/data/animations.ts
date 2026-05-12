export type Animation = {
  slug: string;
  title: string;
  category: string;
  summary: string;
};

export const animations: Animation[] = [
  {
    slug: "animation-1",
    title: "Animation 1",
    category: "GSAP",
    summary: "Placeholder detail page for a GSAP-driven animation entry.",
  },
  {
    slug: "animation-2",
    title: "Animation 2",
    category: "React Native",
    summary: "Placeholder detail page for a React Native animation entry.",
  },
  {
    slug: "animation-3",
    title: "Animation 3",
    category: "GSAP",
    summary: "Placeholder detail page for another timeline-based animation.",
  },
  {
    slug: "animation-4",
    title: "Animation 4",
    category: "React Native",
    summary: "Placeholder detail page for a mobile interaction concept.",
  },
  {
    slug: "animation-5",
    title: "Animation 5",
    category: "GSAP",
    summary: "Placeholder detail page for a motion study in the library.",
  },
  {
    slug: "animation-6",
    title: "Animation 6",
    category: "React Native",
    summary: "Placeholder detail page for a native animation experiment.",
  },
];

export function getAnimationBySlug(slug: string) {
  return animations.find((animation) => animation.slug === slug);
}
