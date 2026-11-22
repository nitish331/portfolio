# Nitish — Portfolio

Personal portfolio built with **React + Vite**, **Tailwind CSS** and **Framer Motion**, in the "Aurora Glass" design.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure

```
src/
  components/   reusable UI (AuroraBackground, navbar, buttons, cards…)
  sections/     page sections (hero, about, project showcase…)
  pages/        Home, Projects, Journey, Achievements
  data/         all text content (profile, projects, timeline, ranks…)
  assets/       images
  styles/       global.css — design tokens + glass / gradient utilities
```

## Design tokens

Defined once in `src/styles/global.css` (`@theme`) and available as Tailwind classes:
`bg-night`, `bg-panel`, `text-ink`, `text-muted`, `text-violet`, `text-cyan`, `text-pink`, `text-amber`,
`font-display` (Sora), `font-sans` (Manrope), `font-mono` (JetBrains Mono).

Effect utilities: `wrap`, `glass`, `gradient-border`, `gradient-text`, `gold-text`, `outline-text`,
`btn` + `btn-grad` / `btn-glass`, `chip`.

## Deployment (Netlify)

The site deploys from GitHub. Settings live in `netlify.toml`:
build `npm run build`, publish `dist`, Node 22, a catch-all rewrite to
`index.html` so `/projects`, `/journey` … work on refresh, long-term caching
for `/assets/*` and basic security headers.

Every push to `main` triggers a new deploy automatically.

## Editing content

All text lives in `src/data/` (profile, projects, timeline, achievements,
skills, certificates, site links). Project buttons appear only when a real
URL replaces `'#'` in `projects.js`.
