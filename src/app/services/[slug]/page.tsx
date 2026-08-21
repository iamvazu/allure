import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, localities, brand } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in Bangalore`,
    description: `${service.short} ${service.description[0]}`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "HomeAndConstructionBusiness", name: brand.name },
    areaServed: { "@type": "City", name: "Bengaluru" },
    description: service.description.join(" "),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Service · Bangalore</span>
          <h1>{service.name} in Bangalore</h1>
          <p className="lede">{service.short}</p>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          {service.description.map((p, i) => (
            <p key={i} style={{ color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: 18, fontSize: "1.02rem" }}>
              {p}
            </p>
          ))}
          <div style={{ marginTop: 30 }}>
            <Link className="btn btn-solid" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <section className="localities-section" style={{ textAlign: "left" }}>
        <div className="wrap">
          <span className="eyebrow">Available across Bangalore</span>
          <h2 style={{ marginTop: 12, fontSize: "clamp(1.3rem,3vw,1.7rem)" }}>
            {service.name}, wherever you are in the city
          </h2>
          <div className="chip-row" style={{ justifyContent: "flex-start" }}>
            {localities.map((l) => (
              <Link className="chip" href={`/bangalore/${l.slug}/interior-designer`} key={l.slug}>
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
