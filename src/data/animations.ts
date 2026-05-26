export type Animation = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  gifSrc: string;
};

export const animations: Animation[] = [
  {
    slug: "animation-1",
    title: "Animation 1",
    category: "GSAP",
    summary: "Placeholder detail page for a GSAP-driven animation entry.",
    gifSrc: "/animations/animation-1/preview.gif",
  },
  {
    slug: "animation-2",
    title: "Animation 2",
    category: "React Native",
    summary: "Placeholder detail page for a React Native animation entry.",
    gifSrc: "/animations/animation-2/preview.gif",
  },
  {
    slug: "animation-3",
    title: "Animation 3",
    category: "GSAP",
    summary: "Placeholder detail page for another timeline-based animation.",
    gifSrc: "/animations/animation-3/preview.gif",
  },
  {
    slug: "animation-4",
    title: "Animation 4",
    category: "React Native",
    summary: "Placeholder detail page for a mobile interaction concept.",
    gifSrc: "/animations/animation-4/preview.gif",
  },
  {
    slug: "animation-5",
    title: "Animation 5",
    category: "GSAP",
    summary: "Placeholder detail page for a motion study in the library.",
    gifSrc: "/animations/animation-5/preview.gif",
  },
  {
    slug: "animation-6",
    title: "Animation 6",
    category: "React Native",
    summary: "Placeholder detail page for a native animation experiment.",
    gifSrc: "/animations/animation-6/preview.gif",
  },
];

export function getAnimationBySlug(slug: string) {
  return animations.find((animation) => animation.slug === slug);
}
