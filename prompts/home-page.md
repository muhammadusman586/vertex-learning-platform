# Implementation Prompt — Vertex Home Page

## Goal

Build the Vertex home page at `/` from `design/vertex-home.png`: the page frame (hatched rails +
centered sheet), the site header, the hero (eyebrow pill, display headline, subtitle, CTA, large
search field), the "All Courses" section with three course cards, the update strip, and the
decorative bar band at the bottom.

Reproduce the reference exactly on desktop and adapt sensibly down to mobile. Presentational only:
no Sanity, no Clerk, no PostHog, no search backend. Course data comes from a typed local module
shaped like the eventual Sanity projection.

## Skills and docs read

- `AGENTS.md` — §2 loop, §3 UI work (reference image is the source of truth, reuse existing
  components, responsive down to mobile), §5 structure, §6 stack, §13 checks, §14.
- `prompts/design-system.md` — the decisions the committed component library was built under.
- `node_modules/next/dist/docs/index.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`,
  `04-linking-and-navigating.md`, `05-server-and-client-components.md`,
  `11-css.md`, `12-images.md`, `13-fonts.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/typedRoutes.md`
- Not used: the Sanity/Context skills (no data layer in this task) and `frontend-design`
  (AGENTS.md §3 — the reference image is the source of truth, I do not invent visual direction).

## Code inspected

- `package.json` — Next `16.3.5`, React `19.2.8`, Tailwind v4, TS `^5`. Scripts: `dev`, `build`,
  `typecheck` (`tsc --noEmit`), `start`, `lint`.
- `app/layout.tsx` — Inter + Playfair via `next/font/google`, `LayoutProps<"/">`, body is
  `min-h-full flex flex-col bg-canvas text-neutral-700`.
- `app/globals.css` — Vertex tokens under Tailwind v4 `@theme`, plus the `text-display-1…text-small`
  and `text-eyebrow` utilities.
- `app/page.tsx` — the holding page from the design-system task; it gets replaced.
- `components/ui/*` — `Badge`, `Breadcrumbs`, `Button`, `Card`, `CourseCard`, `Icon`, `LessonCard`,
  `LessonVideoCard`, `Logo`, `NavBar`, `Pagination`, `ProgressBar`, `ResourceCard`,
  `SearchInput`/`TextInput`, `Select`, `Status`, barrel `index.ts`.
- `app/design-system/page.tsx` + `_components/*` — the co-located `_components` precedent.
- `next.config.ts` — **`typedRoutes` is not enabled**, so `<Link href="/courses">` to a route that
  does not exist yet compiles and type-checks; it 404s until that page is built.
- `.next/types/routes.d.ts` — current routes are only `/` and `/design-system`.
- `lib/cn.ts` — the local `cn()` helper.

## Measurements taken from the reference

`design/vertex-home.png` is 1024×1536 and is treated as a 1:1 render of a 1024px-wide viewport.
Values below were sampled from the pixels (bounding boxes, cap heights ÷ cap-height ratio, colour
probes), not estimated by eye.

**Frame** — hatched rails from the viewport edge to x≈30 and from x≈994 to 1024; 1px warm rules at
x≈29 and x≈994; sheet between them is 964 wide on canvas `#FBF8F6`. Hatch: 45° stripes, ~13px
pitch, ~1px wide, `#F4EAE3`. Content column inside the sheet is 856 wide (x 82→938), i.e. 54px of
padding inside each rule.

**Header** — 96px tall, 1px rule at y≈96. Logo mark+wordmark 32px tall at x=71. Nav links ≈16/24,
`neutral-900`, neither marked active. Bell outline icon 24px at x≈869. Avatar circle 50px, right
edge x≈961.

**Hero** (all y from the top of the image)

| Element | Box | Type |
|---|---|---|
| Eyebrow pill | x406–615, y165–203 (209×38, radius ≈12) | `text-eyebrow` 12/16, `primary-600` |
| Headline l1 | y241–306, cap height 50 | Playfair Bold ≈72/73, `neutral-900` |
| Headline l2 | y314–380 (line pitch 73) | wraps after "learning" |
| Subtitle | y407–460, 2 lines, pitch 33, cap 16 | Inter 22/33, `neutral-700` |
| CTA button | x395–622, y500–560 (227×60, radius 12) | Inter Medium ≈18 + trailing arrow |
| Search field | x137–883, y605–687 (746×82, radius 16) | white, warm 1px border, soft shadow |
| Search icon | 28px, left inset ≈24 | `neutral-900` |
| Placeholder | "Ask anything about your learning…" | Inter ≈20, `neutral-500` |
| ⌘K chip | x796–861, y623–668 (66×46, radius 8) | bordered, canvas fill, ≈16 |
| Hero rule | y≈742, spans the full sheet | |

