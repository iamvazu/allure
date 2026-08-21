import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to the questions Bangalore homeowners most often ask The Allure Studio.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
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
          <span className="eyebrow">FAQ</span>
          <h1>Frequently asked</h1>
          <p className="lede">If your question isn&apos;t here, it&apos;s a good first question for the consultation.</p>
        </div>
      </section>
      <section className="faq-section">
        <div className="wrap">
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}
