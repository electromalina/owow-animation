import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./FeaturedAnimations.css";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_CARDS = [
  {
    id: "magnetic",
    tag: "WEB COMP",
    title: "Magnetic Button",
    variant: "dot",
  },
  {
    id: "staggered",
    tag: "TYPOGRAPHY",
    title: "Staggered Text",
    variant: "dot",
  },
  {
    id: "atlas",
    tag: "WEB COMP",
    title: "Atlas Library",
    variant: "copy",
    copy:
      "[THE CENTRALIZED ANIMATION LIBRARY FOR OWOW. ENGINEERED TO CAPTIVATE CLIENTS, EMPOWER DESIGNERS, AND ACCELERATE OUR WIZKIDS.]",
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
          <h2 className="featured-animations__title">
            <span className="featured-animations__title-light">[ Featured </span>
            <span className="featured-animations__title-strong">Animations ]</span>
          </h2>
          <p className="featured-animations__subtitle">
            A GLIMPSE INTO THE ATLAS LIBRARY.
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
                  <span className="featured-animations__tag">{card.tag}</span>
                  <h3 className="featured-animations__card-title">{card.title}</h3>

                  <div className="featured-animations__preview" aria-hidden>
                    {card.variant === "dot" ? (
                      <div className="featured-animations__dot-demo">
                        <span className="featured-animations__dot-ring" />
                        <span className="featured-animations__dot-core" />
                      </div>
                    ) : (
                      <p className="featured-animations__copy-block">{card.copy}</p>
                    )}
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
