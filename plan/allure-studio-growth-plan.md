# The Allure Studio: Website Rebuild, Scroll-World Hero & Bangalore SEO/AEO/GEO Plan

*Prepared for The Allure Studio — Bengaluru. Scope: full site rebuild, an interactive scroll-driven flagship experience, and search visibility (SEO, pSEO, AEO, GEO) limited to Bangalore, India.*

---

## 1. Executive summary

Allure Studio's current site (theallurestudio.com) has a strong, calm brand voice but almost no SEO or conversion infrastructure: four bundled "Edit" packages instead of indexable service pages, zero testimonials, no location-specific content, no schema markup, and no blog. The competitor you pointed me to, Tint Tone & Shade, is thin on genuine differentiation but has exactly the machinery Allure is missing: a granular service menu, a numbers bar, a testimonial carousel, an FAQ block, and city-by-city landing pages.

The plan below does three things:

1. **Rebuilds the site on a fast, structured-data-rich foundation** (Next.js) with Tint Tone's service/FAQ/testimonial architecture adapted to Allure's calmer, higher-end voice — and corrected for the one thing Tint Tone gets wrong for you: it's built for four cities plus Dubai. Yours is built for one city, deeply.
2. **Builds a real scroll-driven hero experience** around your 11 photos of what is genuinely a stunning, award-show-caliber project (the terracotta/corten curved-facade house) — using the `scroll-world` engine, but fed with *real* commissioned video of that house, not AI-generated scenes. I dug into the repo and there's an important nuance here — see §2.
3. **Lays out a Bangalore-only SEO, pSEO, AEO and GEO program** — keyword clusters, a locality×service page matrix, structured data, and the specific things that get a local firm cited by Google AI Overviews, ChatGPT and Perplexity, not just ranked in blue links.

A full phased roadmap, video shot list, and the open decisions I need from you are at the end.

**Status update:** brand positioning is now locked to "Everlasting Luxury" (§3), and you've also sent 17 photos of a second project — **"Aangan,"** a warm brick-and-terracotta courtyard home — which is now the secondary case study alongside the flagship. Since the videographer timeline is still open, a companion prompt sheet for animating both projects' real photos with Google Flow (Veo 3.1) as a fast placeholder track is ready alongside this plan — see the note at the end of §8.

---

## 2. Important finding: what `scroll-world` actually does (read this before we build)

I pulled the repo and also found — inside the `AllureStudioWebsite` folder you connected — a `video.mp4` that turned out to be `scroll-world`'s own demo reel, not footage of your project. That demo was genuinely useful: it shows the tool has *two* very different modes, and which one you use changes the whole plan.

- **Mode A — illustrated diorama** (the "Pearl & Co." tea-brand example in the demo): a stylized, isometric, cartoon-like fly-through. Fun for a playful consumer brand, wrong for a luxury interior design portfolio built on real craftsmanship.
- **Mode B — photoreal architectural scroll** (the "Belvedere" luxury-home example in the same demo): sections literally named "Arrival," "The Great Room," "The Kitchen," "The Suite," "The View," with the camera gliding through sunset-lit rooms. This is structurally *identical* to what you want to do with your terracotta house.

Mode B is generated, though — the tool's default pipeline creates those photoreal clips with AI video models (Seedance 2.0 via Monid, or Kling via Higgsfield), seeded from AI-generated images, not from footage of an actual building. It's built to invent a beautiful fictional home, not to animate a real one faithfully. Feeding it your 11 real photos as reference could get you a similar-looking result, but the AI would be filling in camera movement, room geometry and transitions it never actually saw — for a real client's real home, that's a trust and accuracy risk I don't think is worth taking on your hero asset.

You picked **"commission a real video walkthrough,"** and I agree that's the right call for the flagship. Here's how we make that compatible with `scroll-world`: we don't use its AI generation pipeline at all for this asset. We use its front-end mechanism — `scrub-engine.js`, the vanilla-JS controller that ties scroll position to video playback time, crossfades between scenes, and lazy-loads — and we feed it a real, professionally shot walkthrough of your actual house, cut into the same scene/connector structure the engine expects. You get the identical buttery scroll-scrubbed feel as the demo, but every frame is really your project. Section 8 below has the exact scene map and shot list.

