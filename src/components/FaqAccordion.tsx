"use client";

import { useState } from "react";

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div className={`faq-item ${open === i ? "is-open" : ""}`} key={item.q}>
          <button
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="faq-q-text">{item.q}</span>
            <span className="faq-icon" aria-hidden="true" />
          </button>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
