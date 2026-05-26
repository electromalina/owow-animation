"use client";

import { useEffect, useRef } from "react";

type Props = {
  platform: "web" | "mobile";
  strength: number;
  radius: number;
  stiffness: number;
  damping: number;
};

export function PreviewCard({
  platform,
  strength,
  radius,
  stiffness,
  damping,
}: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  // Spring state in refs — mutated every RAF tick, never triggers re-renders
  const mx = useRef(-200);
  const my = useRef(-200);
  const rx = useRef(-200);
  const ry = useRef(-200);
  const rvx = useRef(0);
  const rvy = useRef(0);
  const dx = useRef(-200);
  const dy = useRef(-200);
  const inside = useRef(false);

  // Params ref so the RAF loop always reads latest values without re-running
  const paramsRef = useRef({ strength, radius, stiffness, damping });
  useEffect(() => {
    paramsRef.current = { strength, radius, stiffness, damping };
  }, [strength, radius, stiffness, damping]);

  useEffect(() => {
    const stage = stageRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const hint = hintRef.current;
    if (!stage || !dot || !ring) return;

    function resetTargets() {
      stage!.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        el.style.transform = el.dataset.base ?? "";
      });
    }

    function onPointerMove(e: PointerEvent) {
      const r = stage!.getBoundingClientRect();
      mx.current = e.clientX - r.left;
      my.current = e.clientY - r.top;
      inside.current = true;
      stage!.style.cursor = "none";
      if (hint) hint.style.opacity = "0";
    }

    function onPointerLeave() {
      inside.current = false;
      stage!.style.cursor = "";
      if (hint) hint.style.opacity = "";
      resetTargets();
    }

    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerleave", onPointerLeave);

    let rafId: number;

    function loop() {
      const p = paramsRef.current;
      const r = stage!.getBoundingClientRect();
      let tx = mx.current;
      let ty = my.current;

      if (inside.current) {
        stage!.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
          const b = el.getBoundingClientRect();
          const cx = b.left - r.left + b.width / 2;
          const cy = b.top - r.top + b.height / 2;
          const ddx = mx.current - cx;
          const ddy = my.current - cy;
          const dist = Math.hypot(ddx, ddy) || 0.0001;

          if (dist < p.radius) {
            const pull = (1 - dist / p.radius) * p.strength;
            tx += (cx - mx.current) * pull * 0.5;
            ty += (cy - my.current) * pull * 0.5;
            const kk = (1 - dist / p.radius) * p.strength * 0.35;
            const base = el.dataset.base ? el.dataset.base + " " : "";
            el.style.transform = base + `translate(${ddx * kk}px,${ddy * kk}px)`;
          } else {
            el.style.transform = el.dataset.base ?? "";
          }
        });
      }

      rvx.current += (tx - rx.current) * p.stiffness;
      rvy.current += (ty - ry.current) * p.stiffness;
      rvx.current *= 1 - p.damping;
      rvy.current *= 1 - p.damping;
      rx.current += rvx.current;
      ry.current += rvy.current;
      dx.current += (mx.current - dx.current) * 0.4;
      dy.current += (my.current - dy.current) * 0.4;

      ring!.style.transform = `translate3d(${rx.current - 28}px,${ry.current - 28}px,0)`;
      dot!.style.transform = `translate3d(${dx.current - 6}px,${dy.current - 6}px,0)`;

      rafId = requestAnimationFrame(loop);
    }

    rafId = requestAnimationFrame(loop);

    return () => {
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const isMobile = platform === "mobile";

  const gridBg = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
  };

  return (
    <div className="overflow-hidden rounded-lg border border-[#222] bg-[#181818]">
      {/* Top rail */}
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

      {/* Stage wrap */}
      <div
        className="relative w-full bg-[#111] transition-[max-width,margin,border-radius] duration-[450ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
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
        <div
          ref={stageRef}
          className="relative overflow-hidden"
          style={{
            aspectRatio: isMobile ? "9/16" : "16/10",
            ...(isMobile ? { borderRadius: 27 } : {}),
          }}
        >
          {/* Headline — not magnetic, just decorative */}
          <div
            className="pointer-events-none absolute left-1/2 w-4/5 -translate-x-1/2 select-none text-center font-medium leading-[1.05] tracking-[-0.03em] text-white"
            style={{
              top: isMobile ? "12%" : "18%",
              fontSize: isMobile ? 22 : 36,
            }}
          >
            Built to feel <span className="text-[#d0d2cc]">alive</span>
          </div>

          {/* CTA — magnetic */}
          <button
            data-magnetic=""
            data-base="translateX(-50%)"
            className="absolute left-1/2 flex cursor-none select-none items-center gap-2.5 rounded-full bg-white font-semibold tracking-[-0.005em] text-[#111]"
            style={{
              bottom: isMobile ? "14%" : "22%",
              transform: "translateX(-50%)",
              padding: isMobile ? "14px 24px" : "16px 28px",
              fontSize: isMobile ? 13 : 14,
            }}
          >
            Get started
          </button>

          {/* Orbit A — magnetic */}
          <div
            data-magnetic=""
            data-base=""
            className="absolute select-none rounded-full border border-[#222] bg-[#1b1b1b]"
            style={{
              top: isMobile ? "42%" : "48%",
              left: "18%",
              width: 56,
              height: 56,
            }}
          />

          {/* Orbit B — magnetic */}
          <div
            data-magnetic=""
            data-base=""
            className="absolute select-none rounded-full border border-[#222] bg-[#1b1b1b]"
            style={{
              top: isMobile ? "58%" : "52%",
              right: "18%",
              width: 40,
              height: 40,
            }}
          />

          {/* Cursor ring */}
          <div
            ref={ringRef}
            className="pointer-events-none absolute left-0 top-0 z-[4] h-14 w-14 rounded-full border border-white/45"
            style={{ transform: "translate3d(-100px,-100px,0)" }}
          />

          {/* Cursor dot */}
          <div
            ref={dotRef}
            className="pointer-events-none absolute left-0 top-0 z-[5] h-3 w-3 rounded-full bg-white"
            style={{ transform: "translate3d(-100px,-100px,0)" }}
          />

          {/* Hint */}
          <div
            ref={hintRef}
            className="pointer-events-none absolute inset-0 flex items-center justify-center font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-white/50 transition-opacity duration-[350ms]"
          >
            Move your pointer inside
          </div>
        </div>
      </div>

      {/* Bottom rail */}
      <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-white/70">
        <div className="flex items-center gap-[22px]">
          <span>transform · opacity</span>
          <span>·</span>
          <span>spring physics</span>
        </div>
        <span>60 fps</span>
      </div>
    </div>
  );
}
