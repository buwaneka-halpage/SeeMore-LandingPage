# See Mo — Landing Page

Premium B2B landing page for **See Mo**: Hardware-as-a-Service AR glasses for Sri Lankan DMCs and tour operators.

This is a static Vite + React app. Hosting only needs the `dist/` folder.

## Develop

If you already ran install on Vite 8, delete the broken native bindings first:

```bash
rm -rf node_modules
npm install
npm run dev
```

Fresh clone:

```bash
npm install
npm run dev
```

## Ship (static files only)

```bash
npm run build
```

Upload the contents of `dist/` to any static host (S3, Nginx, Netlify Drop, GitHub Pages, Cloudflare Pages). Relative asset paths (`base: './'`) work from a subdirectory or the domain root.

Preview the production build locally:

```bash
npm run preview
```

ROI math self-check:

```bash
npm run check
```
