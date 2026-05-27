import type { AnimationState } from "@/src/animations/types";

export function getPlaceholderRawSnippet(state: AnimationState): string {
  return `// ${state.platform} snippet — implement in snippet.ts`;
}

export function getPlaceholderHighlightedSnippet(state: AnimationState): string {
  return `<span style="display:block;color:rgba(255,255,255,0.5)">// ${state.platform} snippet — implement in snippet.ts</span>`;
}
