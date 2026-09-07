# TWICIIC website — source package

Six-page trilingual (EN / DE / SK) single-page site for the Twin City Impact Innovation Champion programme, plus the Accelerator readiness-check sub-page.

## Run it

The site is static — no build step, no server-side code.

1. Serve this folder over HTTP (the runtime fetches `content.js`, the design-system bundle and the assets, which `file://` blocks in most browsers):
   - `npx serve .` or `python3 -m http.server 8080` — then open `http://localhost:8080/`
   - or upload the folder as-is to any static host (Netlify, Vercel, GitHub Pages, S3, plain nginx/Apache).
2. Open `index.html`. Routes are hash-based (`#home`, `#accelerator`, `#readiness`, `#partners`, `#research`, `#portfolio`, `#events`), so no rewrite rules are needed.

Runtime dependency: `support.js` loads React 18 from unpkg on page load (with integrity hashes), so first load needs an internet connection. Everything else — fonts, logos, photos, content — is local.

## What's here

| Path | What |
| --- | --- |
| `index.html` | The whole site: template (between `<x-dc>` tags), page CSS in `<helmet><style>`, and the logic class at the bottom (`<script data-dc-script>`) — routing, language switching, scroll reveal, events filters, readiness assessment. |
| `content.js` | Every string on the site, one object keyed `en` / `de` / `sk`. Edit copy here. |
| `content-readiness.js` | Copy for the readiness-check page, same structure (merged by `content.js`). |
| `support.js` | The rendering runtime for the `.dc.html` template format (generated — do not edit). |
| `image-slot.js` | Drag-and-drop photo placeholders used on the Accelerator page. Read-only outside the design tool. |
| `_ds/…/` | TWICIIC design system: `tokens/*.css` (colours, type, spacing, motion, Geist font-faces), `styles.css`, the component bundle (`Button`, `Input`, `Badge`, `LogoLockup`, …) and its `readme.md` brand guide. |
| `assets/logos/` | TWICIIC wordmark (SVG), trilingual lockups, Interreg/EU brand unit. |
| `assets/partners/` | Partner logos — mono + colour hover versions. |
| `assets/team/` | Consortium photo and 17 face-centred 480px portraits. |

## Editing

- **Copy** — `content.js` / `content-readiness.js`. Keep the three language blocks in sync; keys must match.
- **Team** — `static TEAM` in the logic class in `index.html` (name, role, photo, LinkedIn URL). Sorted A–Z by first name.
- **Partner links** — `static PARTNER_LINKS` in the same class, keyed by logo path.
- **Links to wire up** — `applyUrl` / `readinessUrl` defaults in the `data-props` JSON at the bottom of `index.html`; Interreg links in `content.js`; the readiness "Book a call" mailto in `renderVals()` (`goContactFn`).
- **Forms** — newsletter, event save and readiness email are local-only (they just show a confirmation). Wire `nlSubmit*` / `rdyEmailSubmit` handlers to your backend or a form service.
- **Styling** — inline styles in the template plus a small block of state/hover rules in `<helmet><style>`. Colours and type come from the design-system tokens (`var(--vienna-red)`, `var(--text-primary)`, …).

## Known open items

- German and Slovak translations were machine-drafted — get a native review, especially Slovak diacritics.
- Readiness-check learning modules are outlines marked "In preparation".
- Real photography still to drop into the two Accelerator image slots.

## Also in the download

`TWICIIC Website (standalone).html` next to this folder is a single-file build with every asset embedded (2.5 MB). It opens directly from disk, no server needed — handy for sharing by email or reviewing offline. It still fetches React from unpkg on first load. Edit the source package, not that file.
