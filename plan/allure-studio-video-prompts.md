# Scroll-World Video Prompts — Google Flow (Veo 3.1)

*Copy-paste prompts for animating your real project photos into the `scroll-world` scene sequence, using Google Flow's Veo 3.1 "Frames" mode. Covers both projects: the terracotta/corten house (Project 1, hero) and Aangan (Project 2, secondary case study).*

---

## How this maps to Google Flow, exactly

Google Flow (Veo 3.1) has a mode called **Frames**: you drop in a *start frame* and, optionally, an *end frame*, then write a prompt describing the camera move or transition between them. That maps perfectly onto what `scroll-world` needs:

- **Scene clips** ("dive-ins"): start frame = one of your real photos, no end frame, prompt describes a camera move that pushes further into that room. 6–8 seconds.
- **Connector clips** (the bridges between scenes): start frame = photo of scene *N*, end frame = photo of scene *N+1*, prompt describes the camera gliding from one into the other. Use 8 seconds (the max) for the smoothest result — short connectors feel rushed.

**In Flow:** open Video settings → select **Frames** → drag your photo to *"+ Add start frame"* (and, for connectors, a second photo to *"+ Add end frame"*) → paste the prompt text below into the prompt box → set aspect ratio (16:9 for desktop, generate a second 9:16 pass for the mobile portrait chain `scroll-world` expects) → generate.

**Paste this "style lock" line at the end of every single prompt below** — it's what keeps 20+ separately-generated clips feeling like one continuous shoot instead of two dozen unrelated renders:

> *Style lock: warm natural daylight matching the source photo, true-to-life materials and colors, no text overlays, no people unless already visible in the frame, handheld-smooth architectural walkthrough camera work, no dialogue or sound effects, cinematic but documentary-real — this is a real building, not a stylized render.*

**Before you generate anything, two things worth knowing:**

