"use client";

import { useEffect, useRef, useState } from "react";
import {
  mapProgress,
  useDocumentScrollProgress,
  useHeaderAnchorOrigin,
} from "@/src/hooks/landing/useIconScrollAnimation.js";
import "@/src/components/landing/ScrollIconSequence.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

const SILVER_GLOBE_SRC = "/landing/silver.svg";

gsap.registerPlugin(ScrollTrigger);

/** Figma: node 22:4087 header icon vs node 19:4063 about globe */
const SILVER_HEADER_PX = 83.25;
const SILVER_ABOUT_PX = 971;
const SILVER_START_SCALE = SILVER_HEADER_PX / SILVER_ABOUT_PX;

const MOVE_END = 0.26;
const SCALE_END = 0.3;
const ROTATE_START = 0.2;
const ROTATE_END = 0.58;

/** Document scroll progress (same space as useDocumentScrollProgress) when 3D hits 180° */
const COPY_SCROLL_START =
  ROTATE_START + (180 / 360) * (ROTATE_END - ROTATE_START);

const COPY_GREY = "rgba(255, 255, 255, 0.38)";
const COPY_WHITE = "#ffffff";
const LIGHT_WAVE_WIDTH = 5;
/** Rise phase share; remainder = grey→white “light pass” (scrub-driven) */
const REVEAL_SHARE = 0.48;

/** Fade + blur handoff into Motion Categories (scroll progress 0→1 on About section) */
const CLUSTER_FADE_START = 0.82;
const CLUSTER_FADE_END = 1;
const CLUSTER_BLUR_MAX = 13;

function getSilverBaseWidth() {
  if (typeof window === "undefined") return SILVER_ABOUT_PX;
  if (window.innerWidth <= 900) {
    return Math.min(520, window.innerWidth * 0.92);
  }
  return Math.min(SILVER_ABOUT_PX, window.innerWidth * 0.92);
}

/** Resting Y when icon + copy are centered (higher than viewport middle) */
const CLUSTER_CENTER_Y_RATIO = 0.4;

function getCenterY() {
  if (typeof window === "undefined") return 0;
  return window.innerHeight * CLUSTER_CENTER_Y_RATIO;
}

function hookScrollDenominator(sectionEl) {
  return Math.max(
    sectionEl.offsetTop + sectionEl.offsetHeight - window.innerHeight,
    1
  );
}

function documentScrollProgress(sectionEl) {
  return gsap.utils.clamp(
    0,
    1,
    window.scrollY / hookScrollDenominator(sectionEl)
  );
}

/** Soft falloff — how lit each word is along the wave front */
function wordLightAmount(lightProgress, index, total) {
  const wave = LIGHT_WAVE_WIDTH;
  const head = lightProgress * (total + wave) - index;
  return gsap.utils.clamp(0, 1, head / wave);
}

const COPY_LEAD =
  "Atlas transforms animation into an interactive experience.";

const COPY_BODY =
  "Instead of static showcases, users can explore motion systems through live previews, experimental interactions, and real-time controls designed for creative exploration.";

