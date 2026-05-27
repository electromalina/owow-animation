"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import { DemoShell } from "@/src/animations/shared/DemoShell";
import type { DemoProps } from "@/src/animations/types";

import { controlSchema } from "./controls";
import "./demo.css";

type Project = { id: string; title: string; image: string };

const PROJECTS: Project[] = [
  {
    id: "mwg",
    title: "The Dropstore",
    image: "/animations/hover-preview-strip/assets/dropstore-brand-6-2561x1441.webp",
  },
  {
    id: "lid",
    title: "Duco",
    image: "/animations/hover-preview-strip/assets/Websites & Webshops-992x744.webp",
  },
  {
    id: "kara",
    title: "CIRCL",
    image: "/animations/hover-preview-strip/assets/Frame 2075803105-1400x1400.jpeg",
  },
  {
    id: "verid",
    title: "Ver.ID Platform",
    image: "/animations/hover-preview-strip/assets/ver-id-cards-1400x1120.webp",
  },
  {
    id: "pink",
    title: "Bru",
    image: "/animations/hover-preview-strip/assets/bru - engineering-2848x1620.webp",
  },
  {
    id: "sound",
    title: "Steel solution",
    image: "/animations/hover-preview-strip/assets/steel-cards-1400x1120.webp",
  },
];

export function Demo({ platform, params, embedded }: DemoProps) {
  const followDuration = params.followDuration ?? controlSchema[0].defaultValue;
  const stripDuration = params.stripDuration ?? controlSchema[1].defaultValue;
  const fadeDuration = params.fadeDuration ?? controlSchema[2].defaultValue;

  const stageRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const mediaMoveRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const yToRef = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const reducedMotion = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [maskH, setMaskH] = useState(200);
  const [previewVisible, setPreviewVisible] = useState(false);
  const previewRegionId = useId();

  useLayoutEffect(() => {
    reducedMotion.current =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useLayoutEffect(() => {
    const media = mediaMoveRef.current;
    if (!media) return undefined;
    const dur = reducedMotion.current ? 0.01 : followDuration;
    yToRef.current = gsap.quickTo(media, "y", {
      duration: dur,
      ease: "power3.out",
    });
    return () => {
      yToRef.current = null;
    };
  }, [followDuration]);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(() => setMaskH(mask.offsetHeight));
    ro.observe(mask);
    setMaskH(mask.offsetHeight);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || !maskH) return undefined;
    gsap.to(strip, {
      y: -activeIndex * maskH,
      duration: reducedMotion.current ? 0 : stripDuration,
      ease: "power2.inOut",
      overwrite: true,
    });
  }, [activeIndex, maskH, stripDuration]);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    if (shell) gsap.set(shell, { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;
    gsap.to(shell, {
      autoAlpha: previewVisible ? 1 : 0,
      duration: reducedMotion.current ? 0 : fadeDuration,
      ease: "power2.out",
      overwrite: true,
    });
  }, [previewVisible, fadeDuration]);

  const clampMediaY = (clientY: number) => {
    const stage = stageRef.current;
    const shell = shellRef.current;
    if (!stage || !shell) return 0;
    const sr = stage.getBoundingClientRect();
    const h = shell.offsetHeight || 1;
    const local = clientY - sr.top - h / 2;
    return Math.max(0, Math.min(local, sr.height - h));
  };

  const onStagePointerMove = (e: React.PointerEvent) => {
    if (!window.matchMedia("(min-width: 721px)").matches) {
      yToRef.current?.(0);
      return;
    }
    yToRef.current?.(clampMediaY(e.clientY));
  };

  const onRowEnter = (index: number) => {
    setActiveIndex(index);
    setPreviewVisible(true);
  };

  const onStageLeave = () => {
    setPreviewVisible(false);
  };

  const stage = (
    <div className={`hpv-demo${embedded ? " hpv-demo--embedded" : ""}`}>
      <div
        ref={stageRef}
        className="hpv-demo__stage"
        onPointerMove={onStagePointerMove}
        onPointerLeave={onStageLeave}
      >
        <ul className="hpv-demo__list" aria-label="Selected work">
          {PROJECTS.map((item, index) => {
            const isActive = index === activeIndex && previewVisible;
            return (
              <li key={item.id} className="hpv-demo__item">
                <button
                  type="button"
                  className="hpv-demo__row"
                  data-active={isActive ? "true" : "false"}
                  aria-current={isActive ? "true" : undefined}
                  aria-controls={previewRegionId}
                  onPointerEnter={() => onRowEnter(index)}
                  onFocus={() => onRowEnter(index)}
                >
                  <span className="hpv-demo__title">{item.title}</span>
                  <span className="hpv-demo__cta" aria-hidden={!isActive}>
                    See more
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div
          ref={shellRef}
          id={previewRegionId}
          className="hpv-demo__media-shell"
          role="region"
          aria-live="polite"
          aria-label={`Preview: ${PROJECTS[activeIndex]?.title ?? "Project"}`}
        >
          <div ref={mediaMoveRef} className="hpv-demo__media-move">
            <div ref={maskRef} className="hpv-demo__mask">
              <div ref={stripRef} className="hpv-demo__strip">
                {PROJECTS.map((p) => (
                  <div
                    key={p.id}
                    className="hpv-demo__slot"
                    style={{ height: maskH ? `${maskH}px` : undefined }}
                  >
                    <img
                      className="hpv-demo__img"
                      src={p.image}
                      alt=""
                      draggable={false}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hpv-demo__medias-hidden" aria-hidden="true">
        {PROJECTS.map((p) => (
          <img key={`preload-${p.id}`} src={p.image} alt="" loading="eager" />
        ))}
      </div>
    </div>
  );

  if (embedded) return stage;

  return (
    <DemoShell platform={platform} footerTags={["hover · preview", "masked strip"]}>
      {stage}
    </DemoShell>
  );
}

