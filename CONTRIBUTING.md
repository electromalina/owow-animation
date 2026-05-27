# Contributing to OWOW Atlas

This guide explains how to add a new animation to the catalog so it appears in the library, detail page, and search.

## Before you start

- Node.js LTS and npm (same versions the team uses for Next 16).
- Clone the repo, run `npm install`, then `npm run dev`.
- Read **`src/animations/types.ts`** for `AnimationMeta` and `ControlSchema` shapes.
- Copy **`src/animations/_template/`** as your starting point (do not register the template itself).

## Checklist (new animation)

- [ ] Copy `_template` → `src/animations/<slug>/`
- [ ] Fill `meta.ts` (unique `slug`, correct `category`, `platforms`, `engine`, copy, preview paths)
- [ ] Add `public/animations/<slug>/preview.gif` and/or `preview.mp4`
- [ ] Implement `Demo.tsx` (use `DemoShell` unless landing needs `embedded`)
- [ ] Implement `snippet.ts` (`getRawSnippet`, `getHighlightedSnippet`)
- [ ] Add `controls.ts` if the animation has tunable parameters
- [ ] Export module from `index.ts`
- [ ] Import module in `src/animations/registry.ts` (`modules` array)
- [ ] Run `npm run validate:animations`
- [ ] Run `npm run build`
- [ ] Manually test `/library`, `/library/<slug>`, and search

---

## Step 1: Create the folder

```bash
cp -r src/animations/_template src/animations/my-animation
```

Use a **kebab-case** slug (e.g. `scroll-velocity`, `magnetic-cursor`). The slug must match:

- Folder name: `src/animations/my-animation/`
- URL: `/library/my-animation`
- `meta.slug`
- `public/animations/my-animation/`

---

## Step 2: Metadata (`meta.ts`)

```ts
import type { AnimationMeta } from "@/src/animations/types";

export const meta: AnimationMeta = {
  slug: "my-animation",
  title: "My Animation",
  category: "Scroll",           // see category table below
  tags: ["Scroll", "GSAP"],
  status: "Production ready",   // or Beta, Experimental
  version: "1.0.0",
  updatedAt: "May 2026",
  sortOrder: 55,                // higher = newer in library sort
  platforms: ["web"],           // "web" | "mobile" | both
  engine: "gsap",               // "gsap" | "reanimated" | "css" | "other"
  summary: "One sentence for the detail hero.",
  about: [
    "First paragraph for the About section.",
    "Optional second paragraph.",
  ],
  technicalNotes: [
    "How it is built, performance, dependencies, reduced motion, etc.",
  ],
  useCases: [
    {
      title: "Example use case",
      description: "When and why to use this animation.",
    },
  ],
  previewSrc: "/animations/my-animation/preview.gif",
  videoSrc: "/animations/my-animation/preview.mp4", // optional
};
```

### Field reference

| Field | Notes |
|-------|--------|
| `slug` | Unique, kebab-case, stable (changing it breaks URLs). |
| `category` | Library filter; use a label from the table below (`Cursor`, not `cursor`). |
| `sortOrder` | Integer; bump existing entries if you want strict newest-first ordering. |
| `platforms` | `["web"]`, `["mobile"]`, or `["web", "mobile"]` for cross-platform. |
| `engine` | Primary implementation: `gsap` for web GSAP, `reanimated` for RN. Cross-platform web animations often stay `gsap` with both platforms listed. |
| `previewSrc` | Path under `public/` (leading slash). |
| `videoSrc` | Optional; library cards play this on hover/focus. |

### Library category values

`category` in `meta.ts` should match one of these **display names** (case-insensitive):

| Category | Use for |
|----------|---------|
| Cursor | Pointer / cursor effects |
| Hover | Hover states and interactions |
| Loading | Loaders, spinners, progress |
| Scroll | Scroll-driven motion |
| Transition | Page and state transitions |
| Text | Typography and text effects |
| Button | CTA and button motion |
| Background | Ambient / background motion |

Defined in `src/lib/libraryFilterCategories.ts`.

### How filters interpret your metadata

- **Platform → Mobile** includes any animation with `mobile` in `platforms` (including “both”).
- **Library → React Reanimated** includes `engine: "reanimated"` **or** mobile platform support.
- **Library → GSAP** includes `engine: "gsap"` **or** web platform support.

Detail page **Engine** metadata shows `GSAP + React Reanimated` when the animation supports both stacks.

---

## Step 3: Preview assets (`public/`)

```text
public/animations/my-animation/
  preview.gif    # required unless preview.mp4 exists (validator)
  preview.mp4    # optional; used on library card hover
```

- Keep file sizes reasonable (compress GIF/video for the grid).
- Paths in `meta.ts` must match these locations.
- Demo-specific images can live in the same folder (see `hover-preview-strip`).

