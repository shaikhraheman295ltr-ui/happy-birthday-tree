# Happy Birthday Tree

A birthday film in four acts: draw a Cupid's bow, strike a beating heart, and watch it bloom into a tree of hearts. Vanilla JS + GSAP, one canvas, no framework.

- **Live on Vercel:** https://happy-birthday-tree-swart.vercel.app
- **Live on GitHub Pages:** https://shaikhraheman295ltr-ui.github.io/happy-birthday-tree/

## The film

1. **Act 1 — The Invitation** — pull the bow back and release to shoot a golden heart-tipped arrow at the beating heart.
2. **Act 2 — The Flood** — the heart bursts into a circle of rose that swallows the frame.
3. **Act 3 — The Wish** — kinetic type rises out of the colour: "Happy Birthday".
4. **Act 4 — The Tree** — a blossom tree grows on canvas and blooms into a heart of petals.

Built-in accessibility: reduced-motion support, screen-reader text, keyboard control for the bow.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:5173 (or the LAN address Vite prints).

## Deploying

### Vercel (auto-deploys on push to `main`)

```sh
vercel --prod
```

### GitHub Pages (manual, from a built `dist/`)

The site is served from the `gh-pages` branch with `build_type: legacy`.

```sh
npm run build
git branch -D gh-pages 2>NUL || rem
git checkout --orphan gh-pages
git rm -rf --cached .
# copy dist/* into the repo root, then:
git add -A && git commit -m "deploy" && git push origin gh-pages
git checkout main
```

Note: `vite.config.js` sets the base path automatically — `'/'` when built on Vercel, `'/happy-birthday-tree/'` otherwise.

The original GitHub Actions workflow lives at `workflows/deploy.yml` — move it back to `.github/workflows/` if your token gains the `workflow` scope and you want automated Pages deploys.
