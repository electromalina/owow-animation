import { animation5 } from "@/src/animations/animation-5";
import { animation6 } from "@/src/animations/animation-6";
import { blurCascade } from "@/src/animations/blur-cascade";
import { hoverPreviewStrip } from "@/src/animations/hover-preview-strip";
import { magneticButton } from "@/src/animations/magnetic-button";
import { magneticCursor } from "@/src/animations/magnetic-cursor";
import { particleText } from "@/src/animations/particle-text";
import { scrollMissionText } from "@/src/animations/scroll-mission-text";
import { scrollVelocity } from "@/src/animations/scroll-velocity";
import type {
  Animation,
  AnimationMeta,
  AnimationModule,
  AnimationState,
  ControlSchema,
} from "@/src/animations/types";

const modules: AnimationModule[] = [
  magneticCursor,
  scrollVelocity,
  scrollMissionText,
  hoverPreviewStrip,
  magneticButton,
  particleText,
  blurCascade,
  animation5,
  animation6,
];

function toCatalogEntry(mod: AnimationModule): Animation {
  const params = mod.controlSchema ?? [];
  return {
    ...mod.meta,
    params,
    frameworks: mod.meta.platforms,
  };
}

export const animations: Animation[] = modules.map(toCatalogEntry);

export function getAllAnimations(): Animation[] {
  return animations;
}

export function getAllAnimationMeta(): AnimationMeta[] {
  return modules.map((m) => m.meta);
}

export function getAnimationModule(slug: string): AnimationModule | undefined {
  return modules.find((m) => m.meta.slug === slug);
}

export function getAnimationBySlug(slug: string): Animation | undefined {
  const mod = getAnimationModule(slug);
  return mod ? toCatalogEntry(mod) : undefined;
}

export function buildDefaultState(mod: AnimationModule): AnimationState {
  const schema = mod.controlSchema ?? [];
  return {
    platform: mod.meta.platforms[0] ?? "web",
    params: Object.fromEntries(
      schema.map((p) => [p.key, p.defaultValue]),
    ),
  };
}

export type {
  Animation,
  AnimationMeta,
  AnimationModule,
  AnimationParam,
  AnimationState,
  ControlSchema,
  ControlSchemaItem,
  Platform,
} from "@/src/animations/types";
