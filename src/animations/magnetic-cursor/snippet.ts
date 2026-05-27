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

  if (state.platform === "web") {
    return [
      `import { useMagneticCursor } from '@owow/atlas'`,
      ``,
      `const ref = useMagneticCursor({`,
      paramLines,
      `})`,
      ``,
      `return <button ref={ref} data-magnetic>Get started</button>`,
    ].join("\n");
  }

  return [
    `import { useMagneticPan } from '@owow/atlas/native'`,
    ``,
    `const gesture = useMagneticPan({`,
    paramLines,
    `})`,
    ``,
    `return (`,
    `  <GestureDetector gesture={gesture}>`,
    `    <Animated.View />`,
    `  </GestureDetector>`,
    `)`,
  ].join("\n");
}

export function getHighlightedSnippet(
  state: AnimationState,
  lastChangedKey: string | null,
): string {
  const kw = (t: string) => `<span style="color:#d0d2cc">${t}</span>`;
  const fn = (t: string) => `<span style="color:#ffffff">${t}</span>`;
  const str = (t: string) => `<span style="color:#b8c9a8">${t}</span>`;
  const num = (t: string) => `<span style="color:#e2e2e2">${t}</span>`;
  const prop = (t: string) => `<span style="color:#d0d2cc">${t}</span>`;
  const pn = (t: string) => `<span style="color:rgba(255,255,255,0.45)">${t}</span>`;

  function line(content: string, paramKey?: string) {
    const highlight = paramKey != null && paramKey === lastChangedKey;
    const style = highlight
      ? `display:block;background:rgba(208,210,204,0.06);box-shadow:inset 2px 0 0 #d0d2cc;padding-left:6px;margin-left:-6px`
      : `display:block`;
    return `<span style="${style}">${content}</span>`;
  }

  const paramLines = controlSchema.map(({ key, decimals, defaultValue }) => {
    const value = Number(state.params[key] ?? defaultValue).toFixed(decimals);
    return line(`  ${prop(key)}${pn(":")} ${num(value)}${pn(",")}`, key);
  });

  if (state.platform === "web") {
    return [
      line(
        `${kw("import")} ${pn("{")} ${fn("useMagneticCursor")} ${pn("}")} ${kw("from")} ${str("'@owow/atlas'")}`,
      ),
      line(` `),
      line(`${kw("const")} ref ${pn("=")} ${fn("useMagneticCursor")}${pn("({")}`),
      ...paramLines,
      line(`${pn("})")}`),
      line(` `),
      line(
        `${kw("return")} ${pn("<")}${fn("button")} ${prop("ref")}${pn("={")}ref${pn("}")} ${prop("data-magnetic")}${pn(">")}Get started${pn("</")}${fn("button")}${pn(">")} `,
      ),
    ].join("\n");
  }

  return [
    line(
      `${kw("import")} ${pn("{")} ${fn("useMagneticPan")} ${pn("}")} ${kw("from")} ${str("'@owow/atlas/native'")}`,
    ),
    line(` `),
    line(`${kw("const")} gesture ${pn("=")} ${fn("useMagneticPan")}${pn("({")}`),
    ...paramLines,
    line(`${pn("})")}`),
    line(` `),
    line(`${kw("return")} ${pn("(")}`),
    line(`  ${pn("<")}${fn("GestureDetector")} ${prop("gesture")}${pn("={")}gesture${pn("}>")} `),
    line(`    ${pn("<")}${fn("Animated.View")} ${pn("/>")} `),
    line(`  ${pn("</")}${fn("GestureDetector")}${pn(">")} `),
    line(`${pn(")")}`),
  ].join("\n");
}
