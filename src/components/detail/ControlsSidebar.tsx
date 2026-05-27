"use client";

import { useEffect, useRef, useState } from "react";

import type {
  Animation,
  AnimationModule,
  AnimationParam,
  AnimationState,
} from "@/src/animations/registry";

import "./controls-sidebar.css";

export type ControlsSidebarProps = {
  className?: string;
  animation: Animation;
  module: AnimationModule;
  state: AnimationState;
  onParamChange: (key: string, value: number) => void;
  onPlatformChange: (platform: "web" | "mobile") => void;
  onReset: () => void;
};

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

function CopyIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function PlatformToggle({
  frameworks,
  platform,
  onPlatformChange,
}: {
  frameworks: ("web" | "mobile")[];
  platform: "web" | "mobile";
  onPlatformChange: (p: "web" | "mobile") => void;
}) {
  return (
    <div
      className="controls-sidebar__platform-grid"
      role="group"
      aria-label="Preview platform"
    >
      {(["web", "mobile"] as const).map((pf) => {
        const enabled = frameworks.includes(pf);
        const active = platform === pf;
        return (
          <button
            key={pf}
            type="button"
            aria-pressed={active}
            aria-disabled={!enabled}
            disabled={!enabled}
            onClick={() => enabled && onPlatformChange(pf)}
            className={[
              "controls-sidebar__platform-btn",
              active ? "controls-sidebar__platform-btn--active" : "",
              enabled
                ? "controls-sidebar__platform-btn--enabled"
                : "controls-sidebar__platform-btn--disabled",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="controls-sidebar__platform-label">
              {pf === "web" ? "Web" : "Mobile"}
            </span>
            <span className="controls-sidebar__platform-engine">
              {pf === "web" ? "gsap" : "reanimated"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

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
  const [inputVal, setInputVal] = useState(() => value.toFixed(p.decimals));
  const [focused, setFocused] = useState(false);
  const inputId = `control-${p.key}-value`;
  const rangeId = `control-${p.key}-range`;

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
      onParamChange(p.key, Math.max(p.min, Math.min(p.max, v)));
    }
  }

  function handleBlur() {
    setInputVal(value.toFixed(p.decimals));
    setFocused(false);
  }

  const pct = ((value - p.min) / (p.max - p.min)) * 100;

  return (
    <div className={isFirst ? "controls-sidebar__slider-row" : "controls-sidebar__slider-row"}>
      <div className="controls-sidebar__slider-head">
        <label htmlFor={rangeId} className="controls-sidebar__slider-label">
          {p.label}
        </label>
        <span className="flex items-baseline gap-0.5">
          <input
            id={inputId}
            type="text"
            inputMode="decimal"
            aria-label={`${p.label} value`}
            value={inputVal}
            onChange={handleTextChange}
            onFocus={() => setFocused(true)}
            onBlur={handleBlur}
            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            className={`controls-sidebar__slider-input ${focused ? "controls-sidebar__slider-input--focused" : ""}`}
          />
          {p.unit ? (
            <span className="controls-sidebar__slider-unit">{p.unit}</span>
          ) : null}
        </span>
      </div>

      <input
        id={rangeId}
        type="range"
        min={p.min}
        max={p.max}
        step={p.step}
        value={value}
        aria-valuemin={p.min}
        aria-valuemax={p.max}
        aria-valuenow={value}
        aria-label={p.label}
        onChange={handleRangeChange}
        className="controls-sidebar__range"
        style={{
          background: `linear-gradient(to right, #fff ${pct}%, rgba(255,255,255,0.20) ${pct}%)`,
        }}
      />

      <div className="controls-sidebar__range-hints">
        <span>
          {p.decimals > 0 ? p.min.toFixed(p.decimals) : p.min}
          {p.unit}
        </span>
        <span>
          {p.decimals > 0 ? p.max.toFixed(p.decimals) : p.max}
          {p.unit}
        </span>
      </div>
    </div>
  );
}

const EASING_FNS: Record<string, (t: number) => number> = {
  linear: (t) => t,
  "power1.out": (t) => 1 - Math.pow(1 - t, 2),
  "power2.out": (t) => 1 - Math.pow(1 - t, 3),
  "power3.out": (t) => 1 - Math.pow(1 - t, 4),
  "expo.out": (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  "elastic.out": (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1;
  },
};

function EasingCard({
  option,
  isActive,
  dotDuration,
  onSelect,
}: {
  option: { value: string; curve?: string };
  isActive: boolean;
  dotDuration: number;
  onSelect: () => void;
}) {
  const dotRef = useRef<SVGCircleElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  function animateDot() {
    if (typeof window !== "undefined") {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;
    }

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const dot = dotRef.current;
    if (!dot) return;
    const easeFn = EASING_FNS[option.value] ?? ((t) => t);
    const durMs = dotDuration * 1000;
    const t0 = performance.now();

    function frame(now: number) {
      const t = Math.min((now - t0) / durMs, 1);
      const et = easeFn(t);
      dot!.setAttribute("cx", (t * 60).toFixed(2));
      dot!.setAttribute("cy", (18 - et * 18).toFixed(2));
      dot!.setAttribute("opacity", "1");
      if (t < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        rafRef.current = undefined;
        setTimeout(() => dot!.setAttribute("opacity", "0"), 600);
      }
    }
    rafRef.current = requestAnimationFrame(frame);
  }

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={() => {
        onSelect();
        animateDot();
      }}
      className={[
        "controls-sidebar__easing-card",
        isActive ? "controls-sidebar__easing-card--active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.03em]">
        {option.value}
      </span>
      {option.curve ? (
        <svg viewBox="0 -8 60 28" className="w-full" style={{ height: 22, overflow: "visible" }}>
          <path
            d={option.curve}
            stroke={isActive ? "black" : "white"}
            strokeWidth={1.5}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle ref={dotRef} r={2.5} opacity={0} fill={isActive ? "black" : "white"} />
        </svg>
      ) : null}
    </button>
  );
}

function EasingGrid({
  param: p,
  value,
  dotDuration,
  isFirst,
  onParamChange,
}: {
  param: AnimationParam;
  value: number;
  dotDuration: number;
  isFirst: boolean;
  onParamChange: (key: string, value: number) => void;
}) {
  const activeOption = p.options?.[Math.round(value)];

  return (
    <div className={isFirst ? "controls-sidebar__easing-row" : "controls-sidebar__easing-row"}>
      <div className="controls-sidebar__slider-head">
        <span className="controls-sidebar__slider-label">{p.label}</span>
        {activeOption ? (
          <span className="font-[family-name:var(--font-mono)] text-[11px] text-white/40">
            {activeOption.value}
          </span>
        ) : null}
      </div>
      <div className="controls-sidebar__easing-grid" role="group" aria-label={p.label}>
        {(p.options ?? []).map((opt, i) => (
          <EasingCard
            key={opt.value}
            option={opt}
            isActive={Math.round(value) === i}
            dotDuration={dotDuration}
            onSelect={() => onParamChange(p.key, i)}
          />
        ))}
      </div>
    </div>
  );
}

export function ControlsSidebar({
  className,
  animation,
  module,
  state,
  onParamChange,
  onPlatformChange,
  onReset,
}: ControlsSidebarProps) {
  const [lastChangedKey, setLastChangedKey] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const code = codeRef.current;
    const scroll = scrollRef.current;
    if (!code || !scroll) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsCodeVisible(entry.isIntersecting),
      { root: scroll, threshold: 0.5 },
    );
    observer.observe(code);
    return () => observer.disconnect();
  }, []);

  function handleParamChange(key: string, value: number) {
    clearTimeout(timerRef.current);
    setLastChangedKey(key);
    timerRef.current = setTimeout(() => setLastChangedKey(null), 1500);
    onParamChange(key, value);
  }

  function handleSeeCode() {
    codeRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function handleCopyCode() {
    const raw = module.getRawSnippet(state);
    const done = () => {
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 1700);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(raw).then(done).catch(done);
    } else {
      done();
    }
  }

  const highlightedCode = module.getHighlightedSnippet(state, lastChangedKey);
  const ctaLabel =
    copyState === "copied"
      ? "Copied"
      : isCodeVisible
        ? "Copy the code"
        : "See the code";

  return (
    <aside
      className={["controls-sidebar", className].filter(Boolean).join(" ")}
      aria-label="Animation controls"
    >
      <div className="controls-sidebar__panel">
        <div className="controls-sidebar__header">
          <span className="controls-sidebar__title">Controls</span>
          <button type="button" className="controls-sidebar__reset" onClick={onReset}>
            <ResetIcon />
            Reset
          </button>
        </div>

        <div className="controls-sidebar__platform">
          <PlatformToggle
            frameworks={animation.platforms ?? animation.frameworks}
            platform={state.platform}
            onPlatformChange={onPlatformChange}
          />
        </div>

        <div
          ref={scrollRef}
          className="controls-sidebar__scroll"
        >
          {animation.params.length > 0 ? (
            <div className="controls-sidebar__params">
              {animation.params.map((p, i) =>
                p.type === "enum" ? (
                  <EasingGrid
                    key={p.key}
                    param={p}
                    value={state.params[p.key] ?? p.defaultValue}
                    dotDuration={
                      typeof state.params.duration === "number"
                        ? state.params.duration
                        : 0.8
                    }
                    isFirst={i === 0}
                    onParamChange={handleParamChange}
                  />
                ) : (
                  <SliderRow
                    key={p.key}
                    param={p}
                    value={state.params[p.key] ?? p.defaultValue}
                    isFirst={i === 0}
                    onParamChange={handleParamChange}
                  />
                ),
              )}
            </div>
          ) : null}

          <div ref={codeRef} className="controls-sidebar__code">
            <span className="controls-sidebar__code-label">Code</span>
            <pre
              className="controls-sidebar__pre"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
            <p className="controls-sidebar__install">
              {state.platform === "web" ? "npm i @owow/atlas" : "npm i @owow/atlas-native"}
            </p>
          </div>
        </div>

        <div className="controls-sidebar__footer">
          <p className="controls-sidebar__live" aria-live="polite" aria-atomic="true">
            {copyState === "copied" ? "Code copied to clipboard" : ""}
          </p>
          <button
            type="button"
            onClick={isCodeVisible ? handleCopyCode : handleSeeCode}
            className={[
              "controls-sidebar__cta",
              copyState === "copied" ? "controls-sidebar__cta--copied" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {copyState === "copied" ? <CheckIcon /> : <CopyIcon />}
            {ctaLabel}
          </button>
        </div>
      </div>
    </aside>
  );
}
