# CHEQ Annual Performance Review — FY 2025–26

Interactive, responsive, editable performance review site for
**Jhankar B — Business Operations — CHEQ — May 2025 to Present**.

Built with **React + Vite**. No UI libraries, no CSS frameworks, no animation
libraries — plain CSS with design tokens.

## Design direction

Styled as an **ops console** rather than a corporate deck, because that is the
subject's actual world: monitoring dashboards, alert queues, on-call rotations.

- A **dark instrumented hero** and a matching **dark closing band**, with the
  light document held between them.
- The **rotation dial** in the hero is the signature element: four equal arcs,
  one per functional area of the weekly rotational model described in the
  operational summary. The sweep advances every 2.8s and the centre reads out
  each area's headline figure. Hover or focus an arc to pin it; click to jump to
  that section. Equal quarters are deliberate — the rotation splits *time*, not
  volume, so sizing arcs by case count would misstate what the dial shows.
- **Numbers are set in mono** (IBM Plex Mono) throughout. Tabular numerals are
  the vernacular of transaction logs and settlement reports.
- Headings use **Archivo** at a wide optical width (`wdth` 108–118) for a
  control-room signage feel; body copy is Inter.
- **Meters appear only where the source states a real percentage** (17.71%,
  20.09%, 7.20%, 100%). They are never decorative.
- On the initiative cards, **status is the structural device** — a coloured left
  rail, green for shipped and amber for ongoing. There is no 01/02/03 numbering,
  because the initiatives are a portfolio, not a sequence.

Motion is orchestrated rather than scattered: a staggered hero entrance on load,
scroll-triggered reveals, counters that tick up, meters that fill, and a read
progress hairline under the header. Everything collapses to its final state under
`prefers-reduced-motion`, and there is a print stylesheet that flattens the dark
bands for a clean PDF export.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default <http://localhost:5173>).

## Build & deploy

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

`dist/` is a static folder — drop it on Vercel, Netlify, GitHub Pages, S3 or any
static host. `vite.config.js` uses `base: './'` so it also works from a sub-path.

## Editing the content

**All copy and every figure live in one file:**

```
src/data/performanceData.js
```

Components never hard-code content. To change a KPI, edit its `target`:

```js
{ value: { prefix: '₹', target: 1.40, decimals: 2, suffix: 'Cr' }, label: 'Fraud Prevented' }
```

| Field      | Meaning                                       |
| ---------- | --------------------------------------------- |
| `prefix`   | Text before the number (e.g. `₹`)             |
| `target`   | The value the counter animates to             |
| `decimals` | Fixed decimal places (default `0`)            |
| `suffix`   | Text after the number (e.g. `+`, `Cr`, `%`)   |

KPI numbers count up from `0` when they scroll into view — which is why the
source PDF captured them mid-animation as `0+`, `₹0.00Cr` and `0.00%`. Users with
`prefers-reduced-motion` enabled see the final values immediately.

### Two values to confirm

Two figures are not stated anywhere in the source document and are currently set
to `0` in `src/data/performanceData.js` (search for "Not disclosed"):

- **Pre-Arbitration Cases**
- **Arbitration Cases**

One figure is derived rather than stated: **Fraud Cases Prevented = 394**,
computed from the source's own "17.71% of investigated cases" against 2,224
investigated cases. Adjust if the real number differs.

## Project structure

```
src/
├── components/          reusable UI pieces
│   ├── RotationDial.jsx     ★ the hero dial (signature element)
│   ├── HeaderMark.jsx       "Awe-inspiring / 15 MONTH" lockup, dark + light
│   ├── Header.jsx           fixed header + read-progress hairline
│   ├── Navigation.jsx       anchor nav with active pill
│   ├── Reveal.jsx           fade-and-rise on scroll, with stagger
│   ├── Section.jsx          anchor + vertical rhythm wrapper
│   ├── SectionHeader.jsx    heading, drawn rule, subtitle
│   ├── KPIGrid.jsx          responsive KPI row
│   ├── KPICard.jsx          single KPI card
│   ├── Metric.jsx           animated number
│   ├── Meter.jsx            hairline percentage bar
│   ├── ContentCard.jsx      generic white card
│   ├── HighlightCard.jsx    tinted callout with green rail
│   ├── StatCallout.jsx      large centred figure (contest rate)
│   ├── InitiativeCard.jsx   initiative card, status rail
│   ├── SOPCard.jsx          SOP card
│   ├── ImpactList.jsx       IMPACT / KEY OUTCOMES bullets
│   ├── StatusBadge.jsx      LIVE / ONGOING / REVAMPED / SOP
│   ├── ChannelPills.jsx     channels monitored
│   ├── SummaryTable.jsx     final performance ledger
│   └── Footer.jsx
├── sections/            one file per page section
│   ├── HeroSection.jsx      dark console band + dial + readouts
│   ├── OperationalSummary.jsx
│   ├── FraudSection.jsx
│   ├── ChargebackSection.jsx
│   ├── CXSection.jsx
│   ├── SRSection.jsx
│   ├── ImprovementsSection.jsx
│   ├── SOPSection.jsx
│   └── OverallSummary.jsx   dark closing band
├── hooks/
│   ├── useInView.js         one shared "first time on screen" observer
│   ├── useCountUp.js        viewport-triggered counter
│   ├── useActiveSection.js  scroll-spy for the nav
│   └── useScrollState.js    read progress + header settle state
├── data/
│   └── performanceData.js   ← all content lives here
├── styles.css           design tokens + all styling
├── App.jsx
└── main.jsx
```

### Tuning the motion

| What                    | Where                                            |
| ----------------------- | ------------------------------------------------ |
| Dial dwell per quarter  | `DWELL` in `components/RotationDial.jsx`         |
| Counter duration        | `duration` in `hooks/useCountUp.js`              |
| Reveal distance / speed | `.reveal` in `styles.css`                        |
| Stagger between cards   | `delay` props in the section files               |
| All easing              | `--ease` token in `styles.css`                   |

## Design tokens

Edit the `:root` block at the top of `src/styles.css` to retheme the whole site —
brand green, neutrals, status colours, radii, shadows, container width and
typography are all single-source variables.

## Navigation

Six anchors, smooth-scrolled, with scroll-spy highlighting:

`#fraud` · `#chargeback` · `#cx` · `#sr` · `#improvements` · `#sop`

On mobile the nav becomes a horizontally scrollable strip that auto-centres the
active item.
