import type { AnimationState } from "@/src/animations/types";

export function getRawSnippet(state: AnimationState): string {
  const strength = Number(state.params.strength ?? 0.42);
  const radius = Number(state.params.radius ?? 110);
  const textStrength = strength * 0.43;

  return [
    `"use client";`,
    ``,
    `import { useRef, useState } from "react";`,
    `import gsap from "gsap";`,
    `import { useGSAP } from "@gsap/react";`,
    ``,
    `gsap.registerPlugin(useGSAP);`,
    ``,
    `export function MagneticButtonDemo() {`,
    `  const strength = ${strength.toFixed(2)};`,
    `  const radius = ${radius.toFixed(0)};`,
    `  const TEXT_STRENGTH = ${textStrength.toFixed(3)};`,
    ``,
    `  const wrapRef = useRef<HTMLDivElement>(null);`,
    `  const motionRef = useRef<HTMLDivElement>(null);`,
    `  const textRef = useRef<HTMLSpanElement>(null);`,
    `  const [hovered, setHovered] = useState(false);`,
    ``,
    `  useGSAP(`,
    `    (_, contextSafe) => {`,
    `      const wrap = wrapRef.current;`,
    `      const motion = motionRef.current;`,
    `      const text = textRef.current;`,
    `      if (!wrap || !motion || !text) return;`,
    ``,
    `      const onEnter = contextSafe?.(() => setHovered(true));`,
    `      const scaleEl = motion.querySelector(".mag-btn-scale");`,
    ``,
    `      const onLeave = contextSafe?.(() => {`,
    `        setHovered(false);`,
    `        gsap.to(motion, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)", overwrite: "auto" });`,
    `        gsap.to(text, { x: 0, y: 0, duration: 0.75, ease: "elastic.out(1, 0.45)", overwrite: "auto" });`,
    `        if (scaleEl) {`,
    `          gsap.to(scaleEl, { scale: 1, duration: 0.35, ease: "power2.out", clearProps: "transform", overwrite: "auto" });`,
    `        }`,
    `      });`,
    ``,
    `      const onMove = contextSafe?.((e: MouseEvent) => {`,
    `        const rect = wrap.getBoundingClientRect();`,
    `        const cx = rect.left + rect.width / 2;`,
    `        const cy = rect.top + rect.height / 2;`,
    `        const dx = e.clientX - cx;`,
    `        const dy = e.clientY - cy;`,
    `        const dist = Math.sqrt(dx * dx + dy * dy);`,
    ``,
    `        if (dist < radius) {`,
    `          gsap.to(motion, { x: dx * strength, y: dy * strength, duration: 0.45, ease: "power2.out", overwrite: "auto" });`,
    `          gsap.to(text, { x: dx * TEXT_STRENGTH, y: dy * TEXT_STRENGTH, duration: 0.45, ease: "power2.out", overwrite: "auto" });`,
    `        }`,
    `      });`,
    ``,
    `      wrap.addEventListener("mouseenter", onEnter!);`,
    `      wrap.addEventListener("mousemove", onMove!);`,
    `      wrap.addEventListener("mouseleave", onLeave!);`,
    ``,
    `      return () => {`,
    `        wrap.removeEventListener("mouseenter", onEnter!);`,
    `        wrap.removeEventListener("mousemove", onMove!);`,
    `        wrap.removeEventListener("mouseleave", onLeave!);`,
    `      };`,
    `    },`,
    `    { scope: wrapRef, dependencies: [strength, radius, TEXT_STRENGTH] },`,
    `  );`,
    ``,
    `  return (`,
    `    <div ref={wrapRef} className={hovered ? "mag-wrap mag-wrap--hover" : "mag-wrap"}>`,
    `      {/* include the module CSS from the demo for styling */}`,
    `      <div ref={motionRef} className="mag-btn-motion">`,
    `        <div className="mag-btn-scale">`,
    `          <button type="button" className="mag-btn">`,
    `            <span ref={textRef} className="mag-btn__text">`,
    `              <span className={hovered ? "mag-btn__label mag-btn__label--default mag-btn__label--hidden" : "mag-btn__label mag-btn__label--default"}>`,
    `                Check The Library`,
    `              </span>`,
    `              <span className={hovered ? "mag-btn__label mag-btn__label--hover" : "mag-btn__label mag-btn__label--hover mag-btn__label--hidden"}>`,
    `                click me`,
    `              </span>`,
    `            </span>`,
    `          </button>`,
    `        </div>`,
    `      </div>`,
    `    </div>`,
    `  );`,
    `}`,
    ``,
  ].join("\n");
}

export function getHighlightedSnippet(
  state: AnimationState,
  lastChangedKey: string | null,
): string {
  const strength = Number(state.params.strength ?? 0.42);
  const radius = Number(state.params.radius ?? 110);

  const kw = (t: string) => `<span style="color:#c792ea">${t}</span>`; // keywords
  const fn = (t: string) => `<span style="color:#82aaff">${t}</span>`; // functions / components
  const num = (t: string) => `<span style="color:#f78c6c">${t}</span>`; // numbers
  const pn = (t: string) => `<span style="color:rgba(255,255,255,0.5)">${t}</span>`; // punctuation

  const h = (key: string, html: string) =>
    lastChangedKey === key ? `<span style="color:#feb800">${html}</span>` : html;

  function line(content: string) {
    return `<span style="display:block">${content}</span>`;
  }

  return [
    line(`${kw("export")} ${kw("function")} ${fn("MagneticButtonDemo")}${pn("()")} ${pn("{")}`),
    line(`  ${kw("const")} strength ${pn("=")} ${h("strength", num(strength.toFixed(2)))}${pn(";")}`),
    line(`  ${kw("const")} radius ${pn("=")} ${h("radius", num(radius.toFixed(0)))}${pn(";")} ${pn("// px")}`),
    line(`  ${pn("// ... GSAP hover logic + JSX ...")}`),
    line(`${pn("}")}`),
  ].join("\n");
}
