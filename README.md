# The Allure Studio — website (v1 foundation)

Real, running Next.js site built from the growth plan. This is a working foundation, not a
finished 60-page site — see "What's built vs. templated" below.

## Run it

```
npm install
npm run dev      # http://localhost:3000
```

```
npm run build && npm run start   # production build, matches what gets deployed
```

Requires Node 18.18+ (built and tested on Node 22).

## What's built

- **Homepage** — real scroll-scrubbed hero (11 real photos of the flagship project, pure vanilla
  JS + CSS, no external libraries), studio statement, services grid, portfolio, process, FAQ,
  locality strip, contact.
- **Both portfolio projects, in full** — the flagship ("The Signature Curve") and Aangan, each
  with real intro copy and a real scene-by-scene gallery from the actual project photos.
- **Aangan's scroll-hero now plays real video**, not just still photos. Six of its twelve scenes
  (arrival, the courtyard, the swing alcove, the family lounge, the dining room, the primary
  suite) have real Google Flow-generated clips wired in — three with both a horizontal (desktop)
  and vertical (mobile) cut, three with horizontal only. `ScrollHero.tsx` shows whichever variant
  fits the viewport, plays only the active scene's video (everything else stays paused so the
  browser isn't decoding a dozen streams at once), and falls back cleanly to the still photo for
  any scene without footage yet. The "Scene by scene" gallery grid on Aangan's page shows the same
  clips as small autoplay previews with a "Video" badge, backed by the real photo as a `poster` so
  a cell never goes blank if a clip is slow to load. Video files live in `public/videos/aangan/`;
  add more by dropping a clip there and pointing a scene's `video: { horizontal, vertical }`
  fields at it in `src/lib/data.ts` — no other code changes needed.
- **All 11 services**, each with its own real (not lorem) page and `Service` schema markup.
- **8 Bangalore locality pages** ("Wave 1" from the plan: Jakkur, Indiranagar, Koramangala, HSR
  Layout, Whitefield, Sarjapur Road, Hebbal, Yelahanka) — each with distinct intro copy and
  locality-specific FAQs, not mail-merged boilerplate. Add Wave 2 by adding entries to the
  `localities` array in `src/lib/data.ts` — the page template picks them up automatically.
- Site-wide `HomeAndConstructionBusiness` schema, `FAQPage` schema on the FAQ page, `Service`
  schema on every service page.

## What's intentionally still a placeholder

- **The flagship hero (homepage + "The Signature Curve" page) still uses only still photos.**
  `ScrollHero.tsx` already supports video per scene — the same component now used for Aangan — so
  wiring in video for the flagship is just adding `video: { horizontal, vertical }` entries to its
  scenes in `src/lib/data.ts` and dropping the clips into `public/videos/flagship/`. No component
  changes needed.
- **"By the numbers" stats, real testimonials, and GA/Search Console** are not wired in — you
  said to leave those for now. Drop real figures into `src/lib/data.ts` and the homepage stat
  section can be added back in.
- **Wave 2 localities** (11 more from the plan) aren't built yet — same template, just needs the
  data entries and, ideally, a real locality-specific fact per page before publishing (see the
  scaled-content-abuse warning in the growth plan, §9).
- Google Fonts are loaded via a `<link>` tag rather than `next/font/google`, because this
  workspace's build environment couldn't reach fonts.googleapis.com. If your real deploy target
  has open egress at build time, switching to `next/font/google` in `src/app/layout.tsx` is a
  small perf win — see the comment left in that file.

## Structure

```
src/app/               — routes (App Router)
src/components/        — Nav, Footer, ScrollHero, ServiceGrid, PortfolioCards, FaqAccordion, LocalityChips
src/lib/data.ts         — all real content: services, localities, FAQs, both projects' scene data
public/images/          — your actual project photos, resized for web (flagship/, aangan/, brand/)
```