---

## Step 4: Live demo (`Demo.tsx`)

```tsx
"use client";

import { DemoShell } from "@/src/animations/shared/DemoShell";
import type { DemoProps } from "@/src/animations/types";

import "./demo.css"; // optional

export function Demo({ platform, params, embedded }: DemoProps) {
  // Use platform === "mobile" for RN/Reanimated preview layout
  // Use params from controls schema keys

  if (embedded) {
    // Landing featured embed: skip DemoShell, minimal chrome
    return <div>...</div>;
  }

  return (
    <DemoShell
      platform={platform}
      footerTags={["tag one", "tag two"]}
    >
      {/* stage content */}
    </DemoShell>
  );
}
```

**Guidelines**

- Respect **`prefers-reduced-motion`** for continuous motion (see `cursor-trail/Demo.tsx`).
- Avoid layout thrashing in scroll handlers; prefer transforms and opacity.
- Set **`disablePictureInPicture`** on `<video>` if you add video elements.
- Colocate styles in `demo.css` when Tailwind classes are not enough.

---

## Step 5: Controls (`controls.ts`) — optional

Copy `controls.ts.example` → `controls.ts` in your animation folder.

```ts
import type { ControlSchema } from "@/src/animations/types";

export const controlSchema: ControlSchema = [
  {
    key: "duration",
    label: "Duration",
    min: 0.1,
    max: 2,
    step: 0.05,
    decimals: 2,
    unit: "s",
    defaultValue: 0.8,
  },
];
```

Wire it in `index.ts`:

```ts
import { controlSchema } from "./controls";

export const myAnimation: AnimationModule = {
  meta,
  Demo,
  controlSchema,
  getRawSnippet,
  getHighlightedSnippet,
};
```

### Enum / easing picker

For easing selection, use `type: "enum"` with `options` (each option has `value` and optional SVG `curve` for the picker UI). The UI stores the **selected index** as a number in `state.params`.

Example: `src/animations/blur-cascade/controls.ts` and map indices to GSAP easing strings in `Demo.tsx` / `snippet.ts`.

---

## Step 6: Code snippets (`snippet.ts`)

The detail sidebar shows syntax-highlighted HTML with a **Copy** button.

```ts
import type { AnimationState } from "@/src/animations/types";

export function getRawSnippet(state: AnimationState): string {
  // Plain text copied to clipboard
  const { params, platform } = state;
  return `<!-- implementation for ${platform} -->`;
}

export function getHighlightedSnippet(
  state: AnimationState,
  lastChangedKey: string | null,
): string {
  // HTML string with inline styles for highlights
  // Highlight keys the user last changed (lastChangedKey) if useful
  return `<span style="color:#fff">...</span>`;
}
```

- Keep **generation logic** in `snippet.ts`, not in React components.
- `getRawSnippet` must match what you show highlighted (same values from `state`).

---

## Step 7: Barrel export (`index.ts`)

Rename the export to match your slug (camelCase):

```ts
import type { AnimationModule } from "@/src/animations/types";

import { controlSchema } from "./controls"; // omit if no controls
import { Demo } from "./Demo";
import { meta } from "./meta";
import { getHighlightedSnippet, getRawSnippet } from "./snippet";

export const myAnimation: AnimationModule = {
  meta,
  Demo,
  controlSchema, // optional
  getRawSnippet,
  getHighlightedSnippet,
};
```

---

## Step 8: Register in the catalog

Open **`src/animations/registry.ts`**:

1. Add an import: `import { myAnimation } from "@/src/animations/my-animation";`
2. Add `myAnimation` to the **`modules`** array (order does not matter for the UI; `sortOrder` in meta drives “Newest”).

There is no auto-discovery; forgetting this step means the animation will not appear anywhere.

---

## Step 9: Validate and test

```bash
npm run validate:animations
npm run build
npm run dev
```

**Manual QA**

1. **Library** — card appears, hover video works, filters behave as expected.
2. **Detail** — demo runs, platform toggle disables unsupported targets, sliders update demo and snippet.
3. **Search** — findable by title, category, or tag.
4. **Mobile width** — detail layout: demo → controls → content; no horizontal scroll.

---

## Optional: Landing page featuring

The landing page does **not** auto-list every registry animation. To feature one:

- Import its `Demo` in the relevant section (e.g. `src/components/landing/FeaturedAnimations.jsx`).
- Pass `embedded={true}` when you need a minimal chrome.
- Add any section-specific copy in that component.

---

## Code conventions

- Do not change global UI styling unless coordinated with design.
- Match existing naming: kebab-case slugs, camelCase registry exports.
- Prefer feature CSS files over scattering new global rules.
- Use `platforms` in metadata; `frameworks` on catalog entries is legacy.