**Where Mode B *is* worth using:** once you send over the second project's photos, we can prototype a Belvedere-style AI-generated placeholder for a secondary case-study page while a real shoot is being scheduled for it — clearly labeled as a stylized visualization, never positioned as documentary footage of the actual space. Optional, and only if you want to move faster than shoot scheduling allows on project #2.

One more thing worth flagging: `scroll-world`'s AI backends (Monid, Higgsfield) are pay-per-clip / credit-based services — if we do use Mode B anywhere, that has a real, ongoing cost separate from your videographer's fee.

---

## 3. Brand positioning — a conflict to resolve before we write a word of copy

Your logo reads **"THE ALLURE STUDIO — EVERLASTING LUXURY."** Your current homepage reads **"Thoughtful design for everyday living"** and leans on words like *intuitive, calm, deeply personal, clarity, simplicity.*

Those are two different studios to a reader. "Everlasting luxury" signals high-end, aspirational, statement-making. "Thoughtful, everyday, calm, simple" signals accessible, livable, unpretentious. Neither is wrong — but a site (and its SEO targeting) needs to commit to one, because it determines which keywords you chase ("luxury interior designer Bangalore" vs. "affordable interior designer Bangalore"), which photos lead the homepage, and how the copy sounds. Looking at the actual project photos you sent — a sculptural corten-and-terracotta facade, bouclé Pierre Jeanneret-adjacent furniture, a $200+ pendant-style chandelier, full-height glazing onto a private tropical courtyard — the work itself is unambiguously luxury-positioned. **Decided: "Everlasting Luxury" leads, with "thoughtful/calm/personal" folded in as supporting voice** ("luxury that feels like home," not "luxury that feels untouchable"). That gets premium keyword targeting without losing warmth — every section below is written around this.

---

## 4. Current site audit — theallurestudio.com

| Area | What's there today | Gap for SEO/AEO/GEO |
|---|---|---|
| Nav | Home, About, Experience Center, Contact Us, Appointment, Blog, Client Portal, Coming Soon, FAQs, Our Teams, Virtual Tours | No service pages, no location pages, no project/portfolio pages — the three page types that carry almost all local-SEO ranking weight |
| Services | 4 bundled packages: The Modular Edit, The Signature Edit, The Styling Edit, The Complete Edit | Great for conversion, invisible for search — nobody searches "the signature edit." Needs a parallel layer of plainly-named, individually-indexable services |
| Location | Single address (Jakkur, Bengaluru 560064) in the footer only | No locality-level content at all — biggest untapped opportunity given you cover "all areas" of Bangalore |
| Trust signals | None found: no testimonials, no review counts, no project numbers, no press mentions | This is the single biggest AEO/GEO gap — generative engines lean heavily on third-party validation signals (reviews, citations) when deciding who to recommend |
| Blog | Nav item exists ("Blog") but appears empty/inactive | Zero topical authority being built — this is your AEO engine and it's currently off |
| Structured data | None detected | No LocalBusiness, Service, FAQPage, or Review schema — you're invisible to rich results and much harder for AI answer engines to parse confidently |
| Differentiators worth keeping | "Experience Center," "Virtual Tours," "Client Portal" — these are genuinely premium, differentiated touches most Bangalore competitors don't have | Keep and *feature* these; they're a real content and PR angle ("the only Bangalore interior design studio with a physical Experience Center") |

---

## 5. Competitive teardown — Tint Tone & Shade, and who actually ranks in Bangalore

