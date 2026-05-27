import type { AnimationState } from "@/src/animations/types";

import { controlSchema } from "./controls";

// easing is stored as a numeric index in params 
function getEaseString(state: AnimationState): string {
  const p = controlSchema.find((c) => c.key === "ease");
  const index = Math.round(state.params.ease ?? 3);
  return p?.options?.[index]?.value ?? "power3.out";
}

// ── plain text (clipboard copy) ─────────────────────────────────────────────

export function getRawSnippet(state: AnimationState): string {
  const ease     = getEaseString(state);
  const dur      = (state.params.duration ?? 0.8).toFixed(2);
  const stagger  = (state.params.stagger  ?? 0.12).toFixed(2);
  const yOffset  = Math.round(state.params.yOffset  ?? 60);
  const blurFrom = (state.params.blurFrom ?? 12).toFixed(1);

  if (state.platform === "web") {
    return [
      `import { useBlurCascade } from '@owow/atlas'`,
      ``,
      `const ref = useBlurCascade({`,
      `  duration: ${dur},`,
      `  stagger: ${stagger},`,
      `  yOffset: ${yOffset},`,
      `  blurFrom: ${blurFrom},`,
      `  ease: '${ease}',`,
      `})`,
      ``,
      `return (`,
      `  <div ref={ref} className="blur-cascade">`,
      `    {items.map((item, i) => (`,
      `      <div key={i} className="cascade-item">{item}</div>`,
      `    ))}`,
      `  </div>`,
      `)`,
    ].join("\n");
  }

  return [
    `import { useBlurReveal } from '@owow/atlas/native'`,
    ``,
    `const { animatedStyles } = useBlurReveal({`,
    `  duration: ${dur},`,
    `  stagger: ${stagger},`,
    `  yOffset: ${yOffset},`,
    `  blurFrom: ${blurFrom},`,
    `  ease: '${ease}',`,
    `})`,
    ``,
    `return (`,
    `  <View>`,
    `    {items.map((item, i) => (`,
    `      <Animated.View key={i} style={animatedStyles[i]}>`,
    `        <Text>{item}</Text>`,
    `      </Animated.View>`,
    `    ))}`,
    `  </View>`,
    `)`,
  ].join("\n");
}

// ── syntax-highlighted HTML (rendered in the code block) ────────────────────
// Safe: all values come from static controls.ts + user slider state — never user input.

export function getHighlightedSnippet(
  state: AnimationState,
  lastChangedKey: string | null,
): string {
  const ease = getEaseString(state);

  const kw   = (t: string) => `<span style="color:#c792ea">${t}</span>`; // keywords
  const fn   = (t: string) => `<span style="color:#82aaff">${t}</span>`; // functions / components
  const str  = (t: string) => `<span style="color:#c3e88d">${t}</span>`; // strings
  const num  = (t: string) => `<span style="color:#f78c6c">${t}</span>`; // numbers
  const prop = (t: string) => `<span style="color:#89ddff">${t}</span>`; // object keys / props
  const pn   = (t: string) => `<span style="color:rgba(255,255,255,0.5)">${t}</span>`; // punctuation

  function line(content: string, paramKey?: string) {
    const highlight = paramKey != null && paramKey === lastChangedKey;
    const style = highlight
      ? `display:block;background:rgba(208,210,204,0.06);box-shadow:inset 2px 0 0 #d0d2cc;padding-left:6px;margin-left:-6px`
      : `display:block`;
    return `<span style="${style}">${content}</span>`;
  }

  // numeric param line (reads current value from state)
  function numLine(key: string, decimals: number, def: number) {
    const v = Number(state.params[key] ?? def).toFixed(decimals);
    return line(`  ${prop(key)}${pn(":")} ${num(v)}${pn(",")}`, key);
  }

  // easing line — value is a string (looked up from index), highlighted when ease changed
  function easeLine() {
    return line(
      `  ${prop("ease")}${pn(":")} ${str(`'${ease}'`)}${pn(",")}`,
      "ease",
    );
  }

  if (state.platform === "web") {
    return [
      line(`${kw("import")} ${pn("{")} ${fn("useBlurCascade")} ${pn("}")} ${kw("from")} ${str("'@owow/atlas'")}`),
      line(` `),
      line(`${kw("const")} ref ${pn("=")} ${fn("useBlurCascade")}${pn("({")}`),
      numLine("duration", 2, 0.8),
      numLine("stagger",  2, 0.12),
      numLine("yOffset",  0, 60),
      numLine("blurFrom", 1, 12),
      easeLine(),
      line(`${pn("})")}`),
      line(` `),
      line(`${kw("return")} ${pn("(")}`),
      line(`  ${pn("&lt;")}${fn("div")} ${prop("ref")}${pn("={")}ref${pn("}")} ${prop("className")}${pn("=")}${str('"blur-cascade"')}${pn("&gt;")}`),
      line(`    ${pn("{")}items${pn(".")}${fn("map")}${pn("((item, i) =&gt; (")}`),
      line(`      ${pn("&lt;")}${fn("div")} ${prop("key")}${pn("={i}")} ${prop("className")}${pn("=")}${str('"cascade-item"')}${pn("&gt;")}${pn("{item}")}${pn("&lt;/")}${fn("div")}${pn("&gt;")}`),
      line(`    ${pn("))")}`),
      line(`  ${pn("&lt;/")}${fn("div")}${pn("&gt;")}`),
      line(`${pn(")")}`),
    ].join("");
  }

  return [
    line(`${kw("import")} ${pn("{")} ${fn("useBlurReveal")} ${pn("}")} ${kw("from")} ${str("'@owow/atlas/native'")}`),
    line(` `),
    line(`${kw("const")} ${pn("{")} ${prop("animatedStyles")} ${pn("}")} ${pn("=")} ${fn("useBlurReveal")}${pn("({")}`),
    numLine("duration", 2, 0.8),
    numLine("stagger",  2, 0.12),
    numLine("yOffset",  0, 60),
    numLine("blurFrom", 1, 12),
    easeLine(),
    line(`${pn("})")}`),
    line(` `),
    line(`${kw("return")} ${pn("(")}`),
    line(`  ${pn("&lt;")}${fn("View")}${pn("&gt;")}`),
    line(`    ${pn("{")}items${pn(".")}${fn("map")}${pn("((item, i) =&gt; (")}`),
    line(`      ${pn("&lt;")}${fn("Animated.View")} ${prop("key")}${pn("={i}")} ${prop("style")}${pn("={animatedStyles[i]}")}${pn("&gt;")}`),
    line(`        ${pn("&lt;")}${fn("Text")}${pn("&gt;")}${pn("{item}")}${pn("&lt;/")}${fn("Text")}${pn("&gt;")}`),
    line(`      ${pn("&lt;/")}${fn("Animated.View")}${pn("&gt;")}`),
    line(`    ${pn("))")}`),
    line(`  ${pn("&lt;/")}${fn("View")}${pn("&gt;")}`),
    line(`${pn(")")}`),
  ].join("");
}
