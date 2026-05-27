"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { DemoShell } from "@/src/animations/shared/DemoShell";
import type { DemoProps } from "@/src/animations/types";

import { CURSOR_TRAIL_ICONS } from "./icons";
import "./demo.css";

export function Demo({ platform, params, embedded }: DemoProps) {
  const minDistance = params.minDistance ?? 14;
  const maxParticles = params.maxParticles ?? 48;
  const particleSizeMin = params.particleSizeMin ?? 36;
  const particleSizeMax = params.particleSizeMax ?? 52;
  const durationMin = params.durationMin ?? 0.65;
  const durationMax = params.durationMax ?? 1.05;

  const rootRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const iconIndexRef = useRef(0);
  const lastPointRef = useRef({ x: -9999, y: -9999 });
  const activeCountRef = useRef(0);

  const paramsRef = useRef({
    minDistance,
    maxParticles,
    particleSizeMin,
    particleSizeMax,
    durationMin,
    durationMax,
  });

  paramsRef.current = {
    minDistance,
    maxParticles,
    particleSizeMin,
    particleSizeMax,
    durationMin,
    durationMax,
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    const layer = layerRef.current;
    if (!root || !layer) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) return undefined;

    const spawn = (x: number, y: number) => {
      const {
        maxParticles: max,
        particleSizeMin: sizeMin,
        particleSizeMax: sizeMax,
        durationMin: fadeMin,
        durationMax: fadeMax,
      } = paramsRef.current;

      if (activeCountRef.current >= max) return;

      const icon =
        CURSOR_TRAIL_ICONS[iconIndexRef.current % CURSOR_TRAIL_ICONS.length];
      iconIndexRef.current += 1;

      const particle = document.createElement("span");
      particle.className = "cursor-trail-demo__particle";
      particle.setAttribute("data-icon", icon.id);

      const img = document.createElement("img");
      img.className = "cursor-trail-demo__img";
      img.src = icon.src;
      img.alt = "";
      img.draggable = false;
      particle.appendChild(img);

      const size = gsap.utils.random(sizeMin, sizeMax);
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      layer.appendChild(particle);
      activeCountRef.current += 1;

      const driftX = gsap.utils.random(-28, 28);
      const driftY = gsap.utils.random(-36, -8);
      const rotation = gsap.utils.random(-40, 40);

      gsap.fromTo(
        particle,
        {
          x: 0,
          y: 0,
          scale: 0.35,
          opacity: 0.95,
          rotation: rotation * 0.4,
        },
        {
          x: driftX,
          y: driftY,
          scale: gsap.utils.random(0.85, 1.15),
          opacity: 0,
          rotation,
          duration: gsap.utils.random(fadeMin, fadeMax),
          ease: "power2.out",
          onComplete: () => {
            particle.remove();
            activeCountRef.current -= 1;
          },
        },
      );
    };

    const setPoint = (clientX: number, clientY: number) => {
      const rect = root.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const last = lastPointRef.current;
      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.hypot(dx, dy);

      if (dist < paramsRef.current.minDistance) return;

      lastPointRef.current = { x, y };
      spawn(x, y);
    };

    const onPointerMove = (event: PointerEvent) => {
      setPoint(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) setPoint(touch.clientX, touch.clientY);
    };

    const onPointerLeave = () => {
      lastPointRef.current = { x: -9999, y: -9999 };
    };

    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", onPointerLeave);
    root.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
      root.removeEventListener("touchmove", onTouchMove);
      layer.replaceChildren();
      activeCountRef.current = 0;
    };
  }, [
    minDistance,
    maxParticles,
    particleSizeMin,
    particleSizeMax,
    durationMin,
    durationMax,
  ]);

  const stageContent = (
    <>
      <div ref={layerRef} className="cursor-trail-demo__layer" aria-hidden />
      <p className="cursor-trail-demo__hint">Move your cursor</p>
      <div className="cursor-trail-demo__legend" aria-hidden>
        {CURSOR_TRAIL_ICONS.map((icon) => (
          <img
            key={icon.id}
            className="cursor-trail-demo__legend-img"
            src={icon.src}
            alt=""
            draggable={false}
          />
        ))}
      </div>
    </>
  );

  if (embedded) {
    return (
      <div
        ref={rootRef}
        className="cursor-trail-demo cursor-trail-demo--embedded"
        aria-label="Cursor trail demo — move pointer to draw icons"
      >
        {stageContent}
      </div>
    );
  }

  return (
    <DemoShell
      platform={platform}
      engineLabel="Web · React + GSAP"
      footerTags={["cursor · trail", "icon particles"]}
      stageRef={rootRef}
    >
      <div
        className="cursor-trail-demo"
        aria-label="Cursor trail demo — move pointer to draw icons"
      >
        {stageContent}
      </div>
    </DemoShell>
  );
}