**What to borrow from Tint Tone & Shade:** a "by the numbers" stat bar (homes completed, years active, satisfaction %), a real testimonial carousel with named clients and photos, a grid of individually-linked services, an FAQ block (they run 8 questions — direct-answer content that's exactly what AEO rewards), a visible warranty/post-project-care promise (they lead with a 10-year modular kitchen warranty and two free service visits), and a footer that mirrors the full site architecture for internal linking. Their build itself (Framer, carousel-based, no scroll-scrubbed sequences) is not something to copy technically — it's the one place your new site will meaningfully outclass them.

**What not to borrow:** the multi-city structure (Chennai, Hyderabad, Bangalore, Dubai). You explicitly don't serve Dubai and only serve Bangalore — replicating a multi-city IA would dilute your local-relevance signal instead of strengthening it. Depth beats breadth here: go deep on Bangalore *localities* instead of wide across cities (§9).

**Who's actually occupying page one for "interior designers in Bangalore" today:** mostly aggregator/listicle content, not individual design studios — NoBroker, RTF (Rethinking The Future), Sulekha, and a cluster of "Top 10 Interior Designers in Bangalore 2026" posts (Sobha Interiors' blog, TheKariGhars, Bhavana Interior Decorators, House of Designs, Relgrow, Public Anchor, Nestture). This matters for strategy in two ways: (1) directly outranking these aggregator pages for head terms will take real time and authority, so early wins should come from long-tail, locality, and question-based queries where a real studio page can beat a generic listicle; and (2) **getting listed inside those "Top 10" posts is itself a fast, high-leverage SEO and GEO move** — those exact pages are also likely sources generative engines cite when someone asks an AI "who's a good interior designer in Bangalore." Outreach to get added to 5–8 of these lists belongs in the GEO plan (§12).

