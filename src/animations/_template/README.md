# Animation module template

Copy this folder to `src/animations/<your-slug>/` and follow the full guide in **[CONTRIBUTING.md](../../../CONTRIBUTING.md)** at the repo root.

Quick file roles:

| File | Purpose |
|------|---------|
| `meta.ts` | Catalog metadata and preview asset paths |
| `controls.ts` | Optional slider / enum schema (`controls.ts.example` → `controls.ts`) |
| `Demo.tsx` | Interactive preview component |
| `snippet.ts` | `getRawSnippet` + `getHighlightedSnippet` for the sidebar |
| `index.ts` | Export `AnimationModule`; then register in `registry.ts` |

Preview files go in `public/animations/<slug>/` (`preview.gif` and/or `preview.mp4`).