**Courses section** — "All Courses" cap top y800, cap height 25 → Playfair Bold 36/44
(`text-display-2`). "View all courses" + arrow at x796–935, orange. Cards y854–1227 (373 tall),
three columns of ≈275 with a 16px gap, padding ≈28. Inside a card: cover tile 72×72 (radius ≈16) at
y887–961, serif title (Playfair Bold ≈22/30) cap top y994, summary `text-body-lg` `neutral-500`
from y1044 (pitch 25), a 1px divider at y1156, meta row `text-small` at y1179–1194. Docker's cover
is an illustration with no tile; Next.js and TypeScript are solid tiles.

**Update strip** — y1292–1314, spans the content column: 1px rules either side, a 22px orange
outline star at x308–329, text ≈16 `neutral-700` at x352–699.

**Bar band** — full sheet width, bars anchored to the page bottom, each a vertical gradient that is
faint at its top, peaks around `#FCBCA5`, and fades out before the bottom edge; soft-blurred edges.
Measured segments (x-range → height above the bottom edge at y=1536):
30–103→87, 103–162→120, 162–202→152, 202–257→181, 257–347→131, 347–399→95, **gap 400–502**,
502–532→59, 532–617→82, 617–697→113, 697–742→150, 742–807→182, 807–857→93, 857–897→131, 897–994→168.

## Decisions and assumptions

1. **Palette comes from the committed tokens, not from the mockup's pixels.** The mockup carries a
   warm colour grade: the CTA samples `#E36D48` rather than `primary-500 #F97316`, and orange text
   samples `#CC3318`–`#D81600`. The design-system reference labels those same elements
   `#F97316`/`#EA580C`, and that palette is already code. So: CTA fill `primary-500`, orange text
   and icons `primary-600`. **Flagged** — if you want the mockup's terracotta instead, say so and it
   becomes a one-token change.
2. **One warm hairline token is added.** Every rule on this page (frame, header, hero, card divider,
   strip) samples warm `#F2EBE6`/`#F3EAE5`, not the cool `neutral-200 #E2E8F0`. Add
   `--color-rule: #F1E8E2` to `@theme` and use it for this page's rules. Existing components keep
   their `neutral-200` borders; nothing already built changes.
3. **The page frame is a reusable component, not root-layout markup.** `vertex-course.png` and
   `vertex-lesson.png` show the same rails, so `PageFrame` lands in `components/layout/` for later
   pages to reuse — but it is applied per page, so `/design-system` (which has no rails) is
   untouched. At viewports wider than the sheet, the sheet stays centred at its max width and the
   hatch fills the rest; below `lg` the rails collapse to 0 and the hatch is hidden.
4. **Hero type is larger than the base scale, on purpose.** The 72px headline, 22px subtitle, 82px
   search field and 60px CTA are hero-scale and exist nowhere in the design system. They are added
   as: a `text-display-hero` utility in `globals.css` (Playfair Bold, `clamp(40px, 7vw, 72px)`), a
   `size="xl"` on `Button`, and a `size="hero"` on `SearchInput`. Both component additions are
   additive — existing call sites and `/design-system` render identically.
