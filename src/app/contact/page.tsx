import type { Metadata } from "next";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description: "Book a free, no-obligation consultation with The Allure Studio — interior designers serving all of Bangalore. Call, email, or visit the Jakkur studio.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Start here</span>
          <h1>Book your first consultation</h1>
          <p className="lede">No obligation, no hard pitch — just an honest read on scope, timeline and budget for your space.</p>
        </div>
      </section>
      <section style={{ padding: "0 0 120px" }}>
        <div className="wrap">
          <div className="contact-split">
            <div style={{ border: "1px solid var(--border)", borderRadius: 4, padding: "clamp(24px,4vw,40px)", background: "var(--surface)" }}>
              <p style={{ marginBottom: 24 }}>
                Call or email directly, or visit the Experience Center in Jakkur by appointment.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a className="btn btn-solid" href={brand.phoneHref}>Call {brand.phone}</a>
                <a className="btn btn-ghost" href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
              <p style={{ marginTop: 28, fontSize: "0.85rem" }}>{brand.address}</p>
            </div>
            <div className="editorial-photo-frame is-tall">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="editorial-photo" src="/images/contact/atmosphere.jpg" alt="Studio atmosphere" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
