import type { AnimationState } from "@/src/animations/types";

import { controlSchema } from "./controls";

function num(state: AnimationState, key: string, decimals: number): string {
  const def = controlSchema.find((c) => c.key === key)?.defaultValue ?? 0;
  return Number(state.params[key] ?? def).toFixed(decimals);
}

export function getRawSnippet(state: AnimationState): string {
  const wd = num(state, "waveDuration", 2);
  const sg = num(state, "stagger", 3);
  const sc = num(state, "scrub", 2);
  const tr = num(state, "travel", 0);
  const sh = num(state, "segmentHeight", 2);

  return [
    `"use client";`,
    ``,
    `import gsap from "gsap";`,
    `import ScrollTrigger from "gsap/ScrollTrigger";`,
    ``,
    `gsap.registerPlugin(ScrollTrigger);`,
    ``,
    `/**`,
    ` * Split headings into spans, tie a scrubbed timeline to a scroll container`,
    ` * (nested scroller matches the atlas preview pane).`,
    ` */`,
    `const OPTIONS = {`,
    `  waveDuration: ${wd},`,
    `  staggerEach: ${sg},`,
    `  scrub: ${sc},`,
    `  offVh: ${tr},`,
    `  segmentHeightMultiplier: ${sh}, // × scroller.clientHeight`,
    `  easeOut: "power4.out",`,
    `  easeIn: "power4.in",`,
    `};`,
    ``,
    `// ... split chars, gsap.timeline({ scrollTrigger: { scroller, pin, scrub }})`,
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
  const str = (t: string) => `<span style="color:#c3e88d">${t}</span>`;
  const pn = (t: string) =>
    `<span style="color:rgba(255,255,255,0.5)">${t}</span>`;

  const h = (key: string, inner: string) =>
    lastChangedKey === key
      ? `<span style="color:#feb800">${inner}</span>`
      : inner;

  const line = (content: string) =>
    `<span style="display:block">${content}</span>`;

  return [
    line(
      `${kw("const")} OPTIONS ${pn("=")} ${pn("{")}`,
    ),
    line(
      `  ${pn("waveDuration:")} ${h("waveDuration", numSpan(num(state, "waveDuration", 2)))}${pn(",")}`,
    ),
    line(
      `  ${pn("staggerEach:")} ${h("stagger", numSpan(num(state, "stagger", 3)))}${pn(",")}`,
    ),
    line(
      `  ${pn("scrub:")} ${h("scrub", numSpan(num(state, "scrub", 2)))}${pn(",")}`,
    ),
    line(
      `  ${pn("offVh:")} ${h("travel", numSpan(num(state, "travel", 0)))}${pn(",")}`,
    ),
    line(
      `  ${pn("segmentHeightMultiplier:")} ${h("segmentHeight", numSpan(num(state, "segmentHeight", 2)))}${pn(",")}`,
    ),
    line(
      `  ${pn("easeOut:")} ${str('"power4.out"')}${pn(",")}`,
    ),
    line(
      `  ${pn("easeIn:")} ${str('"power4.in"')}`,
    ),
    line(`${pn("}")}${pn(";")}`),
    line(`${pn("// Timeline + ScrollTrigger pinning...")}`),
  ].join("");
}
