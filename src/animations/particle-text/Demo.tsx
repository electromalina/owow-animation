"use client";

import { useLayoutEffect, useRef } from "react";

import { DemoShell } from "@/src/animations/shared/DemoShell";
import type { DemoProps } from "@/src/animations/types";

import "./demo.css";

const BASE = {
  text: "Motion",
  theme: "white" as const,
  ambientBrownian: 3.0,
  elasticity: 0.03,
  damping: 0.81,
  densityGap: 5,
  particleSize: 2.3,
};

function getParticleColor(
  theme: string,
  px: number,
  py: number,
  width: number,
  height: number,
) {
  if (theme === "neon") {
    const ratio = px / width;
    return `hsl(${180 + ratio * 40}, 100%, 65%)`;
  }
  if (theme === "gold") {
    const ratio = px / width;
    return `hsl(${36 + ratio * 14}, 95%, ${50 + Math.sin(py * 0.02) * 8}%)`;
  }
  if (theme === "cosmic") {
    const ratio = (px + py) / (width + height);
    return `hsl(${320 + ratio * 50}, 95%, 60%)`;
  }
  return "#ffffff";
}

class Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx = 0;
  vy = 0;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.homeX = x;
    this.homeY = y;
    this.color = color;
  }
}

export function Demo({ platform, params, embedded }: DemoProps) {
  const chaos = params.chaos ?? 3.1;
  const repulsionStrength = params.repulsionStrength ?? 9;
  const radius = params.radius ?? 200;

  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const configRef = useRef({ chaos, repulsionStrength, radius });

  useLayoutEffect(() => {
    configRef.current = { chaos, repulsionStrength, radius };
  }, [chaos, repulsionStrength, radius]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return undefined;

    const mouse = { x: null as number | null, y: null as number | null };
    let particles: Particle[] = [];
    let animationId: number | null = null;
    let width = 0;
    let height = 0;

    const drawParticle = (p: Particle) => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, BASE.particleSize, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateParticle = (p: Particle) => {
      const cfg = configRef.current;
      let forceX = (p.homeX - p.x) * BASE.elasticity;
      let forceY = (p.homeY - p.y) * BASE.elasticity;

      if (mouse.x !== null && mouse.y !== null) {
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const distance = Math.sqrt(mdx * mdx + mdy * mdy);

        if (distance < cfg.radius) {
          const ratio = (cfg.radius - distance) / cfg.radius;
          const baseAngle = Math.atan2(mdy, mdx);
          const angleScatter = (Math.random() - 0.5) * cfg.chaos * 0.8;
          const pushAngle = baseAngle + angleScatter;
          const pushStrength =
            cfg.repulsionStrength * (0.3 + cfg.chaos * 0.7) * 0.05 * ratio;

          forceX -= Math.cos(pushAngle) * pushStrength;
          forceY -= Math.sin(pushAngle) * pushStrength;
        }
      }

      if (BASE.ambientBrownian > 0) {
        forceX += (Math.random() - 0.5) * BASE.ambientBrownian * 0.08;
        forceY += (Math.random() - 0.5) * BASE.ambientBrownian * 0.08;
      }

      p.vx += forceX;
      p.vy += forceY;
      p.vx *= BASE.damping;
      p.vy *= BASE.damping;
      p.x += p.vx;
      p.y += p.vy;
    };

    const setPointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      mouse.x = (clientX - rect.left) * scaleX;
      mouse.y = (clientY - rect.top) * scaleY;
    };

    const clearPointer = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const initParticles = () => {
      if (width <= 0 || height <= 0) return;

      particles = [];

      const baseSize = Math.min(width * 0.38, height * 0.58, 120);
      ctx.fillStyle = "#ffffff";
      ctx.font = `bold ${baseSize}px Arial, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.clearRect(0, 0, width, height);
      ctx.fillText(BASE.text, width / 2, height / 2);

      const textPixels = ctx.getImageData(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);

      const { data } = textPixels;
      const w = textPixels.width;
      const h = textPixels.height;
      const step = BASE.densityGap;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const alpha = data[(y * w + x) * 4 + 3];
          if (alpha > 120) {
            particles.push(
              new Particle(
                x,
                y,
                getParticleColor(BASE.theme, x, y, width, height),
              ),
            );
          }
        }
      }
    };

    const resize = () => {
      const nextWidth = Math.max(1, Math.floor(root.clientWidth));
      const nextHeight = Math.max(1, Math.floor(root.clientHeight));
      if (nextWidth === width && nextHeight === height) return;

      width = nextWidth;
      height = nextHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        updateParticle(particles[i]);
        drawParticle(particles[i]);
      }

      animationId = requestAnimationFrame(animate);
    };

    const onClick = (event: MouseEvent) => {
      const cfg = configRef.current;
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      const clickX = (event.clientX - rect.left) * scaleX;
      const clickY = (event.clientY - rect.top) * scaleY;

      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);

        if (distance < cfg.radius * 1.5) {
          const force = (cfg.radius * 1.5 - distance) * 0.08;
          const scatterAngle = Math.atan2(dy, dx) + (Math.random() - 0.5);
          p.vx += Math.cos(scatterAngle) * force;
          p.vy += Math.sin(scatterAngle) * force;
        }
      });
    };

    resize();

    if (prefersReduced) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => drawParticle(p));
    } else {
      animate();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);

    const onPointerMove = (event: PointerEvent) =>
      setPointer(event.clientX, event.clientY);
    const onTouchStart = (event: TouchEvent) => {
      if (event.touches[0]) {
        setPointer(event.touches[0].clientX, event.touches[0].clientY);
      }
    };
    const onTouchMove = (event: TouchEvent) => {
      if (event.touches[0]) {
        setPointer(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", clearPointer);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", clearPointer);

    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", clearPointer);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", clearPointer);
    };
  }, [chaos, repulsionStrength, radius]);

  const canvas = (
    <canvas
      ref={canvasRef}
      className="particle-text-demo__canvas"
      aria-hidden
    />
  );

  if (embedded) {
    return (
      <div
        ref={rootRef}
        className="particle-text-demo particle-text-demo--embedded"
      >
        {canvas}
      </div>
    );
  }

  return (
    <DemoShell
      platform={platform}
      engineLabel={
        platform === "mobile" ? "Mobile · React Native" : "Web · React + Canvas"
      }
      footerTags={["canvas · particles", "pointer repulsion"]}
      stageRef={rootRef}
    >
      {canvas}
    </DemoShell>
  );
}
