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
};

export const journalPosts: JournalPost[] = [
  {
    slug: "designing-small-bangalore-apartments",
    title: "Designing Small Bangalore Apartments: What Actually Works",
    excerpt:
      "Koramangala and HSR Layout apartments rarely give you extra square footage to spare. Here's what actually earns its keep in a compact Bangalore floor plan — before a single finish is chosen.",
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
];

export function readMinutes(post: JournalPost): number {
  const words = post.body.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
