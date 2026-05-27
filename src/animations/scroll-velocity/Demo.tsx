"use client";

import { useId, useLayoutEffect, useMemo, useRef, useState } from "react";

import { DemoShell } from "@/src/animations/shared/DemoShell";
import type { DemoProps } from "@/src/animations/types";

import "./demo.css";

const ROWS = ["Scroll down", "Watch it move", "Stay in sync"];
const LOOP_COPIES = 4;

const clamp = (min: number, max: number, value: number) =>
  Math.min(max, Math.max(min, value));

export function Demo({ platform, params, embedded }: DemoProps) {
  const speed = params.speed ?? 0.7;
  const WHEEL_ACCEL = 0.24 * speed;
  const FRICTION = 0.935;
  const MAX_VELOCITY = 26 * speed;
  const IMMEDIATE_SCROLL = 0.35 * speed;
  const STOP_THRESHOLD = 0.04;
  const MAX_VERTICAL_BLUR = 38;
  const BLUR_LERP = 0.22;

  const filterId = useId().replace(/:/g, "");
  const viewportRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const blurNodeRef = useRef<SVGFEGaussianBlurElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hintVisible, setHintVisible] = useState(true);

  const items = useMemo(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copy) =>
        ROWS.map((label) => ({ id: `${copy}-${label}`, label })),
      ).flat(),
    [],
  );

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const strip = stripRef.current;
    const progress = progressRef.current;
    const blurNode = blurNodeRef.current;
    const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!viewport || !strip || !progress || !blurNode || !rows.length) {
      return undefined;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let loopHeight = 0;
    let rowHeight = 0;
    let rowStep = 0;
    let stripPaddingTop = 0;
    let displayBlurY = 0;

    const measure = () => {
      if (viewport.clientHeight <= 0) return false;

      const firstRow = rows[0];
      if (!firstRow) return false;

      rowHeight = firstRow.offsetHeight;
      rowStep = rowHeight + 14;
      stripPaddingTop = Math.max(
        0,
        viewport.clientHeight * 0.5 - rowHeight * 0.5,
      );
      loopHeight = rowStep * ROWS.length;
      strip.style.paddingTop = `${stripPaddingTop}px`;
      strip.style.height = `${loopHeight * LOOP_COPIES + stripPaddingTop + 16}px`;
      return loopHeight > 0;
    };

    const state = {
      offset: 0,
      velocity: 0,
    };

    const ensureMeasured = () => {
      const prevLoopHeight = loopHeight;
      if (!measure()) return false;
      if (prevLoopHeight <= 0) {
        state.offset = loopHeight;
      }
      return true;
    };

    ensureMeasured();

    const applyTransform = (stretch = 1) => {
      if (loopHeight <= 0) return;

      while (state.offset >= loopHeight) state.offset -= loopHeight;
      while (state.offset < 0) state.offset += loopHeight;

      strip.style.transform = `translate3d(0, ${-state.offset}px, 0) scaleY(${stretch.toFixed(4)})`;
    };

    const updateVelocityMeter = () => {
      const meterSpeed = clamp(0, 1, Math.abs(state.velocity) / MAX_VELOCITY);
      progress.style.transform = `scaleX(${meterSpeed})`;
    };

    const updateMotionBlur = () => {
      const targetBlurY = clamp(
        0,
        MAX_VERTICAL_BLUR,
        Math.abs(state.velocity) * 1.55,
      );
      displayBlurY += (targetBlurY - displayBlurY) * BLUR_LERP;

      if (displayBlurY > 0.2) {
        const blurX = displayBlurY * 0.06;
        blurNode.setAttribute(
          "stdDeviation",
          `${blurX.toFixed(2)} ${displayBlurY.toFixed(2)}`,
        );
        strip.style.filter = `url(#${filterId})`;
        const stretch = 1 + displayBlurY * 0.028;
        applyTransform(stretch);
      } else {
        displayBlurY = 0;
        blurNode.setAttribute("stdDeviation", "0 0");
        strip.style.filter = "none";
        applyTransform(1);
      }
    };

    const updateRowFocus = () => {
      const viewportHeight = viewport.clientHeight;
      const center = viewportHeight * 0.5;

      rows.forEach((row, index) => {
        const rowCenter =
          stripPaddingTop + index * rowStep + rowHeight * 0.5 - state.offset;
        const distance = Math.abs(rowCenter - center);
        const focus = clamp(0.22, 1, 1 - distance / (viewportHeight * 0.55));
        row.style.opacity = String(focus);
      });
    };

    const render = () => {
      updateMotionBlur();
      updateVelocityMeter();
      updateRowFocus();
    };

    if (prefersReduced) {
      progress.style.transform = "scaleX(0)";
      strip.style.filter = "none";
      applyTransform(1);
      rows.forEach((row) => {
        row.style.opacity = "1";
      });
      return undefined;
    }

    render();

    let rafId = 0;

    const tick = () => {
      const moving = Math.abs(state.velocity) > STOP_THRESHOLD;

      if (moving) {
        state.offset += state.velocity;
        state.velocity *= FRICTION;
        render();
      } else {
        if (state.velocity !== 0) state.velocity = 0;
        if (displayBlurY > 0.2) {
          displayBlurY += (0 - displayBlurY) * BLUR_LERP;
          updateMotionBlur();
          updateRowFocus();
        }
        updateVelocityMeter();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (!ensureMeasured()) return;

      setHintVisible(false);

      state.velocity += event.deltaY * WHEEL_ACCEL;
      state.velocity = clamp(-MAX_VELOCITY, MAX_VELOCITY, state.velocity);
      state.offset += event.deltaY * IMMEDIATE_SCROLL;
      render();
    };

    const onResize = () => {
      ensureMeasured();
      render();
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(onResize)
        : null;
    resizeObserver?.observe(viewport);

    return () => {
      cancelAnimationFrame(rafId);
      viewport.removeEventListener("wheel", onWheel);
      resizeObserver?.disconnect();
      strip.style.transform = "";
      strip.style.filter = "";
      strip.style.paddingTop = "";
      progress.style.transform = "";
      blurNode.setAttribute("stdDeviation", "0 0");
      rows.forEach((row) => {
        row.style.opacity = "";
      });
    };
  }, [
    filterId,
    items.length,
    speed,
    WHEEL_ACCEL,
    MAX_VELOCITY,
    IMMEDIATE_SCROLL,
  ]);

  const content = (
    <div
      className={`featured-scroll-demo${embedded ? " featured-scroll-demo--embedded" : ""}`}
    >
      <svg className="featured-scroll-demo__filters" aria-hidden focusable="false">
        <defs>
          <filter
            id={filterId}
            x="-120%"
            y="-120%"
            width="340%"
            height="340%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              ref={blurNodeRef}
              in="SourceGraphic"
              stdDeviation="0 0"
            />
          </filter>
        </defs>
      </svg>

      <div className="featured-scroll-demo__hud">
        <span className="featured-scroll-demo__hud-label">Velocity</span>
        <div className="featured-scroll-demo__track" aria-hidden>
          <div ref={progressRef} className="featured-scroll-demo__progress" />
        </div>
      </div>

      <div
        ref={viewportRef}
        className="featured-scroll-demo__viewport"
        tabIndex={0}
        role="region"
        aria-label="Scroll Velocity interactive preview — scroll inside to explore momentum"
      >
        <div ref={stripRef} className="featured-scroll-demo__strip">
          {items.map((item, index) => (
            <div
              key={item.id}
              ref={(node) => {
                rowRefs.current[index] = node;
              }}
              className="featured-scroll-demo__row"
            >
              <span className="featured-scroll-demo__row-dot" aria-hidden />
              <span className="featured-scroll-demo__row-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p
        className={`featured-scroll-demo__hint${hintVisible ? "" : " featured-scroll-demo__hint--hidden"}`}
        aria-hidden
      >
        Scroll inside
      </p>
    </div>
  );

  if (embedded) return content;

  return (
    <DemoShell
      platform={platform}
      footerTags={["scroll · velocity", "motion blur"]}
    >
      {content}
    </DemoShell>
  );
}
