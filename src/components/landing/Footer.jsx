"use client";

import Link from "next/link";

import "@/src/components/landing/Footer.css";

const MARQUEE_SEGMENT = (
  <>
    <span className="footer__marquee-text">JUNIOR FINANCE CONTROLLER ↗ </span>
    <span className="footer__marquee-accent">WE&apos;RE HIRING! ↗ </span>
  </>
);

export function Footer() {
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

      <div className="site-footer__cta-block">
        <h2 className="site-footer__headline">
          <span className="site-footer__headline-line">STOP REBUILDING,</span>
          <span className="site-footer__headline-line site-footer__headline-line--accent">
            START MOVING.
          </span>
        </h2>
        <Link href="/library" className="site-footer__library-btn">
          VIEW FULL LIBRARY
        </Link>
      </div>
    </footer>
  );
}
