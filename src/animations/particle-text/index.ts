import type { AnimationModule } from "@/src/animations/types";

import { controlSchema } from "./controls";
import { Demo } from "./Demo";
import { meta } from "./meta";
import { getHighlightedSnippet, getRawSnippet } from "./snippet";

export const particleText: AnimationModule = {
  meta,
  Demo,
  controlSchema,
  getRawSnippet,
  getHighlightedSnippet,
};
