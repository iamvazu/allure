import Link from "next/link";
import type { Service } from "@/lib/data";

export default function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <ul className="service-index">
      {services.map((s, i) => (
        <li className="service-row" key={s.slug}>
          <Link className="service-row-link" href={`/services/${s.slug}`}>
            <span className="service-row-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="service-row-name">{s.name}</span>
            <span className="service-row-short">{s.short}</span>
            <span className="service-row-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
