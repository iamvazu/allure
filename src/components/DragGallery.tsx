"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { GalleryItem } from "@/lib/data";

// A horizontal, drag-to-explore strip of real project scenes. Pointer-drag
// scrolling on top of native scroll-snap: works with mouse drag, touch swipe,
// and trackpad/wheel scroll all at once, so nothing is lost for a visitor who
// just scrolls normally.
export default function DragGallery({ items }: { items: GalleryItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { isDown: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    const st = dragState.current;
    if (!st.isDown || !track) return;
    const dx = e.clientX - st.startX;
    if (Math.abs(dx) > 4) st.moved = true;
    track.scrollLeft = st.startScroll - dx;
  };

  const endDrag = () => {
    dragState.current.isDown = false;
    setDragging(false);
  };

  // Suppress the click-through to a project page if the pointer actually dragged.
  const onClickCapture = (e: React.MouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="drag-gallery">
      <span className="drag-gallery-hint" aria-hidden="true">
        <span className="drag-gallery-hint-icon">↔</span> Drag to explore
      </span>
      <div
        className={`drag-gallery-track ${dragging ? "is-dragging" : ""}`}
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {items.map((item, i) => (
          <Link
            className="drag-gallery-item"
            href={`/portfolio/${item.projectSlug}`}
            key={`${item.projectSlug}-${i}`}
            draggable={false}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.img} alt={item.title} draggable={false} />
            <span className="drag-gallery-caption">
              <span className="drag-gallery-caption-title">{item.title}</span>
              <span className="drag-gallery-caption-project">{item.project}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