5. **`CourseCard` gains a `variant`.** The home card is the same concept in a different layout
   (cover on top, serif title, divider above the meta row), so `CourseCard` gets
   `variant?: "compact" | "stacked"` (default `"compact"`, which is exactly today's markup) plus an
   optional `cover?: ReactNode` and `href?: string`. No second course-card component.
6. **Course data is a typed local module.** `lib/courses.ts` exports a `Course` type and an
   `async getFeaturedCourses()` returning the three courses in the reference. It is shaped like the
   eventual Sanity projection (`title`, `slug`, `summary`, `level`, `duration`, `moduleCount`,
   `cover`) so swapping in a GROQ query later touches one file. **Flagged** — placeholder content.
7. **Brand covers are local SVGs** in `public/brands/` (`nextjs.svg`, `typescript.svg`,
   `docker.svg`), rendered with `next/image` at 72px. The Docker whale is hand-authored and will be
   a close likeness, not the exact official artwork. These are placeholders standing in for the
   Sanity cover image.
8. **The avatar is a placeholder.** The reference shows a photo; there is no Clerk and no user yet,
   so it renders as a 48px circle with `neutral-100` fill, a warm ring, and the filled `user` icon,
   labelled "Account". It becomes Clerk's `<UserButton />` when auth lands. **Flagged.**
9. **The hero search is a real GET form.** `<form action="/search">` with `name="q"` submits to the
   future search page — no JS required, no typed-route problem, and it 404s until `/search` exists.
   The ⌘K chip is wired: a small client component focuses the field on ⌘K / Ctrl+K. Nothing calls an
   API, and nothing is stored.
10. **The bar band is decorative.** Rendered as `aria-hidden` divs from a bar array derived from the
    measurements above, sized in percentages so it scales with the viewport. No canvas, no image.
11. **Neither nav item is active on `/`.** `NavBar` is used with `activeHref={undefined}` so both
    links render `neutral-900`, as in the reference.
12. **Two known reference inconsistencies, resolved toward one grid.** The header content spans
    x71→961 (890) while the cards span x82→938 (856); everything is put in the single 856 column.
    The card divider samples 18px inset while the card text sits at 28px; the divider spans the
    28px padding box.
13. **No analytics.** AGENTS.md §7 wants a catalog-view event, but PostHog is not installed and
    wiring it is its own task. **Flagged.**

## Files to touch

**Modified**

- `app/globals.css` — add `--color-rule`, the `text-display-hero` utility, and a `hatch` background
  utility for the rails.
- `app/page.tsx` — replace the holding page with the home page composition (server component).
- `components/ui/icon.tsx` — add `arrow-right` and `star` glyphs (24×24 grid, 2px stroke, rounded
  caps, matching the existing authoring rules).
- `components/ui/button.tsx` — add `size: "xl"` (h-15/60px, px-6, 18px text).
- `components/ui/input.tsx` — add `size?: "md" | "hero"` to `SearchInput` (hero: h-20/82px,
  radius `lg`, 28px icon, 20px text, larger ⌘K chip, soft shadow).
- `components/ui/course-card.tsx` — add `variant`, `cover`, `href` as described in decision 5.
- `components/ui/index.ts` — export any new types.

**Created**

- `components/layout/page-frame.tsx` — hatched rails, sheet, warm rules, centred content container.
- `components/layout/site-header.tsx` — `Logo` + `NavBar` + notification bell + avatar placeholder.
- `app/_components/hero.tsx` — eyebrow pill, headline, subtitle, CTA, search.
- `app/_components/hero-search.tsx` — `"use client"`, the GET form plus the ⌘K shortcut.
- `app/_components/course-section.tsx` — section header, "View all courses" link, the card grid.
- `app/_components/update-strip.tsx` — rules + star + copy.
- `app/_components/bar-band.tsx` — the decorative bars.
- `lib/courses.ts` — the `Course` type and `getFeaturedCourses()`.
- `public/brands/nextjs.svg`, `public/brands/typescript.svg`, `public/brands/docker.svg`.

## Requirements

### Copy (exact, from the reference)

- Eyebrow: `INTELLIGENT LEARNING`
- Headline: `Search your learning in plain English.` — must break after "learning" at desktop width.
- Subtitle: `Vertex understands what you want to learn and finds the exact lessons across all your courses.`
- CTA: `Explore Courses` → `/courses`
- Search placeholder: `Ask anything about your learning...`
- Section: `All Courses`; link `View all courses` → `/courses`
- Cards:
  1. `Next.js for Production` — "Build scalable, high-performance web applications with Next.js." —
     Intermediate · 18h 24m · 12 modules
  2. `Docker Essentials` — "Containerize applications and streamline your development workflow." —
     Beginner · 10h 12m · 8 modules
  3. `TypeScript Deep Dive` — "Go beyond the basics and write safer, more expressive code." —
     Intermediate · 14h 36m · 10 modules
- Strip: `New courses and lessons added every week.`

### Layout

- Sheet max width 964px, centred; content column max width 856px inside it.
- Header 96px with a bottom rule; hero block with a bottom rule; both rules span the full sheet.
- Vertical rhythm inside the hero (from the measurements): 68 above the pill, 38 pill→headline,
  27 headline→subtitle, 40 subtitle→CTA, 45 CTA→search, 55 search→rule.
- Courses section: 58 rule→"All Courses", 29 heading→cards, cards→strip 65, strip→bars 26.
- Cards: `grid-cols-3`, 16px gap, equal height (cards stretch; the divider and meta row sit at the
  bottom regardless of summary length, as in the reference where Docker runs to three lines).

### Responsive (no mobile reference — adapt, keep desktop exact)

- `lg` and up: exactly as measured.
- `md`: cards go to 2 columns; sheet fills the viewport; rails collapse.
- below `md`: single column; headline clamps to ~40px; subtitle to 18/28; search field to 56px with
  the ⌘K chip hidden; CTA full width; content padding 24px; the strip's side rules drop and the star
  sits inline with the copy; the bar band shortens to ~120px.
- No horizontal page scroll at 360px.

### Accessibility

- One `<h1>` (the headline); "All Courses" is an `<h2>`; card titles are `<h3>`.
- The search field has a visible-to-AT label (`<label class="sr-only">`), the ⌘K chip is
  `aria-hidden`, and the shortcut does not trap keys typed into other inputs.
- Bell and avatar are real `<button>`s with `aria-label`; decorative icons are `aria-hidden`.
- Every interactive element keeps the design system's `focus-visible` ring.
- The bar band and the hatch rails are `aria-hidden` and `pointer-events-none`.
- Card covers get meaningful `alt` text (or empty `alt` where the title already says it).

## Security considerations

- Nothing on this page touches Sanity, Clerk, PostHog, tokens, or the network; no environment
  variables are introduced and no `.env.example` change is needed.
- The only client component is the search form; it holds no secret, calls no API, and writes
  nothing. Submitting is a plain GET navigation, so the query lands in the URL only.
- Server/client boundary per AGENTS.md §5: the page, header, frame, cards, strip, and band are all
  server components.
- No `dangerouslySetInnerHTML`; brand SVGs are static files under `public/` served as images, not
  inlined from untrusted input.
- No new runtime dependencies.

## Acceptance criteria

1. `/` matches `design/vertex-home.png` at a 1024px viewport — frame, header, hero, section, cards,
   strip, and bar band, in that order, with the copy above verbatim.
2. Rails, rules, sheet width, and the 856px content column match the measured geometry.
3. The headline renders in Playfair at hero scale and breaks after "learning"; the subtitle, CTA,
   and search field match their measured sizes.
4. The three cards render in the stacked variant with cover, serif title, summary, divider, and meta
   row, all three the same height.
5. The update strip and the decorative bar band render, and the band's bars follow the measured
   heights and the middle gap.
6. `/design-system` is visually unchanged (the component additions are additive).
7. ⌘K / Ctrl+K focuses the search field; submitting navigates to `/search?q=…`.
8. Usable at 360px with no horizontal scroll; cards stack; rails hidden.
9. Tab order is sensible and every control shows a focus ring.
10. `npm run typecheck`, `npm run lint`, and `npm run build` all pass clean.

## Checks to run

From the repo root, reporting real output:

1. `npm run typecheck`
2. `npm run lint`
3. `npm run build` (routes and global CSS change, so the build is required)
4. `npm run dev` for the manual pass

Studio checks in AGENTS.md §13 do not apply — there is no Studio workspace yet.

## Manual test steps

1. `npm run dev`, open `http://localhost:3000/` at a 1024px-wide window.
2. Compare against `design/vertex-home.png` top to bottom: rails and rules, header, pill, headline
   break, subtitle, CTA, search field and ⌘K chip, "All Courses" row, the three cards, the strip,
   the bars.
3. Press ⌘K (or Ctrl+K): the search field takes focus. Type "caching" and press Enter: the URL
   becomes `/search?q=caching` (a 404 until the search page exists).
4. Click `Explore Courses` and `View all courses`: both go to `/courses` (404 for now).
5. Tab from the top of the page: logo, nav links, bell, avatar, CTA, search, card links, "View all
   courses" — each with a visible ring.
6. Resize to 375px: one column, no horizontal scroll, headline and search shrink, rails gone.
7. Open `http://localhost:3000/design-system` and confirm it is unchanged.
8. Switch the OS to dark mode and reload: the page is identical.

## Out of scope

Sanity schema and client, Clerk, PostHog, the search route and results page, video ingestion, and
the `/courses`, `/my-learning`, `/search` pages themselves. The `web/` + `studio/` workspace split
stays deferred, as in the design-system task.
