import type { Metadata } from "next";
import Link from "next/link";
import { editPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How The Allure Studio takes a Bangalore home from first consultation to handover.",
};

const steps = [
  { n: "01", title: "Initial Consultation", text: "A designer walks the space with you, listens to how you actually live in it, and talks through budget range and style direction honestly — no hard sales pitch." },
  { n: "02", title: "Design & Planning", text: "Layout, lighting, materials and furniture are resolved in detail, room by room, before anything is produced or built." },
  { n: "03", title: "Production & Implementation", text: "Modular systems, custom furniture and finishes are produced and installed under one project manager coordinating every trade." },
  { n: "04", title: "Project Handover", text: "A finished home, walked through room by room, with support in place for whatever needs adjusting once you're actually living in it." },
];

export default function ProcessPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Process</span>
          <h1>Four steps, start to handover</h1>
          <p className="lede">The same process runs whether the scope is one room or a full home — only the timeline changes.</p>
        </div>
      </section>
      <section className="process-section">
        <div className="wrap">
          <div className="process-grid">
            {steps.map((s) => (
              <div className="process-step" key={s.n}>
                <span className="step-num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "0 0 100px" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Ways to work with us</span>
              <h2>Pick the right Edit for your space</h2>
            </div>
          </div>
          <div className="gallery-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))" }}>
            {editPackages.map((e) => (
              <div key={e.name} style={{ border: "1px solid var(--border)", borderRadius: 4, padding: 24, background: "var(--surface)" }}>
                <h3 style={{ fontSize: "1.1rem" }}>{e.name}</h3>
                <p style={{ marginTop: 10, color: "var(--ink-muted)", fontSize: "0.92rem", lineHeight: 1.55 }}>{e.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 34, textAlign: "center" }}>
            <Link className="btn btn-solid" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
