import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { editPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interior Design Process in Bangalore",
  description:
    "How The Allure Studio designs and builds full-home interiors across Bangalore — four stages, one project manager, and a fixed timeline before you commit to anything.",
};

const steps = [
  {
    n: "01",
    duration: "Week 1",
    title: "Initial Consultation",
    text: "A designer walks the space with you, or reviews your floor plan, and listens to how you actually live in it before talking through budget range and style direction — no hard sales pitch, no generic mood board.",
    points: ["On-site or floor-plan review", "Honest budget bracket", "A real timeline, not a guess"],
  },
  {
    n: "02",
    duration: "Weeks 2–5",
    title: "Design & Planning",
    text: "Layout, lighting, materials and furniture are resolved room by room — on paper, in detail — before a single cabinet is ordered or a wall is touched. This is the stage most Bangalore interior projects rush, and where a design starts either holding up for a decade or not.",
    points: ["Space planning & layout", "Lighting & material palette", "Furniture & modular drawings"],
  },
  {
    n: "03",
    duration: "Weeks 6–16",
    title: "Production & Implementation",
    text: "Modular systems, custom furniture and finishes are produced and installed under one project manager who coordinates every trade — civil, electrical, modular, soft furnishing — so nothing stalls waiting on a handoff between vendors.",
    points: ["In-house modular production", "One project manager, one number to call", "Weekly site updates"],
  },
  {
    n: "04",
    duration: "Handover",
    title: "Project Handover",
    text: "A finished home, walked through room by room against the original design, with support in place for whatever needs adjusting once you're actually living in it — not just on the day the photographs are taken.",
    points: ["Room-by-room walkthrough", "Snag list closed before keys change hands", "Post-handover support window"],
  },
];

const differentiators = [
  {
    title: "One studio, start to finish",
    text: "Design, modular production and installation sit under one roof. Most Bangalore projects pass between a designer, a kitchen showroom and a separate contractor — every handoff is where a timeline slips and a detail gets lost.",
  },
  {
    title: "A single point of contact",
    text: "One project manager, named at kickoff, coordinates every trade on your project — civil work, electrical, modular, soft furnishing. You're never chasing five people to find out what's happening on-site.",
  },
  {
    title: "See it before you sign",
    text: "The studio's Experience Center in Jakkur lets you handle real finishes, materials and furniture in person before committing — not a rendering, the actual material under your own light.",
  },
  {
    title: "Bangalore only, by design",
    text: "Every project is local. No fly-in design team, no site supervision happening over a phone call from another city — just a studio that works exclusively across Bangalore and knows its sites, vendors and timelines.",
  },
];

const processFaqs = [
  {
    q: "Do you handle civil work, or only the interior finishes?",
    a: "Minor civil, electrical and plumbing changes — reworking a wall, adding points, adjusting a layout — are coordinated by the same project manager as the rest of the build, so the design doesn't stall waiting on a separate contractor to fit you into their schedule.",
  },
  {
    q: "Will I get a fixed timeline before I commit to anything?",
    a: "Yes. Once your designer understands the scope at the end of the first consultation, you get a real timeline and cost bracket in writing — before any design fee or contract is on the table.",
  },
  {
    q: "Who do I actually call if something needs adjusting mid-project?",
    a: "One project manager, named at kickoff, is your single point of contact for the entire build. You're not routed to a different person depending on which trade the question is about.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The Allure Studio's interior design process in Bangalore",
  description:
    "The four-stage process The Allure Studio uses to take a Bangalore home from first consultation to handover: consultation, design and planning, production and implementation, and handover.",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.text,
  })),
};

export default function ProcessPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Process · Full-Home Interior Design in Bangalore</span>
          <h1>The process behind Bangalore&apos;s most considered interiors.</h1>
          <p className="lede">
            Four stages, one project manager, and a fixed timeline before you commit — modular
            kitchens, wardrobes, civil work and every material decision handled under one roof,
            not passed between five vendors across the city.
          </p>
        </div>
      </section>

      <section className="manifesto manifesto-compact">
        <span className="manifesto-mark" aria-hidden="true">04</span>
        <div className="wrap manifesto-grid">
          <div className="manifesto-main">
            <h2>
              Most interior design in Bangalore moves fast, skips a step, and it shows by
              <em> year two</em>. Ours doesn&apos;t.
            </h2>
          </div>
          <div className="manifesto-rule" aria-hidden="true" />
          <div className="manifesto-aside">
            <span className="eyebrow">Why the process matters</span>
            <p className="lede">
              The difference between a home that photographs well on handover day and one that
              still feels considered five years in isn&apos;t the mood board — it&apos;s the
              process behind it: how carefully the layout was resolved before a cabinet was
              ordered, how tightly production was supervised, how honestly the timeline was set
              at the start. That discipline is what a full-service Bangalore interior design
              studio owes you, and what a showroom with a portfolio page can&apos;t.
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Start to handover</span>
              <h2>Four stages, no shortcuts</h2>
            </div>
          </div>
          <ol className="process-index">
            {steps.map((s) => (
              <li className="process-row" key={s.n}>
                <span className="process-row-num">{s.n}</span>
                <div className="process-row-body">
                  <div className="process-row-head">
                    <h3 className="process-row-title">{s.title}</h3>
                    <span className="process-row-duration">{s.duration}</span>
                  </div>
                  <p className="process-row-text">{s.text}</p>
                  <ul className="process-row-points">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="differentiators-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">What makes it different</span>
              <h2>Why Bangalore homeowners choose this process</h2>
            </div>
          </div>
          <div className="differentiators-grid">
            {differentiators.map((d) => (
              <div className="differentiator" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="edit-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Ways to work with us</span>
              <h2>Pick the right Edit for your space</h2>
            </div>
          </div>
          <ul className="edit-index">
            {editPackages.map((e, i) => (
              <li className="edit-row" key={e.name}>
                <span className="edit-row-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="edit-row-name">{e.name}</span>
                <span className="edit-row-desc">{e.desc}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link className="btn btn-solid" href="/contact">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Before you call</span>
              <h2>Process questions, answered</h2>
            </div>
          </div>
          <FaqAccordion items={processFaqs} />
        </div>
      </section>
    </main>
  );
}
