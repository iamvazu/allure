"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/data";

// Placeholder-aware testimonial carousel — see the `testimonials` export in
// src/lib/data.ts. Nav dots/arrows only render once there's more than one
// real testimonial to page between.
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const multi = items.length > 1;
  const current = items[active] ?? items[0];

  if (!current) return null;

  return (
    <div className="testimonial-carousel">
      <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
      <p className="testimonial-quote">{current.quote}</p>
      <div className="testimonial-attrib">
        <span className="testimonial-name">{current.name}</span>
        <span className="testimonial-role">{current.role}</span>
      </div>
      {multi && (
        <div className="testimonial-dots">
          {items.map((t, i) => (
            <button
              key={t.name + i}
              className={`testimonial-dot ${i === active ? "is-active" : ""}`}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