*Sources consulted: [NoBroker](https://www.nobroker.in/blog/top-interior-designers-in-bangalore), [Rethinking The Future](https://www.re-thinkingthefuture.com/architectural-insights/top-10-interior-designers-in-bangalore/), [Sobha Interiors](https://sobhainteriors.com/blog/top-10-best-interior-designers-in-bangalore-2025/), [TheKariGhars](https://www.thekarighars.com/blogs/top-10-best-interior-designers-in-bangalore/), [Bhavana Interior Decorators](https://bhavanainteriordecorators.com/top-10-best-interior-designers-bangalore-2026/), [House of Designs](https://www.houseofdesigns.co.in/post/top-10-interior-designers-in-bangalore-2026), [Sulekha](https://www.sulekha.com/interior-designers-decorators/bangalore).*

---

## 6. Site architecture (new sitemap)

```
Home  (scroll-world hero)
About  →  Studio story, Experience Center, Our Team, Press/Awards
Portfolio
   ├─ /portfolio/[project-slug]        (case-study template, one per completed home)
   └─ /portfolio                       (filterable grid: BHK size, locality, style, budget tier)
Services  (hub page)
   ├─ /services/residential-interior-design
   ├─ /services/modular-kitchen
   ├─ /services/wardrobe-design
   ├─ /services/space-planning
   ├─ /services/design-consultation
   ├─ /services/lighting-design
   ├─ /services/custom-furniture-design
   ├─ /services/color-consultation
   ├─ /services/renovation-and-remodeling
   ├─ /services/styling-and-staging
   └─ /services/project-management
Areas We Serve  (hub page — Bangalore localities, §9)
   └─ /bangalore/[locality]/interior-designer
Process            (the 4-step journey, expanded with FAQ + video)
Experience Center  (your real differentiator — treat as a landing page, not a footnote)
Virtual Tours
Reviews            (aggregated + individual video testimonials)
Blog               (§13)
Price Calculator   (borrowed from Tint Tone — strong mid-funnel lead capture)
FAQs               (site-wide, feeds AEO)
Contact / Book a Consultation
Client Portal      (kept, gated)
```

Every service page and every locality page links to the Portfolio (filtered) and to 2–3 relevant FAQ entries — this internal-linking mesh is what turns a pSEO buildout into genuine topical authority instead of a pile of disconnected thin pages.

---

## 7. Homepage & the scroll-world hero

**Structure, top to bottom:**

1. **Scroll-world hero** — the terracotta house, full-bleed, scroll-scrubbed (§8). Ends on a clear CTA ("See the full project" → case study page, plus "Book a Consultation").
2. **Studio statement** — one tight paragraph, brand line front and center, "Trusted Design Partner" retained as a subhead.
3. **By the numbers** — projects completed, years active, average project timeline, client satisfaction. (Needs real figures from you — placeholder structure only until you confirm.)
4. **Services grid** — the 11 granular services from §6, each card linking out.
5. **Featured portfolio** — 3–4 projects including the flagship, each linking to its full case study.
6. **Process, in 4 steps** — your existing framework, illustrated, each step expandable for its own FAQ-style detail (AEO surface).
7. **Testimonials** — video-first if we get the shoot done (§8 covers this), carousel fallback.
8. **Experience Center callout** — a genuine differentiator, deserves a real section with its own photos/video, not a nav link.
9. **FAQ** — 8–10 questions, matched to real AEO query patterns (§11).
10. **Locality strip** — "Serving all of Bangalore" with a scannable list of neighborhoods linking to their pSEO pages (§9) — small, honest, not stuffed.
11. **Footer** — full sitemap mirrored (service list, locality list, legal, social), matching the internal-linking discipline Tint Tone already does well.

---

## 8. The scroll-world hero, scene by scene

Your 11 photos already read like a natural nine-to-eleven-scene sequence — almost exactly the shape `scroll-world`'s config expects. Here's how I'd map them, and what footage each scene needs beyond the still you already have:

| # | Photo | Scene name | Camera move needed on the shoot |
|---|---|---|---|
| 1 | Street-level full elevation | **Arrival** | Slow push-in from across the street, or a low drone approach — establishes the sculptural facade against its dense residential context |
| 2 | 3/4 facade with figures at street level | **The Approach** | Continue the push, cross the threshold at the timber gate |
| 3 | The organic cut-out balcony void | **The Signature Curve** | Tilt up from courtyard level into the void — this is your single most distinctive architectural shot; give it room to breathe |
| 4 | Night lounge, sculptural chandelier | **The Arrival Lounge** | Glide from the entry into the seating area, chandelier as focal reveal |
| 5 | Rooftop pergola terrace | **The Terrace** | Step out through glass doors, pan across the perforated-metal light pattern |
| 6 | Reading nook, orange wall, courtyard glazing | **The Garden Room** | Glide past seating toward the glass wall, let the courtyard greenery fill frame |
| 7 | Open living-dining, skylight | **The Living-Dining Hall** | Wide lateral glide the length of the room, skylight as overhead reveal |
| 8 | Living room to interior courtyard | **The Family Room** | Push from sofa toward the planted interior courtyard glazing |
| 9 | Curved cream sofa, orb chandelier, balcony | **The Lounge Suite** | Slow arc around the sofa, ending on the balcony greenery |
| 10 | Balcony corridor at dusk | **The Courtyard Walk** | Continuous walking shot along the corridor, timber slats and hanging plants passing overhead |
| 11 | Facade detail, upper-level cutout | **The Signature Curve, Revisited** | Drone rise from courtyard level up past the cutout to sky — a strong closing/looping shot |

**Production approach:** don't shoot 21 separate clips (11 dive-ins + 10 connectors) as the skill's generation pipeline would — shoot **one continuous choreographed take** (Steadicam/gimbal indoors, drone for the two facade moments) following this path in order, at a high frame rate and resolution. In post-production, we cut that single take into the dive-in/connector clip structure `scrub-engine.js` expects. This is both cheaper and more cinematically coherent than generating disconnected clips. Budget roughly a half-day shoot with a real-estate/architectural videographer experienced with gimbal or Ronin work, ideally at golden hour to match the warm light already in your stills, plus a short drone add-on for the two facade shots (permissions permitting for the neighborhood).

**Technical build:** `scrub-engine.js` (vanilla JS, framework-agnostic) driven by GSAP ScrollTrigger for the surrounding page choreography; desktop gets the full horizontal-feeling glide, mobile gets a native 9:16 portrait recut of the same footage (shoot with enough headroom to reframe, don't rely on cropping the 16:9 master). Serve via adaptive-bitrate MP4/WebM with poster-frame fallback for slow connections and `prefers-reduced-motion` users — a static, still gorgeous, image-carousel fallback matters both for accessibility and for the meaningful share of mobile users on throttled connections in India.

**Placeholder track while the shoot is being scheduled:** since the videographer's budget and timeline are still open, there's a companion prompt sheet ready — [Scroll-World Video Prompts](https://claude.ai/code/artifact/e7ac8c2e-996a-47bc-894d-35871165f32c) — with exact Google Flow (Veo 3.1) prompts for every scene and connector across both this project and Aangan, using your real photos as start/end frames. Treat anything generated from it as a fast, honest-to-label placeholder, not a substitute for the real shoot — swap in the commissioned footage later without touching the page mechanics.

**Second project — "Aangan":** the 17 photos you sent are a genuinely different register from the flagship: warm brick, Mangalore-tile roofs, a skylit central courtyard the home is literally named after, hand-crafted joinery. That contrast is a strength, not a clash — it shows range (bold contemporary sculptural work *and* warm vernacular-craft work) rather than one look repeated. Recommend it as the second full case-study page (with its own shorter scroll sequence, same `scrub-engine.js` mechanism, lower priority than the flagship for the real-video shoot), not folded into the flagship page.

---

## 9. pSEO — Bangalore localities × services

This is where a single-city firm should win hardest: instead of Tint Tone's four cities, go deep on Bangalore's neighborhoods. Priority localities (based on where interior design demand concentrates — new-build apartment corridors and established premium residential pockets):

**Wave 1 (build first):** Jakkur *(your own turf — easiest to prove genuine local presence)*, Indiranagar, Koramangala, HSR Layout, Whitefield, Sarjapur Road, Hebbal, Yelahanka.

**Wave 2:** JP Nagar, Jayanagar, Bellandur, Marathahalli, Rajajinagar, Malleshwaram, Electronic City, Bannerghatta Road, RT Nagar, Hennur, Banashankari.

**Template per locality page** (`/bangalore/[locality]/interior-designer`): a real opening paragraph naming actual nearby landmarks/apartment communities where you've worked (not generic filler), 2–3 locality-relevant FAQs (e.g. "does Allure Studio work with [X apartment complex]'s layout restrictions?"), any completed project actually located there pulled into a mini case-study block, and a locality-specific testimonial where one exists.

**One important caution:** Google's 2024 "scaled content abuse" policy update specifically targets exactly this kind of programmatic page when it's done as mail-merged, near-duplicate text with the city name swapped. Don't auto-generate all ~19 locality × ~11 service combinations at once. Build Wave 1 with genuinely distinct content, watch how they perform in Search Console for 4–6 weeks, and only then expand — and always require at least one real, locality-specific fact per page (a project, a landmark, a client quote) rather than templated boilerplate.

---

## 10. SEO — keyword clusters (Bangalore only)

I don't have live search-volume data connected in this session — Semrush and Ahrefs are both available as connectors if you want me to pull real Bangalore volumes and validate this list before we lock it in; worth doing before the copywriting pass. Directionally, the clusters to target:

| Cluster | Example queries | Priority |
|---|---|---|
| Head/brand-adjacent | "interior designers in Bangalore," "luxury interior design Bangalore," "best interior designer Bangalore" | High intent, high competition — long game |
| Service + city | "modular kitchen design Bangalore," "wardrobe design Bangalore," "residential interior designer Bangalore" | High intent, medium competition — service pages target these directly |
| Service + locality | "interior designer Indiranagar," "modular kitchen HSR Layout," "interior design Whitefield apartment" | Medium intent, low competition — pSEO pages own these |
| Project-type | "3 BHK interior design Bangalore," "villa interior design Bangalore," "duplex interior designer Bangalore" | High intent — feed into portfolio filtering |
| Comparison/consideration | "interior designer vs decorator," "modular kitchen cost Bangalore," "how much does interior design cost in Bangalore" | Strong AEO fit — direct-answer content |
| Question/informational | "how long does home interior design take," "what does an interior design consultation include" | Blog + FAQ territory, builds topical authority |

**On-page & technical basics** (non-negotiable regardless of stack): unique title/meta per page following a consistent pattern (`{Service} in {Locality} | The Allure Studio`), one clear H1 per page, descriptive image alt text on every project photo (a real gap today — good alt text is also increasingly read by GEO crawlers), clean semantic HTML, Core Web Vitals discipline (the scroll-world hero must be built to stay fast — lazy-loaded video, compressed masters, no layout shift), XML sitemap, and a logical internal-link mesh from every service/locality page back to relevant portfolio and FAQ content.

---

## 11. AEO — Answer Engine Optimization

AEO targets the "position zero" surfaces: Google's featured snippets and the direct-answer boxes voice assistants read aloud. The mechanism is structured, literal, extractable answers.

- **FAQPage schema** on every service page and a dedicated site-wide FAQ hub — 8–10 real questions per major page, answered in 2–3 direct sentences before any elaboration.
- **Definition-first content blocks**: open sections with a plain-language answer ("Modular kitchen design in Bangalore typically costs ₹X–₹Y per sq ft depending on finish level...") before the narrative expands.
- **Numbered/step content** for anything process-shaped (your 4-step journey is already exactly this shape — just needs schema and a dedicated page).
- **Comparison tables** (interior designer vs. contractor vs. decorator; "Edit" package comparison) — these get lifted directly into AI Overviews and voice answers more often than prose does.

*Background reading on 2026 AEO practice: [HubSpot](https://blog.hubspot.com/marketing/answer-engine-optimization-trends), [CXL](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide/).*

---

## 12. GEO — Generative Engine Optimization

GEO is about being the answer ChatGPT, Perplexity, Gemini and Google AI Overviews *cite* when someone asks "who's a good interior designer in Bangalore" or "how much does a home renovation cost in Bangalore" — conversationally, not via a search box. These engines lean heavily on structured data, third-party validation, and cross-platform consistency, more than they lean on your own copy.

- **Structured data beyond FAQPage:** `LocalBusiness`/`HomeAndConstructionBusiness`, `Service` per offering, `Review`/`AggregateRating`, `VideoObject` for every hero and testimonial video, `ImageObject` with proper licensing/creator metadata on portfolio photography.
- **NAP consistency** (Name, Address, Phone) identical, verbatim, across the website, Google Business Profile, Instagram, and every directory listing — inconsistency is one of the most common reasons a real local business fails to get cited.
- **Directory presence**, which matters disproportionately for Indian local search/GEO: Google Business Profile (you already have access — this is priority one, see below), Houzz, Sulekha, JustDial, IndiaMART, Design Cafe/Architizer-style portfolio platforms.
- **Third-party citation building**: outreach to get listed in the "Top 10 Interior Designers in Bangalore" posts identified in §5 — these are directly cited source material for AI answer engines, not just Google's blue links.
- **Review velocity and substance**: a steady drip of detailed Google reviews (not just star ratings — reviews that mention specific services, localities, and outcomes) feed both the local 3-pack and generative-engine confidence.
- **`llms.txt`**: an emerging, low-effort practice — a small root-level file describing the business and pointing crawlers to key pages. Not yet a confirmed ranking factor for any engine, but essentially free to add and can't hurt.
- **Cross-platform entity consistency**: the same bio, same brand line, same service list on LinkedIn, Instagram, YouTube and Pinterest that's on the site — generative engines increasingly triangulate an entity's identity across platforms rather than trusting one source.

*Background reading: [WRITER's GEO/AEO/SEO guide](https://writer.com/blog/geo-aeo-optimization/), [SEOTuners GEO best practices](https://seotuners.com/blog/generative-engine-optimization/generative-engine-optimization-best-practices/).*

---

## 13. Video needs — full list (not just the hero)

Beyond the flagship walkthrough in §8:

1. **60–90 second brand film** for the About page — founder/designer on camera, the Experience Center, a glimpse of the design process. This is also your strongest AEO/GEO trust signal (named-expert, on-camera authority).
2. **2–4 client testimonial videos**, 30–60 seconds each, real clients, real voices — this is currently a complete gap versus Tint Tone's 6–8 written/photo testimonials, and video testimonials outperform text ones for both conversion and AI-engine trust signals.
3. **Process explainer**, 60–90 seconds, walking through Consultation → Design & Planning → Production & Implementation → Handover — doubles as AEO content (matches "how does interior design process work" queries) and a Process-page hero.
4. **Vertical (9:16) cutdowns** of every shoot for Instagram/YouTube Shorts/Reels — 15–30 seconds each, repurposed from the same footage, extends reach and reinforces cross-platform entity consistency for GEO.
5. **Modular Kitchen and Wardrobe Design short demos**, 30–45 seconds each — these are named "Specific Services" in your own footer already; each deserves its own short video on its service page.
6. **Before/after time-lapse**, if any site-progress footage exists or can be captured on a future project — a distinctive, hard-to-fake trust asset almost no Bangalore competitor is doing well.

---

## 14. Blog / topical authority — starter list

Publishing cadence matters less than consistency; 2 posts/month sustained beats 10 posts in one burst. Starter topics, chosen to match the AEO question clusters in §11 and to naturally interlink to service/locality pages:

"How much does interior design cost in Bangalore in 2026," "Modular kitchen vs. carpenter-built kitchen — what's actually different," "A homeowner's guide to Bangalore apartment interior design timelines," "What to expect in your first interior design consultation," "Wardrobe design ideas for Bangalore's compact apartment layouts," "Interior designer vs. architect vs. contractor — who do you actually need," plus a running case-study series, one deep write-up per completed project (doubles as portfolio content and a natural home for that project's video and photos).

---

## 15. Analytics & access

You confirmed you already have Google Business Profile, Google Search Console, and Google Analytics access — getting me (or whoever builds this) added as a user on all three is a Phase 0 task, since GSC data is exactly what should validate or reshuffle the keyword clusters in §10 before real copywriting effort goes in. Google Search Console and Analytics MCP connectors aren't in your workspace yet; worth connecting once you're ready for me to pull live data directly rather than working from assumptions.

---

## 16. Phased roadmap

| Phase | Weeks | Focus |
|---|---|---|
| 0 — Foundations | 1–2 | Lock brand positioning (§3), hand off GBP/GSC/GA access, validate keywords with real data, sign off IA, book the flagship videographer, review second-project photos |
| 1 — Content & design system | 2–5 | Full copywriting pass (home, services, localities, FAQ), palette/type system from the real project photography, wireframes, flagship shoot happens |
| 2 — Build | 4–8 | Next.js build, scroll-world hero with real footage, service/locality templates, schema markup, Core Web Vitals pass |
| 3 — pSEO wave 1 + AEO | 6–9 | Publish Wave-1 locality pages, FAQ content site-wide, first 6–8 blog posts |
| 4 — GEO & trust | 8–10 | GBP optimization, directory citations, review campaign, testimonial shoot, outreach to the "Top 10" listicle sites |
| 5 — Launch | 10 | 301-map every old URL, resubmit to GSC, monitor crawl/index status |
| 6 — Ongoing | 10+ | pSEO Wave 2, blog cadence, review velocity, quarterly technical SEO audit, monthly manual check of AI Overview/ChatGPT/Perplexity citations for target queries |

---

## 17. Status — decisions locked, and what's still open

**Locked:** brand positioning leads with "Everlasting Luxury" (§3); the second project is confirmed as "Aangan" and slotted in as the secondary case study (§8); the "by the numbers" section and the videographer budget/timeline are intentionally deferred for now — those sections above are built to drop real figures in whenever they're ready, without restructuring anything.

**Still open, whenever you're ready:**

1. **Real numbers** for the "by the numbers" homepage section — projects completed, years active, satisfaction rate.
2. **Videographer budget/timeline** for the flagship shoot, once you want to move on it — the Google Flow prompt sheet (§8) covers you in the meantime.
3. **Connect Google Search Console and Analytics** once the site is built, as you said — and Semrush/Ahrefs are available as connectors any time before that if you want the keyword clusters in §10 validated against real Bangalore volume sooner.

Nothing above is blocking — I can move straight into drafting actual homepage/service-page copy, schema markup, and the Aangan case-study copy next.
