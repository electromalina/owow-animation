"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

import { scrambleTo } from "@/src/lib/landing/scrambleText.js";
import "@/src/components/landing/MotionCategories.css";

gsap.registerPlugin(ScrollTrigger);

/** Matches hero `--hero-accent` */
const ACCENT_HEX = "#feb800";

const CATEGORIES = [
  {
    id: "scroll",
    index: "01",
    title: "Scroll",
    body: "Turn scrolling into immersive motion experiences.",
    accent: false,
  },
  {
    id: "hover",
    index: "02",
    title: "Hover",
    body: "Design micro interactions that feel alive.",
    accent: false,
  },
  {
    id: "text",
    index: "03",
    title: "Text",
    body: "Bring words to life through motion and interaction.",
    accent: false,
  },
  {
    id: "svg",
    index: "04",
    title: "SVG",
    body: "Create dimensional experiences beyond flat interfaces.",
    accent: false,
  },
  {
    id: "explore",
    index: "05",
    title: "Explore more categories",
    body: "Keep browsing motion stories and experiments.",
    accent: true,
  },
];

const EXPLORE_CATEGORY = CATEGORIES.find((c) => c.id === "explore");
const EXPLORE_TITLE = EXPLORE_CATEGORY?.title ?? "Explore more categories";
const LIBRARY_HREF = "/library";
const EXPLORE_SCRAMBLE_DURATION = 0.55;

const SCROLL_PER_ITEM = 85;

/** Vertical gap between neighbouring category titles on the wheel (px) */
const WHEEL_ROW_GAP = 236;

/** From svg.svg (SVG category motif) */
const SVG_CATEGORY_PATHS = [
  "M19.4288 19.1296L53.9933 53.6942C60.41 60.1108 60.41 70.5142 53.9933 76.9308L19.4288 111.495",
  "M111.795 111.495L77.23 76.9308C70.8134 70.5142 70.8134 60.1108 77.23 53.6942L111.795 19.1296",
  "M65.5751 40.6564L65.5751 0",
  "M90.4935 65.3125L131.15 65.3125",
  "M0.000238121 65.3125L40.6566 65.3125",
  "M65.5751 130.886L65.5751 90.23",
];

/** explore.svg — centered in hub 132×131 viewBox */
const EXPLORE_PATH =
  "M2.47493 96.6977L85.0218 14.1509C88.9522 10.2204 86.1685 3.49994 80.61 3.5L2.47437 3.50081M101.188 27.5105L101.187 100.82";

const SHAPE_PATHS = [
  {
    key: "scroll",
    stroke: "#fff",
    paths: [
      "M65.3125 0.000492359L65.3125 48.8822C65.3125 57.9567 57.9562 65.313 48.8817 65.313L-4.07798e-06 65.313",
      "M65.3125 130.625L65.3125 81.7438C65.3125 72.6693 72.6688 65.313 81.7433 65.313L130.625 65.313",
    ],
  },
  {
    key: "hover",
    stroke: "#fff",
    transform: "translate(17 16.5)",
    paths: [
      "M94.8406 2.47491L60.276 37.0395C53.8594 43.4561 43.456 43.4561 37.0394 37.0395L2.47479 2.47491",
      "M2.4748 94.841L37.0394 60.2764C43.456 53.8598 53.8594 53.8598 60.2761 60.2764L94.8406 94.841",
    ],
  },
  {
    key: "text",
    stroke: "#fff",
    paths: [
      "M65.575 40.6564L65.575 0",
      "M90.4934 65.3125L131.15 65.3125",
      "M0.00011605 65.3125L40.6565 65.3125",
      "M65.575 130.888L65.575 90.2319",
    ],
  },
  {
    key: "svg",
    stroke: "#fff",
    paths: SVG_CATEGORY_PATHS,
  },
  {
    key: "explore",
    stroke: ACCENT_HEX,
    transform: "translate(13.5 15)",
    paths: [EXPLORE_PATH],
  },
];

/**
 * Estrela-style pinned wheel; final slide shares the same rotation (explore.svg + accent copy).
 */
