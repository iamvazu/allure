"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type { Scene } from "@/lib/data";

// This scrubbing mechanic is ported from the actual reference engine
// (github.com/oso95/scroll-world, references/scrub-engine.js), not a
// reimplementation from memory. The two rules that matter most, straight
// from that engine's own comments:
//
//   1. "Scrubbing = setting video.currentTime from scroll... Seekability, not
//      keyframe density, is what makes scrubbing work... The robust fix is to
//      fetch each clip as a Blob and play it from an in-memory object URL
//      (blobs are always fully seekable)." Seeking a normal <video src="...">
//      re-issues an HTTP range request per seek, which is what made scrubbing
//      here look frozen/photo-only -- the network couldn't keep up with scroll.
//   2. Never queue a new seek while the decoder is still resolving the last
//      one (coalescing), and keep the still poster up until the clip has
//      painted a REAL frame (first `seeked` event), not just on metadata load
//      -- otherwise a fast flick freezes the clip or flashes a blank scene.

type SegState = {
  cur: number; // eased, currently-applied 0..1 position within this scene's video
  target: number; // scroll-derived 0..1 position to ease toward
  ready: boolean; // metadata loaded, currentTime is safe to set
  loading: boolean;
  hasClip: boolean; // a real frame has painted -- safe to hide the still poster
  video: HTMLVideoElement | null;
  blobUrl: string | null;
};

export default function ScrollHero({
  scenes,
  imageDir,
  ctaHref,
  ctaLabel,
}: {
  scenes: Scene[];
  imageDir: string;
  ctaHref: string;
  ctaLabel: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoElRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const segRef = useRef<SegState[]>(
    scenes.map(() => ({ cur: 0, target: 0, ready: false, loading: false, hasClip: false, video: null, blobUrl: null }))
  );
  const [active, setActive] = useState(0);
  const [hintHidden, setHintHidden] = useState(false);
  const [paintedClips, setPaintedClips] = useState<Record<number, boolean>>({});
  const count = scenes.length;

  const loadClip = useCallback(
    (i: number) => {
      const s = scenes[i];
      const seg = segRef.current[i];
      if (!s.video || seg.loading || seg.video) return;
      const isMobile = window.matchMedia("(max-width: 720px)").matches;
      const url = (isMobile && s.video.vertical) || s.video.horizontal || s.video.vertical;
      if (!url) return;
      seg.loading = true;
      fetch(url)
        .then((r) => (r.ok ? r.blob() : Promise.reject(new Error(`${r.status}`))))
        .then((blob) => {
          const el = videoElRefs.current[i];
          if (!el) return;
          const objUrl = URL.createObjectURL(blob);
          seg.blobUrl = objUrl;
          el.src = objUrl;
          el.addEventListener(
            "loadedmetadata",
            () => {
              seg.ready = true;
            },
            { once: true }
          );
          el.addEventListener(
            "seeked",
            () => {
              seg.hasClip = true;
              setPaintedClips((prev) => (prev[i] ? prev : { ...prev, [i]: true }));
            },
            { once: true }
          );
          seg.video = el;
        })
        .catch(() => {
          seg.loading = false;
        });
    },
    [scenes]
  );

  // Scroll -> per-scene target position (0..1 within that scene's own band).
  useEffect(() => {
    let ticking = false;
    function compute() {
      const el = wrapRef.current;
      if (el) {
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
        const band = total / count;
        const raw = band > 0 ? scrolled / band : 0;
        const index = Math.min(count - 1, Math.max(0, Math.floor(raw)));
        setActive(index);
        setHintHidden(scrolled > 40);
        scenes.forEach((_, i) => {
          const segStart = i * band;
          const local = band > 0 ? Math.min(1, Math.max(0, (scrolled - segStart) / band)) : 0;
          segRef.current[i].target = local;
          // Lazy-load only the active scene and its immediate neighbours.
          if (Math.abs(i - index) <= 1) loadClip(i);
        });
      }
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    compute();
    return () => window.removeEventListener("scroll", onScroll);
  }, [count, scenes, loadClip]);

  // Continuous rAF loop: eases each loaded video's currentTime toward its
  // scroll-derived target, coalescing seeks (skips a scene while its decoder
  // is still mid-seek) exactly like the reference engine's `raf()`.
  useEffect(() => {
    let raf = 0;
    function tick() {
      segRef.current.forEach((seg) => {
        const v = seg.video;
        if (!v || !seg.ready || v.seeking) return;
        seg.cur += (seg.target - seg.cur) * 0.18;
        const dur = v.duration;
        if (!dur || !isFinite(dur)) return;
        const t = Math.min(seg.cur, 0.999) * dur;
        if (Math.abs(v.currentTime - t) > 0.02) {
          try {
            v.currentTime = t;
          } catch {
            /* ignore transient seek errors */
          }
        }
      });
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Release blob object URLs when the hero unmounts.
  useEffect(() => {
    const segs = segRef.current;
    return () => {
      segs.forEach((seg) => {
        if (seg.blobUrl) URL.revokeObjectURL(seg.blobUrl);
      });
    };
  }, []);

  function goTo(i: number) {
    const el = wrapRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const band = total / count;
    const target = el.offsetTop + band * (i + 0.5);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: target, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div
      className="hero-wrap"
      id="heroWrap"
      ref={wrapRef}
      style={{ height: `calc(${count} * 100vh)` }}
    >
      <div className="hero-pin">
        {scenes.map((s, i) => (
          <div
            className={`scene ${i === active ? "is-active" : ""} ${paintedClips[i] ? "has-clip" : ""}`}
            key={s.slug}
          >
            {s.video && (
              <video
                ref={(el) => {
                  videoElRefs.current[i] = el;
                }}
                className="scene-video"
                muted
                playsInline
              />
            )}
            {/* Still image: the poster from first paint, and the permanent
                fallback for any scene with no video yet. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={s.video ? "scene-image-fallback" : ""}
              src={`/images/${imageDir}/${s.img}`}
              alt={`${s.title} — The Allure Studio`}
            />
          </div>
        ))}
        <div className="scene-veil" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div className={`hero-top-hint ${hintHidden ? "is-hidden" : ""}`}>
          <span>Scroll to walk through</span>
          <span className="hero-hint-line" />
        </div>
        <div className="scene-dots">
          {scenes.map((s, i) => (
            <button
              key={s.slug}
              className={`dot ${i === active ? "is-active" : ""}`}
              aria-label={`Scene ${i + 1}: ${s.title}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="hero-caption-layer">
          {scenes.map((s, i) => (
            <div className={`caption ${i === active ? "is-active" : ""}`} key={s.slug}>
              <span className="caption-eyebrow">
                Scene {s.n} / {String(count).padStart(2, "0")}
                {s.video ? " · video" : ""}
              </span>
              <h2 className="caption-title">{s.title}</h2>
              <p className="caption-text">{s.text}</p>
            </div>
          ))}
        </div>
        <div className={`hero-cta-layer ${active === count - 1 ? "is-active" : ""}`}>
          <a className="btn btn-solid" href={ctaHref}>
            {ctaLabel}
          </a>
          <a className="btn btn-ghost" href="/contact" style={{ color: "#FFF9F3" }}>
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
