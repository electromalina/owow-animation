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

export function getPlatformFacet(meta: AnimationMeta): Exclude<PlatformFacet, "all"> {
  const { platforms } = meta;
  if (platforms.includes("web") && platforms.includes("mobile")) return "both";
  if (platforms.includes("mobile")) return "mobile";
  return "desktop";
}

export function getLibraryFacet(meta: AnimationMeta): Exclude<LibraryFacet, "all"> | null {
  if (meta.engine === "gsap") return "gsap";
  if (meta.engine === "reanimated") return "reanimated";
  return null;
}

export function matchesPlatformFacet(
  meta: AnimationMeta,
  facet: PlatformFacet,
): boolean {
  if (facet === "all") return true;
  return getPlatformFacet(meta) === facet;
}

export function matchesLibraryFacet(
  meta: AnimationMeta,
  facet: LibraryFacet,
): boolean {
  if (facet === "all") return true;
  return meta.engine === facet;
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
    platform[getPlatformFacet(item)] += 1;

    const libFacet = getLibraryFacet(item);
    if (libFacet) library[libFacet] += 1;

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
    {
      id: "sort",
      label: "Newest",
      removable: false,
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
