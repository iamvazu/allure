# Service page photo prompts — Gemini-ready

## What I found checking every image on the site

Every image is real (nothing broken, nothing missing that the code expects) — the gap is coverage, not bugs. Of the 12 individual service pages, only 4 have a photo at all: **Residential Interior Design**, **Space Planning**, **Design Consultation**, **Lighting Design**. The other 8 — including **Modular Kitchen** and **Wardrobe Design**, the two you specifically flagged — have none.

The bigger issue: every image on the site so far, including all 4 existing service photos and the general `services/hero.jpg`, sits in the same material register — terracotta floors, exposed red brick, cane furniture, brass fittings. That's a real, good register for the studio (it's literally what the Aangan and flagship projects look like), but when it's the *only* register across dozens of images, the site reads as one-note. This is the same issue flagged in the earlier `image-style-registers.md` for the locality pages — it was fixed there, but the services pages never got the second pass.

I've updated the service page template (already pushed to your machine) so each service can show **up to 3 photos**: a hero image plus a 2-photo gallery beneath it. Below is a complete, ready-to-paste prompt for every photo — 32 in total: 2 new photos for each of the 4 services that already have one, and 3 new photos for each of the 8 that have none.

## Exactly where each file goes

Save every image into `public/images/services/` using this exact naming — the code checks for these three filenames per service and only renders the ones that exist:

