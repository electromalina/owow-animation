"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { usePrefersReducedMotion } from "@/src/hooks/usePrefersReducedMotion.js";
import { cursorTrail } from "@/src/animations/cursor-trail";
import { magneticButton } from "@/src/animations/magnetic-button";
import { particleText } from "@/src/animations/particle-text";
import { scrollVelocity } from "@/src/animations/scroll-velocity";
import { buildDefaultState } from "@/src/animations/registry";

import "@/src/components/landing/FeaturedAnimations.css";

gsap.registerPlugin(ScrollTrigger);

const magneticDefaults = buildDefaultState(magneticButton).params;
const particleDefaults = buildDefaultState(particleText).params;
const cursorTrailDefaults = buildDefaultState(cursorTrail).params;
const scrollDefaults = buildDefaultState(scrollVelocity).params;

const FEATURED_CARDS = [
  {
    id: "magnetic-button",
    title: "Magnetic Button",
    variant: "demo",
    slug: "magnetic-button",
    module: magneticButton,
    defaults: magneticDefaults,
  },
  {
    id: "particle-text",
    title: "Particle Text",
    variant: "demo",
    slug: "particle-text",
    module: particleText,
    defaults: particleDefaults,
  },
  {
    id: "cursor-trail",
    title: "Cursor Trail",
    variant: "demo",
    slug: "cursor-trail",
    module: cursorTrail,
    defaults: cursorTrailDefaults,
  },
  {
    id: "scroll-velocity",
    title: "Scroll Velocity",
    variant: "demo",
    slug: "scroll-velocity",
    module: scrollVelocity,
    defaults: scrollDefaults,
  },
  {
    id: "enter",
    variant: "enter",
    title: "Enter the Library",
    href: "/library",
  },
];

export function FeaturedAnimations() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return undefined;

    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return undefined;

    const cards = Array.from(
      track.querySelectorAll(".featured-animations__card"),
    );
    if (!cards.length) return undefined;

    const getTravel = () => {
      const viewportCenter = window.innerWidth * 0.5;
      const first = cards[0];
      const last = cards[cards.length - 1];
      const firstCenter = first.offsetLeft + first.offsetWidth * 0.5;
      const lastCenter = last.offsetLeft + last.offsetWidth * 0.5;
      const startX = viewportCenter - firstCenter;
      const endX = viewportCenter - lastCenter;

      return {
        startX,
        endX,
        distance: Math.max(0, Math.abs(endX - startX)),
      };
    };

    /** Depth from scroll progress (0 = first card, 1 = last). Avoids layout reads while scrubbing. */
    const applyCardDepth = (progress) => {
      const focusIndex = progress * (cards.length - 1);

      cards.forEach((card, i) => {
        const dist = Math.abs(i - focusIndex);
        const focus = gsap.utils.clamp(0, 1, 1 - dist);

        gsap.set(card, {
          scale: gsap.utils.interpolate(0.9, 1.04, focus),
          y: gsap.utils.interpolate(14, 0, focus),
          z: gsap.utils.interpolate(-120, 100, focus),
          opacity: gsap.utils.interpolate(0.45, 1, focus),
          zIndex: Math.round(10 + focus * 100),
          force3D: true,
        });
      });
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { x: () => getTravel().startX },
        {
          x: () => getTravel().endX,
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${getTravel().distance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => applyCardDepth(self.progress),
          },
        },
      );

      gsap.set(track, { x: () => getTravel().startX });
      applyCardDepth(0);
    }, section);

    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("resize", refresh);
    const layoutTimer = window.setTimeout(refresh, 400);

    return () => {
      window.removeEventListener("resize", refresh);
      window.clearTimeout(layoutTimer);
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="featured"
      ref={sectionRef}
      className={`featured-animations${prefersReducedMotion ? " featured-animations--reduced" : ""}`}
      aria-label="Featured animations"
    >
      <div ref={pinRef} className="featured-animations__pin">
        <header className="featured-animations__header">
          <h2 className="featured-animations__title">Featured Animations</h2>
          <p className="featured-animations__subtitle">
            [A GLIMPSE INTO THE ATLAS LIBRARY.]
          </p>
        </header>

        <div
          className={
            prefersReducedMotion
              ? "featured-animations__static-grid"
              : "featured-animations__viewport"
          }
        >
          <div
            ref={trackRef}
            className={`featured-animations__track${prefersReducedMotion ? " featured-animations__track--static" : ""}`}
          >
            {FEATURED_CARDS.map((card) => {
              if (card.variant === "enter") {
                return (
                  <article
                    key={card.id}
                    className="featured-animations__card featured-animations__card--enter"
                  >
                    <Link
                      href={card.href}
                      className="featured-animations__enter-link"
                      aria-label={`${card.title} — open animation library`}
                    >
                      <span className="featured-animations__enter-text">
                        {card.title}
                      </span>
                      <span
                        className="featured-animations__enter-arrow"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </Link>
                  </article>
                );
              }

              const { module: mod, defaults, slug, title } = card;
              const Demo = mod.Demo;

              return (
                <article key={card.id} className="featured-animations__card">
                  <h3 className="featured-animations__card-title">{title}</h3>

                  <Demo platform="web" params={defaults} embedded />

                  <Link
                    href={`/library/${slug}`}
                    className="featured-animations__details"
                  >
                    VIEW THE DETAILS
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
