"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion.js";
import "@/src/components/landing/Showcase.css";

const SHOWCASE_EXPLORE_HREF = "https://owow.io/projects";

const SHOWCASE_SLIDES = [
  {
    id: "dropstore",
    title: "Feadship",
    caseTag: "2024 CASE",
    videoSrc: "/showcase/showcase-preview.webm",
    videoType: "video/webm",
  },
  {
    id: "circl",
    title: "React Native Reanimated",
    caseTag: "2023 CASE",
    videoSrc: "/showcase/showcase-preview-3.webm",
    videoType: "video/webm",
  },
  {
    id: "new-horizon",
    title: "GSAP",
    caseTag: "2026 CASE",
    videoSrc: "/showcase/showcase-preview-4.webm",
    videoType: "video/webm",
  },
];

const LOOP_COPIES = 3;

function normalizeIndex(index, length) {
  return ((index % length) + length) % length;
}

/** Linear distance on the infinite loop strip (handles wrap at strip ends). */
function loopDistance(a, b, total) {
  const direct = Math.abs(a - b);
  return Math.min(direct, total - direct);
}

function ShowcaseSlideMedia({
  slide,
  isActive,
  isNear,
  prefersReducedMotion,
}) {
  const videoRef = useRef(null);
  const shouldMountVideo = isNear && !prefersReducedMotion;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldMountVideo) return undefined;

    if (prefersReducedMotion || !isActive) {
      video.pause();
      return undefined;
    }

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        /* Autoplay blocked or interrupted */
      });
    }

    return undefined;
  }, [isActive, shouldMountVideo, prefersReducedMotion]);

  if (!shouldMountVideo) {
    return (
      <div
        className="showcase__placeholder showcase__placeholder--idle"
        aria-hidden
      />
    );
  }

  return (
    <div className="showcase__placeholder">
      <video
        ref={videoRef}
        className="showcase__preview-video"
        loop
        muted
        playsInline
        disablePictureInPicture
        preload={isActive ? "auto" : "metadata"}
        aria-hidden={!isActive}
        {...(isActive ? { "aria-label": `${slide.title} preview` } : {})}
      >
        <source src={slide.videoSrc} type={slide.videoType || "video/webm"} />
      </video>
    </div>
  );
}

export function Showcase() {
  const prefersReducedMotion = usePrefersReducedMotion();
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
        duration: prefersReducedMotion ? 0 : 0.65,
        ease: prefersReducedMotion ? "none" : "power2.out",
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
    [getTrackX, prefersReducedMotion, slideCount],
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

  /** Pause all previews when the carousel leaves the viewport. */
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    const pauseAll = () => {
      carousel.querySelectorAll("video").forEach((video) => {
        video.pause();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          pauseAll();
          return;
        }

        if (prefersReducedMotion) return;

        const activeVideo = carousel.querySelector(
          ".showcase__slide--active .showcase__preview-video",
        );
        if (activeVideo) {
          activeVideo.play().catch(() => {});
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, [prefersReducedMotion, virtualIndex]);

  const goPrev = useCallback(() => {
    const next = virtualIndex - 1;
    animateToIndex(next);
  }, [animateToIndex, virtualIndex]);

  const goNext = useCallback(() => {
    const next = virtualIndex + 1;
    animateToIndex(next);
  }, [animateToIndex, virtualIndex]);

  const handleCarouselKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    },
    [goPrev, goNext],
  );

  const slidePositionLabel = `${activeIndex + 1} of ${slideCount}`;

  return (
    <section id="showcase" className="showcase" aria-label="Showcase">
      <header className="showcase__header">
        <h2 className="showcase__title">Showcase</h2>
        <p className="showcase__subtitle">
          [OWOW Projects]
        </p>
      </header>

      <div className="showcase__carousel-wrap">
        <p className="showcase__sr-only" aria-live="polite" aria-atomic="true">
          {activeSlide.title}, slide {slidePositionLabel}
        </p>

        <div
          ref={carouselRef}
          className="showcase__carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={`Showcase carousel, slide ${slidePositionLabel}: ${activeSlide.title}`}
          tabIndex={0}
          onKeyDown={handleCarouselKeyDown}
        >
          <div ref={trackRef} className="showcase__track">
            {virtualSlides.map(({ virtualIndex: i, slide }) => {
              const isActive = i === virtualIndex;
              const isNear = loopDistance(i, virtualIndex, totalSlides) <= 1;

              return (
                <article
                  key={`${slide.id}-${i}`}
                  className={`showcase__slide${isActive ? " showcase__slide--active" : ""}`}
                  aria-hidden={!isActive}
                >
                  <ShowcaseSlideMedia
                    slide={slide}
                    isActive={isActive}
                    isNear={isNear}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <div className="showcase__footer">
        <div className="showcase__meta-left">
          <span className="showcase__case-tag">{activeSlide.caseTag}</span>
          <h3 className="showcase__project-title">{activeSlide.title}</h3>
        </div>

        <a
          href={SHOWCASE_EXPLORE_HREF}
          className="showcase__explore-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          EXPLORE MORE
        </a>

        <nav className="showcase__nav" aria-label="Showcase slides">
          <button
            type="button"
            className="showcase__nav-btn"
            onClick={goPrev}
            aria-label={`Previous slide, currently ${slidePositionLabel}`}
          >
            ←
          </button>
          <button
            type="button"
            className="showcase__nav-btn"
            onClick={goNext}
            aria-label={`Next slide, currently ${slidePositionLabel}`}
          >
            →
          </button>
        </nav>
      </div>
    </section>
  );
}
