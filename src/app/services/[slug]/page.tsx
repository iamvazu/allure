import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, localities, brand } from "@/lib/data";
import fs from "fs";
import path from "path";

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
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];
  if (!service) notFound();

  const imagePath = `/images/services/${slug}.jpg`;
  const hasImage = fs.existsSync(path.join(process.cwd(), "public", imagePath));

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

      <section className="manifesto manifesto-compact">
        <span className="manifesto-mark" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="wrap manifesto-grid">
          <div className="manifesto-main">
            {service.description.map((p, i) => (
              <p className="service-para" key={i}>
                {p}
              </p>
            ))}
            {hasImage && (
              <img 
                src={imagePath} 
                alt={service.name} 
                style={{ width: "100%", height: "auto", marginTop: 32, borderRadius: 4 }} 
              />
            )}
            <div style={{ marginTop: 32 }}>
              <Link className="btn btn-solid" href="/contact">
                Book a Consultation
              </Link>
            </div>
          </div>
          <div className="manifesto-rule" aria-hidden="true" />
          <div className="manifesto-aside">
            <span className="eyebrow">At a glance</span>
            <ul className="service-facts">
              <li>
                <strong>Service</strong>
                {service.name} — {String(index + 1).padStart(2, "0")} of {String(services.length).padStart(2, "0")}
              </li>
              <li>
                <strong>Where</strong>
                All of Bangalore, no exceptions
              </li>
              <li>
                <strong>Starts with</strong>
                A free initial consultation, no obligation
              </li>
              <li>
                <strong>Studio</strong>
                {brand.name} · {brand.tagline}
              </li>
            </ul>
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
