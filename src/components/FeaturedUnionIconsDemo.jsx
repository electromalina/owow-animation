import { useId, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./FeaturedUnionIconsDemo.css";

const ICONS = [
  {
    id: "studio",
    label: "Studio",
    viewBox: "0 0 30 30",
    paths: [
      "M0.724357 14.9704C0.724357 22.8382 7.10251 29.2164 14.9704 29.2164C22.8382 29.2164 29.2164 22.8382 29.2164 14.9704C29.2164 7.10251 22.8382 0.724353 14.9704 0.724353C7.10251 0.724353 0.724357 7.10251 0.724357 14.9704ZM2.42973 17.6081C3.29356 21.7358 6.1439 25.1335 9.93497 26.7554C8.31833 25.0058 7.08045 22.4372 6.45733 19.4249C4.79929 18.9423 3.41975 18.3223 2.42973 17.6081ZM2.15792 14.9704C2.15792 15.2022 2.27272 15.5782 2.81557 16.0786C3.35984 16.5804 4.22633 17.0982 5.41772 17.5628C5.66534 17.6593 5.92387 17.7524 6.19266 17.8416C6.0733 16.9142 6.01061 15.9539 6.01061 14.9704C6.01061 13.9868 6.0733 13.0266 6.19266 12.0991C5.92387 12.1884 5.66534 12.2814 5.41772 12.378C4.22633 12.8425 3.35984 13.3603 2.81557 13.8621C2.27272 14.3625 2.15792 14.7386 2.15792 14.9704ZM6.45733 10.5158C4.7993 10.9984 3.41975 11.6184 2.42973 12.3326C3.29356 8.20489 6.1439 4.8072 9.93497 3.18529C8.31833 4.93494 7.08045 7.50354 6.45733 10.5158ZM7.70354 11.6653C7.53497 12.716 7.44417 13.8231 7.44417 14.9704C7.44417 16.1176 7.53497 17.2248 7.70354 18.2754C9.7711 18.7858 12.2629 19.0918 14.9704 19.0918C17.6778 19.0918 20.1696 18.7858 22.2372 18.2754C22.4058 17.2248 22.4966 16.1176 22.4966 14.9704C22.4966 13.8231 22.4058 12.716 22.2372 11.6653C20.1696 11.1549 17.6778 10.8489 14.9704 10.8489C12.2629 10.8489 9.7711 11.1549 7.70354 11.6653ZM21.9245 10.121C19.8677 9.67155 17.4958 9.41531 14.9704 9.41531C12.445 9.41531 10.0731 9.67155 8.01627 10.121C8.43703 8.41274 9.07006 6.89763 9.84837 5.66012C11.3168 3.32527 13.1645 2.15791 14.9704 2.15791C16.7763 2.15791 18.6239 3.32527 20.0924 5.66012C20.8707 6.89764 21.5037 8.41274 21.9245 10.121ZM23.7481 12.0991C23.8674 13.0266 23.9301 13.9868 23.9301 14.9704C23.9301 15.9539 23.8674 16.9142 23.7481 17.8416C24.0169 17.7524 24.2754 17.6593 24.523 17.5628C25.7144 17.0982 26.5809 16.5804 27.1252 16.0786C27.668 15.5782 27.7828 15.2022 27.7828 14.9704C27.7828 14.7386 27.668 14.3625 27.1252 13.8621C26.5809 13.3603 25.7144 12.8425 24.523 12.378C24.2754 12.2814 24.0169 12.1884 23.7481 12.0991ZM27.511 12.3326C26.521 11.6184 25.1414 10.9984 23.4834 10.5158C22.8603 7.50354 21.6224 4.93494 20.0058 3.18529C23.7968 4.8072 26.6472 8.20489 27.511 12.3326ZM27.511 17.6081C26.521 18.3223 25.1414 18.9423 23.4834 19.4249C22.8603 22.4372 21.6224 25.0058 20.0058 26.7554C23.7968 25.1335 26.6472 21.7358 27.511 17.6081ZM21.9245 19.8197C19.8677 20.2692 17.4958 20.5254 14.9704 20.5254C12.445 20.5254 10.0731 20.2692 8.01627 19.8197C8.43703 21.528 9.07006 23.0431 9.84837 24.2806C11.3168 26.6154 13.1645 27.7828 14.9704 27.7828C16.7763 27.7828 18.6239 26.6154 20.0924 24.2806C20.8707 23.0431 21.5037 21.528 21.9245 19.8197Z",
    ],
  },
  {
    id: "ventures",
    label: "Ventures",
    viewBox: "0 0 30 30",
    paths: [
      "M4.48511 4.48511C6.53994 2.43028 10.2749 2.55449 14.2172 4.43435V0H15.7236V4.43437C19.6658 2.5545 23.4008 2.43028 25.4557 4.48512C27.5105 6.53995 27.3863 10.2749 25.5064 14.2172H29.9408V15.7236H25.5064C27.3863 19.6658 27.5105 23.4008 25.4557 25.4557C23.4008 27.5105 19.6658 27.3863 15.7236 25.5064V29.9408H14.2172V25.5064C10.2749 27.3863 6.53996 27.5105 4.48513 25.4557C2.43029 23.4008 2.55451 19.6658 4.43438 15.7236H0V14.2172H4.43435C2.55449 10.2749 2.43028 6.53994 4.48511 4.48511ZM14.2172 11.2042V6.99981C12.8699 7.86543 11.5177 8.94709 10.2324 10.2324C8.94709 11.5177 7.86544 12.8699 6.99981 14.2172H11.2042C12.8682 14.2172 14.2172 12.8682 14.2172 11.2042ZM15.7236 22.941C17.0709 22.0754 18.4231 20.9937 19.7084 19.7084C20.9937 18.4231 22.0754 17.0709 22.941 15.7236H18.7365C17.0725 15.7236 15.7236 17.0725 15.7236 18.7365V22.941ZM22.941 14.2172H18.7365C16.2405 14.2172 14.2172 16.2405 14.2172 18.7365V22.941C12.8699 22.0753 11.5177 20.9937 10.2324 19.7084C8.94707 18.4231 7.86541 17.0709 6.99979 15.7236H11.2042C13.7002 15.7236 15.7236 13.7002 15.7236 11.2042V6.99978C17.0709 7.8654 18.4231 8.94706 19.7084 10.2324C20.9937 11.5177 22.0754 12.8699 22.941 14.2172ZM24.3904 24.3904C23.3525 25.4284 21.4136 25.8211 18.6973 25.0403C17.9959 24.8387 17.2669 24.5638 16.5232 24.2178C17.9746 23.2868 19.4154 22.1319 20.7736 20.7736C22.1319 19.4154 23.2868 17.9746 24.2178 16.5232C24.5638 17.2669 24.8387 17.9959 25.0403 18.6973C25.8211 21.4136 25.4284 23.3525 24.3904 24.3904ZM24.2178 13.4176C23.2868 11.9662 22.1319 10.5254 20.7736 9.16715C19.4154 7.80893 17.9746 6.65396 16.5232 5.72296C17.2669 5.377 17.9959 5.10211 18.6973 4.90051C21.4136 4.11972 23.3525 4.5124 24.3905 5.55034C25.4284 6.58829 25.8211 8.52722 25.0403 11.2435C24.8387 11.9449 24.5638 12.6739 24.2178 13.4176ZM13.4176 24.2178C11.9662 23.2868 10.5254 22.1318 9.16716 20.7736C7.80894 19.4154 6.65396 17.9746 5.72297 16.5232C5.37701 17.2669 5.10212 17.9959 4.90052 18.6973C4.11973 21.4136 4.51241 23.3525 5.55035 24.3904C6.5883 25.4284 8.52723 25.8211 11.2435 25.0403C11.9449 24.8387 12.6739 24.5638 13.4176 24.2178ZM5.72297 13.4176C6.65396 11.9662 7.80894 10.5254 9.16717 9.16716C10.5254 7.80894 11.9662 6.65396 13.4176 5.72296C12.6739 5.377 11.9449 5.1021 11.2435 4.9005C8.52721 4.11971 6.58828 4.51238 5.55034 5.55033C4.51239 6.58828 4.11972 8.52721 4.9005 11.2435C5.10211 11.9449 5.377 12.6739 5.72297 13.4176Z",
    ],
  },
  {
    id: "ai",
    label: "AI",
    viewBox: "0 0 30 30",
    paths: [
      "M15.7549 29.9404H14.1855V20.6406H15.7549V29.9404ZM12.748 11.6982C14.5223 13.4725 14.5222 16.3488 12.748 18.123L4.8418 26.0303L3.73145 24.9199L11.6387 17.0137C12.7999 15.8523 12.8 13.969 11.6387 12.8076L3.73145 4.90137L4.8418 3.79102L12.748 11.6982ZM25.9707 4.90137L18.0645 12.8076C16.9031 13.969 16.9031 15.8523 18.0645 17.0137L25.9707 24.9199L24.8613 26.0303L16.9541 18.123C15.1802 16.3488 15.1802 13.4724 16.9541 11.6982L24.8613 3.79102L25.9707 4.90137ZM9.30078 15.7549H0V14.1855H9.30078V15.7549ZM29.9619 15.7549H20.6621V14.1855H29.9619V15.7549ZM15.7549 9.30078H14.1855V0H15.7549V9.30078Z",
    ],
  },
];

const HOLD = 1.4;
const TRANSITION = 0.7;
const REVEAL_RADIUS = 22;

function revealIcon(slide, clipId) {
  const circle = slide.querySelector(`[data-clip="${clipId}"]`);
  const path = slide.querySelector(".featured-union-icons__path");
  if (!circle || !path) return gsap.timeline();

  gsap.set(circle, { attr: { r: 0 } });
  gsap.set(path, { scale: 0.92, svgOrigin: "15 15", transformOrigin: "50% 50%" });

  return gsap
    .timeline()
    .to(circle, { attr: { r: REVEAL_RADIUS }, duration: 0.95, ease: "power2.out" })
    .to(path, { scale: 1, duration: 0.55, ease: "back.out(1.6)" }, "<0.15");
}

export function FeaturedUnionIconsDemo() {
  const clipPrefix = useId().replace(/:/g, "");
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const slides = gsap.utils.toArray(
      root.querySelectorAll(".featured-union-icons__slide")
    );
    const rings = gsap.utils.toArray(
      root.querySelectorAll(".featured-union-icons__ring")
    );
    const glow = root.querySelector(".featured-union-icons__glow");
    const dots = gsap.utils.toArray(
      root.querySelectorAll(".featured-union-icons__dot")
    );

    if (!slides.length || !glow) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(slides, { opacity: 0, scale: 0.76, rotate: -12 });
      gsap.set(slides[0], { opacity: 1, scale: 1, rotate: 0 });
      gsap.set(dots[0], { scale: 1.4, opacity: 1, backgroundColor: "#feb800" });

      rings.forEach((ring, i) => {
        gsap.to(ring, {
          rotate: i % 2 === 0 ? 360 : -360,
          duration: 20 + i * 5,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      });

      gsap.to(glow, {
        scale: 1.14,
        opacity: 0.58,
        duration: 2.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      const firstClip = slides[0]?.dataset.clip;
      if (firstClip) revealIcon(slides[0], firstClip);

      if (prefersReduced) return;

      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power3.inOut" } });

      slides.forEach((slide, index) => {
        const next = slides[(index + 1) % slides.length];
        const dot = dots[index];
        const nextDot = dots[(index + 1) % dots.length];
        const nextClip = next?.dataset.clip;

        tl.to(
          slide,
          { rotate: 7, duration: HOLD * 0.42, ease: "sine.inOut" },
          index === 0 ? 0.5 : ">"
        );
        tl.to(slide, { rotate: -5, duration: HOLD * 0.42, ease: "sine.inOut" }, ">");
        tl.to(slide, { rotate: 0, duration: HOLD * 0.35, ease: "sine.inOut" }, ">");

        tl.to(
          slide,
          { opacity: 0, scale: 0.8, rotate: 14, duration: TRANSITION },
          `+=${HOLD * 0.2}`
        );
        tl.to(
          dot,
          { scale: 1, opacity: 0.35, backgroundColor: "rgba(255,255,255,0.28)", duration: TRANSITION * 0.75 },
          "<"
        );

        tl.fromTo(
          next,
          { opacity: 0, scale: 0.76, rotate: -14 },
          { opacity: 1, scale: 1, rotate: 0, duration: TRANSITION },
          "<0.1"
        );

        if (nextClip) {
          tl.add(revealIcon(next, nextClip), "<0.08");
        }

        tl.to(
          nextDot,
          { scale: 1.4, opacity: 1, backgroundColor: "#feb800", duration: TRANSITION * 0.7 },
          "<"
        );
      });
    }, root);

    return () => ctx.revert();
  }, [clipPrefix]);

  return (
    <div ref={rootRef} className="featured-union-icons" aria-hidden>
      <div className="featured-union-icons__stage">
        <div className="featured-union-icons__glow" />
        <svg
          className="featured-union-icons__rings"
          viewBox="0 0 100 100"
          aria-hidden
        >
          <circle
            className="featured-union-icons__ring featured-union-icons__ring--outer"
            cx="50"
            cy="50"
            r="44"
          />
          <circle
            className="featured-union-icons__ring featured-union-icons__ring--inner"
            cx="50"
            cy="50"
            r="34"
          />
        </svg>

        {ICONS.map((icon) => {
          const clipId = `${clipPrefix}-${icon.id}`;
          return (
            <div
              key={icon.id}
              className={`featured-union-icons__slide featured-union-icons__slide--${icon.id}`}
              data-clip={clipId}
            >
              <svg viewBox={icon.viewBox} className="featured-union-icons__svg">
                <defs>
                  <clipPath id={clipId}>
                    <circle
                      className="featured-union-icons__reveal"
                      data-clip={clipId}
                      cx="15"
                      cy="15"
                      r="0"
                    />
                  </clipPath>
                </defs>
                <g clipPath={`url(#${clipId})`}>
                  {icon.paths.map((d, pathIndex) => (
                    <path
                      key={`${icon.id}-${pathIndex}`}
                      className="featured-union-icons__path"
                      d={d}
                    />
                  ))}
                </g>
              </svg>
            </div>
          );
        })}
      </div>

      <div className="featured-union-icons__dots">
        {ICONS.map((icon) => (
          <span
            key={icon.id}
            className={`featured-union-icons__dot featured-union-icons__dot--${icon.id}`}
          />
        ))}
      </div>
    </div>
  );
}
