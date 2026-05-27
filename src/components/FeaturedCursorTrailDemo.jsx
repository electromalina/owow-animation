import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { UNION_TRAIL_ICONS } from "../data/unionTrailIcons.js";
import "./FeaturedCursorTrailDemo.css";

const MIN_DISTANCE = 14;
const MAX_PARTICLES = 48;
const PARTICLE_SIZE_MIN = 36;
const PARTICLE_SIZE_MAX = 52;

export function FeaturedCursorTrailDemo() {
  const rootRef = useRef(null);
  const layerRef = useRef(null);
  const iconIndexRef = useRef(0);
  const lastPointRef = useRef({ x: -9999, y: -9999 });
  const activeCountRef = useRef(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const layer = layerRef.current;
    if (!root || !layer) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return undefined;

    const spawn = (x, y) => {
      if (activeCountRef.current >= MAX_PARTICLES) return;

      const icon =
        UNION_TRAIL_ICONS[iconIndexRef.current % UNION_TRAIL_ICONS.length];
      iconIndexRef.current += 1;

      const particle = document.createElement("span");
      particle.className = "featured-cursor-trail__particle";
      particle.setAttribute("data-icon", icon.id);

      const img = document.createElement("img");
      img.className = "featured-cursor-trail__img";
      img.src = icon.src;
      img.alt = "";
      img.draggable = false;
      particle.appendChild(img);

      const size = gsap.utils.random(PARTICLE_SIZE_MIN, PARTICLE_SIZE_MAX);
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
          duration: gsap.utils.random(0.65, 1.05),
          ease: "power2.out",
          onComplete: () => {
            particle.remove();
            activeCountRef.current -= 1;
          },
        }
      );
    };

    const setPoint = (clientX, clientY) => {
      const rect = root.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const last = lastPointRef.current;
      const dx = x - last.x;
      const dy = y - last.y;
      const dist = Math.hypot(dx, dy);

      if (dist < MIN_DISTANCE) return;

      lastPointRef.current = { x, y };
      spawn(x, y);
    };

    const onPointerMove = (event) => {
      setPoint(event.clientX, event.clientY);
    };

    const onTouchMove = (event) => {
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
  }, []);

  return (
    <div
      ref={rootRef}
      className="featured-cursor-trail"
      aria-label="Cursor trail demo — move pointer to draw Union icons"
    >
      <div ref={layerRef} className="featured-cursor-trail__layer" aria-hidden />
      <p className="featured-cursor-trail__hint">Move your cursor</p>
      <div className="featured-cursor-trail__legend" aria-hidden>
        {UNION_TRAIL_ICONS.map((icon) => (
          <img
            key={icon.id}
            className="featured-cursor-trail__legend-img"
            src={icon.src}
            alt=""
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
