"use client";

import { useEffect, useRef, useState } from "react";

import type { Animation, AnimationParam, AnimationState } from "@/src/data/animations";

// ─── Props contract ────────────

export type ControlsSidebarProps = {
  animation: Animation;
  state: AnimationState;
  onParamChange: (key: string, value: number) => void;
  onPlatformChange: (platform: "web" | "mobile") => void;
  onReset: () => void;
};

// ─── Small icons ──────────────────────────────────────────────────────────────

function ResetIcon() {
  return (
    <svg
      width="11"
      height="11"
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
  );
}

// ─── Platform toggle (Web / Mobile) ──────────────────────────────────────────

function PlatformToggle({
  frameworks,
  platform,
  onPlatformChange,
}: {
  // which platforms this animation actually supports
  frameworks: ("web" | "mobile")[];
  platform: "web" | "mobile";
  onPlatformChange: (p: "web" | "mobile") => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-1 rounded-md border border-white/10 bg-[#111] p-1">
      {(["web", "mobile"] as const).map((pf) => {
        const enabled = frameworks.includes(pf);
        const active = platform === pf;
        return (
          <button
            key={pf}
            type="button"
            onClick={() => enabled && onPlatformChange(pf)}
            disabled={!enabled}
            className={`flex flex-col items-center gap-0.5 rounded py-2.5 transition-all ${
              active
                ? "bg-white text-black"
                : enabled
                  ? "cursor-pointer text-white/70 hover:bg-white/5 hover:text-white"
                  : "cursor-not-allowed text-white/20"
            }`}
          >
            <span className="font-semibold text-[13px] leading-[1.1] tracking-[-0.01em]">
              {pf === "web" ? "Web" : "Mobile"}
            </span>
            {/* library name shown as small subtext below the platform label */}
            <span
              className={`font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.04em] ${
                active ? "text-black/55" : "text-white/30"
              }`}
            >
              {pf === "web" ? "gsap" : "reanimated"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ControlsSidebar({
  animation,
  state,
  onParamChange,
  onPlatformChange,
  onReset,
}: ControlsSidebarProps) {
  return (
    <aside className="self-start xl:sticky xl:top-[92px]">
      {/*
        max-h caps the panel so it never overflows the screen.
        The 108px = 72px header + ~36px breathing room from the sticky offset.
      */}
      <div
        className="flex flex-col overflow-hidden rounded-lg border border-[#222] bg-[#181818]"
        style={{ maxHeight: "calc(100vh - 108px)" }}
      >

        {/* ── Header: title + reset ── */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-white">
            Controls
          </span>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#222] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/70 transition-colors hover:border-white/35 hover:text-white"
          >
            <ResetIcon />
            Reset
          </button>
        </div>

        {/* ── Platform toggle ── */}
        <div className="border-b border-white/10 p-5">
          <PlatformToggle
            frameworks={animation.frameworks}
            platform={state.platform}
            onPlatformChange={onPlatformChange}
          />
        </div>

      </div>
    </aside>
  );
}
