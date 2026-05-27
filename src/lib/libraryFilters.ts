import type { AnimationMeta } from "@/src/animations/types";

import {
  FILTER_CATEGORY_OPTIONS,
  getCategoryFacetId,
  matchesAnimationCategory,
  type FilterCategoryId,
} from "@/src/lib/libraryFilterCategories";

export type PlatformFacet = "all" | "desktop" | "mobile" | "both";
export type LibraryFacet = "all" | "gsap" | "reanimated";
export type CategoryFacet = "all" | FilterCategoryId;
export type SortOption = "newest";

export type LibraryFilterState = {
  platform: PlatformFacet;
  library: LibraryFacet;
  category: CategoryFacet;
  sort: SortOption;
};

export const DEFAULT_LIBRARY_FILTERS: LibraryFilterState = {
  platform: "all",
  library: "all",
  category: "all",
  sort: "newest",
};

export type FacetCounts = {
  platform: Record<PlatformFacet, number>;
  library: Record<LibraryFacet, number>;
  category: Record<CategoryFacet, number>;
};

export type ActiveChip = {
  id: keyof LibraryFilterState;
  label: string;
  removable: boolean;
};

const PLATFORM_OPTIONS: { id: PlatformFacet; label: string }[] = [
  { id: "all", label: "All" },
  { id: "desktop", label: "Desktop" },
  { id: "mobile", label: "Mobile" },
  { id: "both", label: "Both" },
];

const LIBRARY_OPTIONS: { id: LibraryFacet; label: string }[] = [
  { id: "all", label: "All Libraries" },
  { id: "gsap", label: "GSAP" },
  { id: "reanimated", label: "React Reanimate" },
];

export { FILTER_CATEGORY_OPTIONS, PLATFORM_OPTIONS, LIBRARY_OPTIONS };

/** Primary platform bucket for display (exclusive). */
export function getPlatformFacet(meta: AnimationMeta): Exclude<PlatformFacet, "all"> {
  const { platforms } = meta;
  if (platforms.includes("web") && platforms.includes("mobile")) return "both";
  if (platforms.includes("mobile")) return "mobile";
  return "desktop";
}

/** Inclusive platform matching: "both" items also appear under Desktop and Mobile. */
export function supportsPlatformFacet(
  meta: AnimationMeta,
  facet: Exclude<PlatformFacet, "all">,
): boolean {
  const { platforms } = meta;
  switch (facet) {
    case "desktop":
      return platforms.includes("web");
    case "mobile":
      return platforms.includes("mobile");
    case "both":
      return platforms.includes("web") && platforms.includes("mobile");
  }
}

/** GSAP ↔ web, React Reanimated ↔ mobile (same mapping as the detail platform toggle). */
export function supportsLibraryFacet(
  meta: AnimationMeta,
  facet: Exclude<LibraryFacet, "all">,
): boolean {
  if (facet === "gsap") {
    return meta.engine === "gsap" || meta.platforms.includes("web");
  }
  return meta.engine === "reanimated" || meta.platforms.includes("mobile");
}

export function matchesPlatformFacet(
  meta: AnimationMeta,
  facet: PlatformFacet,
): boolean {
  if (facet === "all") return true;
  return supportsPlatformFacet(meta, facet);
}

export function matchesLibraryFacet(
  meta: AnimationMeta,
  facet: LibraryFacet,
): boolean {
  if (facet === "all") return true;
  return supportsLibraryFacet(meta, facet);
}

export function matchesCategoryFacet(
  meta: AnimationMeta,
  facet: CategoryFacet,
): boolean {
  if (facet === "all") return true;
  return matchesAnimationCategory(meta.category, facet);
}

export function applyLibraryFilters<T extends AnimationMeta>(
  items: T[],
  state: LibraryFilterState,
): T[] {
  return items.filter(
    (item) =>
      matchesPlatformFacet(item, state.platform) &&
      matchesLibraryFacet(item, state.library) &&
      matchesCategoryFacet(item, state.category),
  );
}

export function sortAnimations<T extends AnimationMeta>(
  items: T[],
  sort: SortOption,
): T[] {
  if (sort !== "newest") return items;

  return [...items].sort((a, b) => {
    const orderA = a.sortOrder ?? 0;
    const orderB = b.sortOrder ?? 0;
    if (orderB !== orderA) return orderB - orderA;
    return a.title.localeCompare(b.title);
  });
}

export function buildFacetCounts(catalog: AnimationMeta[]): FacetCounts {
  const platform: Record<PlatformFacet, number> = {
    all: catalog.length,
    desktop: 0,
    mobile: 0,
    both: 0,
  };

  const library: Record<LibraryFacet, number> = {
    all: catalog.length,
    gsap: 0,
    reanimated: 0,
  };

  const category: Record<CategoryFacet, number> = {
    all: catalog.length,
    cursor: 0,
    hover: 0,
    loading: 0,
    scroll: 0,
    transition: 0,
    text: 0,
    button: 0,
    background: 0,
  };

  for (const item of catalog) {
    if (supportsPlatformFacet(item, "desktop")) platform.desktop += 1;
    if (supportsPlatformFacet(item, "mobile")) platform.mobile += 1;
    if (supportsPlatformFacet(item, "both")) platform.both += 1;

    if (supportsLibraryFacet(item, "gsap")) library.gsap += 1;
    if (supportsLibraryFacet(item, "reanimated")) library.reanimated += 1;

    const catFacet = getCategoryFacetId(item.category);
    if (catFacet) category[catFacet] += 1;
  }

  return { platform, library, category };
}

function platformChipLabel(facet: PlatformFacet): string {
  if (facet === "all") return "All Platforms";
  return PLATFORM_OPTIONS.find((o) => o.id === facet)?.label ?? facet;
}

function libraryChipLabel(facet: LibraryFacet): string {
  if (facet === "all") return "All Libraries";
  return LIBRARY_OPTIONS.find((o) => o.id === facet)?.label ?? facet;
}

function categoryChipLabel(facet: CategoryFacet): string {
  if (facet === "all") return "All Categories";
  return FILTER_CATEGORY_OPTIONS.find((o) => o.id === facet)?.label ?? facet;
}

export function buildActiveChips(state: LibraryFilterState): ActiveChip[] {
  return [
    {
      id: "platform",
      label: platformChipLabel(state.platform),
      removable: state.platform !== "all",
    },
    {
      id: "library",
      label: libraryChipLabel(state.library),
      removable: state.library !== "all",
    },
    {
      id: "category",
      label: categoryChipLabel(state.category),
      removable: state.category !== "all",
    },
  ];
}

export function isDefaultFilters(state: LibraryFilterState): boolean {
  return (
    state.platform === DEFAULT_LIBRARY_FILTERS.platform &&
    state.library === DEFAULT_LIBRARY_FILTERS.library &&
    state.category === DEFAULT_LIBRARY_FILTERS.category &&
    state.sort === DEFAULT_LIBRARY_FILTERS.sort
  );
}

export function resetFilterKey(
  state: LibraryFilterState,
  key: keyof LibraryFilterState,
): LibraryFilterState {
  return { ...state, [key]: DEFAULT_LIBRARY_FILTERS[key] };
}
