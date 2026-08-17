# AISee Travel — Landing Page

Premium B2B landing page for **AISee Travel** (SeeMore): Hardware-as-a-Service AR glasses for Sri Lankan DMCs and tour operators.

This is a static Vite + React app. Hosting only needs the `dist/` folder.

## Develop

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
