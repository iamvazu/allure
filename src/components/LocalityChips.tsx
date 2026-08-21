import Link from "next/link";
import type { Locality } from "@/lib/data";

export default function LocalityChips({ localities }: { localities: Locality[] }) {
  return (
    <div className="chip-row">
      {localities.map((l) => (
        <Link className="chip" href={`/bangalore/${l.slug}/interior-designer`} key={l.slug}>
          {l.name}
        </Link>
      ))}
    </div>
  );
}
