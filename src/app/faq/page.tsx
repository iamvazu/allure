import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import { brand } from "@/lib/data";
import { faqCategories } from "@/lib/faqCategories";

export const metadata: Metadata = {
  title: "FAQs — Interior Design in Bangalore",
  description:
    "Answers on process, timeline, pricing, every service from modular kitchens to full-home design, and Bangalore coverage — before you book a consultation.",
  alternates: { canonical: "/faq" },
};

const allItems = faqCategories.flatMap((c) => c.items);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">[ Common Questions ]</span>
          <div className="faq-hero-grid">
            <h1>Everything to know before we start a project together.</h1>
            <p className="faq-hero-lede">
              Answers to what clients actually ask — about the process and timeline, pricing, every
              service from modular kitchens to full-home design, and how far across Bangalore the
              studio works.
            </p>
          </div>

          <div className="faq-layout">
            <aside className="faq-sidebar">
              <div className="faq-sidebar-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about/experience-center.jpg" alt="The Allure Studio's Experience Center in Jakkur" />
              </div>
              <p className="faq-sidebar-text">
                Have a question that isn&apos;t here? The studio is easiest to reach directly — no ticket
                queue, no chatbot.
              </p>
              <div className="faq-sidebar-actions">
                <a className="faq-sidebar-link" href={brand.phoneHref}>
                  Call {brand.phone} <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a className="faq-sidebar-link" href={`mailto:${brand.email}`}>
                  Email the studio <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a className="faq-sidebar-link" href="/contact">
                  Book a consultation <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </aside>

            <div className="faq-categories">
              {faqCategories.map((cat, ci) => (
                <Reveal className="faq-category" delay={0} key={cat.label}>
                  <div className="faq-category-head">
                    <span className="eyebrow">[ {cat.label} ]</span>
                    <h2>{cat.heading}</h2>
                  </div>
                  <FaqAccordion items={cat.items} variant="panel" defaultOpen={ci === 0 ? 0 : null} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
