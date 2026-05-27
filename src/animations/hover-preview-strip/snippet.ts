import type { AnimationState } from "@/src/animations/types";

import { controlSchema } from "./controls";

function num(state: AnimationState, key: string, decimals: number): string {
  const def = controlSchema.find((c) => c.key === key)?.defaultValue ?? 0;
  return Number(state.params[key] ?? def).toFixed(decimals);
}

export function getRawSnippet(state: AnimationState): string {
  const follow = num(state, "followDuration", 2);
  const strip = num(state, "stripDuration", 2);
  const fade = num(state, "fadeDuration", 2);

  return [
    `"use client";`,
    ``,
    `import { useEffect, useRef, useState } from "react";`,
    `import gsap from "gsap";`,
    ``,
    `export function HoverPreviewStrip() {`,
    `  const [activeIndex, setActiveIndex] = useState(0);`,
    `  const [previewVisible, setPreviewVisible] = useState(false);`,
    `  const followDuration = ${follow};`,
    `  const stripDuration = ${strip};`,
    `  const fadeDuration = ${fade};`,
    ``,
    `  const shellRef = useRef<HTMLDivElement>(null);`,
    `  const stripRef = useRef<HTMLDivElement>(null);`,
    `  const mediaMoveRef = useRef<HTMLDivElement>(null);`,
    ``,
    `  // quick pointer-follow`,
    `  const yTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);`,
    `  useEffect(() => {`,
    `    if (!mediaMoveRef.current) return;`,
    `    yTo.current = gsap.quickTo(mediaMoveRef.current, "y", { duration: followDuration, ease: "power3.out" });`,
    `    return () => { yTo.current = null; };`,
    `  }, [followDuration]);`,
    ``,
    `  // fade + strip translate`,
    `  useEffect(() => {`,
    `    if (!shellRef.current) return;`,
    `    gsap.to(shellRef.current, { autoAlpha: previewVisible ? 1 : 0, duration: fadeDuration, ease: "power2.out" });`,
    `  }, [previewVisible, fadeDuration]);`,
    ``,
    `  useEffect(() => {`,
    `    if (!stripRef.current) return;`,
    `    gsap.to(stripRef.current, { y: -activeIndex * 240, duration: stripDuration, ease: "power2.inOut" });`,
    `  }, [activeIndex, stripDuration]);`,
    ``,
    `  return <div>{/* ...list rows + preview shell... */}</div>;`,
    `}`,
    ``,
  ].join("\n");
}

export function getHighlightedSnippet(
  state: AnimationState,
  lastChangedKey: string | null,
): string {
  const kw = (t: string) => `<span style="color:#c792ea">${t}</span>`;
  const fn = (t: string) => `<span style="color:#82aaff">${t}</span>`;
  const numSpan = (t: string) => `<span style="color:#f78c6c">${t}</span>`;
  const pn = (t: string) =>
    `<span style="color:rgba(255,255,255,0.5)">${t}</span>`;

  const h = (key: string, inner: string) =>
    lastChangedKey === key
      ? `<span style="color:#feb800">${inner}</span>`
      : inner;

  const line = (content: string) =>
    `<span style="display:block">${content}</span>`;

  return [
    line(`${kw("const")} timing ${pn("=")} ${pn("{")}`),
    line(
      `  ${pn("followDuration:")} ${h("followDuration", numSpan(num(state, "followDuration", 2)))}${pn(",")}`,
    ),
    line(
      `  ${pn("stripDuration:")} ${h("stripDuration", numSpan(num(state, "stripDuration", 2)))}${pn(",")}`,
    ),
    line(
      `  ${pn("fadeDuration:")} ${h("fadeDuration", numSpan(num(state, "fadeDuration", 2)))}${pn(",")}`,
    ),
    line(`${pn("}")}${pn(";")}`),
    line(`${pn("// ...GSAP quickTo(pointer follow) + strip translate + fade...")}`),
    line(`${kw("export")} ${kw("function")} ${fn("HoverPreviewStrip")}${pn("()")} ${pn("{")} ${pn("…")} ${pn("}")}`),
  ].join("");
}