export function ScrollIconSequence({ headerAnchorRef }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fn = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const wordsRef = useRef([]);
  const splitsRef = useRef([]);
  const masksRef = useRef([]);
  const tlRef = useRef(null);

  const progress = useDocumentScrollProgress(sectionRef);
  const headerOrigin = useHeaderAnchorOrigin(headerAnchorRef);

  const centerX =
    typeof window !== "undefined" ? window.innerWidth * 0.5 : headerOrigin.x;
  const centerY = getCenterY() || headerOrigin.y;

  const posX = mapProgress(progress, 0, MOVE_END, headerOrigin.x, centerX);
  const posY = mapProgress(progress, 0, MOVE_END, headerOrigin.y, centerY);
  const scale = mapProgress(progress, 0, SCALE_END, SILVER_START_SCALE, 1);
  const rotate = mapProgress(progress, ROTATE_START, ROTATE_END, 0, 360);
  const showCopy = rotate >= 180;

  const silverSize = getSilverBaseWidth() * scale * 0.85;
  const parallaxY = -(mapProgress(progress, 0.2, 0.85, 0, 1) * 18);
  const fadeT = mapProgress(
    progress,
    CLUSTER_FADE_START,
    CLUSTER_FADE_END,
    0,
    1,
  );
  const clusterOpacity = 1 - fadeT;
  const blurT = prefersReducedMotion
    ? 0
    : Math.sin(Math.PI * gsap.utils.clamp(0, 1, fadeT));
  const clusterBlurPx = CLUSTER_BLUR_MAX * blurT;
  const clusterScaleHandoff = prefersReducedMotion ? 1 : 1 - fadeT * 0.04;

  const applyWordLight = (lightProgressVal) => {
    const words = wordsRef.current;
    if (!words.length) return;

    const total = words.length;
    words.forEach((word, i) => {
      const amount = wordLightAmount(lightProgressVal, i, total);
      gsap.set(word, {
        color: gsap.utils.interpolate(COPY_GREY, COPY_WHITE, amount),
      });
    });
  };

  /**
   * u ∈ [0,1]: scrubs through masked word rise → lightning pass over words,
   * same mental model as an image sequence / frame scrub (see GSAP image-sequence demos).
   */
  const applySequence = (u) => {
    const words = wordsRef.current;
    if (!words.length) return;

    const total = words.length;

    if (u < REVEAL_SHARE) {
      const r = u / Math.max(REVEAL_SHARE, 0.001);
      const wordWindow = 0.13;
      words.forEach((word, i) => {
        const stagger = (i / Math.max(total, 1)) * 0.9;
        const local = gsap.utils.clamp(0, 1, (r - stagger) / wordWindow);
        gsap.set(word, {
          yPercent: gsap.utils.mapRange(0, 1, 110, 0, local),
          color: COPY_GREY,
        });
      });
      return;
    }

    gsap.set(words, { yPercent: 0 });
    const lu = (u - REVEAL_SHARE) / Math.max(1 - REVEAL_SHARE, 0.001);
    applyWordLight(gsap.utils.clamp(0, 1, lu));
  };

  /** Map document scroll progress (hero + section) → text sequence 0..1 */
  const syncTextSequenceFromDocumentScroll = (sectionEl) => {
    const docP = documentScrollProgress(sectionEl);
    if (docP < COPY_SCROLL_START) {
      applySequence(0);
      return;
    }
    applySequence((docP - COPY_SCROLL_START) / (1 - COPY_SCROLL_START));
  };

  useEffect(() => {
    const el = copyRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion || !showCopy) return;

    const leadEl = el.querySelector(".scroll-icons__copy--lead");
    const bodyEl = el.querySelector(".scroll-icons__copy--body");
    if (!leadEl || !bodyEl) return;

    const splitOpts = { types: "words", tagName: "span" };
    const splitLead = new SplitType(leadEl, splitOpts);
    const splitBody = new SplitType(bodyEl, splitOpts);
    splitsRef.current = [splitLead, splitBody];

    const words = [
      ...(splitLead.words || []),
      ...(splitBody.words || []),
    ];
    wordsRef.current = words;

    const masks = [];
    words.forEach((word) => {
      word.classList.add("atlas-word");
      const mask = document.createElement("span");
      mask.className = "atlas-word-mask";
      word.parentNode?.insertBefore(mask, word);
      mask.appendChild(word);
      masks.push(mask);
      gsap.set(word, { yPercent: 110, color: COPY_GREY });
    });
    masksRef.current = masks;

    /*
     * Scrub-driven “sequence” timeline (like GSAP image-sequence demos):
     * https://codepen.io/GreenSock/pen/VwgevYW
     * https://demos.gsap.com/demo/image-sequence/
     * Dummy tween enables scrub smoothing; frames read from actual document scroll.
     */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.15,
        invalidateOnRefresh: true,
      },
      onUpdate: () => syncTextSequenceFromDocumentScroll(section),
    });

    tl.to({ __dummy: 0 }, { __dummy: 1, duration: 1, ease: "none" });

    ScrollTrigger.refresh();
    syncTextSequenceFromDocumentScroll(section);

    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;

      masksRef.current.forEach((mask) => {
        const word = mask.firstChild;
        if (!word) return;
        mask.replaceWith(word);
      });
      masksRef.current = [];

      splitsRef.current.forEach((s) => s?.revert?.());
      splitsRef.current = [];
      wordsRef.current = [];

      ScrollTrigger.refresh();
    };
  }, [showCopy]);

  return (
    <>
      <div
        className="scroll-icons__cluster"
        style={{
          left: posX,
          top: posY,
          opacity: clusterOpacity,
          transform: `translate(-50%, -50%) scale(${clusterScaleHandoff})`,
          filter:
            prefersReducedMotion || clusterBlurPx < 0.2
              ? undefined
              : `blur(${clusterBlurPx}px)`,
        }}
      >
        <img
          src={SILVER_GLOBE_SRC}
          alt=""
          className="scroll-icons__silver-fixed"
          style={{
            width: silverSize,
            transform: `rotateY(${rotate}deg)`,
          }}
        />

        <div
          className="scroll-icons__copy-wrap"
          style={{
            display: showCopy ? "block" : "none",
            transform: `translateY(${parallaxY}px)`,
          }}
        >
          <div
            ref={copyRef}
            className="scroll-icons__copy-stack atlas-description-text"
          >
            <p className="scroll-icons__copy scroll-icons__copy--lead">
              {COPY_LEAD}
            </p>
            <p className="scroll-icons__copy scroll-icons__copy--body">
              {COPY_BODY}
            </p>
          </div>
        </div>
      </div>

      <section ref={sectionRef} className="scroll-icons" aria-label="About Atlas" />
    </>
  );
}
