import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Bangalore Interior Design Studio",
  description: "The Allure Studio is a Bengaluru-based interior design studio building Everlasting Luxury across the city — real projects, one studio, start to handover.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero page-hero-split">
        <div className="wrap">
          <div>
            <span className="eyebrow">About</span>
            <h1>Everlasting Luxury, made in Bengaluru</h1>
            <p className="lede">
              The Allure Studio designs and builds complete homes across Bangalore — from a single
              styling refresh to a full turnkey build-out — with one design discipline running
              through every project: restraint, real materials, nothing chosen to chase a trend.
            </p>
          </div>
          <div className="page-hero-split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="editorial-photo" src="/images/about/studio-detail.jpg" alt="Studio work table with material swatches" />
          </div>
        </div>
      </section>
      <section style={{ padding: "0 0 110px" }}>
        <div className="wrap" style={{ maxWidth: 980 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "center" }} className="about-split">
            <div className="editorial-photo-frame is-square">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="editorial-photo" src="/images/about/experience-center.jpg" alt="The Experience Center showroom in Jakkur" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <p>
                Two projects on this site show the range: a sculptural corten-and-terracotta home
                built around one bold architectural gesture, and Aangan, a courtyard home in warm
                brick and Mangalore tile named for the space at its heart. Different registers, same
                discipline — layout resolved before styling begins, materials chosen to age well, and
                one project manager accountable from consultation to handover.
              </p>
              <p>
                The studio&apos;s Experience Center in Jakkur is where that discipline is easiest to
                see in person — real finishes, real furniture, not renders. Book a visit, or start
                with a consultation wherever you are in Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
