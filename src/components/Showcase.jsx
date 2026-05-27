import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Showcase.css";

const SHOWCASE_SLIDES = [
  {
    id: "studio-therapy",
    title: "Studio Therapy",
    caseTag: "2023 CASE",
    exploreHref: "#studio-therapy",
  },
  {
    id: "dropstore",
    title: "The Dropstore",
    caseTag: "2024 CASE",
    exploreHref: "#dropstore",
  },
  {
    id: "circl",
    title: "CIRCL",
    caseTag: "2023 CASE",
    exploreHref: "#circl",
  },
];

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const slideCount = SHOWCASE_SLIDES.length;
  const activeSlide = SHOWCASE_SLIDES[activeIndex];

  const getStep = useCallback(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel) return 0;
    const slide = carousel.querySelector(".showcase__slide");
    if (!slide) return carousel.offsetWidth;
    const gap = track ? parseFloat(getComputedStyle(track).gap) || 0 : 0;
    return slide.offsetWidth + gap;
  }, []);

  const getTrackX = useCallback(
    (index) => {
      const carousel = carouselRef.current;
      if (!carousel) return 0;
      const step = getStep();
      const centerPad = (carousel.offsetWidth - step) / 2;
      return centerPad - index * step;
    },
    [getStep],
  );

  const animateToIndex = useCallback(
    (nextIndex) => {
      const track = trackRef.current;
      if (!track) {
        setActiveIndex(nextIndex);
        return;
      }

      tweenRef.current?.kill();
      tweenRef.current = gsap.to(track, {
        x: getTrackX(nextIndex),
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          tweenRef.current = null;
        },
      });
      setActiveIndex(nextIndex);
    },
    [getTrackX],
  );

  const syncTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    gsap.set(track, { x: getTrackX(activeIndex) });
  }, [activeIndex, getTrackX]);

  useLayoutEffect(() => {
    syncTrack();
    return undefined;
  }, [syncTrack]);

  useLayoutEffect(() => {
    window.addEventListener("resize", syncTrack);
    return () => window.removeEventListener("resize", syncTrack);
  }, [syncTrack]);

  const goPrev = useCallback(() => {
    const next = (activeIndex - 1 + slideCount) % slideCount;
    animateToIndex(next);
  }, [activeIndex, animateToIndex, slideCount]);

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % slideCount;
    animateToIndex(next);
  }, [activeIndex, animateToIndex, slideCount]);

  return (
    <section className="showcase" aria-label="Showcase">
      <header className="showcase__header">
        <h2 className="showcase__title">
          <span className="showcase__title-light">[ Showcase ]</span>
        </h2>
        <p className="showcase__subtitle">A GLIMPSE INTO THE ATLAS LIBRARY.</p>
      </header>

      <div className="showcase__carousel-wrap">
        <div
          ref={carouselRef}
          className="showcase__carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={`${activeSlide.title} showcase`}
        >
          <div ref={trackRef} className="showcase__track">
            {SHOWCASE_SLIDES.map((slide, i) => (
              <article
                key={slide.id}
                className={`showcase__slide${i === activeIndex ? " showcase__slide--active" : ""}`}
                aria-hidden={i !== activeIndex}
              >
                <div className="showcase__placeholder" />
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="showcase__meta">
        <div className="showcase__meta-left">
          <h3 className="showcase__project-title">{activeSlide.title}</h3>
          <span className="showcase__case-tag">{activeSlide.caseTag}</span>
        </div>
        <a href={activeSlide.exploreHref} className="showcase__explore-btn">
          EXPLORE MORE
        </a>
      </div>

      <nav className="showcase__nav" aria-label="Showcase slides">
        <button
          type="button"
          className="showcase__nav-btn"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          type="button"
          className="showcase__nav-btn"
          onClick={goNext}
          aria-label="Next slide"
        >
          →
        </button>
      </nav>
    </section>
  );
}
