import Link from "next/link";
import fs from "fs";
import path from "path";
import type { Service } from "@/lib/data";

export default function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="service-scope-list">
      {services.map((s, i) => {
        const imagePath = `/images/services/${s.slug}.jpg`;
        const hasImage = fs.existsSync(path.join(process.cwd(), "public", imagePath));

        return (
          <div className="service-scope-row" key={s.slug}>
            <div className="service-scope-tags-col">
              <span className="service-scope-tags-label">Scope</span>
              <ul className="service-scope-tags">
                {s.scope.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className={`service-scope-photo ${hasImage ? "" : "is-empty"}`}>
              {hasImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imagePath} alt={s.name} />
              ) : (
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              )}
            </div>

            <div className="service-scope-body">
              <span className="eyebrow">{String(i + 1).padStart(2, "0")} / Service</span>
              <h3>{s.name}</h3>
              <p>{s.short} {s.description[0]}</p>
              <Link className="service-scope-link" href={`/services/${s.slug}`}>
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
