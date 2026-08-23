// Per-service FAQ content for the 12 individual service pages
// (src/app/services/[slug]/page.tsx). Every answer is built only from facts
// already established elsewhere in the codebase — this file's own service
// description/scope tags, the studio's real process (see /process), the
// real Jakkur-based, Bangalore-only positioning, and the real "no
// obligation" consultation model. Nothing here invents pricing figures,
// timelines, staff names, or completed-project counts.
//
// Keyed by service slug so the page component can do
// `serviceFaqs[slug] ?? []` and render nothing if a slug is ever added
// here without matching content.

export type ServiceFaq = { q: string; a: string };

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  "residential-interior-design": [
    {
      q: "What does residential interior design from The Allure Studio actually include?",
      a: "It covers a full home as one connected design decision — layout, lighting, materials, furniture and finishes — rather than a series of separate purchases handled by different people. It's the studio's core, start-to-handover service for apartments, villas and independent homes anywhere in Bangalore.",
    },
    {
      q: "Do I need a full interior designer, or just a few rooms styled?",
      a: "If you're fitting out or renovating a whole home and want one team accountable for how every room works together, full residential interior design is the right starting point. If your home is structurally fine and just needs furniture, art and layout resolved, Styling & Staging is the faster, narrower service.",
    },
    {
      q: "Which parts of Bangalore does this service cover?",
      a: "All of it. The studio is based in Jakkur, but residential interior design is available across every part of the city — see the locality list on this page for individual area pages.",
    },
    {
      q: "How does a full home project start?",
      a: "With a free, no-obligation initial consultation to understand the brief, the space and the budget bracket before anything is committed to.",
    },
  ],
  "space-planning": [
    {
      q: "What is space planning, and why does it come before styling?",
      a: "Space planning resolves how a space is actually going to be used — traffic flow, furniture zones, storage, natural light — before any material or furniture decision is made, so the layout is right first and the styling has something solid to sit on.",
    },
    {
      q: "Is space planning useful for a small apartment?",
      a: "It's especially valuable there. In a compact Bangalore apartment, a few centimeters of planning discipline is often the difference between a room that feels cramped and one that doesn't — this is a documented pattern across the studio's projects, not a one-off claim.",
    },
    {
      q: "Can I book space planning on its own, without a full design project?",
      a: "Yes. It's offered as a standalone service as well as the first stage of every full-home project, so you can commission it alone if that's the only part of the process you need.",
    },
    {
      q: "Does space planning cover storage as well as layout?",
      a: "Yes — traffic and zoning are planned alongside storage and natural light together, since they're interdependent decisions, not separate ones.",
    },
  ],
  "design-consultation": [
    {
      q: "What happens in a design consultation?",
      a: "It's an honest, standalone first read on scope, style direction and budget bracket for your space — useful before committing to a full project, or as a second opinion on a plan already in motion.",
    },
    {
      q: "Am I obligated to hire the studio after a consultation?",
      a: "No. There's no pressure to sign up for more — some consultations are exactly what they sound like, a single expert opinion, and that's a complete, fine outcome on its own.",
    },
    {
      q: "Is the consultation free?",
      a: "The studio's projects start with a free initial consultation and no obligation. Ask your designer to confirm current terms for a standalone consultation booking.",
    },
    {
      q: "What should I bring to a consultation?",
      a: "Photos or a floor plan of the space if you have them, a rough sense of your budget bracket, and whatever style references you're drawn to — the more concrete the starting point, the more useful the direction you'll get back.",
    },
  ],
  "lighting-design": [
    {
      q: "What does lighting design cover?",
      a: "Lighting is planned as its own layer of design — ambient, task and accent — rather than an afterthought added once the furniture is in place, which is where most homes lose the atmosphere their materials and layout otherwise earn.",
    },
    {
      q: "What's the difference between ambient, task and accent lighting?",
      a: "Ambient is the general fill light for a room, task is focused light for a specific activity like cooking or reading, and accent highlights a particular feature or object. All three are planned together, not left to a single overhead fixture.",
    },
    {
      q: "Can lighting design be added to an existing space without a full renovation?",
      a: "Yes — it's available as a standalone service. It's also planned into every full residential project from the start, the way it was on the flagship project's sculptural chandeliers and Aangan's cane pendant fixtures.",
    },
    {
      q: "Does lighting design include kitchen and wardrobe lighting?",
      a: "Yes — integrated lighting such as under-cabinet and accent lighting is planned as part of Modular Kitchen and Wardrobe Design work when those services are commissioned alongside it.",
    },
  ],
  "custom-furniture-design": [
    {
      q: "When does custom furniture make sense over off-the-shelf pieces?",
      a: "When off-the-shelf furniture doesn't fit a space, a proportion, or a material story the design calls for. Custom pieces are designed and produced to the exact dimensions and finish the room needs, from a single statement item to a full room's furniture.",
    },
    {
      q: "Are custom pieces actually built, or just rendered?",
      a: "Every custom piece is specified with real materials and a real fabrication partner — it's built, not left as a render or a mood-board concept.",
    },
    {
      q: "Can I commission one custom piece without a full project?",
      a: "Yes — this is offered as a standalone service, whether that's a single statement piece or furniture for an entire room.",
    },
    {
      q: "What materials are used for custom furniture?",
      a: "Materials are chosen per project to fit the design — the studio's real projects use registers spanning solid wood joinery to more contemporary finishes; your designer will specify materials against your actual brief rather than a fixed catalogue.",
    },
  ],
  "art-and-accessory-procurement": [
    {
      q: "What is art and accessory procurement?",
      a: "It's the sourcing of art, objects, textiles and accessories specifically for a project — chosen for the actual room they'll sit in, not picked from a generic finishing package.",
    },
    {
      q: "Why is this usually the last stage of a project?",
      a: "Because art and accessories are the finishing layer that responds to a space once its layout, lighting and furniture are already resolved — it's the roughly 10% of decisions that makes a finished room actually feel finished, and clients typically notice the difference the most once it's done.",
    },
    {
      q: "Can I book art procurement on its own for a room I've already furnished?",
      a: "Yes — it's available as a standalone service for a space that's otherwise complete and just needs the art, textile and accessory layer resolved.",
    },
  ],
  "color-consultation": [
    {
      q: "How is color chosen for a project?",
      a: "Against your home's actual light — its orientation, window size and time-of-day use — rather than picked from a swatch under showroom lighting and hoped to work once it's on the wall.",
    },
    {
      q: "Can color consultation be booked for just a repaint, without a full renovation?",
      a: "Yes — it works as a standalone service for a repaint or refresh, as well as folded into a full residential project.",
    },
    {
      q: "What's an orientation study, and why does it matter for color?",
      a: "It's an assessment of how each room's light changes through the day based on which direction it faces — a color that reads well in a north-facing room can read completely differently in a west-facing one, so the palette is developed against that reality rather than a single lighting condition.",
    },
  ],
  "renovation-and-remodeling": [
    {
      q: "What does renovation and remodeling cover?",
      a: "Structural and cosmetic renovation for existing Bangalore homes — reworking layouts, updating finishes, modernizing older apartments and independent houses — managed with the same design discipline as a new-build project.",
    },
    {
      q: "Does the studio coordinate structural and electrical work for a renovation?",
      a: "Yes — the service includes coordination with structural and MEP (mechanical, electrical, plumbing) contractors where the renovation needs it, rather than leaving that coordination to the homeowner.",
    },
    {
      q: "Is renovation different from a full new-build interior project?",
      a: "Yes — renovation works with what's already there: the existing structure, layout and systems, updated and modernized, rather than a from-scratch fit-out.",
    },
    {
      q: "Is renovation suitable for older independent houses, not just apartments?",
      a: "Yes — it's specifically offered for older homes as well as apartments, including cases where original structural elements are retained and paired with new finishes and layout.",
    },
  ],
  "project-management": [
    {
      q: "What does the project management service actually do?",
      a: "A single project manager coordinates every trade and vendor on your project — carpentry, modular production, electrical, painting, installation — so you're not the one chasing five different contractors to stay on schedule.",
    },
    {
      q: "Can I hire project management without also hiring the studio for design?",
      a: "It's offered as one of the studio's core services and is what turns a design into a finished home on a predictable timeline; ask your designer whether standalone project management is available for a design plan from elsewhere.",
    },
    {
      q: "How many people will I be coordinating with during my project?",
      a: "One — the point of this service is a single point of accountability across every trade, rather than the homeowner managing carpenters, electricians and painters separately.",
    },
  ],
  "styling-and-staging": [
    {
      q: "What's the difference between styling and a full interior design project?",
      a: "Styling & Staging is for homes that don't need construction work — just furniture, art, textiles and layout resolved by a professional eye. A full residential project covers layout, materials and construction-level decisions as well.",
    },
    {
      q: "How long does styling and staging take compared to a full project?",
      a: "It's the fastest of the studio's services to deliver, typically weeks rather than months, since there's no construction phase involved.",
    },
    {
      q: "Is this service only for homeowners, or also for selling or renting a property?",
      a: "Both — it's used for homes people are living in as well as to stage a property for sale or rental at a higher price point.",
    },
  ],
  "wardrobe-design": [
    {
      q: "How is a custom wardrobe different from a standard modular one?",
      a: "A custom wardrobe is designed around your actual clothes — proportions, hanging-to-shelf ratio, finish — rather than a standard modular configuration that often leaves part of the space unused.",
    },
    {
      q: "Can wardrobe design be commissioned on its own?",
      a: "Yes — it's one of the studio's most-requested standalone services, and it's also included as part of every full-home project.",
    },
    {
      q: "What finishes are available for wardrobe shutters?",
      a: "Finishes are specified per project, including contemporary acrylic-sheet options with a handleless or slim-pull profile alongside more traditional wood-tone finishes — see the photos on this page for examples of the range.",
    },
    {
      q: "Does wardrobe design include interior organization, not just the exterior?",
      a: "Yes — hanging space, drawers and shelving are planned together around your actual hanging-to-shelf ratio, not just the visible shutter finish.",
    },
  ],
  "modular-kitchen": [
    {
      q: "What makes a kitchen 'modular', and how is it different from a carpenter-built one?",
      a: "A modular kitchen is built from factory-finished cabinet units engineered to fit together precisely, which gives more consistent finishes and hardware than an entirely site-built kitchen. The studio plans the layout around your actual cooking habits and kitchen work-triangle rather than adapting a showroom configuration after the fact.",
    },
    {
      q: "What is the kitchen work-triangle, and why does it matter?",
      a: "It's the working relationship between your stove, sink and refrigerator — the three points you move between most while cooking. Planning the layout around that triangle, and around how you actually cook, is what makes a kitchen efficient day to day rather than just photogenic.",
    },
    {
      q: "What cabinet finishes are available for a modular kitchen?",
      a: "Finishes are specified per project, including contemporary high-gloss or soft-matte acrylic-sheet shutters with handleless or slim aluminium-edge pulls, alongside the studio's warmer wood-tone finishes — see the photos on this page for both registers.",
    },
    {
      q: "Is there a warranty on modular kitchen installation?",
      a: "Ask your designer about current warranty and after-installation support terms for modular work, since these are set per project and vendor.",
    },
  ],
};
