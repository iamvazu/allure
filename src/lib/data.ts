export const brand = {
  name: "The Allure Studio",
  tagline: "Everlasting Luxury",
  phone: "+91 91872 06290",
  phoneHref: "tel:+919187206290",
  email: "hello@theallurestudio.com",
  address: "Site # 11, 1st Floor ABS Towers, MCHS Jakkur Layout, Bengaluru 560064",
  city: "Bengaluru",
};

export type Scene = {
  n: string;
  slug: string;
  img: string;
  title: string;
  text: string;
  video?: { horizontal?: string; vertical?: string };
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  location: string;
  summary: string;
  intro: string[];
  heroImage: string;
  imageDir: string;
  imageCount: number;
  imagePrefix: string;
  scenes: Scene[];
};

export const flagshipProject: Project = {
  slug: "the-signature-curve",
  name: "The Signature Curve",
  eyebrow: "Flagship project",
  location: "Bengaluru",
  summary:
    "A sculptural corten-and-terracotta home built around one bold architectural gesture — an organic cut-out that pulls daylight three storeys down into a private courtyard.",
  intro: [
    "This is the project that leads everything else on this site, because it's the clearest single statement of what Allure Studio means by \"Everlasting Luxury\": a curved terracotta-render facade with a dramatic organic void cut through it, tropical courtyard planting climbing every level, and interiors that stay quiet enough to let the architecture do the talking.",
    "The brief was a home for a family that wanted a genuinely distinctive street presence without it tipping into spectacle indoors — every room inside resolves into warm, livable, considered space: bouclé furniture, sculptural lighting, full-height glazing onto the courtyard from almost every room.",
  ],
  heroImage: "/images/flagship/img3.jpg",
  imageDir: "flagship",
  imageCount: 11,
  imagePrefix: "img",
  scenes: [
    { n: "01", slug: "arrival", img: "img1.jpg", title: "Arrival", text: "A sculptural terracotta facade announces itself before you've reached the gate." },
    { n: "02", slug: "the-approach", img: "img2.jpg", title: "The Approach", text: "Every material was chosen to age like it belongs to the street it stands on." },
    { n: "03", slug: "the-signature-curve", img: "img3.jpg", title: "The Signature Curve", text: "The building's boldest gesture — an organic void that pulls daylight three storeys down." },
    { n: "04", slug: "the-arrival-lounge", img: "img4.jpg", title: "The Arrival Lounge", text: "Warmth first. A chandelier, a curve of glass, the courtyard glowing just beyond." },
    { n: "05", slug: "the-terrace", img: "img5.jpg", title: "The Terrace", text: "A rooftop built for the hour after golden hour, filtered light patterning the floor." },
    { n: "06", slug: "the-garden-room", img: "img6.jpg", title: "The Garden Room", text: "Furniture chosen to disappear into the view it was arranged to frame." },
    { n: "07", slug: "the-living-dining-hall", img: "img7.jpg", title: "The Living-Dining Hall", text: "One room, three ways to gather, a skylight that tracks the day overhead." },
    { n: "08", slug: "the-family-room", img: "img8.jpg", title: "The Family Room", text: "The everyday room, angled toward the one view worth keeping." },
    { n: "09", slug: "the-lounge-suite", img: "img9.jpg", title: "The Lounge Suite", text: "A quieter register — cream, curve, and one considered object per wall." },
    { n: "10", slug: "the-courtyard-walk", img: "img10.jpg", title: "The Courtyard Walk", text: "Dusk turns the corridor into the best-lit room in the house." },
    { n: "11", slug: "signature-curve-revisited", img: "img11.jpg", title: "The Signature Curve, Revisited", text: "Where the story started is where it ends — looking straight up." },
  ],
};

