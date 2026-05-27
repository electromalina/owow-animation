import type { AnimationMeta, Platform } from "@/src/animations/types";
import type { CategoryFacet, LibraryFacet, PlatformFacet } from "@/src/lib/libraryFilters";
import {
  matchesCategoryFacet,
  matchesLibraryFacet,
  matchesPlatformFacet,
} from "@/src/lib/libraryFilters";

export type AnimationFilters = {
  query?: string;
  platforms?: Platform[];
  platformFacet?: PlatformFacet;
  libraryFacet?: LibraryFacet;
  categoryFacet?: CategoryFacet;
  categories?: string[];
  tags?: string[];
  engines?: AnimationMeta["engine"][];
  statuses?: string[];
};

export function searchByTitle(items: AnimationMeta[], query: string): AnimationMeta[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((tag) => tag.toLowerCase().includes(q)),
  );
}

export function filterByPlatform(
  items: AnimationMeta[],
  platforms: Platform[],
): AnimationMeta[] {
  if (!platforms.length) return items;
  return items.filter((a) =>
    platforms.some((p) => a.platforms.includes(p)),
  );
}

export function filterByCategory(
  items: AnimationMeta[],
  categories: string[],
): AnimationMeta[] {
  if (!categories.length) return items;
  return items.filter((a) => categories.includes(a.category));
}

export function filterByTags(items: AnimationMeta[], tags: string[]): AnimationMeta[] {
  if (!tags.length) return items;
  return items.filter((a) => tags.every((t) => a.tags.includes(t)));
}

export function filterByEngine(
  items: AnimationMeta[],
  engines: AnimationMeta["engine"][],
): AnimationMeta[] {
  if (!engines.length) return items;
  return items.filter((a) => engines.includes(a.engine));
}

export function filterByStatus(items: AnimationMeta[], statuses: string[]): AnimationMeta[] {
  if (!statuses.length) return items;
  return items.filter((a) => statuses.includes(a.status));
}

/** Pure filter pipeline for future Figma library UI */
export function filterAnimations(
  items: AnimationMeta[],
  filters: AnimationFilters,
): AnimationMeta[] {
  let result = items;

  if (filters.query) {
    result = searchByTitle(result, filters.query);
  }
  if (filters.platforms?.length) {
    result = filterByPlatform(result, filters.platforms);
  }
  if (filters.platformFacet && filters.platformFacet !== "all") {
    result = result.filter((a) => matchesPlatformFacet(a, filters.platformFacet!));
  }
  if (filters.libraryFacet && filters.libraryFacet !== "all") {
    result = result.filter((a) => matchesLibraryFacet(a, filters.libraryFacet!));
  }
  if (filters.categoryFacet && filters.categoryFacet !== "all") {
    result = result.filter((a) => matchesCategoryFacet(a, filters.categoryFacet!));
  }
  if (filters.categories?.length) {
    result = filterByCategory(result, filters.categories);
  }
  if (filters.tags?.length) {
    result = filterByTags(result, filters.tags);
  }
  if (filters.engines?.length) {
    result = filterByEngine(result, filters.engines);
  }
  if (filters.statuses?.length) {
    result = filterByStatus(result, filters.statuses);
  }

  return result;
}
