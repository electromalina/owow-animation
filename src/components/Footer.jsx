import { useRef, useState } from "react";
import "./Footer.css";

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
  const wordIndexRef = useRef(0);
  const scrambleIntervalRef = useRef(null);

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

      <div className="site-footer__cta-block">
        <h2 className="site-footer__headline">
          <span className="site-footer__headline-line">STOP REBUILDING,</span>
          <span
            className="site-footer__headline-line site-footer__headline-line--accent"
            onMouseEnter={handleAccentHover}
          >
            START {animatedWord}.
          </span>
        </h2>
        <a href="#library" className="site-footer__library-btn">
          VIEW FULL LIBRARY
        </a>
      </div>

      <div className="site-footer__bottom">
        <section className="site-footer__bottom-col">
          <p className="site-footer__bottom-label">About</p>
          <nav className="site-footer__bottom-nav" aria-label="About links">
            <a href="#top" className="site-footer__bottom-link">
              Back to Top
            </a>
            <a href="#services" className="site-footer__bottom-link">
              Library
            </a>
            <a href="#venture" className="site-footer__bottom-link">
              Motion Categories
            </a>
            <a href="#work" className="site-footer__bottom-link">
              Featured Animations
            </a>
            <a href="#about" className="site-footer__bottom-link">
              Showcase
            </a>
          </nav>

          <p className="site-footer__bottom-label site-footer__bottom-label--spaced">Socials</p>
          <nav className="site-footer__bottom-nav" aria-label="Social links">
            <a href="#" className="site-footer__bottom-link">
              LinkedIn
            </a>
            <a href="#" className="site-footer__bottom-link">
              Medium
            </a>
            <a href="#" className="site-footer__bottom-link">
              Instagram
            </a>
            <a href="#" className="site-footer__bottom-link">
              GitHub
            </a>
          </nav>
        </section>

        <section className="site-footer__bottom-col">
          <p className="site-footer__bottom-label">General</p>
          <a href="mailto:info@owow.io" className="site-footer__bottom-link site-footer__bottom-link--underlined">
            info@owow.io
          </a>

          <p className="site-footer__bottom-label site-footer__bottom-label--spaced">New Business</p>
          <a href="mailto:new@owow.io" className="site-footer__bottom-link site-footer__bottom-link--underlined">
            new@owow.io
          </a>

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