export const aanganProject: Project = {
  slug: "aangan",
  name: "Aangan",
  eyebrow: "Case study",
  location: "Bengaluru",
  summary:
    "A courtyard home in warm brick and Mangalore-tile roofing, named for the skylit central courtyard — aangan — that every room in the house opens onto.",
  intro: [
    "Aangan takes its name from the Hindi word for courtyard, and the design earns it: a skylit brick-and-timber courtyard sits at the exact center of the plan, with a hand-carved wooden swing hanging inside a brick alcove, and every social room in the house — sitting room, dining hall, family lounge — opens directly onto it.",
    "Where the flagship project is bold and contemporary, Aangan is warm vernacular-craft: red brick, dark laterite stone, terracotta Mangalore tiles, hand-turned timber joinery, cane pendant lighting. It's proof the studio's design discipline holds across two very different registers, not just one signature look repeated on every project.",
  ],
  heroImage: "/images/aangan/project2_img3.jpg",
  imageDir: "aangan",
  imageCount: 17,
  imagePrefix: "project2_img",
  scenes: [
    { n: "01", slug: "arrival", img: "project2_img1.jpg", title: "Arrival", text: "An aerial approach over terracotta Mangalore-tile roofs set among palm and mango trees.", video: { horizontal: "/videos/aangan/arrival-horizontal.mp4", vertical: "/videos/aangan/arrival-vertical.mp4" } },
    { n: "02", slug: "the-threshold", img: "project2_img2.jpg", title: "The Threshold", text: "A red-brick porch, dark stone plinth, and a carved wooden door left open." },
    { n: "03", slug: "the-aangan", img: "project2_img3.jpg", title: "The Aangan", text: "The skylit courtyard the house is named for — brick, timber, a hanging swing, sunlight.", video: { horizontal: "/videos/aangan/the-aangan-horizontal.mp4", vertical: "/videos/aangan/the-aangan-vertical.mp4" } },
    { n: "04", slug: "the-sitting-room", img: "project2_img4.jpg", title: "The Sitting Room", text: "Low wooden-framed seating that keeps the courtyard in view through every doorway." },
    { n: "05", slug: "the-swing-alcove", img: "project2_img7.jpg", title: "The Swing Alcove", text: "A hand-carved swing on brass chains, set inside a red-brick nook.", video: { horizontal: "/videos/aangan/the-swing-alcove-horizontal.mp4" } },
    { n: "06", slug: "courtyard-crossing", img: "project2_img8.jpg", title: "Courtyard Crossing", text: "A circular green-framed window and a brick column mark the way through." },
    { n: "07", slug: "the-family-lounge", img: "project2_img9.jpg", title: "The Family Lounge", text: "A rough-hewn stone feature wall between two long timber-framed sofas.", video: { horizontal: "/videos/aangan/the-family-lounge-horizontal.mp4" } },
    { n: "08", slug: "upper-veranda", img: "project2_img6.jpg", title: "Upper Veranda", text: "A glass floor panel reveals the courtyard below from the level above." },
    { n: "09", slug: "the-dining-room", img: "project2_img10.jpg", title: "The Dining Room", text: "Cane pendant lights over a long table, a circular window framing greenery.", video: { horizontal: "/videos/aangan/the-dining-room-horizontal.mp4", vertical: "/videos/aangan/the-dining-room-vertical.mp4" } },
    { n: "10", slug: "upper-landing", img: "project2_img12.jpg", title: "Upper Landing", text: "A vaulted terracotta-clad ceiling above the route to the bedrooms." },
    { n: "11", slug: "the-primary-suite", img: "project2_img15.jpg", title: "The Primary Suite", text: "A teal headboard and full-height doors onto a treetop-view balcony.", video: { horizontal: "/videos/aangan/the-primary-suite-horizontal.mp4" } },
    { n: "12", slug: "nightfall-at-the-gate", img: "project2_img16.jpg", title: "Nightfall at the Aangan Gate", text: "The house at dusk, its name lit on the gate, a crescent moon overhead." },
  ],
};

export const projects: Project[] = [aanganProject, flagshipProject];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string[];
};

