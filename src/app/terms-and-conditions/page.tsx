import type { Metadata } from "next";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern use of theallurestudio.com and the relationship between The Allure Studio and its clients.",
};

const LAST_UPDATED = "23 August 2026";

export default function TermsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Legal</span>
          <h1>Terms &amp; Conditions</h1>
          <p className="lede">The terms that govern use of this website and, at a high level, the studio&apos;s design engagements.</p>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="wrap">
          <article className="legal-body">
            <p className="legal-updated">Last updated: {LAST_UPDATED}</p>

            <p>
              These terms apply to your use of theallurestudio.com, operated by {brand.name}, {brand.address}{" "}
              (&quot;the studio&quot;, &quot;we&quot;, &quot;us&quot;). By browsing this website, you accept these terms. They&apos;re written
              in two parts: how the website itself may be used, and how a design engagement with the studio
              works at a high level — the specific scope, fees, schedule and deliverables for any actual
              project are set out separately, in a written agreement between you and the studio, not on this
              page.
            </p>

            <h2>Use of this website</h2>
            <p>
              This website is provided for information about the studio&apos;s services, portfolio and design
              guidance, and to let you get in touch to book a consultation. You may browse and share pages from
              it for personal, non-commercial purposes. You may not copy, reproduce, or republish substantial
              portions of its content, photography, or project imagery for commercial use without our written
              permission.
            </p>

            <h2>Content and intellectual property</h2>
            <p>
              Text, photography and project imagery on this website — including images of completed projects
              such as Aangan and The Signature Curve — belong to {brand.name} or are used with permission, and
              are protected by applicable intellectual property law. The studio&apos;s name, logo and &quot;Everlasting
              Luxury&quot; branding may not be used without permission.
            </p>

            <h2>Accuracy of information</h2>
            <p>
              Content on this website, including the Journal, service descriptions and locality pages, is
              provided as general design guidance and information about the studio&apos;s offerings — it&apos;s not a
              quotation, a guarantee of pricing or timeline for any specific project, and it does not replace a
              consultation. Figures such as project warranty or after-installation support terms are set per
              project and vendor; confirm current terms with your designer before relying on them.
            </p>

            <h2>Consultations</h2>
            <p>
              The studio offers a free, no-obligation initial consultation, as described on the Contact and
              service pages of this website. Booking a consultation does not commit you to engaging the studio
              for a full project.
            </p>

            <h2>Design engagements</h2>
            <p>
              If you engage the studio for a project — residential interior design, a specific service such as
              a modular kitchen or wardrobe design, or any other service listed on this website — the actual
              scope of work, fees, payment schedule, timeline, and responsibilities of each party are set out
              in a separate written agreement signed by you and the studio. Where anything in that agreement
              differs from this page, the written agreement governs.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              This website and its content are provided &quot;as is&quot;. To the extent permitted by law, the studio
              is not liable for indirect or consequential loss arising from use of this website. Nothing in
              these terms limits liability that cannot be excluded under applicable Indian law, and nothing
              here limits obligations the studio takes on under a separate written project agreement.
            </p>

            <h2>Third-party links</h2>
            <p>
              This website may link to third-party sites (for example, this Terms page and the Privacy Policy
              reference services like Vercel and Google Fonts). We aren&apos;t responsible for the content or
              privacy practices of sites we don&apos;t operate.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of India, and any dispute relating to this website is subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.</p>

            <h2>Changes to these terms</h2>
            <p>We may update these terms from time to time. The date at the top of this page reflects the most recent update.</p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to <a href={`mailto:${brand.email}`}>{brand.email}</a> or {brand.phone}.
              <br />
              {brand.address}
            </p>

            <div className="legal-note">
              These terms are a good-faith, plain-language summary written to reflect how this website and the
              studio&apos;s consultations actually work — they are not a substitute for advice from a qualified
              legal professional, and the studio recommends a legal review before treating this page as a
              complete terms-of-service or client contract.
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
