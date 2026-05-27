import type { ComponentType } from "react";

export type Platform = "web" | "mobile";

export type Engine = "gsap" | "reanimated" | "css" | "other";

export type ControlSchemaItem = {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  decimals: number;
  unit: string;
  defaultValue: number;
  // optional: "slider" is the default, "enum" renders as a card-grid picker
  type?: "slider" | "enum";
  // required when type === "enum": the selectable options
  // value is stored as its index (number) in ControlValues so ControlValues stays Record<string,number>
  options?: { value: string; curve?: string }[];
};

export type ControlSchema = ControlSchemaItem[];

export type ControlValues = Record<string, number>;

export type UseCase = {
  title: string;
  description: string;
};

export type AnimationMeta = {
  slug: string;
  title: string;
  /** Animation type for library filtering (e.g. Cursor, Hover, Loading). */
  category: string;
  tags: string[];
  status: string;
  version: string;
  updatedAt: string;
  /** Higher values sort first in the library (newest). */
  sortOrder?: number;
  platforms: Platform[];
  engine: Engine;
  summary: string;
  about: string[];
  technicalNotes: string[];
  useCases: UseCase[];
  previewSrc: string;
  videoSrc?: string;
};

export type AnimationState = {
  platform: Platform;
  params: ControlValues;
};

export type DemoProps = {
  platform: Platform;
  params: ControlValues;
};

export type AnimationModule = {
  meta: AnimationMeta;
  Demo: ComponentType<DemoProps>;
  controlSchema?: ControlSchema;
  getRawSnippet: (state: AnimationState) => string;
  getHighlightedSnippet: (
    state: AnimationState,
    lastChangedKey: string | null,
  ) => string;
};

export type AnimationParam = ControlSchemaItem;

/** Catalog entry shape used by library cards and detail pages */
export type Animation = AnimationMeta & {
  params: ControlSchema;
  /** @deprecated Use platforms */
  frameworks: Platform[];
};
