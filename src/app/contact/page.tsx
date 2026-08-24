import type { Metadata } from "next";
import { brand } from "@/lib/data";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description: "Book a free, no-obligation consultation with The Allure Studio — interior designers serving all of Bangalore. Call, email, or visit the Jakkur studio.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main style={{ padding: "clamp(120px, 16vh, 180px) 0 clamp(60px, 10vh, 120px)" }}>
      <div className="wrap">
        <div className="contact-unified-layout">
          {/* Left Column (Sticky) */}
          <div className="contact-sidebar">
            <span className="eyebrow">Start here</span>
            <h1 style={{ marginTop: 12, marginBottom: 16 }}>Book your first consultation</h1>
            <p className="lede" style={{ marginBottom: 48, maxWidth: "42ch" }}>
              No obligation, no hard pitch — just an honest read on scope, timeline and budget for your space.
            </p>

            <div style={{ marginBottom: 48 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a className="btn btn-solid" href={brand.phoneHref}>Call {brand.phone}</a>
                <a className="btn btn-ghost" href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
              <p style={{ marginTop: 24, fontSize: "0.95rem", color: "var(--ink-muted)", lineHeight: 1.6, maxWidth: "34ch" }}>
                <strong style={{ color: "var(--ink)", fontWeight: 600, display: "block", marginBottom: 4 }}>Experience Center</strong>
                {brand.address}
              </p>
            </div>

            <div className="editorial-photo-frame is-wide" style={{ maxWidth: 460 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="editorial-photo" src="/images/contact/atmosphere.jpg" alt="Studio atmosphere" />
            </div>
          </div>

          {/* Right Column (Scrolls) */}
          <div className="contact-form-area">
            <div className="section-head" style={{ marginBottom: 32 }}>
              <div>
                <span className="eyebrow">Get an instant quote</span>
                <h2 style={{ marginTop: 8 }}>Tell us about your space</h2>
                <p className="lede" style={{ marginTop: 12, maxWidth: 620, fontSize: "1rem" }}>
                  A few details on your property and timeline so a designer can get back to you with
                  a real cost bracket — no generic packages, just an honest estimate.
                </p>
              </div>
            </div>
            <div className="quote-form-card" style={{ maxWidth: "none" }}>
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
