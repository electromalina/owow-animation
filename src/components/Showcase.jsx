import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import "./Showcase.css";

const SHOWCASE_SLIDES = [
  {
    id: "dropstore",
    title: "Feadship",
    caseTag: "2024 CASE",
    exploreHref: "#dropstore",
    videoSrc: "/showcase/showcase-preview-2.mp4",
    fallbackVideoSrc: "/showcase/showcase-preview-2.mov",
  },
  {
    id: "circl",
    title: "React Native Reanimated",
    caseTag: "2023 CASE",
    exploreHref: "#circl",
    videoSrc: "/showcase/showcase-preview-3b.m4v",
    videoType: "video/x-m4v",
    fallbackVideoSrc: "/showcase/showcase-preview-3.mov",
  },
  {
    id: "new-horizon",
    title: "GSAP",
    caseTag: "2026 CASE",
    exploreHref: "#new-horizon",
    videoSrc: "/showcase/showcase-preview-4.mp4",
    fallbackVideoSrc: "/showcase/showcase-preview-4.mov",
  },
];

const LOOP_COPIES = 3;

function normalizeIndex(index, length) {
  return ((index % length) + length) % length;
}

export function Showcase() {
  const [virtualIndex, setVirtualIndex] = useState(SHOWCASE_SLIDES.length);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  const slideCount = SHOWCASE_SLIDES.length;
  const totalSlides = slideCount * LOOP_COPIES;
  const activeIndex = normalizeIndex(virtualIndex, slideCount);
  const activeSlide = SHOWCASE_SLIDES[activeIndex];
  const virtualSlides = useMemo(
    () =>
      Array.from({ length: totalSlides }, (_, i) => {
        const sourceIndex = normalizeIndex(i, slideCount);
        return {
          virtualIndex: i,
          sourceIndex,
          slide: SHOWCASE_SLIDES[sourceIndex],
        };
      }),
    [slideCount, totalSlides],
  );

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
        setVirtualIndex(nextIndex);
        return;
      }

      tweenRef.current?.kill();
      tweenRef.current = gsap.to(track, {
        x: getTrackX(nextIndex),
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          const shouldRecenter = nextIndex < slideCount || nextIndex >= slideCount * 2;
          if (shouldRecenter) {
            const recenteredIndex = slideCount + normalizeIndex(nextIndex, slideCount);
            gsap.set(track, { x: getTrackX(recenteredIndex) });
            setVirtualIndex(recenteredIndex);
          }
          tweenRef.current = null;
        },
      });
      setVirtualIndex(nextIndex);
    },
    [getTrackX, slideCount],
  );

  const syncTrack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    gsap.set(track, { x: getTrackX(virtualIndex) });
  }, [getTrackX, virtualIndex]);

  useLayoutEffect(() => {
    syncTrack();
    return undefined;
  }, [syncTrack]);

  useLayoutEffect(() => {
    window.addEventListener("resize", syncTrack);
    return () => window.removeEventListener("resize", syncTrack);
  }, [syncTrack]);

  const goPrev = useCallback(() => {
    const next = virtualIndex - 1;
    animateToIndex(next);
  }, [animateToIndex, virtualIndex]);

  const goNext = useCallback(() => {
    const next = virtualIndex + 1;
    animateToIndex(next);
  }, [animateToIndex, virtualIndex]);

  return (
    <section className="showcase" aria-label="Showcase">
      <header className="showcase__header">
        <h2 className="showcase__title">Showcase</h2>
        <p className="showcase__subtitle">
          [OWOW Projects]
        </p>
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
            {virtualSlides.map(({ virtualIndex: i, slide }) => (
              <article
                key={`${slide.id}-${i}`}
                className={`showcase__slide${i === virtualIndex ? " showcase__slide--active" : ""}`}
                aria-hidden={i !== virtualIndex}
              >
                <div className="showcase__placeholder">
                  <video
                    className="showcase__preview-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={`${slide.title} preview`}
                  >
                    <source src={slide.videoSrc} type={slide.videoType || "video/mp4"} />
                    {slide.fallbackVideoSrc ? (
                      <source src={slide.fallbackVideoSrc} type="video/quicktime" />
                    ) : null}
                  </video>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="showcase__footer">
        <div className="showcase__meta-left">
          <h3 className="showcase__project-title">{activeSlide.title}</h3>
        </div>

        <a href={activeSlide.exploreHref} className="showcase__explore-btn">
          EXPLORE MORE
        </a>

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
      </div>
    </section>
  );
}
