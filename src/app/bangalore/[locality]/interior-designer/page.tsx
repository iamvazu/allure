import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { localities, services, projects, brand } from "@/lib/data";
import FaqAccordion from "@/components/FaqAccordion";

export function generateStaticParams() {
  return localities.map((l) => ({ locality: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locality: string }> }): Promise<Metadata> {
  const { locality: localitySlug } = await params;
  const locality = localities.find((l) => l.slug === localitySlug);
  if (!locality) return {};
  return {
    title: `Interior Designer in ${locality.name}, Bangalore`,
    description: locality.blurb,
  };
}

export default async function LocalityPage({ params }: { params: Promise<{ locality: string }> }) {
  const { locality: localitySlug } = await params;
  const locality = localities.find((l) => l.slug === localitySlug);
  if (!locality) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `${brand.name} — ${locality.name}`,
    areaServed: { "@type": "Place", name: `${locality.name}, Bengaluru` },
    telephone: brand.phone,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Interior Designer · {locality.name}</span>
          <h1>Interior design in {locality.name}, Bangalore</h1>
          <p className="lede">{locality.blurb}</p>
          <img src={`/images/localities/${locality.slug}.jpg`} alt={`Interior design in ${locality.name}`} style={{ width: "100%", height: "auto", marginTop: 48, borderRadius: 4 }} />
        </div>
      </section>

      <section style={{ padding: "0 0 70px" }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: 18 }}>Services available in {locality.name}</h2>
          <div className="chip-row" style={{ justifyContent: "flex-start" }}>
            {services.slice(0, 6).map((s) => (
              <Link className="chip" href={`/services/${s.slug}`} key={s.slug}>{s.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {locality.faq.length > 0 && (
        <section className="faq-section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <span className="eyebrow">{locality.name} specifics</span>
                <h2>Questions we get in this area</h2>
              </div>
            </div>
            <FaqAccordion items={locality.faq} />
          </div>
        </section>
      )}

      <section style={{ padding: "0 0 100px" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">See the work</span>
              <h2>Recent projects</h2>
            </div>
          </div>
          <div className="portfolio-grid">
            {projects.map((p) => (
              <Link className="p-card" href={`/portfolio/${p.slug}`} key={p.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.heroImage} alt={p.name} />
                <div className="p-card-veil" />
                <div className="p-card-info">
                  <span className="eyebrow">{p.eyebrow}</span>
                  <h3>{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 110px", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>Start a project in {locality.name}</h2>
          <div style={{ marginTop: 24 }}>
            <Link className="btn btn-solid" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
