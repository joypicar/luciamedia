# Lucia Multimedia — Website

Marketing site for **Lucia Multimedia**, a film & motion studio.
Dark, cinematic, editorial — built around the brand's projector-beam device
and signature orange (`#f26b1f`).

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (theme tokens defined in `src/app/globals.css`)
- **Motion** (`motion/react`) for scroll reveals and micro-interactions
- `next/font` — `nevis.ttf` (brand display face) + Fraunces (body)

## Prerequisites

Node.js **20.9+** (built and verified on Node 24 LTS) and npm.

> On this machine Node was installed locally to `~/.local/node` and added to
> `PATH` via `~/.zshrc` / `~/.zshenv`. Interactive shells pick it up
> automatically. Non-interactive shells may need:
> `export PATH="$HOME/.local/node/bin:$PATH"`

## Develop

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

## Build & run production

```bash
npm run build
npm start
```

`next.config.ts` uses `output: "export"`, so `npm run build` creates a static
site in `out/`.

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`. After pushing to
GitHub:

1. In the GitHub repo, go to **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or run the workflow manually.

The workflow builds `website/`, uploads `website/out`, and deploys it to Pages.
It automatically sets the right base path:

- `username.github.io` repos deploy at `/`
- project repos deploy at `/<repo-name>/`

## Structure

```
public/brand/            Logo wordmark, mark, and the logo-reveal film
src/app/
  layout.tsx             Fonts, metadata, OG/theme
  page.tsx               Section composition
  globals.css            Tailwind v4 theme tokens + utilities
  icon.tsx               Generated favicon (beam mark)
  opengraph-image.tsx    Generated social share image
src/components/           Hero, Studio, Work, Services, Contact, Footer, …
```

## Notes

- Project copy and the Work section are polished **placeholders** — swap in
  real case studies, imagery and contact details before launch.
- Brand color, typography and spacing are tokenized in `globals.css`
  (`@theme`) — adjust there to retheme globally.
- Respects `prefers-reduced-motion` (reveals collapse, video won't autoplay).