export function MotionCategories() {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = () => setPrefersReduced(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const hubHeaderRef = useRef(null);
  const itemRefs = useRef([]);
  const shapeRefs = useRef([]);
  const iconWrapRef = useRef(null);
  const indexRef = useRef(null);
  const exploreTitleRef = useRef(null);
  const exploreHoverTweenRef = useRef(null);

  const killExploreHoverTween = useCallback(() => {
    exploreHoverTweenRef.current?.kill();
    exploreHoverTweenRef.current = null;
  }, []);

  const onExplorePointerEnter = useCallback(() => {
    if (prefersReduced) return;
    const el = exploreTitleRef.current;
    if (!el) return;
    killExploreHoverTween();
    exploreHoverTweenRef.current = scrambleTo(el, EXPLORE_TITLE, {
      duration: EXPLORE_SCRAMBLE_DURATION,
    });
  }, [prefersReduced, killExploreHoverTween]);

  const onExplorePointerLeave = useCallback(() => {
    killExploreHoverTween();
    const el = exploreTitleRef.current;
    if (el) el.textContent = EXPLORE_TITLE;
  }, [killExploreHoverTween]);

  useEffect(
    () => () => {
      killExploreHoverTween();
    },
    [killExploreHoverTween],
  );

  useLayoutEffect(() => {
    const pin = pinRef.current;
    if (!pin || prefersReduced) return undefined;

    const items = itemRefs.current.filter(Boolean);
    const shapes = shapeRefs.current.filter(Boolean);
    const n = CATEGORIES.length;
    if (items.length !== n || shapes.length !== n) return undefined;

    const applyWheel = (activeRaw) => {
      const active = gsap.utils.clamp(0, n - 1, activeRaw);
      const hubHeader = hubHeaderRef.current;

      if (hubHeader) {
        const eyebrowFade = gsap.utils.clamp(0, 1, n - 1 - active);
        gsap.set(hubHeader, {
          opacity: eyebrowFade,
          pointerEvents: eyebrowFade < 0.05 ? "none" : "auto",
          visibility: eyebrowFade < 0.01 ? "hidden" : "visible",
        });
      }

      const indexEl = indexRef.current;
      if (indexEl) {
        const idx = Math.round(active);
        indexEl.textContent = CATEGORIES[idx].index;
        const isAccent = idx === n - 1;
        gsap.set(indexEl, {
          color: isAccent ? ACCENT_HEX : "rgba(255, 255, 255, 0.55)",
        });
      }

      const fullStep = 360 / n;

      const lo = Math.min(n - 1, Math.floor(active + 1e-6));
      const frac = active - lo;
      shapes.forEach((shape, i) => {
        let opacity = 0;
        if (i === lo) {
          opacity = frac < 1e-5 ? 1 : Math.max(0, 1 - frac);
        } else if (i === lo + 1 && lo < n - 1) {
          opacity = frac > 1e-5 ? frac : 0;
        }
        gsap.set(shape, { opacity });
      });

      const wrap = iconWrapRef.current;
      if (wrap) {
        /** Explore stays upright (0°); unwind spin on the last scrub segment */
        let rotationDeg;
        if (lo >= n - 1) {
          rotationDeg = 0;
        } else if (lo === n - 2 && frac > 1e-6) {
          rotationDeg = (n - 2) * fullStep * (1 - frac);
        } else {
          rotationDeg = active * fullStep;
        }
        gsap.set(wrap, {
          rotation: rotationDeg,
          transformOrigin: "50% 50%",
          force3D: true,
        });
      }

      items.forEach((item, i) => {
        const offset = i - active;
        const abs = Math.abs(offset);
        const title = item.querySelector(".motion-categories__wheel-title");
        const desc = item.querySelector(".motion-categories__wheel-desc");

        const y = offset * WHEEL_ROW_GAP;
        const x = -(1 - Math.cos(offset * 0.78)) * (38 + abs * 14);
        const scale = gsap.utils.clamp(0.7, 1, 1 - abs * 0.15);
        const blur = gsap.utils.clamp(0, 16, abs * 6);
        const titleOpacity = gsap.utils.clamp(0.18, 1, 1 - abs * 0.42);
        const descOpacity = gsap.utils.clamp(0, 1, 1 - abs * 2.6);

        gsap.set(item, {
          y,
          x,
          scale,
          zIndex: 100 - Math.round(abs * 10),
          transformOrigin: "0% 50%",
        });

        if (title) {
          gsap.set(title, {
            opacity: titleOpacity,
            filter: `blur(${blur}px)`,
          });
        }
        if (desc) {
          gsap.set(desc, {
            opacity: descOpacity,
            filter: `blur(${Math.max(0, blur - 1.5)}px)`,
          });
        }
      });
    };

    const ctx = gsap.context(() => {
      applyWheel(0);

      ScrollTrigger.create({
        trigger: pin,
        start: "top top",
        end: () => {
          const stepPx = (window.innerHeight * SCROLL_PER_ITEM) / 100;
          return `+=${stepPx * (n - 1)}`;
        },
        pin: true,
        scrub: 1.15,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          applyWheel(self.progress * (n - 1));
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section ref={sectionRef} className="motion-categories" aria-label="Motion categories">
      <div ref={pinRef} className="motion-categories__pin">
        {!prefersReduced ? (
          <div className="motion-categories__stage">
            <div className="motion-categories__hub">
              <header ref={hubHeaderRef} className="motion-categories__hub-header">
                <p className="motion-categories__eyebrow">[MOTION CATEGORIES]</p>
              </header>
              <div ref={iconWrapRef} className="motion-categories__icon-wrap" aria-hidden>
                <svg
                  className="motion-categories__svg"
                  viewBox="0 0 132 131"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {SHAPE_PATHS.map((shape, i) => {
                    const stroke = shape.stroke ?? "#fff";
                    const inner = shape.paths.map((d) => (
                      <path key={d.slice(0, 12)} d={d} stroke={stroke} strokeWidth={7} />
                    ));
                    return (
                      <g
                        key={shape.key}
                        ref={(el) => {
                          shapeRefs.current[i] = el;
                        }}
                        className={`motion-categories__shape motion-categories__shape--${shape.key}`}
                      >
                        {shape.transform ? (
                          <g transform={shape.transform}>{inner}</g>
                        ) : (
                          inner
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            <div className="motion-categories__wheel-col">
              <div className="motion-categories__wheel">
                {CATEGORIES.map((cat, i) => {
                  const itemClass = `motion-categories__wheel-item${cat.accent ? " motion-categories__wheel-item--accent" : ""}`;
                  if (cat.id === "explore") {
                    return (
                      <article
                        key={cat.id}
                        ref={(el) => {
                          itemRefs.current[i] = el;
                        }}
                        className={itemClass}
                      >
                        <Link
                          href={LIBRARY_HREF}
                          className="motion-categories__explore-cta"
                          aria-label={`${EXPLORE_TITLE} — open animation library`}
                          onMouseEnter={onExplorePointerEnter}
                          onMouseLeave={onExplorePointerLeave}
                          onFocus={onExplorePointerEnter}
                          onBlur={onExplorePointerLeave}
                        >
                          <h3 ref={exploreTitleRef} className="motion-categories__wheel-title">
                            {cat.title}
                          </h3>
                          <p className="motion-categories__wheel-desc">{cat.body}</p>
                        </Link>
                      </article>
                    );
                  }
                  return (
                  <article
                    key={cat.id}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    className={itemClass}
                  >
                    <h3 className="motion-categories__wheel-title">{cat.title}</h3>
                    <p className="motion-categories__wheel-desc">{cat.body}</p>
                  </article>
                  );
                })}
              </div>
            </div>

            <div className="motion-categories__index-col" aria-live="polite">
              <span ref={indexRef} className="motion-categories__index">
                01
              </span>
            </div>
          </div>
        ) : (
          <>
            <header className="motion-categories__static-eyebrow">
              <p className="motion-categories__eyebrow">[ MOTION CATEGORIES ]</p>
            </header>
            <ul className="motion-categories__static-list">
              {CATEGORIES.map((cat) => (
                <li
                  key={cat.id}
                  className={`motion-categories__static-row${cat.accent ? " motion-categories__static-row--accent" : ""}`}
                >
                  <span className="motion-categories__index">{cat.index}</span>
                  <div>
                    <h3 className="motion-categories__wheel-title">{cat.title}</h3>
                    <p className="motion-categories__wheel-desc">{cat.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
