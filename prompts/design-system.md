# Implementation Prompt — Vertex Design System

## Goal

Establish the Vertex design system as real, reusable code: design tokens, fonts, icons, and the
primitive components every later page (catalog, course, lesson, instructor, search, My Learning)
will be built from. Reproduce `design/vertex-designsystem.png` exactly, and ship a
`/design-system` route that renders all 14 sections of that reference from the real components so
the system is visually verifiable.

This task builds **only** the design system. No Sanity, no Clerk, no PostHog, no search, no data
fetching. Components are presentational and take props.

## Skills and docs read

- `AGENTS.md` (project instructions) — §3 UI work, §5 structure, §6 stack, §13 checks, §14.
- `node_modules/next/dist/docs/index.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` — Tailwind v4 wiring
  (`@import "tailwindcss"`, `@tailwindcss/postcss`), already correct in this repo.
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` — `next/font/google`,
  `variable` + `className` pattern for applying fonts in the root layout.
- Not used: `frontend-design` — AGENTS.md §3 says the reference image is the source of truth and
  I do not invent visual direction. Sanity/Context skills are out of scope for this task.

## Code inspected

- `package.json` — Next.js `16.3.5`, React `19.2.8`, Tailwind `^4` (resolved `4.3.3`) via
  `@tailwindcss/postcss`, TypeScript `^5`, eslint `^9` + `eslint-config-next`.
  Scripts: `dev`, `build`, `start`, `lint` (`eslint`). **There is no `typecheck` script.**
- `app/layout.tsx` — CNA default: Geist + Geist Mono, `LayoutProps<"/">` typed props (Next 16
  typed routes), `html.h-full antialiased`, `body.min-h-full flex flex-col`.
- `app/globals.css` — CNA default: `@import "tailwindcss"`, `:root` background/foreground vars,
  `@theme inline` block, a `prefers-color-scheme: dark` block, and a `body` font-family override.
- `app/page.tsx` — CNA default placeholder page.
- `tsconfig.json` — `strict: true`, path alias `@/*` → `./*`.
- `postcss.config.mjs` — `@tailwindcss/postcss`. Correct, unchanged.
- No existing components directory, no prompts directory, no `.env.example` yet.

## Decisions and assumptions

1. **Repo layout: Next.js stays at the repo root for now** (user decision). AGENTS.md §5 calls for
   separate `web/` and `studio/` workspaces; that restructuring is deferred to its own task so this
   change stays focused. **Flagged for the user** — the split should happen before Sanity work lands.
2. **Icons: hand-rolled local SVG set** (user decision). No new dependency. Exactly the 9 glyphs in
   the reference — bell, search, play-circle, document, bookmark, chart, clock, user, chevron-right —
   each in `outline` and `filled` style, on a 24×24 grid, 2px stroke, rounded line caps/joins.
   Additional glyphs the reference uses inside components are built the same way: external-link,
   lock, check-circle, spinner, chevron-down, chevron-left, signal/level, folder, eye, grid, target,
   accessibility, and the Vertex mark.
3. **Showcase route at `/design-system`** (user decision), rendering all 14 sections from the real
   components. It is a static server component; the only client components are the ones that need
   interactivity or hover state demos.
4. **Tokens live in `app/globals.css` under Tailwind v4 `@theme`**, not a `tailwind.config.ts`.
   Tailwind v4 is CSS-first and this repo has no JS config; adding one would fight the setup.
5. **Dark mode is removed.** The reference is a single light theme, and AGENTS.md §3 says reproduce
   the reference exactly. The CNA `prefers-color-scheme: dark` block in `globals.css` is deleted
   rather than left to silently invert the palette. `color-scheme: light` is set on `:root`.
6. **Fonts** are `Playfair Display` (display/headings) and `Inter` (UI/body) via `next/font/google`,
   exposed as `--font-display` and `--font-sans`. Geist/Geist Mono are removed — nothing uses them.
7. **Color values** are taken from the labels in the reference and confirmed by sampling the image's
   pixels. Assumption: the `POPULAR` badge and the `VIDEO` badge sample to effectively the same warm
   tint, so both use `primary-100`; the `LESSON` badge uses a separate indigo accent
   (`#EEF0FE` bg / `#4F46E5` text) since it is the one non-orange accent in the system.
   The page canvas in the reference samples to a warm off-white (`~#FBF8F6`), which is warmer than
   the labeled `Neutral 50 #FAFAFC`; both are kept as separate tokens (`--color-canvas` and
   `--color-neutral-50`) rather than collapsing them.
8. **`components/ui/*` are presentational only.** No data access, no `fetch`, no tokens. Client
   components are marked `"use client"` only where they need it (`Select`, `SearchInput`,
   `Pagination`); everything else stays a server component so later pages can render them freely.
9. **No `cn`/`clsx` dependency.** A tiny local `cn()` helper in `lib/cn.ts` joins class strings.
10. **Styles are Tailwind utility classes referencing the tokens** (e.g. `bg-primary-500`,
    `rounded-md`, `shadow-sm`), not arbitrary hex values, so the tokens are the single source of truth.

## Files to touch

**Modified**

- `app/globals.css` — replace CNA scaffold with the Vertex token layer (`@theme`), base styles, and
  the type-scale utilities.
- `app/layout.tsx` — swap Geist for Playfair Display + Inter, set real metadata, set canvas bg.
- `app/page.tsx` — replace CNA placeholder with a minimal holding page that links to
  `/design-system`. (The real home page is a separate task with its own reference image.)

**Created**

- `lib/cn.ts`
- `components/ui/icon.tsx` — `<Icon name variant size />` plus the SVG path registry.
- `components/ui/logo.tsx` — Vertex mark + wordmark.
- `components/ui/button.tsx` — `primary | secondary | tertiary | text` × `default | disabled`,
  sizes `md | lg`, optional trailing icon.
- `components/ui/badge.tsx` — `video | lesson | popular`.
- `components/ui/input.tsx` — `SearchInput` (leading search icon, `⌘K` hint) and base text input.
- `components/ui/select.tsx` — styled native select with chevron.
- `components/ui/progress-bar.tsx` — track, fill, `NN% complete` label.
- `components/ui/status.tsx` — `in-progress | completed | now-playing | locked`.
- `components/ui/card.tsx` — `Card` shell (white, 1px `neutral-200` border, radius `lg`, `shadow-sm`).
- `components/ui/course-card.tsx`
- `components/ui/lesson-video-card.tsx`
- `components/ui/lesson-card.tsx`
- `components/ui/resource-card.tsx`
- `components/ui/breadcrumbs.tsx`
- `components/ui/pagination.tsx`
- `components/ui/nav-bar.tsx`
- `components/ui/index.ts` — barrel export.
- `app/design-system/page.tsx` — the showcase, composed of the sections below.
- `app/design-system/_components/*.tsx` — one component per showcase section, plus the small
  swatch/spec helpers the showcase needs (these are showcase-only, not part of the system).

## Requirements

### Tokens (`app/globals.css`, `@theme`)

Colors — exact hex from the reference:

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| `--color-primary-500` | `#F97316` | | `--color-neutral-900` | `#0F172A` |
| `--color-primary-400` | `#FB923C` | | `--color-neutral-700` | `#334155` |
| `--color-primary-300` | `#FDBA74` | | `--color-neutral-500` | `#64748B` |
| `--color-primary-200` | `#FED7AA` | | `--color-neutral-300` | `#CBD5E1` |
| `--color-primary-100` | `#FFEEE5` | | `--color-neutral-200` | `#E2E8F0` |
| | | | `--color-neutral-100` | `#F1F5F9` |
| | | | `--color-neutral-50` | `#FAFAFC` |
| | | | `--color-white` | `#FFFFFF` |

Supporting tokens: `--color-canvas: #FBF8F6` (page background), `--color-success: #22C55E`
(Completed check), `--color-lesson: #4F46E5` and `--color-lesson-bg: #EEF0FE` (LESSON badge),
`--color-primary-600: #EA580C` (primary button hover — the reference's hover swatch is visibly
deeper than `primary-500`).

Radius: `xs 4px`, `sm 8px`, `md 12px`, `lg 16px`, `xl 24px`, `full 9999px`.

Shadows (exact, from §05):

- `sm` — `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
- `md` — `0 4px 12px -2px rgba(15, 23, 42, 0.08)`
- `lg` — `0 12px 24px -4px rgba(15, 23, 42, 0.10)`
- `xl` — `0 20px 40px -8px rgba(15, 23, 42, 0.12)`

Spacing: base unit 4px. The scale shown is 4, 8, 12, 16, 24, 32, 40, 48, 64 — Tailwind v4's default
`--spacing: 0.25rem` already produces every one of these (`space-1`…`space-16`), so do not redefine
it; document the scale in the showcase instead.

Type scale (§03) — expose each as a component class or a token pair, and use them everywhere:

| Style | Font | Size / Line height | Weight |
|---|---|---|---|
| Display 1 | Playfair Display | 48 / 56 | Bold (700) |
| Display 2 | Playfair Display | 36 / 44 | Bold (700) |
| Heading 1 | Inter | 28 / 36 | Semi Bold (600) |
| Heading 2 | Inter | 22 / 30 | Semi Bold (600) |
| Heading 3 | Inter | 18 / 26 | Medium (500) |
| Body Large | Inter | 16 / 24 | Regular (400) |
| Body | Inter | 14 / 20 | Regular (400) |
| Small | Inter | 12 / 16 | Regular (400) |

Base body text is `Body` (14/20) Inter, `neutral-700`, on `--color-canvas`.

### Components

**Button** — height 44px default, radius 12px, Inter Medium 14–16px, padding `0 16px` (lg) /
`0 12px` (md). Variants:

- `primary`: `bg-primary-500` / white text; hover `bg-primary-600`; disabled `bg-primary-100` with
  `primary-300` text.
- `secondary`: transparent bg, 1px `primary-500` border, `primary-500` text; hover fills
  `primary-100`; disabled uses `primary-200` border and `primary-300` text.
- `tertiary`: white bg, 1px `neutral-200` border, `neutral-900` text, trailing external-link icon;
  hover darkens border to `neutral-300`; disabled greys text and border.
- `text`: no bg or border, `primary-500` text, trailing filled play-circle icon; hover
  `primary-600`; disabled `primary-300`.

Disabled state sets the `disabled` attribute and `cursor-not-allowed`. Every variant gets a visible
focus ring (`primary-400`) — the reference does not show one, but keyboard focus must be visible
(AGENTS.md §14 principle "Accessible" is in the reference itself, §14 of the poster).

**Input** — height 44px, radius 12px, 1px `#E2E8F0` border, padding `0 16px`, focus border
`#FB923C`. `SearchInput` has a leading 20px search icon, placeholder "Search anything…", and a
right-aligned `⌘K` hint in `neutral-500` on `neutral-100`. `Select` is a native `<select>` styled to
match with a trailing chevron-down (native element keeps it accessible and keyboard-operable).

**Badges** — uppercase, Inter Semi Bold, ~11–12px, letter-spaced, radius `sm`, padding `4px 8px`.
`VIDEO` and `POPULAR`: `primary-100` bg, `primary-500` text. `LESSON`: `lesson-bg` bg, `lesson` text.

**Status indicators** — 20px icon + 14px label: `In Progress` (orange partial-ring spinner, static),
`Completed` (green outline check circle), `Now Playing` (filled orange play circle), `Locked`
(neutral outline padlock).

**Progress bar** — 8px tall, fully rounded, warm neutral track, `primary-500` fill, trailing label
`NN% complete` with the percentage bold in `neutral-900` and "complete" in `neutral-500`. Takes a
`value` (0–100), clamps it, and carries `role="progressbar"` with `aria-valuenow/min/max`.

**Cards** — all four share the `Card` shell: white bg, 1px `neutral-200` border, radius `lg`,
`shadow-sm`, 20–24px padding.

- `CourseCard` — square dark rounded course icon/initial, title (Heading 3), 2-line summary
  (`neutral-500`), then a meta row: level (chart icon), duration (clock icon), module count (folder
  icon), each 12px `neutral-500`.
- `LessonVideoCard` — `VIDEO` badge, title (Heading 3), 2-line description, footer row:
  `Lesson 5.1 · 12:45` on the left, `Watch from 12:45` text-button with filled play-circle on the right.
- `LessonCard` — `LESSON` badge, title, 3-line description, footer: `Module 5` on the left,
  `View lesson` + external-link on the right.
- `ResourceCard` — leading document icon, title (Heading 3), one-line description, footer:
  `PDF · 1.2 MB` on the left, external-link icon button on the right.

**Navigation** — `NavBar` (Vertex logo, `Courses` active in `primary-500`, `My Learning` in
`neutral-900`), `Breadcrumbs` (chevron separators, `neutral-500` links, `neutral-900` current page,
`aria-current="page"`, wrapped in `<nav aria-label="Breadcrumb">`), `Pagination` (prev/next chevron
buttons, numbered items, current page outlined in `primary-500` with `primary-500` text, `…` gap).

### Showcase page (`/design-system`)

Reproduce the reference layout section by section, in order, on the `canvas` background with white
panel cards: 01 Colors, 02 Typography, 03 Type Scale, 04 Spacing System, 05 Radius & Shadows,
06 Icons, 07 Buttons, 08 Inputs, 09 Badges/Tags, 10 Status/Indicators, 11 Progress Bar, 12 Cards,
13 Navigation, 14 Principles. Keep the reference's header block (Vertex logo, "Design System" in
Display 1 Playfair, the description paragraph, `VERSION 1.0 • MAY 2025`) and the numbered orange
section labels (`01`, `02`, …) with letter-spaced uppercase titles.

The hover row in §07 must show the actual hover styling statically (a `data-state="hover"` style
hook or an explicit `forceState` prop), since a static poster row cannot depend on a real pointer.

### Responsive

Desktop is exact. Below `lg` the multi-column panel grid collapses to one column, the swatch and
icon rows wrap, the card row stacks, and the spec tables scroll horizontally inside their own
container rather than forcing the page to scroll sideways. Nothing gets a `min-width` wider than a
~360px viewport.

### Accessibility

Meets the reference's own "Accessible" principle: real semantic elements (`button`, `select`,
`nav`, `ol`), visible focus rings on every interactive element, `aria-label` on icon-only buttons,
`aria-hidden` on decorative icons, `role="progressbar"` with values, and `aria-current` on the
active breadcrumb and page.

## Security considerations

Nothing in this task touches secrets, tokens, auth, or the network — every component is
presentational and takes props. Specifically:

- No Sanity client, no read/write token, no `fetch`, no environment variables introduced.
- No `dangerouslySetInnerHTML`; all SVG is authored inline as JSX.
- No new runtime dependencies, so no new supply-chain surface.
- The server/client boundary from AGENTS.md §5 is respected: `"use client"` is used only on the
  three components that need interactivity, and none of them receive or hold anything sensitive.

## Acceptance criteria

1. `/design-system` renders all 14 sections and visually matches `design/vertex-designsystem.png`
   in layout, spacing, typography, color, and state.
2. Every color, radius, shadow, and type-scale value in the reference exists as a token in
   `app/globals.css`, and components reference tokens rather than raw hex.
3. Playfair Display renders the display styles; Inter renders everything else.
4. All four button variants render default, hover, and disabled states matching the reference.
5. All four card types render with the exact content shown in the reference.
6. Both icon styles (outline and filled) render for all nine reference glyphs at 24×24 with 2px
   strokes and rounded caps.
7. Dark-mode scaffolding is gone; the page renders identically regardless of OS theme.
8. The page is usable down to ~360px wide with no horizontal page scroll.
9. `npx tsc --noEmit` passes clean.
10. `npm run lint` passes clean.
11. `npm run build` passes clean.

## Checks to run

Run from the repo root and report the real output:

1. `npx tsc --noEmit` (no `typecheck` script exists; I will add one as `"typecheck": "tsc --noEmit"`)
2. `npm run lint`
3. `npm run build` — required, since routes, config, and global CSS all change.
4. `npm run dev` and load the page.

Studio checks in AGENTS.md §13 do not apply — there is no Studio workspace yet.

## Manual test steps

1. `npm run dev`, open `http://localhost:3000/design-system`.
2. Compare side by side with `design/vertex-designsystem.png`, section by section, top to bottom.
   Confirm each of the 14 sections is present, in order, with matching content.
3. §07 Buttons: hover each Default-row button and confirm it matches the Hover row; confirm the
   Disabled row does not respond to hover or click.
4. §08 Inputs: click the search field and confirm the border turns `#FB923C`; open the select and
   confirm it is keyboard-operable.
5. Tab through the page from the top: confirm every button, link, input, select, breadcrumb link,
   and pagination control shows a visible focus ring, in a sensible order.
6. Resize the window to ~375px: confirm panels stack to one column, cards stack, swatch/icon rows
   wrap, spec tables scroll inside themselves, and the page never scrolls horizontally.
7. Switch the OS to dark mode and reload: confirm the page looks identical (no inversion).
8. Open `http://localhost:3000/` and confirm the holding page renders and links to
   `/design-system`.

## Out of scope

Sanity schema and client, Clerk, PostHog, search and the Context MCP, video ingestion, and the
home/course/lesson/search pages (each has its own reference image and its own task). The
`web/` + `studio/` workspace split is deferred per decision 1.
