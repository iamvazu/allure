// Categorized FAQ content for the main /faq page — deliberately broader and
// more comparison/decision-oriented than the per-service FAQs in
// serviceFaqs.ts (which answer "what does this one service include?" on its
// own page). This file answers "which service/path is right for me?" and
// "how does the studio actually work?" across the whole site, so the two
// don't read as duplicates of each other.
//
// Every fact here is one already established elsewhere in the codebase —
// src/lib/data.ts (services, editPackages, localities, brand, faqs) and
// src/app/process/page.tsx (the real four-stage timeline). Nothing below
// invents a price, a duration not already on the Process page, a staff
// name, or a completed-project count.

export type FaqItem = { q: string; a: string };
export type FaqCategory = { label: string; heading: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    label: "About The Studio",
    heading: "The Allure Studio, in short",
    items: [
      {
        q: "What is The Allure Studio, and where is it based?",
        a: "The Allure Studio is a residential interior design studio based in Jakkur, Bangalore, working across every part of the city — apartments, villas and independent homes. The studio's tagline, \"Everlasting Luxury,\" describes the design standard: real materials and a resolved layout, built to still feel considered a decade in, not just on handover day.",
      },
      {
        q: "Can I see real, completed projects rather than renders?",
        a: "Yes. The Portfolio documents two real completed projects in full: The Signature Curve, a contemporary corten-and-terracotta home built around a sculptural courtyard, and Aangan, a warm-vernacular courtyard home in brick, timber and cane. Both are shown scene by scene, not as a single hero render.",
      },
      {
        q: "Does \"Everlasting Luxury\" mean every project has to be a large budget?",
        a: "No — it describes the design discipline (restraint, real materials, nothing trend-chasing), not the size of the home. The same discipline applies whether the scope is one room or a full house; your designer scopes the work to your actual brief and budget in the first consultation.",
      },
      {
        q: "Is there somewhere I can handle real materials before committing to a project?",
        a: "Yes — the studio's Experience Center in Jakkur. Rather than choosing a modular kitchen finish, a wardrobe shutter or a fabric from a screen, you can see and handle the actual material under real light before it goes into your home.",
      },
    ],
  },
  {
    label: "Process & Timeline",
    heading: "How a project actually runs",
    items: [
      {
        q: "What are the stages of an Allure Studio project, start to finish?",
        a: "Four, with no shortcuts: Initial Consultation (week 1), Design & Planning (weeks 2–5), Production & Implementation (weeks 6–16), and Handover. Full details of each stage are on the Process page — this is the same four-stage structure whether the project is a single room or a full home, just scaled to the actual scope.",
      },
      {
        q: "How long does interior design take in Bangalore, from first call to moving in?",
        a: "It depends entirely on scope — a styling-only refresh with no construction moves in weeks, while a full-home build typically runs through the studio's production and implementation stage (weeks 6–16) before handover. Your designer gives you a real, written timeline at the end of the first consultation, once the actual scope is clear — not a guess up front.",
      },
      {
        q: "What happens during the Design & Planning stage?",
        a: "Layout, lighting, materials and furniture are resolved room by room, on paper, in detail — before a single cabinet is ordered or a wall is touched. This is the stage most rushed Bangalore interior projects skip, and it's where a design starts either holding up for a decade or not.",
      },
      {
        q: "Who supervises the actual construction and installation?",
        a: "One project manager, named at kickoff, coordinates every trade on your project — civil work, electrical, modular production, soft furnishing — so you're not the one chasing five different vendors to find out what's happening on-site. You get weekly site updates through this stage.",
      },
      {
        q: "Is there support after handover, if something needs adjusting?",
        a: "Yes — handover includes a room-by-room walkthrough against the original design and the snag list closed before keys change hands, and there's a post-handover support window as well. Ask your designer about current post-handover support terms for your specific project; modular installations in particular are checked in on after the first few months of real use.",
      },
    ],
  },
  {
    label: "Getting Started",
    heading: "Booking your first consultation",
    items: [
      {
        q: "What happens in the free initial consultation?",
        a: "A designer walks the space with you, or reviews your floor plan, and listens to how you actually live in it before talking through budget range and style direction — no hard sales pitch, no generic mood board. It's free and there's no obligation to continue.",
      },
      {
        q: "Do I need to have a budget figured out before I call?",
        a: "No — an honest budget bracket is one of the things the first consultation is for. You leave that conversation with a realistic sense of scope, a real written timeline, and a cost bracket, rather than being asked to commit before either exists.",
      },
      {
        q: "What are the different ways to work with the studio?",
        a: "Four Edits, depending on how much of the home needs attention: the Modular Edit (kitchen and wardrobe systems, designed and installed), the Styling Edit (furniture, art and finishing touches for a space that's structurally fine but needs a design pass), the Signature Edit (full room-by-room design and build), and the Complete Edit (the whole home, start to finish). Your designer helps you pick the right one in the first consultation.",
      },
      {
        q: "Can I book just a consultation, without committing to a full project?",
        a: "Yes — Design Consultation is offered as a standalone service on its own, for homeowners who want expert direction before committing to more, or a second opinion on a plan already in motion. Some consultations are exactly what they sound like, and that's a complete outcome on its own.",
      },
    ],
  },
  {
    label: "Full-Home Design & Renovation",
    heading: "Full-home, space planning & renovation",
    items: [
      {
        q: "What's included in full residential interior design?",
        a: "Layout, lighting, materials, furniture and finishes handled as one connected design decision, not a series of separate purchases — the studio's core, start-to-handover service for apartments, villas and independent homes anywhere in Bangalore.",
      },
      {
        q: "Why does space planning come before any material or furniture decision?",
        a: "Because traffic flow, furniture zones, storage and natural light determine whether a layout actually works — resolving that first means the styling has something solid to sit on. It's especially valuable in compact Bangalore apartments, where a few centimeters of planning discipline is the difference between a room that feels cramped and one that doesn't.",
      },
      {
        q: "Can the studio renovate an older Bangalore apartment or independent house?",
        a: "Yes — Renovation & Remodeling covers structural and cosmetic work on existing homes, reworking layouts, updating finishes and modernizing older apartments and independent houses, managed with the same design discipline as a new build, including coordination with structural and MEP contractors where the renovation needs it.",
      },
      {
        q: "Do you handle civil, electrical and plumbing work, or only interior finishes?",
        a: "Minor civil, electrical and plumbing changes — reworking a wall, adding points, adjusting a layout — are coordinated by the same project manager as the rest of the build, so the design doesn't stall waiting on a separate contractor to fit you into their schedule.",
      },
    ],
  },
  {
    label: "Modular Kitchens & Wardrobes",
    heading: "Modular kitchens, wardrobe design & finishes",
    items: [
      {
        q: "How is a modular kitchen from The Allure Studio different from a showroom kitchen?",
        a: "A showroom sells a fixed catalogue configuration adapted to your space after the fact; this studio plans the kitchen layout and cabinetry around your actual cooking habits and kitchen work-triangle from the start, and manages design, production and installation as one process rather than handing you off to a separate contractor.",
      },
      {
        q: "What cabinet finishes are available — is acrylic an option?",
        a: "Yes. Alongside the studio's warmer wood-tone finishes, modular kitchens and wardrobes are also available in a contemporary acrylic-sheet register — high-gloss or soft-matte shutters with a handleless or slim aluminium-edge profile, in a restrained two-tone palette (white paired with charcoal, bottle-green or navy). Photos of both registers are on the Modular Kitchen and Wardrobe Design pages.",
      },
      {
        q: "How does custom wardrobe design differ from a standard modular wardrobe?",
        a: "A custom wardrobe is sized to your actual clothes — hanging-to-shelf ratio, proportions, finish — rather than a standard modular configuration that often leaves part of the space unused. It's one of the studio's most-requested standalone services, and also included in every full-home project.",
      },
      {
        q: "Is there a warranty on modular kitchen or wardrobe installation?",
        a: "Ask your designer about current warranty and after-installation support terms — these are set per project and vendor, and your designer will confirm what applies before you commit.",
      },
    ],
  },
  {
    label: "Lighting, Furniture & Finishing Touches",
    heading: "Lighting, custom furniture, art & accessories",
    items: [
      {
        q: "Why does lighting need its own design service, separate from the rest of the interior?",
        a: "Because lighting planned as its own layer — ambient, task and accent — is what gives a room the atmosphere its materials and layout otherwise earn, and it's usually the thing a home loses when lighting is left as an afterthought once the furniture's in place. Every real project on this site, from the flagship's sculptural chandeliers to Aangan's cane pendant fixtures, was lit this way from the start.",
      },
      {
        q: "Can the studio design and build a custom piece of furniture, not just source it?",
        a: "Yes — Custom Furniture Design covers a single statement piece up to a full room's furniture, built to the exact dimensions and finish a space calls for, specified with real materials and a real fabrication partner rather than left as a render.",
      },
      {
        q: "What does Art & Accessory Procurement actually involve?",
        a: "Sourcing art, objects, textiles and accessories chosen specifically for the room they'll sit in, rather than a generic finishing package — usually the last stage of a project, and the one clients notice the most once it's done.",
      },
      {
        q: "Can I book lighting design or furniture design on their own, without a full project?",
        a: "Yes — both are offered as standalone services as well as being planned into every full-home project from the start.",
      },
    ],
  },
  {
    label: "Design Consultation, Color & Styling",
    heading: "Consultation, color & styling services",
    items: [
      {
        q: "How is color chosen for a project — is it just picked from a swatch book?",
        a: "No — palettes are developed against your home's actual light: orientation, window size, and how each room is used through the day, rather than a color picked under showroom lighting and hoped to work once it's on the wall. Color Consultation is available as a standalone service for a repaint or refresh, or folded into a full project.",
      },
      {
        q: "What's the difference between Styling & Staging and a full interior design project?",
        a: "Styling & Staging is for homes that don't need construction work — just furniture, art, textiles and layout resolved by a professional eye. It's the fastest of the studio's services to deliver, typically weeks rather than months, and is also used to stage a property for sale or rental at a higher price point.",
      },
      {
        q: "Is a design consultation useful if I already have a plan from someone else?",
        a: "Yes — a standalone consultation works as a second opinion on a plan already in motion, not only as a first step. It's an honest read on scope, style direction and budget bracket, with no pressure to sign up for more.",
      },
      {
        q: "Which service should I book if my home just needs furniture and styling, not construction?",
        a: "Styling & Staging, or the Styling Edit if you'd rather work from one of the studio's set packages — both skip construction entirely and focus on furniture, art and layout for a space that's already structurally sound.",
      },
    ],
  },
  {
    label: "Coverage Across Bangalore",
    heading: "Where the studio works",
    items: [
      {
        q: "Does The Allure Studio work outside the studio's own neighborhood?",
        a: "Yes, citywide. The studio is based in Jakkur, in North Bangalore, but every service is available across all of Bangalore — North, South, East and West — with no exceptions and no fly-in design team; every project is local, supervised by a team that knows the city's sites, vendors and timelines.",
      },
      {
        q: "Which areas near the studio's Jakkur base are covered?",
        a: "All of North Bangalore, including Hebbal, Yelahanka, Thanisandra, Hennur, RT Nagar, Sahakara Nagar and Devanahalli, alongside Jakkur itself.",
      },
      {
        q: "Does the studio serve South, East and West Bangalore too?",
        a: "Yes. South Bangalore coverage includes Koramangala, HSR Layout, Sarjapur Road, Jayanagar, JP Nagar, BTM Layout, Banashankari and Electronic City. East Bangalore includes Indiranagar, Whitefield, Marathahalli, KR Puram and CV Raman Nagar. West Bangalore includes Rajajinagar, Malleshwaram, Vijayanagar, Yeshwanthpur and RR Nagar. Every one of these areas has its own dedicated page under Areas We Serve.",
      },
      {
        q: "Does interior design in an apartment differ from a villa or independent house?",
        a: "The underlying process is the same four stages, but the design questions differ — compact apartment layouts (common in HSR Layout, Koramangala and similar areas) lean heavily on space planning and storage discipline, while independent houses and villas more often involve Renovation & Remodeling and civil/MEP coordination alongside the interior design itself.",
      },
    ],
  },
  {
    label: "Materials & Quality",
    heading: "Materials, finishes & build quality",
    items: [
      {
        q: "Does the studio only work in one visual style?",
        a: "No — the two documented projects on this site prove the range: The Signature Curve is bold and contemporary (corten, terracotta render, sculptural lighting), while Aangan is warm vernacular-craft (red brick, laterite stone, Mangalore tiles, hand-turned timber, cane pendant lighting). The same design discipline holds across both registers, and the studio's newer modular work also spans a sleeker acrylic-finish register — your designer works in whichever register actually fits your home and brief.",
      },
      {
        q: "Are the materials shown on this site real, or renders?",
        a: "The Portfolio's Signature Curve and Aangan projects are real, completed, photographed work. Service-page photography illustrates the materials and finishes the studio specifies (including the acrylic modular register) rather than a specific numbered project — your designer will show you the actual material for your own project at the Experience Center before you commit to it.",
      },
      {
        q: "Who manages quality during production, not just design?",
        a: "The same project manager assigned at kickoff, who coordinates every trade — modular production included — through the Production & Implementation stage, with a snag list closed out before handover rather than left for you to discover later.",
      },
    ],
  },
  {
    label: "Pricing & Working With Us",
    heading: "Cost, contact & next steps",
    items: [
      {
        q: "How much does an interior design project in Bangalore cost?",
        a: "It depends on scope, service and finish level, so the studio doesn't quote a figure without seeing the space or brief first — you get a real cost bracket in writing at the end of your free initial consultation, before any design fee is on the table, not a generic price list.",
      },
      {
        q: "Are there hidden fees once a project starts?",
        a: "The studio's process is built around giving you a written timeline and cost bracket up front, precisely so scope and cost are agreed before work begins rather than discovered mid-project.",
      },
      {
        q: "How do I actually get started?",
        a: "Book a free initial consultation by phone or email — call or email the studio directly, or visit the Experience Center in Jakkur by appointment. There's no obligation, and no hard pitch.",
      },
      {
        q: "I'm not sure which service I need — who do I ask?",
        a: "That's exactly what the initial consultation is for. Describe the space and what's not working, and your designer will recommend the right starting point — whether that's a single service like Space Planning or Color Consultation, one of the four Edits, or a full residential project.",
      },
    ],
  },
];
