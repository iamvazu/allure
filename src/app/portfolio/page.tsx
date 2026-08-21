import type { Metadata } from "next";
import PortfolioCards from "@/components/PortfolioCards";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Completed interior design projects across Bangalore by The Allure Studio.",
};

export default function PortfolioPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Portfolio</span>
          <h1>Two homes, two registers</h1>
          <p className="lede">
            Every project starts from the same design discipline and ends up looking nothing
            alike — because it&apos;s built around the client and the site, not a house style.
          </p>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="wrap">
          <PortfolioCards projects={projects} />
        </div>
      </section>
    </main>
  );
}
