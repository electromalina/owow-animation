# Contributing animations to OWOW Atlas

## Add a new animation

1. Copy `src/animations/_template/` to `src/animations/<your-slug>/`.
2. Fill in `meta.ts` (title, category, tags, platforms, engine, copy fields).
3. Add preview assets under `public/animations/<your-slug>/`:
   - `preview.gif` — library card / static preview
   - `preview.mp4` — optional hover video on library cards
4. Implement `Demo.tsx` (live detail preview) and `snippet.ts` (`getRawSnippet`, `getHighlightedSnippet`).
5. If the animation has tunable parameters, copy `controls.ts.example` → `controls.ts`.
6. Export the module from `index.ts`.
7. Register the module in `src/animations/registry.ts`.
8. Run `npm run validate:animations` and `npm run build`.

## Controls: easing / enum picker

In `controls.ts`, a parameter may use **`type: "enum"`** with **`options`** (each option has `value` and optional SVG `curve` for the picker preview). The stored value remains a **`number`** (selected option index) in app state — see [`blur-cascade/controls.ts`](src/animations/blur-cascade/controls.ts) and map back to GSAP easing strings in `snippet.ts` / `Demo.tsx` as needed.

## Library filters

The library page filters animations by **platform**, **engine (library)**, and **category**. Set `category` in `meta.ts` to the animation type — this is what users filter on:

| Category value | Use for |
|----------------|---------|
| Cursor | Cursor / pointer effects |
| Hover | Hover states and interactions |
| Loading | Loaders, spinners, progress |
| Scroll | Scroll-driven motion |
| Transition | Page and state transitions |
| Text | Typography and text effects |
| Button | CTA and button motion |
| Background | Ambient and background motion |

Set `sortOrder` (higher = newer) on each entry so the library "Newest" sort is reliable. Use integers; e.g. `60` for the most recent animation.

## Folder layout

```
src/animations/<slug>/
  meta.ts
  controls.ts          # optional
  Demo.tsx
  snippet.ts
  index.ts

public/animations/<slug>/
  preview.gif
  preview.mp4            # optional
```

## Code conventions

- Do not change global UI styling unless coordinated with design.
- Keep demo logic inside `Demo.tsx`; keep copy/generation in `snippet.ts`.
- Use `Platform` (`web` | `mobile`) in metadata for library platform filters.
- Set `category` to a library filter value (see **Library filters** above).
