# Image prompts — Services (main + all 11 detail pages) and Process page

Same house style as the first batch, so nothing looks like it came from a different shoot. Prepend this to every prompt below.

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
real-world imperfection: slight grain, natural shadow falloff, uneven light.
No visible text, no logos, no watermarks, no signage, no readable brand names
anywhere in frame. No identifiable people's faces in sharp focus — if a
person appears, shoot them from behind, silhouetted, or out of focus.
Absolutely avoid: glossy 3D-render look, plastic/waxy surfaces, oversaturated
colors, generic Western show-home staging, perfectly symmetrical composition,
visible AI artifacts.
```

## How these will slot in

Right now `/services`, every `/services/[slug]` page, and `/process` are pure typography by design (that was your call last round, to get away from generic card-grid layouts). Adding one deliberate photo per page — not a photo grid — keeps that editorial feel rather than undoing it: a single full-width band image on the main Services and Process pages, and one supporting image per individual service page sitting inside its existing manifesto layout. Once you've generated these, send them over and I'll wire the layout to hold them and rebuild so you can see it before anything's final.

Suggested folders: `/public/images/services/` and `/public/images/process/`. Aspect ratio: roughly 16:9 or 3:2, landscape, for all of these.

---

## Main Services page (`/services`) — 1 image

Filename: `/public/images/services/hero.jpg`

```
[Global style block]

A wide establishing shot inside a single well-resolved Bangalore home that
touches several senses of the word "service" at once: a modular kitchen
visible through an open doorway on one side, a styled living room in the
foreground, natural materials — wood, brass, stone — throughout. Meant to
represent the full breadth of interior design work in one calm frame, not
any one specialty. Generous negative space along the top third for a
heading to sit over later.
```

---

## Process page (`/process`) — 1 hero + 4 stage images + 4 Edit-package images

### Hero band (below the page intro)
Filename: `/public/images/process/hero.jpg`

```
[Global style block]

An overhead-angled shot of a designer's work table mid-project: an
architectural floor plan partly unrolled with pencil marks on it, a
tape measure, a few material swatches arranged to one side, soft
directional light from a window just out of frame. Represents "the
process" itself — considered, methodical — rather than a finished room.
```

### Stage 01 — Initial Consultation
Filename: `/public/images/process/stage-01-consultation.jpg`

```
[Global style block]

An empty, unfurnished Bangalore apartment room mid-walkthrough: bare
walls, natural light through an uncovered window, a rolled floor plan
and a tape measure resting on the floor in the foreground, no people in
frame. Conveys "before the design starts" — a blank canvas being
assessed, not yet designed.
```

### Stage 02 — Design & Planning
Filename: `/public/images/process/stage-02-planning.jpg`

```
[Global style block]

A close overhead shot of a design desk: a laptop showing a blurred/
out-of-focus floor plan on screen, a fan of material swatches in
terracotta and cream tones, a wood veneer sample, a brass compass or
scale ruler, warm desk-lamp light. Represents the detailed planning
stage — materials and layout being resolved on paper before anything
is built.
```

### Stage 03 — Production & Implementation
Filename: `/public/images/process/stage-03-production.jpg`

```
[Global style block]

Inside a carpentry/modular-furniture production workshop: a
half-finished wooden cabinet frame on a workbench, wood shavings and
sawdust catching warm side light, tools laid out neatly, a stack of
finished wood veneer panels leaning against a wall in the background.
Feels like real craftsmanship mid-build, not a sterile factory.
```

### Stage 04 — Project Handover
Filename: `/public/images/process/stage-04-handover.jpg`

```
[Global style block]

A finished, sunlit living room console table with a single house key
resting on a small brass tray, a fresh stem of flowers in a terracotta
vase beside it, out-of-focus finished room behind. Quiet, conclusive
mood — the moment a project is handed over, empty of people.
```

### The Modular Edit
Filename: `/public/images/process/edit-modular.jpg`

```
[Global style block]

A modular kitchen and adjacent open wardrobe unit shot together in one
frame — clean cabinetry lines, warm wood-tone finishes, brass handles,
soft task lighting under the kitchen cabinets.
```

### The Styling Edit
Filename: `/public/images/process/edit-styling.jpg`

```
[Global style block]

A close styling vignette on a console or coffee table: a stack of
books, a small sculptural object, a textured cushion corner, a single
stem in a vase, arranged with an editor's eye rather than symmetrically.
No full room visible — just the styling detail.
```

### The Signature Edit
Filename: `/public/images/process/edit-signature.jpg`

```
[Global style block]

