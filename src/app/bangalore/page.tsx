import type { Metadata } from "next";
import LocalityChips from "@/components/LocalityChips";
import { localities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interior Designers Across Bangalore",
  description: "The Allure Studio designs homes across every part of Bangalore — find your locality.",
};

const REGION_ORDER = ["North", "South", "East", "West"] as const;

export default function BangalorePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Areas we serve</span>
          <h1>Wherever in Bangalore you&apos;re building</h1>
          <p className="lede">
            The studio is based in Jakkur, but the work isn&apos;t limited to it — the studio takes
            on residential projects across every part of the city. Each area below has its own
            dedicated page with what to expect for that neighborhood&apos;s typical housing stock.
          </p>
        </div>
      </section>

      {REGION_ORDER.map((region) => {
        const regionLocalities = localities.filter((l) => l.region === region);
        if (regionLocalities.length === 0) return null;
        return (
          <section className="localities-section locality-region" style={{ textAlign: "left" }} key={region}>
            <div className="wrap">
              <span className="eyebrow">{region} Bangalore</span>
              <LocalityChips localities={regionLocalities} />
            </div>
          </section>
        );
      })}
    </main>
  );
}
