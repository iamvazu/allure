import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The Allure Studio is a Bengaluru-based interior design studio building Everlasting Luxury across the city.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1>Everlasting Luxury, made in Bengaluru</h1>
          <p className="lede">
            The Allure Studio designs and builds complete homes across Bangalore — from a single
            styling refresh to a full turnkey build-out — with one design discipline running
            through every project: restraint, real materials, nothing chosen to chase a trend.
          </p>
          <img src="/images/about/studio-detail.jpg" alt="Studio work table" style={{ width: "100%", height: "auto", marginTop: 48, borderRadius: 4 }} />
        </div>
      </section>
      <section style={{ padding: "0 0 100px" }}>
        <div className="wrap" style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 18 }}>
          <p style={{ color: "var(--ink-muted)", lineHeight: 1.7, fontSize: "1.02rem" }}>
            Two projects on this site show the range: a sculptural corten-and-terracotta home
            built around one bold architectural gesture, and Aangan, a courtyard home in warm
            brick and Mangalore tile named for the space at its heart. Different registers, same
            discipline — layout resolved before styling begins, materials chosen to age well, and
            one project manager accountable from consultation to handover.
          </p>
          <p style={{ color: "var(--ink-muted)", lineHeight: 1.7, fontSize: "1.02rem" }}>
            The studio&apos;s Experience Center in Jakkur is where that discipline is easiest to
            see in person — real finishes, real furniture, not renders. Book a visit, or start
            with a consultation wherever you are in Bangalore.
          </p>
          <img src="/images/about/experience-center.jpg" alt="Experience Center showroom" style={{ width: "100%", height: "auto", marginTop: 32, borderRadius: 4 }} />
        </div>
      </section>
    </main>
  );
}
