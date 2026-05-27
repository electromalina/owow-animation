import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FeaturedScrollDemo } from "./FeaturedScrollDemo.jsx";
import { MagneticButton } from "./MagneticButton.jsx";
import { ParticleTextDemo } from "./ParticleTextDemo.jsx";
import { FeaturedCursorTrailDemo } from "./FeaturedCursorTrailDemo.jsx";
import "./FeaturedAnimations.css";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_CARDS = [
  {
    id: "staggered",
    tag: "Magnetic / GSAP",
    title: "Magnetic Button",
    variant: "hover-button",
  },
  {
    id: "atlas",
    tag: "Particles / Canvas",
    title: "Particle Text",
    variant: "particle-text",
  },
  {
    id: "cursor-trail",
    tag: "Cursor / GSAP",
    title: "Cursor Trail",
    variant: "cursor-trail",
  },
  {
    id: "scroll-velocity",
    tag: "Scroll / GSAP",
    title: "Scroll Velocity",
    variant: "scroll-demo",
  },
  {
    id: "enter",
    variant: "enter",
    title: "Enter the Library",
    href: "#library",
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
    const cards = gsap.utils.toArray(track.querySelectorAll(".featured-animations__card"));

    const getCardTravelRange = () => {
      if (!cards.length) {
        return { startX: 0, endX: 0, distance: 0 };
      }

      const viewportCenter = window.innerWidth * 0.5;
      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];
      const firstCenter = firstCard.offsetLeft + firstCard.offsetWidth * 0.5;
      const lastCenter = lastCard.offsetLeft + lastCard.offsetWidth * 0.5;

      const startX = viewportCenter - firstCenter;
      const endX = viewportCenter - lastCenter;
      const distance = Math.max(0, Math.abs(endX - startX));

      return { startX, endX, distance };
    };

    const updateCardDepth = () => {
      const viewportCenter = window.innerWidth * 0.5;
      const maxDistance = window.innerWidth * 0.5;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width * 0.5;
        const distance = Math.abs(viewportCenter - cardCenter);
        const normalized = gsap.utils.clamp(0, 1, distance / maxDistance);
        const focus = 1 - normalized;

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
        {
          x: () => getCardTravelRange().startX,
        },
        {
          x: () => getCardTravelRange().endX,
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => `+=${getCardTravelRange().distance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: updateCardDepth,
            onUpdate: updateCardDepth,
          },
        }
      );

      gsap.set(track, {
        x: () => getCardTravelRange().startX,
      });

      updateCardDepth();
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
                    <a
                      href={card.href}
                      className="featured-animations__enter-link"
                      aria-label={`${card.title} — open animation library`}
                    >
                      <span className="featured-animations__enter-text">
                        {card.title}
                      </span>
                      <span className="featured-animations__enter-arrow" aria-hidden>
                        ↗
                      </span>
                    </a>
                  </article>
                );
              }

              return (
                <article key={card.id} className="featured-animations__card">
                  <h3 className="featured-animations__card-title">{card.title}</h3>

                  <div
                    className="featured-animations__preview"
                    aria-hidden={card.variant !== "scroll-demo"}
                  >
                    {card.variant === "scroll-demo" ? (
                      <FeaturedScrollDemo />
                    ) : card.variant === "hover-button" ? (
                      <div className="featured-animations__hover-demo">
                        <MagneticButton aria-label="Magnetic button demo">
                          Check The Library
                        </MagneticButton>
                      </div>
                    ) : card.variant === "particle-text" ? (
                      <ParticleTextDemo />
                    ) : card.variant === "cursor-trail" ? (
                      <FeaturedCursorTrailDemo />
                    ) : null}
                  </div>

                  <a href="#details" className="featured-animations__details">
                    VIEW THE DETAILS
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
