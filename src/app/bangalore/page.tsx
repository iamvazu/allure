import type { Metadata } from "next";
import LocalityChips from "@/components/LocalityChips";
import { localities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interior Designers Across Bangalore",
  description: "The Allure Studio designs homes across every part of Bangalore — find your locality.",
};

export default function BangalorePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Areas we serve</span>
          <h1>Wherever in Bangalore you&apos;re building</h1>
          <p className="lede">
            The studio is based in Jakkur, but the work isn&apos;t limited to it — projects run
            across every part of the city. Wave 1 localities below have their own dedicated page;
            more are added as projects complete there.
          </p>
        </div>
      </section>
      <section className="localities-section" style={{ textAlign: "left" }}>
        <div className="wrap">
          <LocalityChips localities={localities} />
        </div>
      </section>
    </main>
  );
}
