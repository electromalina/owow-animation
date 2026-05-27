import type { AnimationState } from "@/src/animations/types";

export function getRawSnippet(_state: AnimationState): string {
  return "// Implement getRawSnippet in snippet.ts";
}

export function getHighlightedSnippet(_state: AnimationState): string {
  return `<span style="color:rgba(255,255,255,0.5)">// Implement getHighlightedSnippet in snippet.ts</span>`;
}
