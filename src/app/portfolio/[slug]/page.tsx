import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import ScrollHero from "@/components/ScrollHero";
import { truncateForMeta } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  // project.eyebrow is lowercase-styled on-page ("case study", "flagship
  // project") — title-cased here for a title tag, with "Bangalore" added
  // for location relevance since the on-page eyebrow doesn't include it.
  const eyebrowTitle = project.eyebrow.replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${project.name} — ${eyebrowTitle} in Bangalore`,
    description: truncateForMeta(project.summary),
    alternates: { canonical: `/portfolio/${slug}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const hasVideo = project.scenes.some((s) => s.video);

  return (
    <main>
      {hasVideo ? (
        <ScrollHero
          scenes={project.scenes}
          imageDir={project.imageDir}
          ctaHref="#gallery"
          ctaLabel="See every scene"
        />
      ) : (
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow">{project.eyebrow} · {project.location}</span>
            <h1>{project.name}</h1>
            <p className="lede">{project.summary}</p>
          </div>
        </section>
      )}

      {hasVideo && (
        <section className="statement" style={{ padding: "50px 0 20px" }}>
          <div className="wrap">
            <span className="eyebrow">{project.eyebrow} · {project.location}</span>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>{project.name}</h1>
            <p className="lede" style={{ marginTop: 14 }}>{project.summary}</p>
          </div>
        </section>
      )}

      <section style={{ padding: "0 0 60px" }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          {project.intro.map((para, i) => (
            <p key={i} style={{ color: "var(--ink-muted)", lineHeight: 1.7, marginBottom: 18, fontSize: "1.02rem" }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      <section id="gallery" style={{ padding: "0 0 100px" }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Walkthrough</span>
              <h2>Scene by scene</h2>
            </div>
          </div>
          <div className="gallery-grid">
            {project.scenes.map((s) => (
              <figure key={s.slug} style={{ position: "relative" }}>
                {s.video?.horizontal ? (
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="none"
                    poster={`/images/${project.imageDir}/${s.img}`}
                    style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", backgroundColor: "var(--ink-muted, #ccc)" }}
                  >
                    <source src={s.video.horizontal} type="video/mp4" />
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={`/images/${project.imageDir}/${s.img}`} alt={s.title} />
                )}
                {s.video && (
                  <span style={{ position: "absolute", top: 10, right: 10, background: "rgba(20,15,10,0.65)", color: "#FFF9F3", fontSize: "0.68rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "4px 9px", borderRadius: 999 }}>
                    Video
                  </span>
                )}
                <figcaption style={{ padding: "10px 2px", fontSize: "0.85rem", color: "var(--ink-muted)" }}>
                  <strong style={{ color: "var(--ink)" }}>Scene {s.n} — {s.title}.</strong> {s.text}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 110px", textAlign: "center" }}>
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}>Want a space like this one?</h2>
          <p style={{ marginTop: 14, color: "var(--ink-muted)" }}>Every project starts with a consultation, not a commitment.</p>
          <div style={{ marginTop: 24 }}>
            <Link className="btn btn-solid" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
