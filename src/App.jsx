import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./App.css";
import dropstoreBrandImage from "./assets/dropstore-brand-6-2561x1441.webp";
import steelCardsImage from "./assets/steel-cards-1400x1120.webp";
import verIdCardsImage from "./assets/ver-id-cards-1400x1120.webp";
import websitesWebshopsImage from "./assets/Websites & Webshops-992x744.webp";
import bruEngineeringImage from "./assets/bru - engineering-2848x1620.webp";
import circlImage from "./assets/Frame 2075803105-1400x1400.jpeg";

/** Portfolio-style rows — Tutorial 030 list + vertical image strip scroll. */
const PROJECTS = [
  {
    id: "mwg",
    title: "The Dropstore",
    image: dropstoreBrandImage,
  },
  {
    id: "lid",
    title: "Duco",
    image: websitesWebshopsImage,
  },
  {
    id: "kara",
    title: "CIRCL",
    image: circlImage,
  },
  {
    id: "verid",
    title: "Ver.ID Platform",
    image: verIdCardsImage,
  },
  {
    id: "pink",
    title: "Bru",
    image: bruEngineeringImage,
  },
  {
    id: "sound",
    title: "Steel solution",
    image: steelCardsImage,
  },
];

export default function App() {
  const stageRef = useRef(null);
  const shellRef = useRef(null);
  const mediaMoveRef = useRef(null);
  const stripRef = useRef(null);
  const maskRef = useRef(null);
  const yToRef = useRef(null);
  const reducedMotion = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [maskH, setMaskH] = useState(200);
  const [previewVisible, setPreviewVisible] = useState(false);
  const previewRegionId = useId();

  const active = PROJECTS[activeIndex] ?? PROJECTS[0];

  useLayoutEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useLayoutEffect(() => {
    const media = mediaMoveRef.current;
    if (!media) return undefined;
    const dur = reducedMotion.current ? 0.01 : 0.5;
    yToRef.current = gsap.quickTo(media, "y", {
      duration: dur,
      ease: "power3.out",
    });
    return () => {
      yToRef.current = null;
    };
  }, []);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(() => {
      setMaskH(mask.offsetHeight);
    });
    ro.observe(mask);
    setMaskH(mask.offsetHeight);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || !maskH) return undefined;
    gsap.to(strip, {
      y: -activeIndex * maskH,
      duration: reducedMotion.current ? 0 : 0.72,
      ease: "power2.inOut",
      overwrite: true,
    });
  }, [activeIndex, maskH]);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    if (shell) gsap.set(shell, { autoAlpha: 0 });
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;
    gsap.to(shell, {
      autoAlpha: previewVisible ? 1 : 0,
      duration: reducedMotion.current ? 0 : 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  }, [previewVisible]);

  const clampMediaY = (clientY) => {
    const stage = stageRef.current;
    const shell = shellRef.current;
    if (!stage || !shell) return 0;
    const sr = stage.getBoundingClientRect();
    const h = shell.offsetHeight || 1;
    const local = clientY - sr.top - h / 2;
    return Math.max(0, Math.min(local, sr.height - h));
  };

  const onStagePointerMove = (e) => {
    if (!window.matchMedia("(min-width: 721px)").matches) {
      yToRef.current?.(0);
      return;
    }
    yToRef.current?.(clampMediaY(e.clientY));
  };

  const onRowEnter = (index) => {
    setActiveIndex(index);
    setPreviewVisible(true);
  };

  const onStageLeave = () => {
    setPreviewVisible(false);
  };

  return (
    <div className="mwg030">
      <div
        ref={stageRef}
        className="mwg030__stage"
        onPointerMove={onStagePointerMove}
        onPointerLeave={onStageLeave}
      >
        <ul className="mwg030__list" aria-label="Selected work">
          {PROJECTS.map((item, index) => {
            const isActive = index === activeIndex && previewVisible;
            return (
              <li key={item.id} className="mwg030__item">
                <button
                  type="button"
                  className="mwg030__row"
                  data-active={isActive ? "true" : "false"}
                  aria-current={isActive ? "true" : undefined}
                  aria-controls={previewRegionId}
                  onPointerEnter={() => onRowEnter(index)}
                  onFocus={() => onRowEnter(index)}
                >
                  <span className="mwg030__title">{item.title}</span>
                  <span className="mwg030__cta" aria-hidden={!isActive}>
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
          className="mwg030__media-shell"
          role="region"
          aria-live="polite"
          aria-label={`Preview: ${active.title}`}
        >
          <div ref={mediaMoveRef} className="mwg030__media-move">
            <div ref={maskRef} className="mwg030__mask">
              <div ref={stripRef} className="mwg030__strip">
                {PROJECTS.map((item) => (
                  <div
                    key={item.id}
                    className="mwg030__slot"
                    style={{ height: maskH ? `${maskH}px` : undefined }}
                  >
                    <img
                      className="mwg030__img"
                      src={item.image}
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

      <div className="mwg030__medias-hidden" aria-hidden="true">
        {PROJECTS.map((item) => (
          <img key={`preload-${item.id}`} src={item.image} alt="" loading="eager" />
        ))}
      </div>
    </div>
  );
}