export const services: Service[] = [
  {
    slug: "residential-interior-design",
    name: "Residential Interior Design",
    short: "Full-home design, start to handover.",
    description: [
      "This is the studio's core offering: complete residential interior design for apartments, villas and independent homes anywhere in Bangalore, covering layout, lighting, materials, furniture and finishes as one connected design decision rather than a series of separate purchases.",
      "It's the right starting point if you're renovating or fitting out a whole home and want one team accountable for how every room works together, not just how each one looks individually.",
    ],
  },
  {
    slug: "space-planning",
    name: "Space Planning",
    short: "Layouts that work before a single finish is chosen.",
    description: [
      "Before any material or furniture decision, we resolve how a space is actually going to be used — traffic flow, furniture zones, storage, natural light — so the layout is right first and the styling has something solid to sit on.",
      "Especially valuable for compact Bangalore apartment layouts, where a few centimeters of planning discipline is the difference between a room that feels cramped and one that doesn't.",
    ],
  },
  {
    slug: "design-consultation",
    name: "Design Consultation",
    short: "An honest first read on scope, style and budget.",
    description: [
      "A standalone consultation for homeowners who want expert direction — style, budget range, what's realistic for their space — before committing to a full project, or who need a second opinion on a plan already in motion.",
      "No pressure to sign up for more; some consultations are exactly what they sound like, and that's fine.",
    ],
  },
  {
    slug: "lighting-design",
    name: "Lighting Design",
    short: "Layered light, planned like a material.",
    description: [
      "Lighting is planned as its own layer of design — ambient, task and accent — rather than an afterthought once the furniture's in place, which is where most homes lose the atmosphere their materials and layout otherwise earn.",
      "Every project on this site, from the flagship's sculptural chandeliers to Aangan's cane pendant fixtures, was lit this way from the start.",
    ],
  },
  {
    slug: "custom-furniture-design",
    name: "Custom Furniture Design",
    short: "Pieces built for the room, not fitted around it.",
    description: [
      "When off-the-shelf furniture doesn't fit a space, a proportion, or a material story, we design and produce custom pieces — from a single statement item to a full room's furniture — built to the exact dimensions and finish the design calls for.",
      "Every custom piece is specified with real materials and a real fabrication partner, not left as a render.",
    ],
  },
  {
    slug: "art-and-accessory-procurement",
    name: "Art & Accessory Procurement",
    short: "The finishing 10% that makes a room feel finished.",
    description: [
      "Art, objects, textiles and accessories sourced specifically for a project — not a generic finishing package, but pieces chosen for the actual room they'll sit in.",
      "This is usually the last stage of a project and the one clients notice the most once it's done.",
    ],
  },
  {
    slug: "color-consultation",
    name: "Color Consultation",
    short: "Color decided with the light, not against it.",
    description: [
      "Color palettes developed against your home's actual light — orientation, window size, time-of-day use — rather than picked from a swatch under showroom lighting and hoped for the best.",
      "Works as a standalone service for a repaint or refresh, or folded into a full project.",
    ],
  },
  {
    slug: "renovation-and-remodeling",
    name: "Renovation & Remodeling",
    short: "Working with what's already there.",
    description: [
      "Structural and cosmetic renovation for existing Bangalore homes — reworking layouts, updating finishes, modernizing older apartments and independent houses — managed with the same design discipline as a new-build project.",
      "Includes coordination with structural and MEP contractors where the renovation needs it.",
    ],
  },
  {
    slug: "project-management",
    name: "Project Management",
    short: "One point of accountability, start to finish.",
    description: [
      "A single project manager coordinates every trade and vendor — carpentry, modular production, electrical, painting, installation — so you're not the one chasing five different contractors to stay on schedule.",
      "This is what turns a design into a finished home on a predictable timeline.",
    ],
  },
  {
    slug: "styling-and-staging",
    name: "Styling & Staging",
    short: "For a home that's structurally fine but needs a design pass.",
    description: [
      "For homes that don't need construction work — just furniture, art, textiles and layout resolved by a professional eye. Also used to stage a property for sale or rental at a higher price point.",
      "The fastest of the studio's services to deliver, typically weeks rather than months.",
    ],
  },
  {
    slug: "wardrobe-design",
    name: "Wardrobe Design",
    short: "Storage built to how you actually dress.",
    description: [
      "Custom wardrobe systems designed around your actual wardrobe — proportions, hanging-to-shelf ratios, finish — rather than a standard modular configuration that leaves half the space unused.",
      "One of the studio's most-requested standalone services, and part of every full-home project.",
    ],
  },
  {
    slug: "modular-kitchen",
    name: "Modular Kitchen",
    short: "Kitchens designed around how you cook.",
    description: [
      "Modular kitchen design and installation planned around your actual cooking habits and kitchen work-triangle, not a showroom configuration adapted after the fact to fit your space.",
      "Ask your designer about current warranty and after-installation support terms for modular work.",
    ],
  },
];

