"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import type { DemoProps } from "@/src/animations/types";

import { controlSchema } from "./controls";

// look up the GSAP ease string from the numeric index stored in params
function getEaseString(index: number): string {
  const p = controlSchema.find((c) => c.key === "ease");
  return p?.options?.[Math.round(index)]?.value ?? "power3.out";
}

const ITEMS = [
  {
    num: "01",
    title: "Design",
    body: "Research-driven interfaces shaped by real users and honest feedback loops.",
  },
  {
    num: "02",
    title: "Develop",
    body: "React, Next.js, TypeScript — built to scale, readable by anyone.",
  },
  {
    num: "03",
    title: "Animate",
    body: "Motion that communicates, not decorates. GSAP-powered, blur-refined.",
  },
  {
    num: "04",
    title: "Ship",
    body: "Accessible, performant, production-ready. Delivered on time.",
  },
];

export function Demo({ platform, params }: DemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // incrementing this triggers a re-run of the animation effect (replay button)
  const [tick, setTick] = useState(0);
  const isMobile = platform === "mobile";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-item]"),
    );
    if (!items.length) return;

    const ease     = getEaseString(params.ease     ?? 3);
    const duration = params.duration ?? 0.8;
    const stagger  = params.stagger  ?? 0.12;
    const yOffset  = params.yOffset  ?? 60;
    const blurFrom = params.blurFrom ?? 12;

    const tween = gsap.fromTo(
      items,
      { y: yOffset, opacity: 0, filter: `blur(${blurFrom}px)` },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration,
        stagger,
        ease,
        overwrite: true,
        clearProps: "filter",
      },
    );

    return () => {
      tween.kill();
    };
  }, [
    params.duration,
    params.stagger,
    params.yOffset,
    params.blurFrom,
    params.ease,
    platform,
    tick,
  ]);

  const gridBg = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  return (
    <div className="overflow-hidden rounded-lg border border-[#222] bg-[#181818]">

      {/* ── top rail ── */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/70">
        <div className="flex items-center gap-[22px]">
          <span>Asset preview</span>
          <span>{isMobile ? "Device · 9 : 16" : "Stage · 16 : 10"}</span>
        </div>
        <div className="flex items-center gap-[22px]">
          <span>{isMobile ? "Mobile · React Native" : "Web · React + GSAP"}</span>
          <span className="flex items-center gap-[7px] text-white">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            Live
          </span>
        </div>
      </div>

      {/* ── stage shell (becomes phone frame on mobile) ── */}
      <div
        className="bg-[#111] transition-[max-width,margin,border-radius,border-color] duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
        style={{
          ...gridBg,
          ...(isMobile
            ? {
                maxWidth: 360,
                margin: "28px auto",
                border: "1px solid #222",
                borderRadius: 28,
              }
            : {}),
        }}
      >
        {/* phone notch */}
        {isMobile && (
          <div
            className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#333]"
          />
        )}

        <div
          ref={containerRef}
          className="relative"
          style={{
            aspectRatio: isMobile ? "9/16" : "16/10",
            ...(isMobile ? { borderRadius: 27, overflow: "hidden" } : {}),
          }}
        >
          {/* replay button */}
          <button
            type="button"
            onClick={() => setTick((t) => t + 1)}
            className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/50 transition-all hover:border-white/25 hover:bg-white/8 hover:text-white"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 4v6h6" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
            Replay
          </button>

          {/* animated items */}
          <div
            className={`flex h-full flex-col justify-center ${
              isMobile ? "px-6 py-14" : "px-10 py-8"
            }`}
          >
            {ITEMS.map((item) => (
              <div
                key={item.num}
                data-item
                className={`flex gap-5 border-b border-white/10 last:border-b-0 ${
                  isMobile ? "py-3.5" : "py-5"
                }`}
              >
                <span className="shrink-0 pt-[3px] font-[family-name:var(--font-mono)] text-[11px] tracking-[0.04em] text-white/30">
                  {item.num}
                </span>
                <div>
                  <h3
                    className={`font-semibold tracking-[-0.02em] text-white ${
                      isMobile ? "text-[15px]" : "text-[18px]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {!isMobile && (
                    <p className="mt-1 text-[13px] leading-[1.5] text-white/55">
                      {item.body}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── bottom rail ── */}
      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/70">
        <div className="flex items-center gap-[22px]">
          <span>opacity · transform · filter</span>
          <span>·</span>
          <span>GSAP 3</span>
        </div>
        <span>60 fps</span>
      </div>

    </div>
  );
}
