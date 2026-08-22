import type { Stat } from "@/lib/data";

// Placeholder stat band — see the `stats` export in src/lib/data.ts for why
// every value is an em-dash rather than a number.
export default function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="stats-band">
      <div className="wrap stats-grid">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
