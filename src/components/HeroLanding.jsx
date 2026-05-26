import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useHandGesture } from "../hooks/useHandGesture.js";
import { scrambleTo } from "../utils/scrambleText.js";
import logoUnion from "../assets/Union.svg";
import silverIcon from "../assets/silver.svg";
import interactionIcon from "../assets/interaction.svg";
import searchIcon from "../assets/search-icon.svg";
import "./HeroLanding.css";

const CYCLE_WORDS = ["motion", "experience", "exploration", "immersion"];
const IDLE_WORD = "interaction";
const CYCLE_INTERVAL = 1.1;
const SCRAMBLE_DURATION = 0.45;

export function HeroLanding({ headerAnchorRef }) {
  const keywordRef = useRef(null);
  const headlineBlockRef = useRef(null);
  const alignMeasureRef = useRef(null);
  const glyphRef = useRef(null);
  const cycleIndexRef = useRef(0);
  const activeTweenRef = useRef(null);
  const cycleTimerRef = useRef(null);
  const wasHandUpRef = useRef(false);

  const { videoRef, isHandUp, cameraReady, cameraError } = useHandGesture(true);

  useLayoutEffect(() => {
    const block = headlineBlockRef.current;
    const measure = alignMeasureRef.current;
    const glyph = glyphRef.current;
    if (!block || !measure) return undefined;

    const updateAlign = () => {
      const throughOffset = measure.getBoundingClientRect().width;
      const glyphWidth = glyph?.getBoundingClientRect().width ?? 0;
      block.style.setProperty("--hero-through-align", `${throughOffset}px`);
      block.style.setProperty("--hero-glyph-width", `${glyphWidth}px`);
    };

    updateAlign();

    const observer = new ResizeObserver(updateAlign);
    observer.observe(measure);
    if (glyph) observer.observe(glyph);
    window.addEventListener("resize", updateAlign);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateAlign);
    };
  }, []);

  useEffect(() => {
    const el = keywordRef.current;
    if (!el) return undefined;

    const clearCycle = () => {
      if (cycleTimerRef.current) {
        clearInterval(cycleTimerRef.current);
        cycleTimerRef.current = null;
      }
      activeTweenRef.current?.kill();
      activeTweenRef.current = null;
    };

    const scrambleWord = (nextWord, onDone) => {
      activeTweenRef.current?.kill();
      activeTweenRef.current = scrambleTo(el, nextWord, {
        duration: SCRAMBLE_DURATION,
        onComplete: onDone,
      });
    };

    if (isHandUp && !wasHandUpRef.current) {
      cycleIndexRef.current = 0;
      scrambleWord(CYCLE_WORDS[0], () => {
        el.classList.add("hero-landing__keyword--active");
      });

      cycleTimerRef.current = window.setInterval(() => {
        cycleIndexRef.current =
          (cycleIndexRef.current + 1) % CYCLE_WORDS.length;
        scrambleWord(CYCLE_WORDS[cycleIndexRef.current]);
      }, CYCLE_INTERVAL * 1000);
    }

    if (!isHandUp && wasHandUpRef.current) {
      clearCycle();
      el.classList.remove("hero-landing__keyword--active");
      scrambleWord(IDLE_WORD);
      cycleIndexRef.current = 0;
    }

    wasHandUpRef.current = isHandUp;
  }, [isHandUp]);

  useEffect(
    () => () => {
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
      activeTweenRef.current?.kill();
      gsap.killTweensOf(keywordRef.current);
    },
    [],
  );

  return (
    <section className="hero-landing" aria-label="Atlas hero">
      <video
        ref={videoRef}
        className="hero-landing__camera"
        playsInline
        muted
        aria-hidden
      />

      {/* Reserves vertical space matching the fixed header (not duplicated padding). */}
      <div className="hero-landing__header-spacer" aria-hidden />

      <header className="hero-landing__header">
        <a href="/" className="hero-landing__logo" aria-label="owow home">
          <img src={logoUnion} alt="owow" width={121} height={26} />
        </a>

        <div ref={headerAnchorRef} className="hero-landing__silver-anchor">
          <img src={silverIcon} alt="" className="hero-landing__silver-header" />
        </div>

        <div className="hero-landing__header-actions">
          <a href="#library" className="hero-landing__cta">
            Animation Library
          </a>
          <button type="button" className="hero-landing__search">
            <img src={searchIcon} alt="" width={15} height={15} />
            <span>Search</span>
          </button>
        </div>
      </header>

      <div className="hero-landing__body">
        <p className="hero-landing__eyebrow">[ Atlas Animation library ]</p>

        <div className="hero-landing__headline-block" ref={headlineBlockRef}>
          <span
            ref={alignMeasureRef}
            className="hero-landing__align-measure"
            aria-hidden
          >
            The future move
          </span>
          <h1 className="hero-landing__headline">
            <span className="hero-landing__line hero-landing__line--1">
              The future moves
              <span className="hero-landing__hint">
                [ Move your hand infront of the camera .]
              </span>
            </span>

            <span className="hero-landing__line hero-landing__line--2">
              <span className="hero-landing__line-2-inner">
                <span
                  className={`hero-landing__glyph${isHandUp ? " hero-landing__glyph--active" : ""}`}
                  ref={glyphRef}
                  aria-hidden
                >
                  <img src={interactionIcon} alt="" />
                </span>
                <span className="hero-landing__line-2-text">
                  through{" "}
                  <span
                    ref={keywordRef}
                    className="hero-landing__keyword"
                  >
                    {IDLE_WORD}
                  </span>
                </span>
              </span>
            </span>
          </h1>
        </div>

        <p className="hero-landing__description">
          <span className="hero-landing__description--bright">
            [Atlas is an interactive animation showcase built for designers and
            developers
          </span>
          <span className="hero-landing__description--dim">
            {" "}
            to explore immersive motion systems and real-time animation
            experiences.
          </span>
          <span className="hero-landing__description--bright">]</span>
        </p>
      </div>

      <p className="hero-landing__status" aria-live="polite">
        {cameraError
          ? `Camera unavailable: ${cameraError}`
          : cameraReady
            ? isHandUp
              ? "Open palm detected — words cycling"
              : "Camera on — show open fingers to camera"
            : "Starting camera…"}
      </p>
    </section>
  );
}
