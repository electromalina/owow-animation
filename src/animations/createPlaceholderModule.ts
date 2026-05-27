import type { AnimationMeta, AnimationModule } from "@/src/animations/types";

import { PlaceholderDemo } from "./shared/placeholderDemo";
import {
  getPlaceholderHighlightedSnippet,
  getPlaceholderRawSnippet,
} from "./shared/placeholderSnippet";

export function createPlaceholderModule(
  meta: AnimationMeta,
): AnimationModule {
  return {
    meta,
    Demo: PlaceholderDemo,
    getRawSnippet: getPlaceholderRawSnippet,
    getHighlightedSnippet: getPlaceholderHighlightedSnippet,
  };
}
