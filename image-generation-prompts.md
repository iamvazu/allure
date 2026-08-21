# The Allure Studio — image generation prompts for Google Antigravity

These are ready-to-paste prompts for the pages that currently have no real photography (or are reusing one photo in too many places). Everything else on the site — the homepage hero, the two portfolio galleries, the locality "signature project" images — is already real photography from your actual projects and should stay that way. Don't generate AI photos to replace those.

Every prompt below shares one house style so nothing looks bolted-on next to your real project photos. Paste the **Global style block** at the top of every individual prompt (or as a system/style instruction if Antigravity supports one), then add the section-specific prompt after it.

---

## Global style block (prepend to every prompt)

```
Editorial architectural photography, shot for an Indian interior design studio's
website. Bangalore, India setting and light — warm late-afternoon or soft
overcast daylight, never harsh midday sun. Real, lived-in materials: terracotta
and red brick, laterite stone, teak and cane furniture, brass fittings, bouclé
and linen upholstery, Mangalore roof tiles, warm plaster and lime-wash walls.
Color grade: warm cream, terracotta, muted gold, deep umber — restrained,
never saturated or neon. Shot on a full-frame camera, 35mm or 50mm lens,
shallow-to-medium depth of field, natural asymmetric framing like a real
photographer composed it — not a centered, symmetrical CGI render. Visible
real-world imperfection: slight grain, natural shadow falloff, a plant leaf
in frame, uneven light. No visible text, no logos, no watermarks, no
signage, no readable brand names anywhere in frame. No people's faces in
sharp focus unless the prompt says otherwise — if a person appears, shoot
them from behind or out of focus, ambiguous, not a specific identifiable
individual. Absolutely avoid: glossy 3D-render look, plastic/waxy surfaces,
oversaturated colors, generic Western show-home staging, perfectly symmetrical
composition, visible AI artifacts (warped hands, impossible geometry,
melted text).
```

A note on why the "no identifiable people" line is in there: an AI-generated photo of a specific "founder" or "team member" would misrepresent a real person who doesn't exist, so keep any generated people anonymous, blurred, or from behind — hands arranging a swatch, a back turned toward a window, a silhouette. If you want real team photography, that has to be an actual photoshoot, not generated.

---

## 1. About page — currently has zero images

`src/app/about/page.tsx` is pure text right now. Two images would round it out: one above the fold near the intro paragraph, one near the Experience Center paragraph. Suggested filenames: `/public/images/about/studio-detail.jpg` and `/public/images/about/experience-center.jpg`, roughly 4:3 or 3:2.

**Prompt A — studio/design detail shot:**
```
[Global style block]

A close, intimate still-life shot on a designer's work table inside an Indian
interior design studio: fanned-out fabric swatches in terracotta, cream and
deep umber, a small stack of wood and stone material samples, a rolled
architectural floor plan slightly unfurled, a brass paperweight, soft
directional window light from the left casting long shadows. Nothing posed
or perfectly arranged — a working table mid-project. Shallow depth of field,
the nearest swatch in sharp focus, everything behind it softly blurred.
```

**Prompt B — Experience Center interior:**
```
[Global style block]

The interior of a small design studio "experience center" showroom in
Bangalore: a wall of real material samples — stone slabs, wood veneers,
tile finishes — arranged in an open shelving unit, a modular kitchen
display unit to one side, warm pendant lighting, polished concrete floor,
a single armchair in the foreground slightly out of focus. Feels like a
real working showroom, not a retail store — quiet, considered, a handful
of natural materials rather than a crowded catalog wall.
```

---

## 2. Open Graph / social share image

Right now the metadata in `src/app/layout.tsx` reuses `logo.png` as the social preview image, which looks thin when the site is shared on WhatsApp/LinkedIn/Twitter. A proper 1200×630 banner would help a lot here. Save as `/public/images/og-cover.jpg` and point `metadata.openGraph.images` / `metadata.image` at it.

