"use client";

import type { FacetCounts, LibraryFilterState } from "@/src/lib/libraryFilters";
import {
  DEFAULT_LIBRARY_FILTERS,
  FILTER_CATEGORY_OPTIONS,
  LIBRARY_OPTIONS,
  PLATFORM_OPTIONS,
} from "@/src/lib/libraryFilters";

type LibraryFilterSidebarProps = {
  filters: LibraryFilterState;
  counts: FacetCounts;
  onChange: (filters: LibraryFilterState) => void;
};

type FilterSectionProps<T extends string> = {
  heading: string;
  options: { id: T; label: string }[];
  selected: T;
  counts: Record<T, number>;
  onSelect: (id: T) => void;
};

function FilterSection<T extends string>({
  heading,
  options,
  selected,
  counts,
  onSelect,
}: FilterSectionProps<T>) {
  return (
    <section className="library-sidebar__section">
      <h2 className="library-sidebar__heading">{heading}</h2>
      {options.map((option) => {
        const isSelected = selected === option.id;
        const isAllOption = option.id === ("all" as T);
        return (
          <button
            key={option.id}
            type="button"
            className={[
              "library-sidebar__option",
              isSelected ? "library-sidebar__option--selected" : "",
              isSelected && isAllOption ? "library-sidebar__option--selected-all" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onSelect(option.id)}
          >
            <span className="library-sidebar__option-label">
              <span className="library-sidebar__dot" aria-hidden />
              {option.label}
            </span>
            <span className="library-sidebar__count">{counts[option.id]}</span>
          </button>
        );
      })}
    </section>
  );
}

export function LibraryFilterSidebar({
  filters,
  counts,
  onChange,
}: LibraryFilterSidebarProps) {
  return (
    <aside className="library-sidebar" aria-label="Filter animations">
      <FilterSection
        heading="Platform"
        options={PLATFORM_OPTIONS}
        selected={filters.platform}
        counts={counts.platform}
        onSelect={(platform) => onChange({ ...filters, platform })}
      />

      <FilterSection
        heading="Library"
        options={LIBRARY_OPTIONS}
        selected={filters.library}
        counts={counts.library}
        onSelect={(library) => onChange({ ...filters, library })}
      />

      <FilterSection
        heading="Category"
        options={FILTER_CATEGORY_OPTIONS}
        selected={filters.category}
        counts={counts.category}
        onSelect={(category) => onChange({ ...filters, category })}
      />

      <div className="library-sidebar__reset">
        <button
          type="button"
          className="library-sidebar__reset-btn"
          onClick={() => onChange(DEFAULT_LIBRARY_FILTERS)}
        >
          Reset all filters
        </button>
      </div>
    </aside>
  );
}
