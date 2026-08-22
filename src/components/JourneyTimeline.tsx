"use client";

import { useEffect, useRef, useState } from "react";

type Step = { n: string; title: string; text: string };

export default function JourneyTimeline({ steps }: { steps: Step[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    // Respect reduced-motion: show everything immediately, no draw-on effect.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`journey ${visible ? "is-visible" : ""}`} ref={rootRef}>
      <span className="journey-line" aria-hidden="true" />
      <span className="journey-line-ink" aria-hidden="true" />
      {steps.map((s, i) => (
        <div className={`journey-step ${i % 2 === 0 ? "is-top" : "is-bottom"}`} key={s.n}>
          <div className="journey-card" style={{ transitionDelay: `${0.5 + i * 0.22}s` }}>
            <span className="journey-num">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
          <span className="journey-dot" style={{ transitionDelay: `${0.3 + i * 0.22}s` }} aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}
