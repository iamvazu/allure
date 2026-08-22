# Fixing the "everything is terracotta" problem

Looked at what Gemini generated so far — the material palette is the issue, not the layout. I checked `services/lighting-design.jpg`, `about/studio-detail.jpg`, and `localities/whitefield.jpg` specifically: the Whitefield one was supposed to be "a bright, airy high-rise living room with a skyline glimpse" and it still came back with a jute rug, bouclé cushions, cane chair and brass bowl — the same warm-vernacular kit as everything else. That's on my original prompt: the global style block I gave you was so specific about brick, laterite, cane and Mangalore tile that it overrode whatever each individual prompt actually asked for. Every image ends up looking like it's furnishing the same Aangan-style house.

The fix is to stop using one style block for everything and pick a **register** per image instead. Three registers below — swap the bracketed line in each service/page prompt for whichever fits, instead of the old one-size-block.

## The three registers

**Warm Vernacular** — what you've been getting. Use it for: Wardrobe Design, Renovation & Remodeling, the About page, the Aangan-adjacent content. Brick, laterite, cane, brass, Mangalore tile, terracotta textiles.

```
Warm vernacular Indian interior: red brick, laterite stone, cane and teak
furniture, brass fittings, terracotta and ochre textiles, Mangalore tile
where a roofline is visible. Warm late-afternoon light.
```

**Contemporary Gloss** — a register you don't have yet at all. Use it for: Modular Kitchen, Custom Furniture Design, Color Consultation, Lighting Design, the high-rise locality pages (Whitefield, Hebbal, Indiranagar). Lacquered or matte-lacquer cabinetry, engineered stone counters, monochrome or two-tone palettes (charcoal, ivory, sage, deep navy), brushed-brass or matte-black hardware, cove and under-cabinet lighting, floor-to-ceiling glazing, no exposed brick or terracotta anywhere in frame.

```
Contemporary Indian interior, gloss register: lacquered or matte-lacquer
cabinetry, engineered stone or quartz counters, a restrained monochrome or
two-tone palette (charcoal, ivory, sage, or deep navy — not terracotta),
brushed brass or matte black hardware, cove and under-cabinet lighting,
floor-to-ceiling glazing where relevant. Sleek and precise rather than
rustic or handcrafted. Bangalore high-rise or independent-villa setting.
```

**Quiet Minimal** — a middle register for pages that shouldn't lean hard either direction. Use it for: Space Planning, Design Consultation, Project Management, Styling & Staging, Art & Accessory Procurement. Pale limewash or plaster walls, light oak or ash wood (not dark teak), linen rather than bouclé, very little color beyond off-white and one muted accent.

```
Quiet minimal Indian interior: pale limewash or plaster walls, light oak
or ash wood tones, linen upholstery, one restrained accent color, mostly
neutral palette. Calm and uncluttered rather than richly textured.
```

All three keep the rest of the original global style block — Bangalore light, editorial photography rather than a CGI render, no visible text/logos, no identifiable faces. Just swap the material/palette paragraph.

## What I'd regenerate

Given the mismatch, these are worth redoing in **Contemporary Gloss** rather than keeping the vernacular version already generated:
- `services/lighting-design.jpg`, `services/hero.jpg` — lighting and the general services hero should show some of the studio's sleeker range, not only the rustic register
- `localities/whitefield.jpg`, `localities/hebbal.jpg`, `localities/indiranagar.jpg` — these three were prompted as high-rise/skyline shots and should look like it materially, not like a villa in Jakkur
- `process/edit-modular.jpg`, `process/edit-complete.jpg` — the Modular Edit especially, since modular kitchens are a natural gloss-register subject

Everything else — About, the Warm Vernacular services (Wardrobe, Renovation), Jakkur/Sarjapur/Yelahanka (villa-heavy areas) — the vernacular version you already have is genuinely the right call, no need to redo those.
