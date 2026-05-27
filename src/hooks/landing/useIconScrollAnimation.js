import { useEffect, useLayoutEffect, useState } from "react";

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function mapProgress(progress, start, end, outMin, outMax) {
  const t = clamp((progress - start) / (end - start));
  return outMin + (outMax - outMin) * t;
}

/**
 * Scroll progress from page top through the scroll section (0 at hero, 1 at end).
 */
export function useDocumentScrollProgress(sectionRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const update = () => {
      const end = section.offsetTop + section.offsetHeight - window.innerHeight;
      setProgress(clamp(window.scrollY / Math.max(end, 1)));
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

/**
 * Header anchor center in viewport coordinates (captured on load / resize).
 */
export function useHeaderAnchorOrigin(anchorRef) {
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return undefined;

    const measure = () => {
      const rect = anchor.getBoundingClientRect();
      setOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [anchorRef]);

  return origin;
}
