"use client";

import { useEffect, useRef, useState } from "react";

// Generic scroll-reveal wrapper: fades/lifts its children in once they cross
// into the viewport, via IntersectionObserver (not scroll-position math), so
// it stays cheap and doesn't fight Next's hydration. Pass `delay` (ms) to
// stagger a row of siblings — see process/page.tsx's differentiators grid.
// Respects prefers-reduced-motion by rendering fully visible immediately
// (handled in CSS — see `.reveal` in globals.css).
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
