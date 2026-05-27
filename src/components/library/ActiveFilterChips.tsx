"use client";

import {
  buildActiveChips,
  DEFAULT_LIBRARY_FILTERS,
  isDefaultFilters,
  resetFilterKey,
  type LibraryFilterState,
} from "@/src/lib/libraryFilters";

type ActiveFilterChipsProps = {
  filters: LibraryFilterState;
  onChange: (filters: LibraryFilterState) => void;
};

export function ActiveFilterChips({ filters, onChange }: ActiveFilterChipsProps) {
  const chips = buildActiveChips(filters);
  const showClearAll = !isDefaultFilters(filters);

  return (
    <div className="library-chips">
      <span className="library-chips__label">Filters:</span>
      <div className="library-chips__list">
        {chips.map((chip) => (
          <span key={chip.id} className="library-chips__chip">
            {chip.label}
            {chip.removable ? (
              <button
                type="button"
                className="library-chips__remove"
                aria-label={`Remove ${chip.label} filter`}
                onClick={() => onChange(resetFilterKey(filters, chip.id))}
              >
                ×
              </button>
            ) : null}
          </span>
        ))}
      </div>
      {showClearAll ? (
        <button
          type="button"
          className="library-chips__clear"
          onClick={() => onChange(DEFAULT_LIBRARY_FILTERS)}
        >
          Clear all
        </button>
      ) : null}
    </div>
  );
}
