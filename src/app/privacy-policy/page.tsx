import type { Metadata } from "next";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Allure Studio collects, uses and protects information from visitors to this website and from clients of the studio.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "23 August 2026";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="lede">How this website and the studio handle information about visitors and clients.</p>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="wrap">
          <article className="legal-body">
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>

            <p>
              This policy explains what information {brand.name} (&quot;the studio&quot;, &quot;we&quot;, &quot;us&quot;) collects
              through this website (theallurestudio.com), why, and what your options are. It covers this
              website specifically — not information you share with us directly by phone, email or in person
              when discussing or engaging a design project, which is addressed separately below.
            </p>

            <h2>Information collected automatically by this website</h2>
            <p>
              This website uses Vercel Web Analytics to understand overall traffic — which pages are visited,
              roughly how many people visit, and where visitors are broadly located. This analytics service is
              built to be privacy-preserving: it does not use cookies, does not track you across other
              websites, and does not store data tied to your name, email address or exact identity. It records
              anonymous, aggregated data points such as the page viewed, referring site, approximate
              geolocation (city/region level, not precise), device type and browser, and automatically
              discards individual visit data after 24 hours.
            </p>
            <p>
              This website also loads two typefaces (Newsreader and Archivo) from Google Fonts. Loading a
              webpage that references Google Fonts causes your browser to make a request to Google&apos;s
              servers for those font files, which — like any request to a third-party server — can expose your
              IP address to Google, governed by Google&apos;s own privacy policy rather than this one.
            </p>
            <p>
              This website does not use its own tracking cookies, and does not run third-party advertising
              trackers or social-media pixels.
            </p>

            <h2>Information you provide directly</h2>
            <p>
              The Contact page links directly to a phone number and an email address rather than an online
              form — when you call or email us that way, the conversation and any information you share (your
              name, contact details, and project details) is handled through your own phone or email provider,
              not collected or stored by this website itself. If you visit the studio&apos;s Experience Center in
              Jakkur or otherwise engage us for a project, we collect the information needed to discuss and
              deliver that project — typically your name, contact details, address, and details of the space
              and brief — directly from you, in person, by phone, or by email.
            </p>
            <p>
              The newsletter sign-up field in the footer currently captures what you type into it only in your
              own browser, for display purposes — it is not yet connected to an email marketing provider, so no
              email address submitted there is transmitted to us, stored, or added to any mailing list at this
              time.
            </p>

            <h2>How information is used</h2>
            <ul>
              <li>To respond to enquiries and calls, and to discuss, plan and deliver a design project you&apos;ve engaged us for.</li>
              <li>To understand, in aggregate, how this website is used, so it can be kept useful and up to date.</li>
              <li>To meet legal, accounting, or regulatory obligations where applicable.</li>
            </ul>
            <p>
              We do not sell personal information, and we do not share information collected directly from
              clients with third parties for their own marketing purposes.
            </p>

            <h2>Third-party services this website relies on</h2>
            <ul>
              <li><strong>Vercel</strong> — hosts this website and provides the privacy-preserving analytics described above.</li>
              <li><strong>Google Fonts</strong> — serves the typefaces used across the site.</li>
            </ul>

            <h2>Your rights</h2>
            <p>
              As a resident of India, you have rights under the Digital Personal Data Protection Act, 2023 and
              its rules regarding personal data the studio holds about you as a client — including the right to
              ask what information we hold, to have it corrected, and to have it deleted where we&apos;re not
              required to keep it for a legal or contractual reason. To exercise any of these rights, contact us
              using the details below.
            </p>

            <h2>Children&apos;s privacy</h2>
            <p>This website and the studio&apos;s services are directed at adults engaging residential design projects, and the studio does not knowingly collect information from children.</p>

            <h2>Changes to this policy</h2>
            <p>We may update this policy as the website or the studio&apos;s data practices change. The date at the top of this page reflects the most recent update.</p>

            <h2>Contact</h2>
            <p>
              Questions about this policy or about information the studio holds about you can be sent to{" "}
              <a href={`mailto:${brand.email}`}>{brand.email}</a> or {brand.phone}.
              <br />
              {brand.address}
            </p>

            <div className="legal-note">
              This policy is a good-faith description of how this website and the studio currently handle
              information, written to be accurate rather than to fill space — it is not a substitute for advice
              from a qualified legal professional, and the studio recommends a legal review as its data
              practices, tools, or obligations under Indian law evolve.
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
