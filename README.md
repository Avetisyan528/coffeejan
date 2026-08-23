# CoffeeJan website

React + TypeScript website for CoffeeJan.

## Local development

```bash
npm ci
npm start
```

## Production build

```bash
npm run build
```

Create React App writes the production files to `build/`.

## GitHub Pages deployment

This repository is configured for:

`https://avetisyan528.github.io/coffeejan/`

Deployment is automatic through `.github/workflows/deploy.yml` whenever changes are pushed to `main`.

On GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.

The application uses `HashRouter`, so client-side routes work reliably on GitHub Pages, for example:

`https://avetisyan528.github.io/coffeejan/#/products`
