"use client";

import { useState } from "react";

// `variant="panel"` is an additive style used by the main /faq page's
// category groups (shaded rows, no numeral, larger answer cap for longer
// keyword-rich answers) — every other call site (homepage FAQ, service
// pages, locality pages) omits it and keeps the original numbered-row look
// untouched.
export default function FaqAccordion({
  items,
  variant = "line",
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  variant?: "line" | "panel";
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={`faq-list ${variant === "panel" ? "is-panel" : ""}`.trim()}>
      {items.map((item, i) => (
        <div className={`faq-item ${open === i ? "is-open" : ""}`} key={item.q}>
          <button
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {variant === "line" && <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>}
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
