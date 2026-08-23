import type { Metadata } from "next";
import Link from "next/link";
import ScrollHero from "@/components/ScrollHero";
import ServiceGrid from "@/components/ServiceGrid";
import PortfolioCards from "@/components/PortfolioCards";
import FaqAccordion from "@/components/FaqAccordion";
import LocalityChips from "@/components/LocalityChips";
import JourneyTimeline from "@/components/JourneyTimeline";
import DragGallery from "@/components/DragGallery";
import StatsBand from "@/components/StatsBand";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import JournalSection from "@/components/JournalSection";
import { flagshipProject, projects, services, faqs, localities, aanganProject, galleryHighlights, stats, testimonials } from "@/lib/data";
import { journalPosts } from "@/lib/journal";

// title/description are intentionally not repeated here — they're inherited
// from layout.tsx's default metadata (which is exactly this page's title
// and description). Only the canonical URL needs setting explicitly.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const journeySteps = [
  { n: "01", title: "Initial Consultation", text: "A designer walks the space with you and scopes budget and direction honestly." },
  { n: "02", title: "Design & Planning", text: "Layout, lighting, materials and furniture resolved in detail before anything is built." },
  { n: "03", title: "Production & Implementation", text: "Modular systems and finishes produced and installed under one project manager." },
  { n: "04", title: "Project Handover", text: "A finished home, walked through room by room, with support after." },
];

export default function Home() {
  return (
    <main id="top">
      <ScrollHero
        scenes={aanganProject.scenes}
        imageDir={aanganProject.imageDir}
        ctaHref={`/portfolio/${aanganProject.slug}`}
        ctaLabel="See the full project"
      />

      <section className="manifesto">
        <span className="manifesto-mark" aria-hidden="true">01</span>
        <div className="wrap manifesto-grid">
          <div className="manifesto-main">
            <h1>
              Everlasting <em>luxury</em>, built to still feel considered in ten years — not
              just on handover day.
            </h1>
          </div>
          <div className="manifesto-rule" aria-hidden="true" />
          <div className="manifesto-aside">
            <span className="eyebrow">The Allure Studio · Bengaluru</span>
            <p className="lede">
              We design and build complete homes across Bangalore: layout, lighting, furniture,
              modular kitchens and wardrobes, and every material decision in between. Calm,
              deeply personal, and made to last — that&apos;s the whole brief, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>Every service, in the open</h2>
            </div>
          </div>
          <ServiceGrid services={services} />
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Two homes, two registers</h2>
            </div>
          </div>
          <PortfolioCards projects={projects} />
        </div>
      </section>

      <section className="gallery-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">More from our projects</span>
              <h2>Every room tells its own part of the story</h2>
            </div>
          </div>
        </div>
        <DragGallery items={galleryHighlights} />
      </section>

      <section className="journey-section" id="process">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Four stages, one working drawing</h2>
            </div>
            <Link className="btn btn-ghost" href="/process">
              See the full process
            </Link>
          </div>
          <JourneyTimeline steps={journeySteps} />
        </div>
      </section>

      <section className="why-section" id="why-us">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">[ How we work ]</span>
              <h2>Why Bangalore families choose us</h2>
            </div>
          </div>
          <div className="why-timeline">
            {[
              {
                n: "01",
                bracket: "Process",
                title: "Transparent",
                highlight: "Process",
                text: "Every stage of your project is handled in the open — from the first consultation to material selection and final handover, you get a real timeline and cost bracket in writing before any design fee is on the table.",
                tags: ["Written timeline", "Real cost bracket", "No hidden fees"],
                img: "/images/process/stage-01-consultation.jpg",
              },
              {
                n: "02",
                bracket: "People",
                title: "Dedicated",
                highlight: "Supervision",
                text: "One project manager, named at kickoff, coordinates every trade on your project — civil, electrical, modular, soft furnishing — so you're never chasing five different people to find out what's happening on-site.",
                tags: ["One project manager", "Every trade coordinated", "Single point of contact"],
                img: "/images/process/stage-03-production.jpg",
              },
              {
                n: "03",
                bracket: "Materials",
                title: "Assured",
                highlight: "Quality",
                text: "Real finishes and materials, not renderings. The studio's Experience Center in Jakkur lets you handle the actual stone, wood and fabric that will go into your home before you commit to anything.",
                tags: ["Real materials, not renders", "Experience Center walkthroughs", "Handle it before you commit"],
                img: "/images/about/experience-center.jpg",
              },
              {
                n: "04",
                bracket: "Longevity",
                title: "Enduring",
                highlight: "Design",
                text: "Layout resolved before styling begins, materials chosen to age well — homes built to still feel considered in ten years, not just on the day the photographs are taken.",
                tags: ["Layout resolved first", "Materials chosen to age well", "Built beyond handover day"],
                img: "/images/flagship/img3.jpg",
              },
            ].map((w) => (
              <div className="why-row-new" key={w.n}>
                <span className="why-node" aria-hidden="true" />
                <div className="why-row-content">
                  <span className="why-row-bracket">[ {w.bracket} ]</span>
                  <span className="why-row-super" aria-hidden="true">/{w.n}</span>
                  <h3 className="why-row-title">
                    {w.title} <span className="hl">{w.highlight}</span>.
                  </h3>
                  <p className="why-row-text">{w.text}</p>
                  <ul className="why-tags">
                    {w.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="why-row-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt={`${w.title} ${w.highlight}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBand stats={stats} />

      <section className="testimonial-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">In their words</span>
              <h2>What it&apos;s like to work with us</h2>
            </div>
          </div>
          <TestimonialCarousel items={testimonials} />
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="wrap">
          <div className="exp-box">
            <div>
              <span className="eyebrow">A real differentiator</span>
              <h2>Walk through materials before they&apos;re in your home</h2>
              <p>
                Most Bangalore studios show you a render. The Experience Center in Jakkur lets
                you handle finishes, sit in the furniture, and see color and light decisions in
                person — and Virtual Tours bring finished projects to you wherever you are.
              </p>
              <div className="exp-actions">
                <a className="btn btn-solid" href="/contact">Book an Experience Center visit</a>
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={flagshipProject.heroImage}
                alt="A material and furniture detail from a completed Allure Studio project"
                style={{ width: "100%", borderRadius: 4, boxShadow: "var(--shadow)", aspectRatio: "4/3", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow">Before you ask</span>
              <h2>Frequently asked</h2>
            </div>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <JournalSection posts={journalPosts} />

      <section className="localities-section">
        <div className="wrap">
          <span className="eyebrow">Serving all of Bangalore</span>
          <h2 style={{ marginTop: 12, fontSize: "clamp(1.4rem,3vw,1.9rem)" }}>
            Wherever in the city you&apos;re building
          </h2>
          <LocalityChips localities={localities} />
        </div>
      </section>

      <section id="contact" style={{ padding: "30px 0 110px" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow">Start here</span>
          <h2 style={{ marginTop: 14, fontSize: "clamp(1.7rem,3.6vw,2.4rem)" }}>
            Book your first consultation
          </h2>
          <p style={{ marginTop: 16, color: "var(--ink-muted)", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            No obligation, no hard pitch — just an honest read on scope, timeline and budget for
            your space.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn btn-solid" href="tel:+919187206290">Call +91 91872 06290</a>
            <a className="btn btn-ghost" href="mailto:hello@theallurestudio.com">hello@theallurestudio.com</a>
          </div>
        </div>
      </section>
    </main>
  );
}
