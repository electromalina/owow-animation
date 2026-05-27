"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { DemoShell } from "@/src/animations/shared/DemoShell";
import type { DemoProps } from "@/src/animations/types";

import "./demo.css";

gsap.registerPlugin(useGSAP);

const ACCENT = "#feb800";
const CONFETTI_COLORS = [
  ACCENT,
  "#ffd54f",
  "#ffc107",
  "#f9a825",
  "#ffe082",
  "#fff59d",
];

function burstYellowConfetti(x: number, y: number) {
  const count = 132;
  const bursts = 3;

  for (let b = 0; b < bursts; b += 1) {
    const burstDelay = b * 0.06;
    const burstScale = 1 + b * 0.35;

    for (let i = 0; i < count / bursts; i += 1) {
      const piece = document.createElement("span");
      const size = 6 + Math.random() * 10;
      const isRect = Math.random() > 0.4;

      piece.className = "mag-confetti";
      piece.style.cssText = [
        `left:${x}px`,
        `top:${y}px`,
        `width:${isRect ? size * 1.7 : size}px`,
        `height:${isRect ? size * 0.5 : size}px`,
        `background:${CONFETTI_COLORS[(i + b) % CONFETTI_COLORS.length]}`,
        `border-radius:${isRect ? "2px" : "50%"}`,
      ].join(";");

      document.body.appendChild(piece);

      const angle = Math.random() * Math.PI * 2;
      const dist = (180 + Math.random() * 320) * burstScale;
      const lift = 60 + Math.random() * 120;

      gsap.fromTo(
        piece,
        { x: 0, y: 0, opacity: 1, rotation: Math.random() * 90, scale: 0.6 },
        {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - lift,
          scale: 0.2 + Math.random() * 0.5,
          rotation: `+=${220 + Math.random() * 420}`,
          opacity: 0,
          duration: (0.75 + Math.random() * 0.65) * 1.5,
          delay: (burstDelay + Math.random() * 0.06) * 1.5,
          ease: "power4.out",
          onComplete: () => piece.remove(),
        },
      );
    }
  }
}

export function Demo({ platform, params, embedded }: DemoProps) {
  const strength = params.strength ?? 0.42;
  const radius = params.radius ?? 110;
  const TEXT_STRENGTH = strength * 0.43;

  const wrapRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(
    (_, contextSafe) => {
      const wrap = wrapRef.current;
      const motion = motionRef.current;
      const text = textRef.current;
      if (!wrap || !motion || !text) return;

      const onEnter = contextSafe?.(() => setHovered(true));
      const scaleEl = motion.querySelector(".mag-btn-scale");

      const onLeave = contextSafe?.(() => {
        setHovered(false);
        gsap.to(motion, {
          x: 0,
          y: 0,
          duration: 0.9,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto",
        });
        gsap.to(text, {
          x: 0,
          y: 0,
          duration: 0.75,
          ease: "elastic.out(1, 0.45)",
          overwrite: "auto",
        });
        if (scaleEl) {
          gsap.to(scaleEl, {
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
            clearProps: "transform",
            overwrite: "auto",
          });
        }
      });

      const onMove = contextSafe?.((e: MouseEvent) => {
        const rect = wrap.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          gsap.to(motion, {
            x: dx * strength,
            y: dy * strength,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(text, {
            x: dx * TEXT_STRENGTH,
            y: dy * TEXT_STRENGTH,
            duration: 0.45,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });

      wrap.addEventListener("mouseenter", onEnter!);
      wrap.addEventListener("mousemove", onMove!);
      wrap.addEventListener("mouseleave", onLeave!);

      return () => {
        wrap.removeEventListener("mouseenter", onEnter!);
        wrap.removeEventListener("mousemove", onMove!);
        wrap.removeEventListener("mouseleave", onLeave!);
      };
    },
    { scope: wrapRef, dependencies: [strength, radius, TEXT_STRENGTH] },
  );

  const handleClick = () => {
    const motion = motionRef.current;
    const btn = motion?.querySelector(".mag-btn");
    const scaleEl = motion?.querySelector(".mag-btn-scale");

    if (scaleEl) {
      const restScale = hovered ? 1.02 : 1;
      gsap
        .timeline({ overwrite: "auto" })
        .to(scaleEl, { scale: 0.86, duration: 0.1, ease: "power2.in" })
        .to(scaleEl, {
          scale: restScale,
          duration: 0.55,
          ease: "elastic.out(1, 0.55)",
        });
    }

    if (btn) {
      const rect = btn.getBoundingClientRect();
      burstYellowConfetti(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
      );
    }
  };

  const content = (
    <div
      ref={wrapRef}
      className={`mag-wrap${hovered ? " mag-wrap--hover" : ""}${embedded ? " mag-wrap--embedded" : ""}`}
    >
      <div ref={motionRef} className="mag-btn-motion">
        <div className="mag-btn-scale">
          <button
            type="button"
            className="mag-btn"
            onClick={handleClick}
            aria-label={hovered ? "Click me" : "Magnetic button demo"}
          >
            <span ref={textRef} className="mag-btn__text" aria-live="polite">
              <span
                className={`mag-btn__label mag-btn__label--default${hovered ? " mag-btn__label--hidden" : ""}`}
              >
                Check The Library
              </span>
              <span
                className={`mag-btn__label mag-btn__label--hover${hovered ? "" : " mag-btn__label--hidden"}`}
              >
                click me
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  if (embedded) return content;

  return (
    <DemoShell
      platform={platform}
      footerTags={["transform · hover", "confetti burst"]}
    >
      {content}
    </DemoShell>
  );
}
