export type FilterCategoryId =
  | "cursor"
  | "hover"
  | "loading"
  | "scroll"
  | "transition"
  | "text"
  | "button"
  | "background";

export type FilterCategoryOption = {
  id: FilterCategoryId | "all";
  label: string;
};

export const FILTER_CATEGORY_OPTIONS: FilterCategoryOption[] = [
  { id: "all", label: "All" },
  { id: "cursor", label: "Cursor" },
  { id: "hover", label: "Hover" },
  { id: "loading", label: "Loading" },
  { id: "scroll", label: "Scroll" },
  { id: "transition", label: "Transition" },
  { id: "text", label: "Text" },
  { id: "button", label: "Button" },
  { id: "background", label: "Background" },
];

function normalizeCategory(value: string): string {
  return value.trim().toLowerCase();
}

export function getCategoryFacetId(category: string): FilterCategoryId | null {
  const normalized = normalizeCategory(category);
  const match = FILTER_CATEGORY_OPTIONS.find(
    (option) => option.id !== "all" && normalizeCategory(option.label) === normalized,
  );
  return (match?.id as FilterCategoryId | undefined) ?? null;
}

export function matchesAnimationCategory(
  category: string,
  facet: FilterCategoryId,
): boolean {
  return getCategoryFacetId(category) === facet;
}
