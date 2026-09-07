# TWICIIC Design System

**Twin City Impact Innovation Champion** — a cross-border project co-funded by the Interreg Slovakia–Austria 2021–2027 programme (ERDF), running October 2025 – September 2028. TWICIIC connects the innovation ecosystems of **Vienna** and **Bratislava**, supporting impact-driven scale-ups through peer learning, cross-border investor networks, and a joint accelerator programme.

**Consortium:** ZSI (lead partner), Relevant Ventures, Vienna Business Agency, CB ESPRI, Impact Slovakia, and the Capital City of Bratislava.

**Audience:** founders, scale-ups, investors, ecosystem builders — people who expect contemporary, confident, startup-grade design, *not* typical EU-project aesthetics. The benchmark: the most contemporary thing the Interreg programme has ever funded.

**Sources provided:** `uploads/CI_TWICIIC.pdf` (visual identity deck, April 2026), `uploads/A3_Poster_TWICIIC_German.pdf` (official poster), logo SVG masters (`logo original.svg`, `logo black and white.svg`, `symbol.svg`), and a zip of trilingual PNG lockups (EN/DE/SK × regular/expanded/minimal/B&W). All extracted into `assets/logos/`.

---

## The brand idea — "The Twin Pulse"

The double **II** at the heart of the TWICIIC wordmark: two vertical bars standing side by side, one for each city.

- **Vienna Red `#DB1F40`** — the crimson of the Staatsoper and Burgtheater velvet.
- **Bratislava Blue `#46AFF8`** — the Danube and the Blue Church (Modrý kostolík).

The two bars are a portal between the cities — twin towers, a pulse, a connection. The red/blue double-bar is the system's **signature graphic device**. Use it generously and inventively: divider, progress indicator, bullet, frame element, loading pulse, hover state, section marker, data-viz accent pair. Each bar's proportion is ~1 : 3.89 (w:h); the bars touch (no gap); always red on the left, blue on the right; never one without the other.

## Trilingual by design

EN is the default; DE and SK are first-class. When content is German or Slovak, the **entire** surface switches: logo lockup, headings, microcopy, Interreg brand unit. German runs ~20–30% longer than English; Slovak uses diacritics (á č ľ š ž ô). Containers never clip — headlines wrap and balance, buttons grow with content. Language switching must never break a layout. The `LangSwitch` component is the canonical control.

## EU compliance (hard requirement)

Public-facing materials must carry the full lockup: TWICIIC wordmark + official Interreg brand unit (Interreg logotype + EU emblem + co-funding statement) in the content language:

- **EN:** "Co-funded by the European Union" / Slovakia – Austria
- **DE:** "Kofinanziert von der Europäischen Union" / Slowakei – Österreich
- **SK:** "Spolufinancovaný Európskou úniou" / Slovensko – Rakúsko

Never crop, recolor, or omit the Interreg unit. Monochrome versions exist for constrained contexts; the standalone twin-bar symbol works as avatar/favicon where space is tight.

---

## CONTENT FUNDAMENTALS

- **Tone:** optimistic, professional, direct. Contemporary tech-brand confidence with the warmth of a community programme. Never bureaucratic ("the beneficiary shall…"), never hype ("revolutionary!").
- **Voice:** "we" for the programme, "you" for founders/scale-ups. Active voice, short declaratives. Example register: *"Two cities. One innovation champion."* / *"TWICIIC supports impact-oriented start-ups, SMEs and organisations to grow and expand across the Austrian–Slovak border."*
- **Casing:** sentence case everywhere — headlines, buttons, nav. UPPERCASE is reserved for the small eyebrow/label style (13px, +9% tracking, weight 600).
- **Headlines:** tight, heavy, often paired/two-part to echo the twin idea ("Two cities. One pulse." / "Capacity, connection, acceleration").
- **Numbers:** real and specific (€1,574,443 · 80% · 36 months) — tabular figures, no vague claims.
- **Emoji:** never.
- **City order:** Vienna first, Bratislava second (matching red-then-blue), but give them equal weight — the twin-ness is the point.
- **EU credit line** (long form, e.g. poster/footer): *"This project is co-financed by the Interreg Slovakia–Austria 2021–2027 Programme from the European Regional Development Fund (ERDF)."*

## VISUAL FOUNDATIONS