One fully resolved living room shot wide enough to show layout, lighting
and furniture working together — the studio's strongest, most complete
"hero" room image in this whole set. Layered lighting, a mix of textures,
generous natural light.
```

### The Complete Edit
Filename: `/public/images/process/edit-complete.jpg`

```
[Global style block]

A hallway or landing shot with sightlines into two or three different
rooms at once (a living room to one side, a bedroom doorway beyond),
suggesting a whole home resolved together rather than one room. Warm,
continuous material and light story from room to room.
```

---

## Individual service pages — 1 image each

Same filename pattern: `/public/images/services/<slug>.jpg` (the slug matches the page URL exactly, so these drop straight in).

### `residential-interior-design.jpg` — Residential Interior Design
```
[Global style block]

A combined living-dining space in a Bangalore home, shot wide enough to
show layout, lighting and furniture as one connected decision — the
services's core promise. Warm, complete, nothing feels like a single
isolated purchase.
```

### `space-planning.jpg` — Space Planning
```
[Global style block]

A shot taken from one room looking through an open doorway into the
next, showing how furniture and traffic flow connect two spaces — a
sense of considered layout rather than a static single-room photo.
Compact-apartment scale, every piece of furniture placed with intent.
```

### `design-consultation.jpg` — Design Consultation
```
[Global style block]

A close tabletop shot: an open notebook with rough pencil sketches of a
room layout, a cup of tea, two or three material swatches nearby, soft
window light. Feels like the very first working session of a project.
```

### `lighting-design.jpg` — Lighting Design
```
[Global style block]

A living room at dusk showing three distinct layers of light at once —
a sculptural pendant fixture overhead, a warm floor lamp in one corner,
and a narrow accent light grazing a textured wall — with the window
light fading to blue outside. Lighting itself is the subject of the
shot.
```

### `custom-furniture-design.jpg` — Custom Furniture Design
```
[Global style block]

A close detail shot of a custom wood furniture piece mid-craft — a
dovetail joint or hand-carved leg detail in sharp focus, wood grain
visible, warm raking light. Craftsmanship as the subject, not a full
piece of furniture in a room.
```

### `art-and-accessory-procurement.jpg` — Art & Accessory Procurement
```
[Global style block]

A styled shelf or console with a small curated collection: one ceramic
object, a piece of textile art or small painting (abstract, no
readable text), a brass bowl, a stem of dried pampas grass. The
"finishing touches" of a room, shot close.
```

### `color-consultation.jpg` — Color Consultation
```
[Global style block]

Late-afternoon light raking across a warm terracotta-painted accent
wall, paint swatches fanned on a small table below it in complementary
tones, shadow pattern from a nearby window visible on the wall. Color
and light as the actual subject.
```

### `renovation-and-remodeling.jpg` — Renovation & Remodeling
```
[Global style block]

A room mid-renovation where one wall shows raw exposed brick and old
plaster, and the adjacent wall is already finished with fresh warm
plaster and trim — both stages visible in one honest frame, natural
work light, no people.
```

### `project-management.jpg` — Project Management
```
[Global style block]

A rolled architectural drawing and a clipboard with a checklist resting
on a stool at the edge of an active but tidy construction site corner —
exposed structural elements in the background, soft natural light,
no identifiable people.
```

### `styling-and-staging.jpg` — Styling & Staging
```
[Global style block]

A fully staged living room corner — a sofa with layered cushions and a
throw, a coffee table styled with a tray and a small stack of books, a
floor lamp — shot to emphasize the finished styling rather than any
construction. Feels ready to be photographed for a listing.
```

### `wardrobe-design.jpg` — Wardrobe Design
```
[Global style block]

The open interior of a custom wardrobe system: warm wood-tone shelving,
neatly organized hanging space, a soft-close drawer partly open, brass
hardware, gentle internal lighting. Shot straight-on into the open
wardrobe, not a bedroom-wide shot.
```

### `modular-kitchen.jpg` — Modular Kitchen
```
[Global style block]

A modular kitchen counter and cabinetry detail — warm wood-and-stone
material palette, under-cabinet task lighting on, a single considered
object on the counter (a wooden board, a ceramic bowl). Shot close
enough to read the cabinetry and hardware detail, not a wide kitchen
photo.
```

---

That's 21 images total: 1 for the main Services page, 11 for the individual service pages, and 9 for Process (1 hero + 4 stages + 4 Edit packages). Generate at your own pace — send whatever's ready and I'll wire those in first rather than waiting for the full set.
