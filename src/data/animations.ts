export type Animation = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  videoSrc: string;
  tags: string[];
};

export const animations: Animation[] = [
  {
    slug: "animation-1",
    title: "Animation 1",
    category: "GSAP",
    summary: "Placeholder detail page for a GSAP-driven animation entry.",
    videoSrc: "/animations/animation-1/preview.mp4",
    tags: ["GSAP", "Both"]
  },
  {
    slug: "animation-2",
    title: "Animation 2",
    category: "React Native",
    summary: "Placeholder detail page for a React Native animation entry.",
    videoSrc: "/animations/animation-2/preview.mp4",
    tags: ["GSAP", "Both"]
  },
  {
    slug: "animation-3",
    title: "Animation 3",
    category: "GSAP",
    summary: "Placeholder detail page for another timeline-based animation.",
    videoSrc: "/animations/animation-3/preview.mp4",
    tags: ["GSAP", "Both"]
  },
  {
    slug: "animation-4",
    title: "Animation 4",
    category: "React Native",
    summary: "Placeholder detail page for a mobile interaction concept.",
    videoSrc: "/animations/animation-4/preview.mp4",
    tags: ["GSAP", "Both"]
  },
  {
    slug: "animation-5",
    title: "Animation 5",
    category: "GSAP",
    summary: "Placeholder detail page for a motion study in the library.",
    videoSrc: "/animations/animation-5/preview.mp4",
    tags: ["GSAP", "Both"]
  },
  {
    slug: "animation-6",
    title: "Animation 6",
    category: "React Native",
    summary: "Placeholder detail page for a native animation experiment.",
    videoSrc: "/animations/animation-6/preview.mp4",
    tags: ["GSAP", "Both"]
  },
];

export function getAnimationBySlug(slug: string) {
  return animations.find((animation) => animation.slug === slug);
}