- `{slug}.jpg` — the hero (already exists for 4 services; only generate this one for the 8 that don't have it yet)
- `{slug}-2.jpg` — first gallery photo
- `{slug}-3.jpg` — second gallery photo

Example for Modular Kitchen: `modular-kitchen.jpg`, `modular-kitchen-2.jpg`, `modular-kitchen-3.jpg`.

## Shared technical block

Append this to the end of every prompt below, after the material/scene-specific text:

```
Editorial interior photography, not a CGI render — natural imperfection, real
material texture, believable Bangalore daylight or warm evening light depending
on the scene. No visible readable text, logos, or brand marks anywhere in frame.
If a person appears, keep them turned away or at a distance — no close-up faces.
16:9 landscape framing, shot on what reads like a full-frame camera at a natural
eye-level or slightly elevated angle, not a wide-angle real-estate distortion.
```

## The acrylic modular register (for Modular Kitchen + Wardrobe Design)

You specifically asked for modern modular kitchens and wardrobes with acrylic sheets — this is the register to use for all 6 of those images (and it's a good option anywhere else you want a sleeker, more contemporary look than the studio's default warm-vernacular register):

```
Modern Indian modular interior, acrylic-finish register: high-gloss or soft-matte
acrylic-sheet cabinet shutters with a handleless profile or slim aluminium edge
pulls, in a restrained two-tone palette (glossy white paired with charcoal, deep
bottle-green, or navy — avoid an all-wood-tone front). Engineered quartz or
granite countertop, integrated LED strip and under-cabinet lighting, soft-close
hinges and drawers, large-format vitrified or marble-look flooring. Sleek,
precise, reflective surfaces — the opposite of the studio's rustic/handcrafted
register. Bangalore apartment or villa setting.
```

---

## 1. Residential Interior Design — has a hero, needs `-2` and `-3`

**residential-interior-design-2.jpg** — a different register than the existing hero, to show the range of the studio's actual work:
> A bright, contemporary open-plan living-and-dining space in a Bangalore apartment. [Acrylic modular register above, applied to a nearby kitchenette or media unit visible in the background] Large windows, daylight, a mix of a low-slung sofa and a sculptural coffee table. [Shared technical block]

**residential-interior-design-3.jpg** — a quieter register, showing the studio also does calm, pared-back work:
> A calm, pared-back bedroom: pale limewash or plaster walls, light oak or ash wood furniture, linen bedding, one muted accent color, soft morning light through a window. Mostly neutral palette, minimal styling. [Shared technical block]

## 2. Space Planning — has a hero, needs `-2` and `-3`

**space-planning-2.jpg**:
> A high-angle or elevated three-quarter view of an open-plan living-dining layout in a compact Bangalore apartment, showing clear furniture zones and an unobstructed walking path between them. Quiet, neutral palette — pale walls, light wood flooring. Daylight. [Shared technical block]

**space-planning-3.jpg**:
> A close-up flat-lay of a furniture-layout floor plan sketch on tracing paper, a scale ruler, and a soft pencil, on a plain wooden desk — no laptop or digital devices in frame. Natural window light from one side. [Shared technical block]

## 3. Design Consultation — has a hero, needs `-2` and `-3`

**design-consultation-2.jpg**:
> A designer and a client seated together at a table, reviewing a mood board and material swatches spread between them — shown from behind or a three-quarter angle, no close-up faces. The swatches on the table mix both a warm terracotta/wood sample and a glossy acrylic sample, side by side, showing real options being compared. [Shared technical block]

**design-consultation-3.jpg**:
> A close-up flat-lay of a materials tray: two or three fabric swatches, a couple of paint chips, one small glossy acrylic sample chip, and a thin wood veneer sample, arranged on a plain neutral surface with soft directional light. [Shared technical block]

## 4. Lighting Design — has a hero, needs `-2` and `-3`

**lighting-design-2.jpg** — ties lighting directly to the acrylic-kitchen material ask:
> [Acrylic modular register above] A modern kitchen island shot at dusk, with integrated cove and under-cabinet LED lighting glowing warmly against the glossy cabinet fronts, ambient room light dim behind it. [Shared technical block]

**lighting-design-3.jpg**:
> A close-up detail of a single sculptural pendant light fixture hanging over a dining table, minimal surrounding styling, dramatic single-source lighting with soft falloff into shadow. [Shared technical block]

## 5. Custom Furniture Design — no images yet, needs `hero`, `-2`, `-3`

**custom-furniture-design.jpg**:
> [Acrylic modular register above, applied loosely] A sculptural custom console table or lounge chair as the clear focal point of a bright, contemporary living room, built-for-the-space proportions, natural daylight. [Shared technical block]

**custom-furniture-design-2.jpg**:
> A close-up detail shot of fine furniture joinery — real wood grain, a brass inlay or edge detail, shown on a workshop fabrication table with visible tools nearby. [Shared technical block]

**custom-furniture-design-3.jpg**:
> A custom-built banquette seating nook fitted precisely into a window bay, upholstered cushion, warm daylight through the window. [Shared technical block]

## 6. Art & Accessory Procurement — no images yet, needs `hero`, `-2`, `-3`

**art-and-accessory-procurement.jpg**:
> A styled console table vignette: one ceramic vase, a small sculptural object, and a neat stack of books, against a plain plaster wall, soft natural side light. Quiet, uncluttered styling. [Shared technical block]

**art-and-accessory-procurement-2.jpg**:
> A curated gallery-wall detail — an asymmetric arrangement of framed art and one or two small shelf objects on a pale wall, natural light raking across the surface. [Shared technical block]

**art-and-accessory-procurement-3.jpg**:
> A flat-lay of textiles and accessories: two or three cushion fabric swatches, a small sculptural object, and a set of coasters, arranged aesthetically on a neutral linen surface. [Shared technical block]

## 7. Color Consultation — no images yet, needs `hero`, `-2`, `-3`

**color-consultation.jpg**:
> [Acrylic modular register loosely applied to any visible furniture] A living room with a bold two-tone accent wall — deep bottle-green or navy paired with crisp white trim — rest of the room kept neutral, daylight through a window. [Shared technical block]

**color-consultation-2.jpg**:
> A close-up of four or five paint swatches taped directly to a plain wall, photographed in natural window light, showing how the same swatch reads differently across the wall's lit and shaded portions. [Shared technical block]

**color-consultation-3.jpg**:
> A flat-lay of a color palette board: paint chips fanned out, two fabric swatches, and a single paintbrush, arranged on a neutral desk surface. [Shared technical block]

## 8. Renovation & Remodeling — no images yet, needs `hero`, `-2`, `-3`

**renovation-and-remodeling.jpg**:
> The living room of a renovated older independent Bangalore house — original exposed brick or stone wall retained on one side, paired with new flooring, updated furniture and fresh paint on the rest of the room, showing old structure and new design working together. Daylight. [Shared technical block]

**renovation-and-remodeling-2.jpg**:
> A room mid-renovation: dust sheets over furniture, exposed wall texture where plaster has been stripped, a few basic tools resting on a windowsill, natural light through the window. Process shot, not a finished space. [Shared technical block]

**renovation-and-remodeling-3.jpg**:
> A refreshed older apartment kitchen — the original room layout and window position kept as-is, but new cabinetry and a new countertop installed, showing renovation rather than a from-scratch build. [Shared technical block]

## 9. Project Management — no images yet, needs `hero`, `-2`, `-3`

**project-management.jpg**:
> A project supervisor and a site worker reviewing a floor plan together on-site, amid partially installed modular units and construction materials, both shown from behind or at a distance — no close-up faces. Work-in-progress, practical lighting. [Shared technical block]

**project-management-2.jpg**:
> Modular kitchen cabinet units being installed on-site — open packaging, a few tools, one unit already mounted and one being lifted into place, natural light. [Shared technical block]

**project-management-3.jpg**:
> Two people walking through a part-finished home holding a rolled set of blueprints, shown from behind, construction materials visible along the walls. [Shared technical block]

## 10. Styling & Staging — no images yet, needs `hero`, `-2`, `-3`

**styling-and-staging.jpg**:
> A fully styled living room vignette: layered cushions and a throw on a sofa, a small plant, one framed piece of art, arranged with an editorial eye, bright daylight. [Shared technical block]

**styling-and-staging-2.jpg**:
> A styled bedroom corner: bed dressed with layered linens, a small reading chair with a throw, soft natural light through a sheer curtain. [Shared technical block]

**styling-and-staging-3.jpg**:
> An overhead or three-quarter shot of a styled dining tablescape — table set with ceramic plates, linen napkins, and a small loose floral arrangement. [Shared technical block]

## 11. Wardrobe Design — no images yet, needs `hero`, `-2`, `-3` (all acrylic register)

**wardrobe-design.jpg**:
> [Acrylic modular register above] A full-height wardrobe wall with sliding doors in a two-tone glossy acrylic finish (white paired with charcoal or navy), handleless profile, soft LED accent lighting along one edge, bedroom setting. [Shared technical block]

**wardrobe-design-2.jpg**:
> [Acrylic modular register above] An open wardrobe interior detail: organized hanging space, drawers, and shelving in a glossy acrylic finish, one soft-close drawer shown slightly open. [Shared technical block]

**wardrobe-design-3.jpg**:
> [Acrylic modular register above] A walk-in wardrobe / dressing area with a full-length mirror, a small upholstered bench, and acrylic-finish cabinetry along the walls, warm accent lighting. [Shared technical block]

## 12. Modular Kitchen — no images yet, needs `hero`, `-2`, `-3` (all acrylic register)

**modular-kitchen.jpg**:
> [Acrylic modular register above] A full modern modular kitchen with an island, glossy acrylic cabinet fronts in a two-tone palette, quartz countertop, and a pendant light over the island, Bangalore apartment setting, daylight through a window. [Shared technical block]

**modular-kitchen-2.jpg**:
> [Acrylic modular register above] A close-up detail of the kitchen island: acrylic cabinet-front detail, an integrated hob, slim hardware, under-cabinet LED strip lit. [Shared technical block]

**modular-kitchen-3.jpg**:
> [Acrylic modular register above] A corner detail shot of a tall pantry unit with loft storage above, glossy acrylic finish, one soft-close door shown mid-motion, countertop kept minimally styled. [Shared technical block]

---

## One more thing worth knowing

The 3 existing images I'd flag as worth optionally regenerating later, once the new ones are in — not urgent, just noted honestly: `services/hero.jpg`, `services/lighting-design.jpg`, and `services/residential-interior-design.jpg` are all in the same warm-vernacular register as everything else generated so far. They're not wrong, just repetitive at this point. Nothing to do about it today — the 32 prompts above already pull the *new* Services section into a fuller range; that's just the next thing to consider once these land.