export type Locality = {
  slug: string;
  name: string;
  wave: 1 | 2;
  blurb: string;
  faq: { q: string; a: string }[];
};

export const localities: Locality[] = [
  {
    slug: "jakkur",
    name: "Jakkur",
    wave: 1,
    blurb:
      "Jakkur is home turf — the studio's Experience Center is on-site here, so Jakkur clients are the ones most likely to walk in, see real finishes in person, and start a project the same week.",
    faq: [
      { q: "Can I just walk into the Experience Center?", a: "Book ahead so a designer is free to walk you through, but yes — it's a short trip if you're already in Jakkur." },
      { q: "Do you work with the newer apartment developments around Jakkur Layout?", a: "Yes, including layout-constrained apartment floor plans typical of the newer Jakkur developments." },
    ],
  },
  {
    slug: "indiranagar",
    name: "Indiranagar",
    wave: 1,
    blurb:
      "Indiranagar's mix of older independent houses and newer apartment renovations calls for a studio comfortable working around existing structure — from full teardown-and-rebuild interiors to lighter cosmetic renovations.",
    faq: [
      { q: "Do you handle renovations of older Indiranagar houses, not just new apartments?", a: "Yes — renovation and remodeling of existing structures is a core service, not an add-on." },
    ],
  },
  {
    slug: "koramangala",
    name: "Koramangala",
    wave: 1,
    blurb:
      "Koramangala's apartment stock skews compact and space-planning-sensitive — this is exactly the kind of layout where getting furniture zones and storage right before styling begins makes the biggest visible difference.",
    faq: [
      { q: "My Koramangala apartment is fairly small — is that a problem?", a: "It's the most common brief we get in this part of the city, and it's where space planning earns its keep the most." },
    ],
  },
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    wave: 1,
    blurb:
      "HSR Layout's newer independent houses and villa-style plots are well suited to the studio's full-home service — layout, modular kitchen, wardrobes and furniture designed together from the start rather than stitched together after possession.",
    faq: [
      { q: "We're about to take possession of a new HSR Layout villa — when should we start?", a: "As soon as floor plans are final. Starting design before possession keeps production and installation moving the moment you have keys." },
    ],
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    wave: 1,
    blurb:
      "Whitefield's large gated-community apartments are common ground for full-home turnkey projects — the studio's project management service is built for exactly this scale, coordinating every trade under one schedule.",
    faq: [
      { q: "Do you coordinate with our gated community's facility management for deliveries and installation?", a: "Yes, our project manager handles society/FM coordination as part of the schedule." },
    ],
  },
  {
    slug: "sarjapur-road",
    name: "Sarjapur Road",
    wave: 1,
    blurb:
      "The Sarjapur Road corridor's newer high-rise apartments tend to come with tighter possession timelines — the studio plans design and production in parallel wherever the schedule allows, to compress time-to-move-in.",
    faq: [
      { q: "Can design and production happen in parallel to save time?", a: "Where the scope allows it, yes — your designer will flag where that's possible once the plan is locked." },
    ],
  },
  {
    slug: "hebbal",
    name: "Hebbal",
    wave: 1,
    blurb:
      "Hebbal's mix of lakeside high-rises and established residential pockets means every project starts from a different set of light and view conditions — the studio's lighting and space planning services are scoped around each apartment's actual orientation.",
    faq: [
      { q: "Our Hebbal apartment has a strong lake-facing view — can the design work around that?", a: "Yes — orientation and view are part of the first walkthrough, and layout and lighting are planned to make the most of them." },
    ],
  },
  {
    slug: "yelahanka",
    name: "Yelahanka",
    wave: 1,
    blurb:
      "Yelahanka's independent houses and villa plots give the studio room to apply the same design approach behind the flagship and Aangan projects — architecture-led interiors built around one clear idea per home, not a catalogue of trends.",
    faq: [
      { q: "Can you take on a full villa build interior, not just a renovation?", a: "Yes — full-home turnkey interiors for independent houses and villas are a core project type." },
    ],
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "What areas of Bangalore does The Allure Studio work in?",
    a: "All of it. The studio is based in Jakkur and takes on residential projects across every part of Bangalore — from HSR Layout and Koramangala to Whitefield and Sarjapur Road. We don't work outside Bangalore.",
  },
  {
    q: "How long does a typical home interior project take?",
    a: "Most full-home projects run design-to-handover in a few months, depending on scope — a single room styling refresh moves much faster than a full turnkey build-out. Your designer gives you a real timeline at the end of the first consultation, once the scope is clear.",
  },
  {
    q: "What actually happens in the initial consultation?",
    a: "A designer walks the space (or reviews your floor plan) with you, listens to how you actually live in it, and talks through budget range and style direction. You leave with a realistic sense of scope, timeline, and next steps — not a hard sales pitch.",
  },
  {
    q: "How is this different from a modular kitchen showroom or a contractor?",
    a: "A showroom sells you their catalogue; a contractor executes what you already know you want. Allure Studio designs the whole space first — layout, lighting, furniture, materials — then manages production and installation end to end, including the modular kitchen and wardrobe work most showrooms treat as the entire job.",
  },
  {
    q: "What do the Modular Edit, Signature Edit, Styling Edit and Complete Edit actually include?",
    a: "They're four ways to work with us depending on how much of the home needs attention: The Modular Edit covers kitchen and wardrobe systems, The Styling Edit is furniture, art and finishing touches for a space that's structurally fine but needs a design pass, The Signature Edit is a full room-by-room design and build, and The Complete Edit is the whole home, start to finish. Your designer helps you pick the right one in the first consultation.",
  },
  {
    q: "Can I see a finished project in person before committing?",
    a: "Yes — the studio's Experience Center in Jakkur lets you see materials, finishes and furniture in person rather than as renders, and Virtual Tours are available for projects further along. Ask your designer to arrange a visit.",
  },
  {
    q: "Does “Everlasting Luxury” mean this is only for very large budgets?",
    a: "It means the work is built to still look considered in ten years, not that every project is a mansion. The same design discipline — restraint, real materials, nothing trend-chasing — applies whether the scope is one room or a full home; your designer scopes the work to your actual budget in the first conversation.",
  },
  {
    q: "What happens after handover — is there any support if something needs adjusting?",
    a: "Yes. Ask your designer about current post-handover support terms for your specific project — modular installations in particular are checked in on after the first few months of real use.",
  },
];

export const editPackages = [
  { name: "The Modular Edit", desc: "Kitchen and wardrobe systems, designed and installed." },
  { name: "The Styling Edit", desc: "Furniture, art and finishing touches for a space that just needs a design pass." },
  { name: "The Signature Edit", desc: "Full room-by-room design and build." },
  { name: "The Complete Edit", desc: "The whole home, start to finish." },
];
