"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { magneticButton } from "@/src/animations/magnetic-button";
import { particleText } from "@/src/animations/particle-text";
import { scrollVelocity } from "@/src/animations/scroll-velocity";
import { buildDefaultState } from "@/src/animations/registry";

import "@/src/components/landing/FeaturedAnimations.css";

gsap.registerPlugin(ScrollTrigger);

const scrollDefaults = buildDefaultState(scrollVelocity).params;
const magneticDefaults = buildDefaultState(magneticButton).params;
const particleDefaults = buildDefaultState(particleText).params;

const FEATURED_CARDS = [
  {
    id: "scroll-velocity",
    title: "Scroll Velocity",
    variant: "scroll-demo",
    slug: "scroll-velocity",
    module: scrollVelocity,
    defaults: scrollDefaults,
  },
  {
    id: "magnetic-button",
    title: "Magnetic Button",
    variant: "hover-button",
    slug: "magnetic-button",
    module: magneticButton,
    defaults: magneticDefaults,
  },
  {
    id: "particle-text",
    title: "Atlas Library",
    variant: "particle-text",
    slug: "particle-text",
    module: particleText,
    defaults: particleDefaults,
  },
  {
    id: "enter",
    variant: "enter",
    title: "Enter the Library",
    href: "/library",
  },
];

export function FeaturedAnimations() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return undefined;

    const getScrollDistance = () => {
      const extra = 48;
      return Math.max(0, track.scrollWidth - window.innerWidth + extra);
    };

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="featured-animations"
      aria-label="Featured animations"
    >
      <div ref={pinRef} className="featured-animations__pin">
        <header className="featured-animations__header">
          <h2 className="featured-animations__title">Featured Animations</h2>
          <p className="featured-animations__subtitle">
            [A GLIMPSE INTO THE ATLAS LIBRARY.]
          </p>
        </header>

        <div className="featured-animations__viewport">
          <div ref={trackRef} className="featured-animations__track">
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

              const { module: mod, defaults, slug } = card;
              const Demo = mod.Demo;

              return (
                <article key={card.id} className="featured-animations__card">
                  <h3 className="featured-animations__card-title">{card.title}</h3>

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
