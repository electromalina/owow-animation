import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FeaturedScrollDemo } from "./FeaturedScrollDemo.jsx";
import { MagneticButton } from "./MagneticButton.jsx";
import { ParticleTextDemo } from "./ParticleTextDemo.jsx";
import "./FeaturedAnimations.css";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_CARDS = [
  {
    id: "scroll-velocity",
    tag: "Scroll / GSAP",
    title: "Scroll Velocity",
    variant: "scroll-demo",
  },
  {
    id: "staggered",
    tag: "Magnetic / GSAP",
    title: "Magnetic Button",
    variant: "hover-button",
  },
  {
    id: "atlas",
    tag: "Particles / Canvas",
    title: "Atlas Library",
    variant: "particle-text",
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
