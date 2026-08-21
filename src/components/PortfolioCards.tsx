import Link from "next/link";
import type { Project } from "@/lib/data";

export default function PortfolioCards({ projects }: { projects: Project[] }) {
  return (
    <div className="portfolio-grid">
      {projects.map((p) => (
        <Link className="p-card" href={`/portfolio/${p.slug}`} key={p.slug}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.heroImage} alt={p.name} />
          <div className="p-card-veil" />
          <div className="p-card-info">
            <span className="eyebrow">{p.eyebrow} · {p.location}</span>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