1. **Get the client's OK.** This is AI reanimating footage of a real family's real home. Even though it's built from photos they let you use, confirm they're fine with an AI-generated video version circulating publicly before it goes on the site.
2. **Veo output carries a SynthID watermark** (Google's AI-content marker) and is a placeholder-quality asset, not a replacement for the real commissioned shoot in the main plan. Treat this as your fast, low-cost first version — swap in real footage later without changing anything else about the page, since the scroll mechanism doesn't care which video file it's scrubbing through.
3. **Budget your generations.** Each clip is a separate credit-consuming render, and Frames-mode clips sometimes need 2–3 attempts to get a clean, artifact-free transition. Running all ~46 clips across both projects in one go is expensive and hard to art-direct. **Start with the 6-scene starter sets marked below**, get those looking right, then expand.

---

## Project 1 — the flagship (hero, terracotta/corten house)

Scene order and source photos exactly as scoped in the main plan (§8). ⭐ = starter-set scene, build these six first.

| # | Photo | Scene | Dive-in prompt (start frame only) |
|---|---|---|---|
| 1⭐ | img1.jpeg | Arrival | Wide establishing shot, slow steady push-in across the street toward a sculptural curved terracotta-render house facade set among mature trees, the camera drifting forward at walking pace as dappled tree-shadow moves across the render. |
| 2 | img2.jpeg | The Approach | Medium tracking shot continuing the approach toward the house, camera moving low across the street past two figures walking, framing tightening on the curved facade and the timber gate ahead. |
| 3⭐ | img3.jpeg | The Signature Curve | Slow tilt-up crane shot from courtyard paving level, rising into the dramatic organic cut-out void in the terracotta facade, revealing layered balconies and hanging tropical planting inside the curve as it rises. |
| 4 | img4.jpeg | The Arrival Lounge | Smooth interior dolly shot gliding forward into a warm-lit lounge at night, a sculptural teardrop chandelier catching the light overhead, camera settling toward the curved wood-framed glass at the far end of the room. |
| 5 | img5.jpeg | The Terrace | Steady glide out through open glass doors onto a covered rooftop terrace, camera panning slowly across a perforated dark-metal pergola as dappled light patterns move across the floor, tropical planting passing at the frame edge. |
| 6⭐ | img6.jpeg | The Garden Room | Slow dolly-in past a pair of upholstered lounge chairs toward full-height glazing, camera settling on dense tropical courtyard greenery pressing against the glass outside. |
| 7 | img7.jpeg | The Living-Dining Hall | Wide lateral tracking shot moving the length of an open living-dining space, a sculptural pendant light and skylight passing overhead, camera gliding past a striped patterned floor toward a bar seating area in the distance. |
| 8⭐ | img8.jpeg | The Family Room | Forward dolly from a grey sectional sofa toward tall glass doors, camera pushing gently toward an interior planted courtyard visible through the glazing, warm daylight spilling in. |
| 9 | img9.jpeg | The Lounge Suite | Slow arcing shot circling a curved cream sofa beneath a sculptural orb chandelier, camera continuing its arc to reveal a balcony with heliconia plants beyond. |
| 10⭐ | img10.jpeg | The Courtyard Walk | Continuous walking-pace tracking shot along an open balcony corridor at dusk, dark timber slats and cascading plants passing overhead, warm interior light glowing from rooms to one side. |
| 11⭐ | img11.jpeg | The Signature Curve, Revisited | Rising crane shot from courtyard level, ascending past the layered organic terracotta cutout toward open sky, slowing as it clears the roofline — a closing, loop-ready shot. |

**Connector clips** (Frames mode: start = scene *N* photo, end = scene *N+1* photo). Generate after the dive-ins above are approved — connectors are what actually make the scroll feel continuous.

| Between | Transition prompt |
|---|---|
| 1 → 2 | Continuous forward tracking shot crossing the street toward the house, closing the distance between a wide facade view and a closer three-quarter approach, maintaining a steady walking pace throughout. |
| 2 → 3 | Camera lowers and moves through the timber gate into the courtyard, tilting upward as it passes beneath the building into the dramatic cut-out void above. |
| 3 → 4 | Camera transitions from looking up through the exterior cut-out to gliding through a doorway into a warmly lit interior lounge, the light shifting from daylight to evening interior warmth. |
| 4 → 5 | Smooth glide from the interior lounge out through open glass doors onto the rooftop terrace, light brightening as the camera moves outdoors. |
| 5 → 6 | Camera moves from the terrace back inside through glazed doors, settling into a quiet seating nook beside full-height glass looking onto courtyard greenery. |
| 6 → 7 | Lateral glide from the garden-room seating area into an adjoining open living-dining hall, camera rising slightly to reveal the skylight and pendant light overhead. |
| 7 → 8 | Continuous tracking shot moving from the dining hall into an adjoining family room, camera settling on a grey sectional sofa facing a planted interior courtyard. |
| 8 → 9 | Camera arcs from the family room toward an adjacent lounge suite, circling a curved cream sofa beneath a sculptural chandelier. |
| 9 → 10 | Smooth transition from the interior lounge suite out onto an open balcony corridor at dusk, light shifting to warm evening tones, camera beginning a steady walking-pace glide. |
| 10 → 11 | Camera descends from the balcony corridor to courtyard level and rises again in a crane movement, ascending past the terracotta cut-out toward open sky, closing the sequence. |

---

## Project 2 — Aangan (secondary case study)

This project's own signage names it **"Aangan"** (Hindi/Sanskrit for courtyard) — the sequence below is built around that idea: arrive, cross the threshold, reach the courtyard at the heart of the home, then radiate outward through the rooms around it. ⭐ = starter-set scene.

| # | Photo | Scene | Dive-in prompt (start frame only) |
|---|---|---|---|
| 1⭐ | project2_img1.jpeg | Arrival | Elevated aerial approach gliding slowly forward over a cluster of terracotta Mangalore-tile pitched roofs set among palm and mango trees, camera descending gently toward a paved circular driveway below. |
| 2 | project2_img2.jpeg | The Threshold | Steady push-in toward a red-brick covered porch with dark stone plinth, camera moving toward an open carved wooden door framed by cane chairs. |
| 3⭐ | project2_img3.jpeg | The Aangan | Slow forward glide into a skylit central courtyard framed by exposed brick and timber beams, camera drifting past a hanging wooden swing and potted frangipani tree toward sunlit brick paving beyond. |
| 4 | project2_img4.jpeg | The Sitting Room | Dolly shot moving past patterned bolster cushions on a low wooden sofa, camera pushing toward the open threshold to the sunlit courtyard beyond, a wooden swing bench visible through the doorway. |
| 5⭐ | project2_img7.jpeg | The Swing Alcove | Slow lateral glide down a corridor with green wainscoting, camera settling on a hanging wooden swing suspended by brass chains inside a red-brick alcove, dappled light moving across the brick. |
| 6 | project2_img8.jpeg | Courtyard Crossing | Smooth tracking shot moving past a red-brick column, camera revealing a circular green-framed window onto a dining space to one side and a brick swing alcove to the other, tropical planting in the foreground. |
| 7⭐ | project2_img9.jpeg | The Family Lounge | Forward dolly into a high-ceilinged living room, camera settling on a rough-hewn stone feature wall between two long wooden-framed sofas, warm timber ceiling beams overhead. |
| 8 | project2_img6.jpeg | Upper Veranda | Slow glide along an open upper-level veranda, camera passing a woven cane pendant light and a red-brick chimney breast, a glass floor panel below revealing the courtyard underneath. |
| 9⭐ | project2_img10.jpeg | The Dining Room | Steady glide toward a long wooden dining table beneath layered cane pendant lights, camera settling on a large circular green-framed window opening onto dense tropical greenery. |
| 10 | project2_img12.jpeg | Upper Landing | Forward tracking shot along an upper-floor landing beneath a vaulted terracotta-clad ceiling, cane pendant lights passing overhead, camera moving toward an open bedroom doorway ahead. |
| 11⭐ | project2_img15.jpeg | The Primary Suite | Slow dolly-in past a teal upholstered headboard, camera continuing toward full-height wooden doors opening onto a private balcony framed by dense green treetops. |
| 12 | project2_img16.jpeg | Nightfall at the Aangan Gate | Evening establishing shot, slow push-in past a dark gate inscribed "aangan," warmly lit brick porch and swing glowing ahead under a darkening sky with a crescent moon — a closing, loop-ready shot. |

**Connector clips:**

| Between | Transition prompt |
|---|---|
| 1 → 2 | Camera descends from an aerial view of the rooftops down to street level, closing in on the brick covered porch and its open wooden door. |
| 2 → 3 | Camera moves through the open wooden doorway into a skylit central courtyard, light shifting from exterior daylight to soft filtered courtyard light, a hanging swing coming into view. |
| 3 → 4 | Smooth lateral glide from the courtyard into an adjoining sitting room, camera settling on low wooden-framed seating with the courtyard still visible through the doorway behind. |
| 4 → 5 | Camera tracks down a corridor with green wainscoting, moving from the sitting room toward a red-brick alcove where a wooden swing hangs on brass chains. |
| 5 → 6 | Continuous tracking shot moving past a brick column, revealing a circular green-framed window and a dining space beyond the swing alcove. |
| 6 → 7 | Camera glides from the courtyard-adjacent corridor into a high-ceilinged living room, settling on a stone feature wall between two long sofas. |
| 7 → 8 | Camera rises from the ground-floor lounge up to an open upper veranda, passing a cane pendant light, a glass floor panel revealing the courtyard below. |
| 8 → 9 | Smooth glide from the upper veranda back down toward a ground-floor dining table beneath cane pendant lights, a circular green window framing tropical greenery ahead. |
| 9 → 10 | Camera moves from the dining room toward a staircase, rising to an upper-floor landing beneath a vaulted terracotta ceiling. |
| 10 → 11 | Continuous glide along the upper landing into a primary bedroom, camera settling on a teal headboard and full-height doors opening onto a treetop-view balcony. |
| 11 → 12 | Time-of-day transition: camera pulls back from the primary suite balcony and drifts outward and downward, light shifting from daylight to dusk, closing on the illuminated "aangan" gate at night. |

---

## Notes on using these once generated

Export everything at the highest resolution Flow offers (1080p), 16:9 for the desktop cut. For the mobile 9:16 portrait chain `scroll-world` expects, either regenerate each clip at 9:16 (Flow supports both aspect ratios) or reframe in an editor afterward — regenerating tends to look more intentional since Veo composes the shot for that frame rather than cropping into it.

Keep every raw clip, even ones you don't end up using in the final sequence — a stray strong 4-second beat from a "failed" generation often works better as a social cutdown (Instagram Reels, YouTube Shorts) than the clip you originally generated it for.

*Sources: [Google Flow help — creating videos](https://support.google.com/flow/answer/16353334?hl=en), [Google Cloud — Veo 3.1 prompting guide](https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1).*
