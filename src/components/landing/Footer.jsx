"use client";

import Link from "next/link";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "@/src/components/landing/Footer.css";

const MARQUEE_SEGMENT = (
  <>
    <span className="footer__marquee-text">GO TO LIBRARY ↗ </span>
    <span className="footer__marquee-accent">LET&apos;S DO SOME COOL ANIMATIONS ↗ </span>
    <span className="footer__marquee-text">CHECK OUR LIBRARY ↗ </span>
  </>
);

const MOVING_WORDS = ["MOVING", "DEVELOPING", "ACTING", "DESIGNING", "ANIMATING"];
const SCRAMBLE_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SCRAMBLE_TICK_MS = 45;
const SCRAMBLE_TICKS = 8;
const CURSOR_TRAIL_ICONS = [
  "/footer/cursor-ai.png",
  "/footer/cursor-ventures.png",
  "/footer/cursor-studio.png",
];
const TRAIL_FIXED_SPACING = 70;

function getScrambledWord(targetWord, revealCount) {
  return targetWord
    .split("")
    .map((char, index) => {
      if (index < revealCount) return char;
      const randomIndex = Math.floor(Math.random() * SCRAMBLE_CHARSET.length);
      return SCRAMBLE_CHARSET[randomIndex];
    })
    .join("");
}

