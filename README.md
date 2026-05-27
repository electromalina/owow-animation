# OWOW Atlas

OWOW Atlas is an interactive animation catalog: animations with live previews, tunable controls, and copyable implementation snippets.

Built with **Next.js 16** (App Router), **React 19**, and **TypeScript**. Demos use **GSAP** on web; metadata also tracks **React Native / Reanimated** for mobile-capable animations.

## Live routes

| `/` | Landing: hero, scroll sections, motion categories, featured animations, showcase |
| `/library` | Catalog grid with filters, search (header + ⌘K / Ctrl+K) |
| `/library/[slug]` | Detail: live demo, controls sidebar, about copy, metadata, code snippet |

## Quick start

```bash
npm install
npm run dev
```




**Data flow**

1. Each animation is an **`AnimationModule`** in `src/animations/<slug>/` (metadata, demo component, optional control schema, snippet generators).
2. **`src/animations/registry.ts`** is the single catalog: import every module into the `modules` array.
3. Library and detail UIs read from the registry; filters live in **`src/lib/libraryFilters.ts`**.
4. Preview media lives under **`public/animations/<slug>/`** and is referenced from `meta.ts`.

## Project structure

```
owow-animation/
├── app/                          # Next.js App Router (thin page shells)
│   ├── layout.tsx                # Fonts, AppShell wrapper
│   ├── globals.css               # Base tokens (--landing-*, fonts)
│   ├── page.tsx                  # Landing → HomeLanding
│   └── library/
│       ├── page.tsx                # Library → LibraryPageClient
│       └── [slug]/page.tsx         # Detail → DetailClient + generateMetadata
│
├── public/
│   ├── animations/<slug>/        # preview.gif, preview.mp4, demo assets
│   ├── landing/                  # Landing SVGs and icons
│   ├── fonts/                    # PP Neue Montreal (localFont in layout)
│   └── showcase/                 # Showcase section media
│
├── scripts/
│   └── validate-animations.mjs   # CI-friendly catalog checks
│
└── src/
    ├── animations/
    │   ├── registry.ts             # !!! Register new animations here !!!
    │   ├── types.ts                # AnimationMeta, ControlSchema, AnimationModule
    │   ├── shared/                 # DemoShell, demo-shell.css
    │   ├── _template/              # Copy this folder for new animations
    │   └── <slug>/                 # One folder per animation
    │
    ├── components/
    │   ├── layout/                 # AppShell, SiteHeader
    │   ├── landing/                # HomeLanding sections
    │   ├── library/                # Grid, filters, cards
    │   ├── detail/                 # DetailClient, ControlsSidebar
    │   └── search/                 # SearchButton, SearchOverlay
    │
    ├── hooks/                      # e.g. usePrefersReducedMotion
    └── lib/
        ├── libraryFilters.ts       # Platform / library / category facets
        ├── libraryFilterCategories.ts
        └── filterAnimations.ts     # Generic filter pipeline (search, etc.)
```

## Animation module contract

Every animation exports an `AnimationModule` from `src/animations/<slug>/index.ts`:

| Piece | File | Role |
|-------|------|------|
| Metadata | `meta.ts` | Title, category, tags, platforms, engine, copy, preview paths, `sortOrder` |
| Live preview | `Demo.tsx` | Receives `platform`, `params`, optional `embedded` (landing embeds) |
| Controls | `controls.ts` | Optional slider / enum schema for the detail sidebar |
| Code export | `snippet.ts` | `getRawSnippet(state)`, `getHighlightedSnippet(state, lastChangedKey)` |
| Barrel | `index.ts` | Wires meta + Demo + schema + snippets |

Use **`DemoShell`** (`src/animations/shared/DemoShell.tsx`) on detail pages for a consistent preview chrome (stage aspect ratio, web vs mobile device frame).

See **[CONTRIBUTING.md](./CONTRIBUTING.md)** for the full step-by-step guide to add an animation.



## Search

- **`SearchButton`** opens **`SearchOverlay`** (drawer + combobox pattern).
- Global shortcut: **⌘K** / **Ctrl+K** (ignored when focus is in an input).
- Search matches title, category, and tags; results link to `/library/[slug]`.

## Landing integrations

Some animations are embedded on the landing page (e.g. featured cards) by importing their `Demo` directly with `embedded={true}` to skip `DemoShell`. Keep landing imports explicit in the relevant section component (`FeaturedAnimations.jsx`, etc.).



## Contributing

**[CONTRIBUTING.md](./CONTRIBUTING.md)** — how to add a new animation, metadata reference, controls, snippets, and validation checklist.

