// THE JOURNAL — the studio's own editorial content. Every article below is
// either practical design guidance (not a claim about the business) or is
// built entirely from facts already established elsewhere on this site
// (the four-stage process, the Experience Center, etc.) — nothing here
// invents a project, a client, a stat, or a named author who doesn't
// actually work at the studio. Byline is kept generic ("The Allure Studio
// Team") for the same reason: no fictional staff member is presented as
// real. Swap in a real designer's name once you have one to credit.

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  body: string[];
  // Optional, shorter title/description for the <title> tag and meta
  // description specifically — the on-page title/excerpt above are good
  // editorial copy but a few run past what search engines render before
  // truncating (~60 chars for a title, ~155 for a description once the
  // " | The Allure Studio" suffix is added). Falls back to title/excerpt
  // in journal/[slug]'s generateMetadata when not set.
  seoTitle?: string;
  seoDescription?: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "designing-small-bangalore-apartments",
    title: "Designing Small Bangalore Apartments: What Actually Works",
    excerpt:
      "Koramangala and HSR Layout apartments rarely give you extra square footage to spare. Here's what actually earns its keep in a compact Bangalore floor plan — before a single finish is chosen.",
    seoTitle: "Designing Small Bangalore Apartments",
    seoDescription:
      "What actually earns its keep in a compact Bangalore floor plan — space planning before a single finish is chosen.",
    category: "Space Planning",
    coverImage: "/images/localities/koramangala.jpg",
    author: "The Allure Studio Team",
    body: [
      "Most of the compact-apartment briefs we get in Bangalore share the same instinct: solve a small room by filling it with small furniture. It's the wrong instinct. A room reads as cramped when its traffic paths are cramped — not when its furniture is a particular size — so the first decision on any small floor plan isn't what to buy, it's where a person actually needs to walk, stand, and open a door without colliding with something else.",
      "Start with the corridor a body takes through the room, not the walls around it. In a typical Koramangala or HSR Layout 2BHK, that usually means pulling seating and storage to the room's edges and leaving one clear diagonal sightline from the entry to the window — even a narrow one — because a room you can see all the way across reads as larger than its actual dimensions, regardless of how much furniture is in it.",
      "Storage is the second lever, and it's almost always under-planned rather than over-planned. A wardrobe or kitchen system sized to your actual clothes and cookware — not a standard modular configuration — reclaims real floor area, because the alternative is usually a second freestanding cupboard eating into the room it was meant to declutter. This is also where a lot of small-apartment budgets are wasted: spending on a striking piece of furniture before the storage question is settled, so the striking piece ends up sharing the room with overflow boxes six months later.",
      "Light does more work in a small room than color does. Layered lighting — a ceiling layer, a task layer near where you actually read or cook, and one warm accent — makes a compact room feel resolved in the evening the way daylight makes it feel resolved by day. A single bright overhead fixture is the most common reason a well-planned small apartment still feels flat and unfinished after the furniture is in.",
      "None of this is about making a small apartment look bigger than it is — it's about making every square foot of it do exactly one clear job. That's a layout decision, which is why it's the first thing we resolve on a project, before any material or furniture choice: our Space Planning service exists specifically for this stage, on its own, if that's the only part of the process you need.",
    ],
  },
  {
    slug: "the-case-for-limewash",
    title: "The Case for Limewash — And Why We Specify It in Bangalore Homes",
    excerpt:
      "A breathable, matte mineral finish built for humid climates, not a trend. Here's why limewash keeps showing up in the studio's material palette for Bangalore homes.",
    seoTitle: "The Case for Limewash in Bangalore Homes",
    seoDescription:
      "A breathable, matte mineral finish built for Bangalore's climate — why limewash keeps showing up in the studio's material palette.",
    category: "Materials & Finishes",
    coverImage: "/images/about/studio-detail.jpg",
    author: "The Allure Studio Team",
    body: [
      "Limewash is a mineral paint made from slaked lime, applied in thin, translucent coats that let a wall's texture show through rather than sealing over it. It's an old finish — centuries old, in fact — but it earns its place in a modern Bangalore home for a very unglamorous reason: it's breathable. Unlike an acrylic emulsion, which forms a sealed film on the wall, limewash lets moisture pass through the surface rather than trapping it, which matters in a climate that swings between a hard monsoon and long humid stretches the rest of the year.",
      "The visual case is simpler to see than to describe. Because each coat is translucent and applied by hand, limewash never dries perfectly flat — it holds soft variation, a slight cloudiness, faint brush and sponge marks that catch light differently through the day. Next to a flawless flat-matte emulsion, a limewash wall looks alive in a way that's hard to manufacture with a roller and a single tin of paint.",
      "It's not the right choice everywhere. Limewash is a matte, low-sheen finish, so it isn't the material we'd specify for a high-moisture, high-abrasion surface like a kitchen backsplash or a bathroom shower wall — that's still a job for tile, stone, or a proper wet-area finish. Where it earns its place is on a living room or bedroom feature wall, a stairwell, or a hallway — anywhere the wall itself is meant to read as a material decision, not just a backdrop.",
      "Application matters more with limewash than with an ordinary emulsion; it's applied in thin layers by a trained hand, not sprayed or rolled on in one pass, and it's part of why the finish is specified as a considered decision on a project rather than a default. If a wall in your home has been earmarked as a feature and the room can support a matte, breathable finish, it's worth a conversation with your designer before defaulting to paint.",
    ],
  },
  {
    slug: "from-brief-to-build",
    title: "From Brief to Build: How We Approach Every Project",
    excerpt:
      "Four stages, one project manager, and a fixed timeline before you commit to anything. Here's what actually happens between your first consultation and handover day.",
    seoTitle: "From Brief to Build: Our Design Process",
    seoDescription:
      "Four stages, one project manager, a fixed timeline before you commit — what happens between your first consultation and handover.",
    category: "Behind the Process",
    coverImage: "/images/process/hero.jpg",
    author: "The Allure Studio Team",
    body: [
      "Every project starts the same way, regardless of scope: a designer walks the space with you, or reviews your floor plan if it isn't built yet, and listens to how you actually intend to live in it before talking through style direction and a realistic budget bracket. This first consultation isn't a sales pitch — it's the only way to scope a project honestly, and it's where you get a real timeline in writing before any design fee is on the table.",
      "What follows is the stage most interior projects in Bangalore rush, and where a home's design either holds up for a decade or starts showing its seams by year two: layout, lighting, materials and furniture, resolved room by room on paper before a single cabinet is ordered or a wall is touched. Skipping ahead to finishes before this stage is settled is the single most common reason a finished home looks good in photographs but doesn't actually work day to day.",
      "Production and installation run under one project manager, named at kickoff, who coordinates every trade on the project — civil work, electrical, modular production, soft furnishing — so you're never the one chasing five different vendors to find out what's happening on site. Modular systems and custom furniture are produced and installed against that same schedule, with weekly updates rather than a black box between the design sign-off and the day the crew shows up.",
      "Handover means a room-by-room walkthrough against the original design, with the snag list closed before keys change hands and a support window in place for whatever needs adjusting once you're actually living in the space — not just on the day the photographs are taken. If you want to see how this actually looks before committing to a project, the studio's Experience Center in Jakkur lets you walk through real finishes and materials in person, and it's the same process behind both projects documented on this site.",
    ],
  },
  {
    slug: "renovation-remodeling-older-homes-indiranagar",
    title: "Renovating an Older Indiranagar Home: What Actually Changes",
    excerpt:
      "Indiranagar's mix of older independent houses and newer apartment renovations calls for a different design approach than a blank-slate build. Here's how the studio actually plans a renovation around what's already there.",
    seoTitle: "Renovation & Remodeling in Indiranagar, Bangalore",
    seoDescription:
      "How The Allure Studio approaches renovation and remodeling for Indiranagar's older independent houses and apartment renovations in Bangalore.",
    category: "Renovation & Remodeling",
    coverImage: "/images/localities/indiranagar.jpg",
    author: "The Allure Studio Team",
    body: [
      "Indiranagar is one of the clearest examples in Bangalore of a neighborhood where a design brief usually starts with a question a new-build project never has to ask: what's actually worth keeping? The area's mix of older independent houses and newer apartment renovations means every project starts from a different existing condition, not a blank floor plate — and that changes how the studio's Renovation & Remodeling service is scoped from the very first walkthrough.",
      "Structural and cosmetic renovation are treated as one connected decision, not two separate jobs handed to two separate contractors — reworking layouts, updating finishes and modernizing an older Indiranagar house managed with the same design discipline as a new build, including coordination with structural and MEP contractors where the renovation actually needs it. That coordination is exactly where most Bangalore renovation projects lose time: not in the design itself, but in the gap between the interior designer's plan and the electrician, plumber or civil contractor's execution of it.",
      "Whether an Indiranagar project is a full teardown-and-rebuild interior or a lighter cosmetic renovation depends entirely on what the first consultation finds — a wall that's structurally sound but visually tired needs a different plan than one that's actually failing. That honest first read, with a real cost bracket and timeline in writing before any design fee is on the table, is what the free initial consultation is built to answer, whether the brief turns out to be a full renovation or something considerably lighter.",
      "One project manager, named at kickoff, coordinates every trade through the renovation — civil work, electrical, modular production, soft furnishing — so an Indiranagar homeowner isn't the one chasing down five separate vendors mid-project. If you're weighing a renovation against a move, or trying to work out how much of an older Indiranagar home is actually worth keeping, that's a conversation for the first consultation, not a decision to make alone before you've talked to a designer.",
    ],
  },
  {
    slug: "full-home-interior-design-hsr-layout-villas",
    title: "Full-Home Interior Design for New HSR Layout Villas",
    excerpt:
      "HSR Layout's newer independent houses and villa-style plots are well suited to designing layout, kitchen, wardrobes and furniture together from the start. Here's why that matters before possession, not after.",
    seoTitle: "Full-Home Interior Design in HSR Layout, Bangalore",
    seoDescription:
      "Full-home residential interior design for new independent houses and villas in HSR Layout, Bangalore — planned before possession, not stitched together after.",
    category: "Residential Interior Design",
    coverImage: "/images/localities/hsr-layout.jpg",
    author: "The Allure Studio Team",
    body: [
      "HSR Layout's newer independent houses and villa-style plots put a lot of Bangalore homeowners in the same position at roughly the same time: keys about to change hands, and a genuine choice about whether to furnish room by room after moving in, or design the whole home as one connected decision before that. The studio's Residential Interior Design service — layout, lighting, materials, furniture and finishes handled together rather than as separate purchases — is built for exactly that second option.",
      "The practical case for starting before possession is straightforward: a modular kitchen or wardrobe system takes real production time, and if that clock only starts once you're already living in a half-furnished home, you live around scaffolding and dust sheets for longer than you need to. Starting design as soon as floor plans are final, rather than waiting for the keys, keeps production and installation moving the moment possession happens instead of starting from zero.",
      "A full-home project in HSR Layout runs through the same four stages as any other studio project — an initial consultation to understand the brief, design and planning where every room is resolved on paper before anything is ordered, production and implementation under one project manager, and a handover with a room-by-room walkthrough and snag list closed before keys change hands. None of that changes because the house is new; if anything, a blank-slate villa is the cleanest version of that process, with no existing structure to work around.",
      "If you're taking possession of an HSR Layout villa or independent house soon, the honest answer to \"when should we start\" is as soon as your floor plans are final — a free initial consultation is the way to find out what that timeline actually looks like for your specific plot, with a real cost bracket in writing before you commit to anything.",
    ],
  },
  {
    slug: "project-management-whitefield-gated-communities",
    title: "Why Whitefield's Gated Communities Need One Project Manager, Not Five Vendors",
    excerpt:
      "Whitefield's large gated-community apartments are common ground for full-home turnkey projects — and exactly the scale where one project manager coordinating every trade actually matters.",
    seoTitle: "Interior Project Management in Whitefield, Bangalore",
    seoDescription:
      "How The Allure Studio's project management service coordinates trades, vendors and society approvals for full-home turnkey projects in Whitefield, Bangalore.",
    category: "Project Management",
    coverImage: "/images/localities/whitefield.jpg",
    author: "The Allure Studio Team",
    body: [
      "Whitefield's apartment stock skews toward large gated communities, and that scale changes what an interior project actually requires beyond good design — deliveries need society approval, installation crews need facility-management coordination, and a project spread across carpentry, modular production, electrical and painting has a lot more places to lose a week than a smaller independent house does. This is exactly the ground the studio's Project Management service is built for.",
      "One project manager, named at kickoff, coordinates every trade and vendor on a Whitefield project — including the society or facility-management coordination that a gated-community build specifically needs — rather than leaving a homeowner to be the one chasing an electrician, a modular carpenter and a painter separately while also managing building-access paperwork. That single point of contact is what turns a design into a finished home on a predictable timeline instead of a moving target.",
      "It's a common misconception that project management is only relevant once construction starts. In practice, it starts during the Design & Planning stage — the same weeks 2–5 window where layout, lighting, materials and furniture are resolved room by room — because a project manager who understands the plan before production begins is the one who can actually keep weeks 6–16 on schedule once modular systems and finishes go into production.",
      "If you're planning a full-home turnkey project in a Whitefield gated community, the studio's project management service is available on its own or folded into a complete residential interior design project — either way, weekly site updates and one project manager mean you're never the one relaying information between five different people to find out what's actually happening on-site.",
    ],
  },
  {
    slug: "interior-design-timeline-sarjapur-road-new-apartments",
    title: "Moving In Faster: Interior Design Timelines for Sarjapur Road's New Apartments",
    excerpt:
      "The Sarjapur Road corridor's newer high-rise apartments tend to come with tighter possession timelines. Here's how design and production can run in parallel to compress the time to move in.",
    seoTitle: "Interior Design Timelines in Sarjapur Road, Bangalore",
    seoDescription:
      "How The Allure Studio plans design and production in parallel to compress interior design timelines for Sarjapur Road's new high-rise apartments in Bangalore.",
    category: "Project Management",
    coverImage: "/images/localities/sarjapur-road.jpg",
    author: "The Allure Studio Team",
    body: [
      "The Sarjapur Road corridor has become one of Bangalore's fastest-moving apartment markets, and that speed cuts both ways — a lot of buyers taking possession here are working with a tighter runway between \"keys in hand\" and \"actually moved in\" than homeowners in more established parts of the city. That timeline pressure is the specific problem the studio plans around for Sarjapur Road projects.",
      "The lever that actually compresses a timeline isn't rushing the design — it's running design and production in parallel wherever the scope allows, rather than waiting for every drawing to be finalized before anything is ordered. Once layout and material decisions on one room are locked, that room's modular production can start while later rooms are still being resolved, instead of the whole project waiting on the slowest decision to be made.",
      "This only works because of how the studio's four-stage process is structured to begin with: an initial consultation gives a real, written timeline before any commitment, Design & Planning resolves layout, lighting, materials and furniture room by room, and Production & Implementation is coordinated by one project manager who can see where parallel scheduling is actually possible and where it isn't. Your designer is the one who flags, room by room, where that time can genuinely be saved.",
      "If you've just taken possession — or are about to — of a new Sarjapur Road apartment and want a real sense of how quickly a full-home interior can actually move, a free initial consultation is where that specific timeline gets scoped, not guessed at in advance.",
    ],
  },
  {
    slug: "lighting-design-hebbal-lake-view-apartments",
    title: "Lighting Design for Hebbal's Lake-View Apartments",
    excerpt:
      "Hebbal's mix of lakeside high-rises and established residential pockets means every apartment starts from a different set of light and view conditions. Here's how lighting design is scoped around that.",
    seoTitle: "Lighting Design in Hebbal, Bangalore",
    seoDescription:
      "How The Allure Studio plans layered lighting design around light, orientation and lake views for Hebbal apartments in Bangalore.",
    category: "Lighting Design",
    coverImage: "/images/localities/hebbal.jpg",
    author: "The Allure Studio Team",
    body: [
      "Hebbal's mix of lakeside high-rises and established residential pockets means two apartments in the same building can have almost opposite light conditions — one facing the lake and open sky, another facing an internal courtyard or a neighboring tower. That difference is exactly why the studio's lighting and space planning services are scoped around each apartment's actual orientation rather than a single lighting plan applied the same way everywhere.",
      "Lighting is planned as its own layer of design — ambient, task and accent — rather than an afterthought added once the furniture's already in place, which is where most homes lose the atmosphere their materials and layout otherwise earn. For a Hebbal apartment with a strong lake-facing view, that usually means restrained ambient light that doesn't compete with the view during the day, layered with warmer accent lighting for the evening once the view itself goes dark.",
      "Orientation and view are part of the very first walkthrough on a Hebbal project, not a detail worked out later — because a layout and lighting plan built around a strong view looks completely different from one built around an internal-facing unit with limited daylight. Every real project on this site, from the flagship's sculptural chandeliers to Aangan's cane pendant fixtures, was lit this way from the start: as a planned layer, not a fixture list chosen at the end.",
      "If your Hebbal apartment has a view — of the lake, or anything else worth designing around — that's worth raising in the first consultation, so layout and lighting can actually be planned to make the most of it rather than working against it by accident.",
    ],
  },
  {
    slug: "custom-furniture-design-yelahanka-villas",
    title: "Custom Furniture for Yelahanka Villas: Built for the Room, Not Fitted Around It",
    excerpt:
      "Yelahanka's independent houses and villa plots give the studio room to apply the same architecture-led approach behind the flagship and Aangan projects — including furniture built for the space, not bought to fit it.",
    seoTitle: "Custom Furniture Design in Yelahanka, Bangalore",
    seoDescription:
      "Custom furniture design for Yelahanka independent houses and villas — pieces built to the room's exact proportions, with a real fabrication partner.",
    category: "Custom Furniture Design",
    coverImage: "/images/localities/yelahanka.jpg",
    author: "The Allure Studio Team",
    body: [
      "Yelahanka's independent houses and villa plots give the studio a kind of room that's harder to find in a standard Bangalore apartment: genuinely large, architecturally distinct spaces, built around one clear idea per home rather than a catalogue of trends — the same approach behind the flagship project's sculptural courtyard and Aangan's brick-and-timber layout. Furniture in a space like that has to be considered on the same terms as the architecture, not treated as an afterthought bought to fill the room.",
      "That's the specific case for Custom Furniture Design in a villa-scale Yelahanka project: when off-the-shelf furniture doesn't fit a space, a proportion, or a material story, the studio designs and produces custom pieces — from a single statement item to a full room's furniture — built to the exact dimensions and finish the design actually calls for. A double-height living room or an oversized primary suite in a Yelahanka villa is exactly the kind of space where a standard-sized sofa or bed frame reads as undersized no matter how good it is.",
      "Every custom piece for a Yelahanka project is specified with real materials and a real fabrication partner, not left as a render — the same standard the studio holds its documented projects to, where furniture, joinery and finishes are chosen to be handled and lived with, not just photographed once on handover day.",
      "Full-home turnkey interiors for independent houses and villas are a core project type for the studio in Yelahanka, whether that means one custom piece to anchor a room or furniture designed for the entire home — either way, the starting point is the same free initial consultation every project begins with.",
    ],
  },
  {
    slug: "modular-kitchen-design-jakkur-thanisandra",
    title: "Modular Kitchen Design in Jakkur & Thanisandra",
    excerpt:
      "Thanisandra sits just down the road from the studio's Jakkur base, and the same modular kitchen systems that work in Jakkur apply directly here. Here's how the studio plans a kitchen around how you actually cook.",
    seoTitle: "Modular Kitchen Design in Jakkur & Thanisandra",
    seoDescription:
      "Modular kitchen design for Jakkur and Thanisandra homes in Bangalore, planned around your actual cooking habits — near The Allure Studio's Experience Center.",
    category: "Modular Kitchens",
    coverImage: "/images/localities/jakkur.jpg",
    author: "The Allure Studio Team",
    body: [
      "Thanisandra sits just down the road from the studio's own Jakkur base, and its wave of large gated apartment complexes is some of the most familiar housing stock the studio designs for — which matters for a modular kitchen specifically, because the same systems, finishes and layouts that work in Jakkur's own newer developments apply directly to Thanisandra's apartments too.",
      "A modular kitchen from the studio is planned around your actual cooking habits and kitchen work-triangle — the working relationship between stove, sink and refrigerator — rather than a showroom configuration adapted after the fact to fit whatever space you have. For Jakkur and Thanisandra's newer apartment floor plans, that usually means resolving the kitchen's layout early, alongside the rest of the home, rather than treating it as a fixture decision made after the walls are already painted.",
      "Because Jakkur is home turf, it's also the easiest place to see this in person: the studio's Experience Center is on-site here, so Jakkur and Thanisandra clients are the ones most likely to walk in, handle actual cabinet finishes and hardware, and start a project the same week — including both the studio's warmer wood-tone modular finishes and its more contemporary acrylic-sheet register, side by side, rather than choosing from a catalogue photo.",
      "Ask your designer about current warranty and after-installation support terms for modular work, since these are set per project and vendor — and if you're in Jakkur or Thanisandra, that's a conversation that's easy to have in person, with a free initial consultation as the starting point either way.",
    ],
  },
  {
    slug: "color-consultation-heritage-homes-malleshwaram-rajajinagar",
    title: "Color Consultation for Bangalore's Older Homes: Malleshwaram & Rajajinagar",
    excerpt:
      "Malleshwaram's older bungalows and Rajajinagar's established independent houses call for a color palette that respects existing architecture, not one picked from a swatch under showroom lighting.",
    seoTitle: "Color Consultation in Malleshwaram & Rajajinagar",
    seoDescription:
      "Color consultation for older homes in Malleshwaram and Rajajinagar, Bangalore — palettes developed against real light and existing architecture.",
    category: "Color Consultation",
    coverImage: "/images/services/color-consultation.jpg",
    author: "The Allure Studio Team",
    body: [
      "Malleshwaram's older bungalows and heritage-adjacent homes, and Rajajinagar's established independent houses, share a specific challenge that a brand-new apartment doesn't have: real architectural character already in the walls, in original detailing worth preserving, in windows and proportions that were designed decades before an open-concept floor plan became the default. A color decision in a home like that isn't just about the paint — it's about whether the palette works with what's already there or fights it.",
      "Color palettes for both areas are developed against the home's actual light — orientation, window size, how each room is actually used through the day — rather than picked from a swatch under showroom lighting and hoped to work once it's on an original lime-plastered wall. An older Malleshwaram bungalow's deep-set windows and high ceilings read completely differently under a warm afternoon light than a Rajajinagar independent house with a more compact, enclosed floor plan, and the color consultation accounts for that difference room by room.",
      "This is exactly the kind of decision that works well as a standalone service — Color Consultation is available on its own for a repaint or refresh, without committing to a full renovation, or folded into a larger renovation and remodeling project if the home needs both. For a Malleshwaram or Rajajinagar home with original details worth keeping, that flexibility matters: the studio treats renovation the same way it treats a new build, with layout resolved first and materials — including color — chosen to last, not chosen to trend.",
      "If you're weighing a repaint against a fuller renovation for an older Malleshwaram or Rajajinagar home, a design consultation is a reasonable place to start even before color enters the conversation — an honest read on what the space needs, with no pressure to commit to more than that.",
    ],
  },
  {
    slug: "styling-staging-first-apartment-electronic-city-marathahalli",
    title: "Styling & Staging or Full Design? What First-Time Buyers in Electronic City & Marathahalli Should Know",
    excerpt:
      "Marathahalli and Electronic City's IT-corridor apartments house a lot of first-time buyers working out where to even start. Here's the real difference between a design consultation and styling & staging.",
    seoTitle: "Styling & Staging in Electronic City & Marathahalli",
    seoDescription:
      "Styling & staging vs. a design consultation for first-time apartment buyers in Electronic City and Marathahalli, Bangalore's IT-corridor neighborhoods.",
    category: "Styling & Staging",
    coverImage: "/images/services/styling-and-staging.jpg",
    author: "The Allure Studio Team",
    body: [
      "Marathahalli's IT-corridor apartment towers and Electronic City's large gated townships both house a lot of young families and first-time owners, and the question the studio hears most often from exactly this group isn't \"which finish should I pick\" — it's \"where do I even start.\" That's a legitimate question with two different honest answers, depending on what the apartment actually needs.",
      "If the apartment is structurally fine and the real gap is furniture, art, textiles and a layout resolved by a professional eye, Styling & Staging is the faster, narrower answer — no construction work, typically weeks rather than months, and it's also what the studio uses to stage a property for sale or rental at a higher price point if that's the actual goal rather than moving in.",
      "If the honest answer is \"we're not sure yet what this space needs,\" a standalone Design Consultation is the better starting point — an honest read on style direction and budget bracket, with no pressure to commit to more, built specifically for homeowners who want expert direction before deciding between styling, a full project, or something in between. It's also the entry point the studio recommends most often for a first Marathahalli or Electronic City apartment, precisely because it doesn't assume the answer in advance.",
      "Both paths start the same way: a free, no-obligation conversation about the actual space, not a generic package sold before anyone's seen it. Whether that conversation ends in a styling project, a full design engagement, or just an honest opinion you take away and act on yourself, it's the same first consultation either way.",
    ],
  },
];

export function readMinutes(post: JournalPost): number {
  const words = post.body.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
