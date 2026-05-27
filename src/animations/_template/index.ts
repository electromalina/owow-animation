import type { AnimationModule } from "@/src/animations/types";

import { Demo } from "./Demo";
import { meta } from "./meta";
import { getHighlightedSnippet, getRawSnippet } from "./snippet";

export const yourSlug: AnimationModule = {
  meta,
  Demo,
  getRawSnippet,
  getHighlightedSnippet,
};
