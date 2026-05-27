# OWOW Atlas

Interactive animation library for OWOW — landing page, searchable catalog, and per-animation detail views with live controls.

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing (hero + scroll about) |
| `/library` | Animation grid with search |
| `/library/[slug]` | Detail page with demo + controls sidebar |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run validate:animations` | Check animation folders vs registry |

## Project structure

- `app/` — Next.js App Router pages (thin shells)
- `src/animations/` — Per-animation modules (`meta`, `Demo`, `snippet`, `controls`)
- `src/components/` — UI by feature (`layout`, `landing`, `library`, `detail`, `search`)
- `public/animations/<slug>/` — Preview GIF/MP4 per animation

See [CONTRIBUTING.md](./CONTRIBUTING.md) for adding animations.

## Merge branch

Integration work lives on `merge-try-danylo` (landing, library detail, controls sidebar, animation cards, search overlay).
