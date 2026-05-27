import type { AnimationState } from "@/src/animations/types";

import { controlSchema } from "./controls";

function formatParamLines(state: AnimationState): string {
  return controlSchema
    .map(
      (p) =>
        `  ${p.key}: ${Number(state.params[p.key] ?? p.defaultValue).toFixed(p.decimals)},`,
    )
    .join("\n");
}

export function getRawSnippet(state: AnimationState): string {
  const paramLines = formatParamLines(state);

  return [
    `"use client";`,
    ``,
    `import { useCursorTrail } from "@owow/atlas";`,
    ``,
    `export function HeroCursorTrail() {`,
    `  const ref = useCursorTrail({`,
    paramLines,
    `    icons: [`,
    `      "/footer/cursor-ventures.png",`,
    `      "/footer/cursor-studio.png",`,
    `      "/footer/cursor-ai.png",`,
    `    ],`,
    `  });`,
    ``,
    `  return <div ref={ref} className="hero-cursor-trail" />;`,
    `}`,
  ].join("\n");
}

export function getHighlightedSnippet(
  state: AnimationState,
  lastChangedKey: string | null,
): string {
  const kw = (t: string) => `<span style="color:#c792ea">${t}</span>`;
  const fn = (t: string) => `<span style="color:#82aaff">${t}</span>`;
  const str = (t: string) => `<span style="color:#c3e88d">${t}</span>`;
  const num = (t: string) => `<span style="color:#f78c6c">${t}</span>`;
  const prop = (t: string) => `<span style="color:#89ddff">${t}</span>`;
  const pn = (t: string) => `<span style="color:rgba(255,255,255,0.5)">${t}</span>`;

  function line(content: string, paramKey?: string) {
    const highlight = paramKey != null && paramKey === lastChangedKey;
    const style = highlight
      ? `display:block;background:rgba(208,210,204,0.06);box-shadow:inset 2px 0 0 #d0d2cc;padding-left:6px;margin-left:-6px`
      : `display:block`;
    return `<span style="${style}">${content}</span>`;
  }

  const paramLines = controlSchema.map((p) => {
    const val = Number(state.params[p.key] ?? p.defaultValue).toFixed(p.decimals);
    return line(
      `${pn("  ")}${prop(p.key)}${pn(": ")}${num(val)}${pn(",")}`,
      p.key,
    );
  });

  return [
    line(`${kw('"use client"')}${pn(";")}`),
    line(""),
    line(
      `${kw("import")} ${pn("{ ")}${fn("useCursorTrail")}${pn(" }")} ${kw("from")} ${str('"@owow/atlas"')}${pn(";")}`,
    ),
    line(""),
    line(`${kw("export function")} ${fn("HeroCursorTrail")}${pn("() {")}`),
    line(`  ${kw("const")} ref ${pn("=")} ${fn("useCursorTrail")}${pn("({")}`),
    ...paramLines,
    line(`    ${prop("icons")}${pn(": [")}`),
    line(`      ${str('"/footer/cursor-ventures.png"')}${pn(",")}`),
    line(`      ${str('"/footer/cursor-studio.png"')}${pn(",")}`),
    line(`      ${str('"/footer/cursor-ai.png"')}${pn(",")}`),
    line(`    ]${pn(",")}`),
    line(`  })${pn(";")}`),
    line(""),
    line(
      `  ${kw("return")} ${pn("<")}${fn("div")} ${prop("ref")}${pn("={ref}")} ${prop("className")}${pn("=")}${str('"hero-cursor-trail"')} ${pn("/>;")}`,
    ),
    line(`${pn("}")}`),
  ].join("");
}
