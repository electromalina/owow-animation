"use client";

import { useMemo, useState } from "react";

import { getAllAnimations } from "@/src/animations/registry";
import { AnimationCard } from "@/src/components/library/AnimationCard";
import { ActiveFilterChips } from "@/src/components/library/ActiveFilterChips";
import { LibraryFilterSidebar } from "@/src/components/library/LibraryFilterSidebar";
import {
  applyLibraryFilters,
  buildFacetCounts,
  DEFAULT_LIBRARY_FILTERS,
  sortAnimations,
  type LibraryFilterState,
} from "@/src/lib/libraryFilters";

import "./library-page.css";

export function LibraryPageClient() {
  const catalog = useMemo(() => getAllAnimations(), []);
  const [filters, setFilters] = useState<LibraryFilterState>(DEFAULT_LIBRARY_FILTERS);

  const facetCounts = useMemo(() => buildFacetCounts(catalog), [catalog]);

  const filteredAnimations = useMemo(() => {
    const filtered = applyLibraryFilters(catalog, filters);
    return sortAnimations(filtered, filters.sort);
  }, [catalog, filters]);

  return (
    <main className="library-page">
      <LibraryFilterSidebar
        filters={filters}
        counts={facetCounts}
        onChange={setFilters}
      />

      <div className="library-page__main">
        <h1 className="library-page__title">Animation Library</h1>

        <ActiveFilterChips filters={filters} onChange={setFilters} />

        <p className="library-page__count">
          {filteredAnimations.length}{" "}
          {filteredAnimations.length === 1 ? "animation" : "animations"}
        </p>

        {filteredAnimations.length === 0 ? (
          <div className="library-page__empty" role="status">
            <p className="library-page__empty-title">No animations match your filters</p>
            <p className="library-page__empty-desc">
              Clear active filters or reset to browse the full Atlas catalog.
            </p>
            <button
              type="button"
              className="library-page__empty-reset"
              onClick={() => setFilters(DEFAULT_LIBRARY_FILTERS)}
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <section className="library-page__grid" aria-label="Animation results">
            {filteredAnimations.map((animation) => (
              <AnimationCard key={animation.slug} animation={animation} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
