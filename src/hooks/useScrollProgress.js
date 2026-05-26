import { useEffect, useState } from "react";

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Returns 0–1 progress while the ref element scrolls through the viewport.
 */
export function useScrollProgress(sectionRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      setProgress(clamp(-rect.top / scrollable));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionRef]);

  return progress;
}

export function mapProgress(progress, start, end, outMin, outMax) {
  const t = clamp((progress - start) / (end - start));
  return outMin + (outMax - outMin) * t;
}
