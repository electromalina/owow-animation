import { useLayoutEffect, useRef } from "react";
import "./ParticleTextDemo.css";

const CONFIG = {
  text: "Motion",
  theme: "gold",
  chaos: 3.1,
  ambientBrownian: 3.0,
  repulsionStrength: 9,
  radius: 200,
  elasticity: 0.03,
  damping: 0.81,
  densityGap: 5,
  particleSize: 2.3,
};

function getParticleColor(theme, px, py, width, height) {
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

export function ParticleTextDemo({ text = CONFIG.text }) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return undefined;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return undefined;

    const mouse = {
      x: null,
      y: null,
      radius: CONFIG.radius,
    };

    let particles = [];
    let animationId = null;
    let width = 0;
    let height = 0;

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.homeX = x;
        this.homeY = y;
        this.vx = 0;
        this.vy = 0;
        this.color = color;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, CONFIG.particleSize, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        let forceX = (this.homeX - this.x) * CONFIG.elasticity;
        let forceY = (this.homeY - this.y) * CONFIG.elasticity;

        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - this.x;
          const mdy = mouse.y - this.y;
          const distance = Math.sqrt(mdx * mdx + mdy * mdy);

          if (distance < mouse.radius) {
            const ratio = (mouse.radius - distance) / mouse.radius;
            const baseAngle = Math.atan2(mdy, mdx);
            const angleScatter = (Math.random() - 0.5) * CONFIG.chaos * 0.8;
            const pushAngle = baseAngle + angleScatter;
            const pushStrength =
              CONFIG.repulsionStrength *
              (0.3 + CONFIG.chaos * 0.7) *
              0.05 *
              ratio;

            forceX -= Math.cos(pushAngle) * pushStrength;
            forceY -= Math.sin(pushAngle) * pushStrength;
          }
        }

        if (CONFIG.ambientBrownian > 0) {
          forceX += (Math.random() - 0.5) * CONFIG.ambientBrownian * 0.08;
          forceY += (Math.random() - 0.5) * CONFIG.ambientBrownian * 0.08;
        }

        this.vx += forceX;
        this.vy += forceY;
        this.vx *= CONFIG.damping;
        this.vy *= CONFIG.damping;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const setPointer = (clientX, clientY) => {
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
      ctx.fillText(text, width / 2, height / 2);

      const textPixels = ctx.getImageData(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);

      const { data } = textPixels;
      const w = textPixels.width;
      const h = textPixels.height;
      const step = CONFIG.densityGap;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const alpha = data[(y * w + x) * 4 + 3];
          if (alpha > 120) {
            particles.push(
              new Particle(
                x,
                y,
                getParticleColor(CONFIG.theme, x, y, width, height)
              )
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
        particles[i].update();
        particles[i].draw();
      }

      animationId = requestAnimationFrame(animate);
    };

    const onClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = width / rect.width;
      const scaleY = height / rect.height;
      const clickX = (event.clientX - rect.left) * scaleX;
      const clickY = (event.clientY - rect.top) * scaleY;

      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 1);

        if (distance < mouse.radius * 1.5) {
          const force = (mouse.radius * 1.5 - distance) * 0.08;
          const scatterAngle = Math.atan2(dy, dx) + (Math.random() - 0.5);
          p.vx += Math.cos(scatterAngle) * force;
          p.vy += Math.sin(scatterAngle) * force;
        }
      });
    };

    resize();

    if (prefersReduced) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => p.draw());
    } else {
      animate();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);

    const onPointerMove = (event) => setPointer(event.clientX, event.clientY);
    const onPointerLeave = () => clearPointer();
    const onTouchStart = (event) => {
      if (event.touches[0]) {
        setPointer(event.touches[0].clientX, event.touches[0].clientY);
      }
    };
    const onTouchMove = (event) => {
      if (event.touches[0]) {
        setPointer(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("click", onClick);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", clearPointer);

    return () => {
      if (animationId !== null) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", clearPointer);
    };
  }, [text]);

  return (
    <div ref={rootRef} className="particle-text-demo">
      <canvas ref={canvasRef} className="particle-text-demo__canvas" aria-hidden />
    </div>
  );
}
