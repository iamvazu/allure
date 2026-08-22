"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand } from "@/lib/data";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/bangalore", label: "Areas We Serve" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [solid, setSolid] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setSolid(true);
      return;
    }
    setSolid(false);
    function onScroll() {
      const heroWrap = document.getElementById("heroWrap");
      if (!heroWrap) return;
      const total = heroWrap.offsetHeight - window.innerHeight;
      setSolid(window.scrollY >= total - 4);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav className={`nav ${solid ? "is-solid" : ""} ${!isHome ? "is-static" : ""}`}>
      <Link href="/" aria-label={`${brand.name} — home`} className="nav-logo-wrap">
        <Image
          className="nav-logo"
          src="/images/brand/logo.png"
          alt={`${brand.name} — ${brand.tagline}`}
          width={213}
          height={38}
          priority
          style={{ height: 38, width: "auto" }}
        />
      </Link>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <Link className="btn btn-solid nav-cta" href="/contact">
        Book a Consultation
      </Link>
    </nav>
  );
}
