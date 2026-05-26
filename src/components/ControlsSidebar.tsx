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

// ─── Slider row ──────────────────────────────────────────────────────────────

function SliderRow({
  param: p,
  value,
  isFirst,
  onParamChange,
}: {
  param: AnimationParam;
  value: number;
  isFirst: boolean;
  onParamChange: (key: string, value: number) => void;
}) {
  // The text input has its own local string state so the user can type freely.
  // here only push a number to the parent when we get a valid, in-range value.
  const [inputVal, setInputVal] = useState(() => value.toFixed(p.decimals));
  const [focused, setFocused] = useState(false);

  // Keep the text input in sync when the value changes externally (like reset)
  useEffect(() => {
    setInputVal(value.toFixed(p.decimals));
  }, [value, p.decimals]);

  function handleRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = parseFloat(e.target.value);
    setInputVal(v.toFixed(p.decimals));
    onParamChange(p.key, v);
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputVal(e.target.value);
    const v = parseFloat(e.target.value);
    if (!isNaN(v)) {
      // clamp so user can't type a value outside the allowed range
      onParamChange(p.key, Math.max(p.min, Math.min(p.max, v)));
    }
  }

  function handleBlur() {
    // snap the displayed text back to the formatted number on blur
    setInputVal(value.toFixed(p.decimals));
    setFocused(false);
  }

  // percentage filled — used to draw the white "filled" part of the track
  const pct = ((value - p.min) / (p.max - p.min)) * 100;

  return (
    <div className={!isFirst ? "mt-4 border-t border-white/10 pt-4" : ""}>

      {/* Label on the left, editable value on the right */}
      <div className="mb-3.5 flex items-baseline justify-between">
        <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.10em] text-white">
          {p.label}
        </span>
        <span className="flex items-baseline gap-0.5">
          <input
            type="text"
            inputMode="decimal"
            value={inputVal}
            onChange={handleTextChange}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            className="w-12 bg-transparent pb-px text-right font-[family-name:var(--font-mono)] text-[14px] font-medium text-white outline-none transition-colors"
            style={{
              borderBottom: `1px ${focused ? "solid" : "dashed"} ${
                focused ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.30)"
              }`,
            }}
          />
          {p.unit && (
            <span className="font-[family-name:var(--font-mono)] text-[14px] font-medium text-white/50">
              {p.unit}
            </span>
          )}
        </span>
      </div>

      {/* Range slider — appearance-none lets us style the thumb via Tailwind */}
      <input
        type="range"
        min={p.min}
        max={p.max}
        step={p.step}
        value={value}
        onChange={handleRangeChange}
        className="w-full cursor-pointer appearance-none outline-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white"
        style={{
          height: "1px",
          // white fill up to the thumb, dim track after — computed from current value
          background: `linear-gradient(to right, #fff ${pct}%, rgba(255,255,255,0.20) ${pct}%)`,
        }}
      />

      {/* Min / max hints */}
      <div className="mt-2 flex justify-between font-[family-name:var(--font-mono)] text-[10px] text-white/30">
        <span>{p.decimals > 0 ? p.min.toFixed(p.decimals) : p.min}{p.unit}</span>
        <span>{p.decimals > 0 ? p.max.toFixed(p.decimals) : p.max}{p.unit}</span>
      </div>

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
      <div
        className="flex flex-col overflow-hidden rounded-lg border border-[#222] bg-[#181818]"
        style={{ maxHeight: "calc(100vh - 108px)" }}
      >

        {/*  Header: title + reset  */}
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

        {/* Scrollable area: sliders + code block  */}
        <div
          className="flex-1 overflow-y-auto"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.12) transparent" }}
        >
          {animation.params.length > 0 && (
            <div className="p-5">
              {animation.params.map((p, i) => (
                <SliderRow
                  key={p.key}
                  param={p}
                  value={state.params[p.key] ?? p.defaultValue}
                  isFirst={i === 0}
                  onParamChange={onParamChange}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </aside>
  );
}
