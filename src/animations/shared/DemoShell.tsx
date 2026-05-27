"use client";

import type { ReactNode, RefObject } from "react";

import type { Platform } from "@/src/animations/types";

const GRID_BG = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

type DemoShellProps = {
  platform: Platform;
  engineLabel?: string;
  footerTags: [string, string];
  stageRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function DemoShell({
  platform,
  engineLabel,
  footerTags,
  stageRef,
  children,
}: DemoShellProps) {
  const isMobile = platform === "mobile";
  const engine =
    engineLabel ??
    (isMobile ? "Mobile · React Native" : "Web · React + GSAP");

  return (
    <div className="overflow-hidden rounded-lg border border-[#222] bg-[#181818]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/70">
        <div className="flex items-center gap-[22px]">
          <span>Asset preview</span>
          <span>{isMobile ? "Device · 9 : 16" : "Stage · 16 : 10"}</span>
        </div>
        <div className="flex items-center gap-[22px]">
          <span>{engine}</span>
          <span className="flex items-center gap-[7px] text-white">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            Live
          </span>
        </div>
      </div>

      <div
        className="relative w-full bg-[#111] transition-[max-width,margin,border-radius] duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
        style={{
          ...GRID_BG,
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
        <div
          ref={stageRef}
          className="relative overflow-hidden"
          style={{
            aspectRatio: isMobile ? "9/16" : "16/10",
            ...(isMobile ? { borderRadius: 27 } : {}),
          }}
        >
          {children}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/70">
        <div className="flex items-center gap-[22px]">
          <span>{footerTags[0]}</span>
          <span>·</span>
          <span>{footerTags[1]}</span>
        </div>
        <span>60 fps</span>
      </div>
    </div>
  );
}