export function Footer() {
  const [animatedWord, setAnimatedWord] = useState(MOVING_WORDS[0]);
  const [isTrailActive, setIsTrailActive] = useState(false);
  const wordIndexRef = useRef(0);
  const scrambleIntervalRef = useRef(null);
  const trailLayerRef = useRef(null);
  const lastPointRef = useRef({ x: 0, y: 0, hasValue: false });
  const distanceRemainderRef = useRef(0);
  const spawnParityRef = useRef(0);

  const clearTrail = useCallback(() => {
    const trailLayer = trailLayerRef.current;
    if (!trailLayer) return;
    trailLayer.querySelectorAll(".site-footer__cursor-trail-item").forEach((node) => {
      gsap.killTweensOf(node);
      node.remove();
    });
  }, []);

  const spawnTrailIcon = useCallback((x, y) => {
    const trailLayer = trailLayerRef.current;
    if (!trailLayer) return;

    const icon = document.createElement("img");
    icon.className = "site-footer__cursor-trail-item";
    icon.alt = "";
    icon.src = CURSOR_TRAIL_ICONS[Math.floor(Math.random() * CURSOR_TRAIL_ICONS.length)];
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;
    icon.style.rotate = `${gsap.utils.random(-50, 50)}deg`;
    trailLayer.appendChild(icon);

    gsap.fromTo(
      icon,
      { xPercent: -50, yPercent: -50, scale: 0.35, opacity: 0, filter: "blur(1.5px)" },
      {
        scale: gsap.utils.random(1, 1.35),
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.1,
        ease: "power3.out",
      },
    );

    gsap.to(icon, {
      x: gsap.utils.random(-70, 70),
      y: gsap.utils.random(170, 300),
      rotation: gsap.utils.random(-120, 120),
      opacity: 0,
      scale: gsap.utils.random(0.7, 1.45),
      duration: gsap.utils.random(0.75, 1.2),
      ease: "power2.in",
      delay: 0.03,
      onComplete: () => icon.remove(),
    });
  }, []);

  const handleCtaMouseMove = useCallback(
    (event) => {
      const ctaBounds = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - ctaBounds.left;
      const y = event.clientY - ctaBounds.top;

      if (!lastPointRef.current.hasValue) {
        lastPointRef.current = { x, y, hasValue: true };
        spawnTrailIcon(x, y);
        return;
      }

      const startX = lastPointRef.current.x;
      const startY = lastPointRef.current.y;
      const dx = x - startX;
      const dy = y - startY;
      const distance = Math.hypot(dx, dy);
      if (distance === 0) return;

      let remainingDistance = distanceRemainderRef.current + distance;
      let traveledOnSegment = TRAIL_FIXED_SPACING - distanceRemainderRef.current;

      while (remainingDistance >= TRAIL_FIXED_SPACING) {
        const progress = traveledOnSegment / distance;
        const iconX = startX + dx * progress;
        const iconY = startY + dy * progress;
        spawnParityRef.current = (spawnParityRef.current + 1) % 2;
        if (spawnParityRef.current === 0) {
          spawnTrailIcon(iconX, iconY);
        }

        remainingDistance -= TRAIL_FIXED_SPACING;
        traveledOnSegment += TRAIL_FIXED_SPACING;
      }

      distanceRemainderRef.current = remainingDistance;
      lastPointRef.current = { x, y, hasValue: true };
    },
    [spawnTrailIcon],
  );

  const handleCtaMouseEnter = useCallback(() => {
    setIsTrailActive(true);
    lastPointRef.current = { x: 0, y: 0, hasValue: false };
    distanceRemainderRef.current = 0;
    spawnParityRef.current = 0;
  }, []);

  const handleCtaMouseLeave = useCallback(() => {
    setIsTrailActive(false);
  }, []);

  useEffect(
    () => () => {
      clearTrail();
    },
    [clearTrail],
  );

  const handleAccentHover = () => {
    if (scrambleIntervalRef.current) {
      window.clearInterval(scrambleIntervalRef.current);
      scrambleIntervalRef.current = null;
    }

    wordIndexRef.current = (wordIndexRef.current + 1) % MOVING_WORDS.length;
    const targetWord = MOVING_WORDS[wordIndexRef.current];
    let tick = 0;

    scrambleIntervalRef.current = window.setInterval(() => {
      tick += 1;
      if (tick >= SCRAMBLE_TICKS) {
        setAnimatedWord(targetWord);
        window.clearInterval(scrambleIntervalRef.current);
        scrambleIntervalRef.current = null;
        return;
      }

      const revealCount = Math.floor((tick / SCRAMBLE_TICKS) * targetWord.length);
      setAnimatedWord(getScrambledWord(targetWord, revealCount));
    }, SCRAMBLE_TICK_MS);
  };

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__marquee" aria-hidden>
        <div className="site-footer__marquee-track">
          <div className="site-footer__marquee-group">
            {MARQUEE_SEGMENT}
            {MARQUEE_SEGMENT}
            {MARQUEE_SEGMENT}
            {MARQUEE_SEGMENT}
          </div>
          <div className="site-footer__marquee-group" aria-hidden>
            {MARQUEE_SEGMENT}
            {MARQUEE_SEGMENT}
            {MARQUEE_SEGMENT}
            {MARQUEE_SEGMENT}
          </div>
        </div>
      </div>

      <div
        className={`site-footer__cta-block${isTrailActive ? " site-footer__cta-block--trail" : ""}`}
        onMouseMove={handleCtaMouseMove}
        onMouseEnter={handleCtaMouseEnter}
        onMouseLeave={handleCtaMouseLeave}
      >
        <div ref={trailLayerRef} className="site-footer__cursor-trail-layer" aria-hidden />
        <h2 className="site-footer__headline">
          <span className="site-footer__headline-line">STOP REBUILDING,</span>
          <span
            className="site-footer__headline-line site-footer__headline-line--accent"
            onMouseEnter={handleAccentHover}
          >
            START {animatedWord}.
          </span>
        </h2>
        <Link href="/library" className="site-footer__library-btn">
          VIEW FULL LIBRARY
        </Link>
      </div>

      <div className="site-footer__bottom">
        <section className="site-footer__bottom-col">
          <p className="site-footer__bottom-label">About</p>
          <nav className="site-footer__bottom-nav" aria-label="About links">
            <Link href="#top" className="site-footer__bottom-link">
              Back to Top
            </Link>
            <Link href="#services" className="site-footer__bottom-link">
              Library
            </Link>
            <Link href="#venture" className="site-footer__bottom-link">
              Motion Categories
            </Link>
            <Link href="#work" className="site-footer__bottom-link">
              Featured Animations
            </Link>
            <Link href="#about" className="site-footer__bottom-link">
              Showcase
            </Link>
          </nav>

          <p className="site-footer__bottom-label site-footer__bottom-label--spaced">Socials</p>
          <nav className="site-footer__bottom-nav" aria-label="Social links">
            <Link href="#" className="site-footer__bottom-link">
              LinkedIn
            </Link>
            <Link href="#" className="site-footer__bottom-link">
              Medium
            </Link>
            <Link href="#" className="site-footer__bottom-link">
              Instagram
            </Link>
            <Link href="#" className="site-footer__bottom-link">
              GitHub
            </Link>
          </nav>
        </section>

        <section className="site-footer__bottom-col">
          <p className="site-footer__bottom-label">General</p>
          <Link href="mailto:info@owow.io" className="site-footer__bottom-link site-footer__bottom-link--underlined">
            info@owow.io
          </Link>

          <p className="site-footer__bottom-label site-footer__bottom-label--spaced">New Business</p>
          <Link href="mailto:new@owow.io" className="site-footer__bottom-link site-footer__bottom-link--underlined">
            new@owow.io
          </Link>

          <p className="site-footer__bottom-label site-footer__bottom-label--spaced">Contact details</p>
          <address className="site-footer__bottom-address">
            Fuutlaan 14E
            <br />
            5613 AB Eindhoven
            <br />
            The Netherlands
          </address>
        </section>
      </div>
    </footer>
  );
}
