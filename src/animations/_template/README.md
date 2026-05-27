# Animation module template

1. Copy this `_template` folder to `src/animations/<your-slug>/`.
2. Rename files: copy `controls.ts.example` → `controls.ts` when the animation has tunable parameters.
3. Fill in `meta.ts` (title, tags, platforms, engine, preview paths).
4. Add `preview.gif` (library card) and optional `preview.mp4` (hover video) under `public/animations/<your-slug>/`.
5. Implement `Demo.tsx` (live preview on the detail page) and `snippet.ts` (code shown in the controls sidebar).
6. Export the module from `index.ts` and register it in `src/animations/registry.ts`.

## File roles

| File | Purpose |
|------|---------|
| `meta.ts` | Catalog metadata and preview asset paths |
| `controls.ts` | Slider schema for the controls sidebar |
| `Demo.tsx` | Interactive preview component |
| `snippet.ts` | `getRawSnippet` + `getHighlightedSnippet` for copy/view code |
| `preview.gif` | Static preview for library cards (place in `public/animations/<slug>/`) |