```
[Global style block]

A wide horizontal architectural photograph (1200x630 crop, landscape) of a
warm Indian courtyard-style home interior: brick and timber, a skylit
courtyard just visible in the background, soft golden-hour light spilling
across the floor, a single piece of sculptural furniture in the foreground
left third of frame, generous negative space of soft-focus wall in the
right two-thirds where a logo and tagline will be overlaid afterward. Leave
the right side of the frame calm and low-contrast — it needs to hold white
text on top of it.
```

---

## 3. Locality pages — 8 pages currently sharing one recycled photo

`src/app/bangalore/[locality]/interior-designer/page.tsx` currently reuses whichever project's `heroImage` is passed in, so all eight area pages (Jakkur, Indiranagar, Koramangala, HSR Layout, Whitefield, Sarjapur Road, Hebbal, Yelahanka) can end up showing the same picture. A distinct, area-flavored hero image per locality would fix that. These don't need to depict the actual street — just a generic Bangalore-residential mood shot appropriate to that area's housing stock (apartment vs. independent villa).

Use this template and swap the bracketed line per locality — keep everything else identical so the eight images still feel like one consistent set:

```
[Global style block]

A [HOUSING TYPE] living space in Bangalore, India, styled by an interior
designer: [MOOD NOTE]. Wide-ish establishing shot, natural window light,
furniture and materials consistent with the global style block.
```

| Locality | HOUSING TYPE | MOOD NOTE |
|---|---|---|
| Jakkur | independent villa | garden-facing living room, greenery visible through a large window |
| Indiranagar | mid-rise apartment | compact, efficient open-plan living-dining space, tree-lined street visible through a balcony door |
| Koramangala | mid-rise apartment | a warm, densely furnished living room with a mix of old and new furniture |
| HSR Layout | independent villa | a clean, modern layout with a home-office nook visible in the background |
| Whitefield | high-rise apartment | a bright, airy living room with floor-to-ceiling windows and a skyline glimpse |
| Sarjapur Road | independent villa | a family-oriented living room with a play corner and soft rug |
| Hebbal | high-rise apartment | a living room with a lake or water-body view suggested through the window |
| Yelahanka | independent villa | a quieter, garden-adjacent verandah-style seating area |

Suggested filenames: `/public/images/localities/<slug>.jpg` (e.g. `/public/images/localities/jakkur.jpg`), matching the `slug` field already in `src/lib/data.ts`.

---

## 4. Contact page — optional atmosphere shot

`src/app/contact/page.tsx` is text/form-only. If you want one image there, this works well beside the form:

```
[Global style block]

A close detail shot near a studio's front desk or entrance: a small
arrangement of fresh flowers or a potted plant in a terracotta pot, a
stack of fabric-bound sample books, warm afternoon light through a nearby
window, a hint of a reception desk edge in soft focus in the background.
Feels welcoming and quiet, not corporate.
```

---

## 5. Services and Process pages — intentionally left photo-free

Worth flagging: back in an earlier round you asked for the Process page (and now the Services pages, matching it) to be redesigned with **no photos** — pure editorial typography, which is why they currently use the manifesto/index-list layout with no imagery at all. That was a deliberate design choice, not a gap, so I haven't written prompts for them.

If you've changed your mind and want a subtle textural touch there — not lifestyle photography, just atmosphere — the one thing that would fit without breaking the editorial feel is a very faint, low-contrast full-bleed background texture behind the hero section only (something like an out-of-focus material close-up at ~8–12% opacity, sitting behind the text rather than beside it). Let me know if you want that and I'll write that specific prompt and wire it in — I'd rather not add photography there without you confirming, since it goes against what you asked for last round.

---

## How to use these with Antigravity

Generate at the aspect ratio each spot needs (roughly: About page shots 4:3, OG image 1200×630 landscape, locality heroes match whatever crop `PortfolioCards`/hero images currently use — check the existing files in `public/images/flagship/` for reference). Save each output into the `public/images/...` path noted above, using the exact filename suggested, and send me the files (or drop them straight into your local folder) — I'll wire each one into its page and rebuild so you can see it in place before we lock anything in.
