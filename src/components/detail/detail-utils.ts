import type { Animation } from "@/src/animations/registry";
import type { Engine, Platform } from "@/src/animations/types";

export function getAboutHeadline(animation: Animation): string {
  const lead = animation.about[0]?.trim();
  if (!lead) return animation.summary;

  const sentence = lead.match(/^[^.!?]+[.!?]?/)?.[0]?.trim();
  return sentence && sentence.length <= 140 ? sentence : lead.slice(0, 120).trim() + (lead.length > 120 ? "…" : "");
}

export function formatEngineLabel(animation: {
  engine: Engine;
  platforms: Platform[];
}): string {
  const hasWeb = animation.platforms.includes("web");
  const hasMobile = animation.platforms.includes("mobile");

  if (
    hasMobile &&
    (animation.engine === "gsap" || animation.engine === "reanimated" || hasWeb)
  ) {
    if (animation.engine === "gsap" || hasWeb) {
      return "GSAP + React Reanimated";
    }
  }

  switch (animation.engine) {
    case "gsap":
      return "GSAP";
    case "reanimated":
      return "React Reanimated";
    case "css":
      return "CSS";
    default:
      return "Custom";
  }
}

export function formatPlatformsLabel(platforms: Platform[]): string {
  const labels = platforms.map((p) => (p === "web" ? "Web" : "Mobile"));
  return labels.length > 0 ? labels.join(", ") : "—";
}