- **Background:** City Gray `#F4F4F2` on every surface — calm, gallery-like. White `#FFFFFF` is the card/surface color sitting on it. Black `#000000` panels for emphasis moments (section breakers, partner walls). 1–2 background colors per artifact, max.
- **Color use:** black for type and structure; red/blue **only** as the paired device, used with intent. If one city's color appears, the other is echoed somewhere on the page. For *text* in brand colors use the deep variants (`--vienna-red-deep #B5152F`, `--bratislava-blue-deep #1272B8`) — the brights fail AA on light gray. Tints (`#FBE4E8`, `#E3F2FE`) are backgrounds only. No gradients, ever.
- **Type:** Geist Sans only (variable 100–900, self-hosted woff2 in `assets/fonts/`). Display 72px/800/−3%; H1 48/750; H2 32/700; H3 22/650; lead 20/400; body 16/400/1.6; small 14; eyebrow 13/600/+9%/uppercase. Headlines tight and heavy; body airy. `text-wrap: balance` on headlines, `pretty` on paragraphs.
- **Spacing:** 4px base scale up to 128. Generous whitespace is part of the brand — sections breathe (88–96px vertical padding on web).
- **Corners:** sharp, 0px radius everywhere (rectangles echo the bars). `--radius-xs: 2px` only when truly unavoidable.
- **Borders & depth:** 1px `--border-default #E0E0DB`; depth comes from surface contrast and borders, **never drop shadows**. No blur/glass effects.
- **Hover:** borders darken to black; secondary buttons invert to solid black; primary buttons slide the twin bars in at the left edge. Press: 1px downward nudge. No scaling, no lifting.
- **Focus:** inputs draw the red/blue twin underline along the bottom edge.
- **Motion:** restrained — 150–300ms fades/slides with `--ease-out`; the one signature animation is the **twin pulse** (bars beating alternately, 1800ms). No bounces, no parallax, no infinite decorative loops elsewhere. Respect `prefers-reduced-motion`.
- **Layout:** Swiss-style editorial grids, strong vertical rhythm, asymmetric "duality" splits with the twin bars as the spine between a Vienna side and a Bratislava side. Max content width 1200px.
- **Imagery:** documentary-style city and founder photography, slightly desaturated toward the gray palette, framed or captioned with the twin-bar device. None supplied yet — use placeholders and ask for real photography; never generate or draw imagery.
- **Data-viz:** exactly red + blue + grayscale. Vienna data = red, Bratislava data = blue, everything else gray.
- **Cards:** white, 1px border, sharp corners, no shadow; optional twin-bar mark top-left (`Card accent`).

## ICONOGRAPHY

- The brand materials contain **no icon set** — the twin-bar device itself does the work icons usually do (bullets, markers, accents). Prefer the device + typography over icons.
- If an interface genuinely needs icons (nav, form affordances), use **Lucide** from CDN (`https://unpkg.com/lucide@latest`) at 1.5px stroke, black only, 16–20px — its geometric simplicity matches Geist. **This is a substitution, not a brand asset — flag it when used.**
- No icon font, no emoji, no decorative unicode. Arrows (→, ↔) in running text are acceptable for the Vienna↔Bratislava relationship.
- Logos: vector wordmark `assets/logos/twiciic-wordmark.svg` (+ `-bw` version), symbol `assets/logos/twin-bars-symbol.svg`, trilingual lockup PNGs under `assets/logos/{en,de,sk}/`. Naming reference: `assets/logos/logo-naming-conventions.png`.

---

## Index

- `styles.css` — global entry; imports everything in `tokens/` (colors, typography, spacing, motion, fonts, base).
- `tokens/` — CSS custom properties: `colors.css`, `typography.css`, `spacing.css`, `motion.css` (incl. `twin-pulse-a/b` keyframes), `fonts.css` (@font-face), `base.css`.
- `assets/logos/` — SVG masters + trilingual PNG lockups; `assets/fonts/` — Geist woff2 (latin + latin-ext).
- `components/`
  - `brand/` — `TwinBars` (signature device), `LogoLockup` (trilingual TWICIIC + Interreg)
  - `actions/` — `Button` (primary/secondary/ghost, twin-bar hover)
  - `display/` — `Card`, `Badge`, `SectionHeader`, `StatPair`
  - `forms/` — `Input` (twin focus underline), `LangSwitch` (EN/DE/SK)
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand devices, motion, duality).
- `slides/` — 16:9 sample slides: `TitleSlide`, `SectionSlide`, `DualitySlide`, `ContentSlide`.
- `ui_kits/website/` — trilingual marketing landing page (`index.html`, live EN/DE/SK switch).
- `templates/a3-poster/` — the mandatory Interreg A3 project poster, ready to copy.
- `SKILL.md` — agent skill entry point.

**Component usage in HTML:** load `_ds_bundle.js`, then `const { Button, TwinBars } = window.TWICIICDesignSystem_5c2c27;`
