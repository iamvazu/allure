import Link from "next/link";
import Image from "next/image";
import { brand, projects, socialLinks } from "@/lib/data";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-mega">
        <div className="footer-brand">
          <Image
            src="/images/brand/logo.png"
            alt={brand.name}
            width={160}
            height={30}
            style={{ height: 30, width: "auto" }}
          />
          <p className="footer-brand-tagline">Interior Design Studio · {brand.tagline}</p>
          <p>{brand.address}</p>
          <ul className="footer-contact-list">
            <li><a href={brand.phoneHref}>{brand.phone}</a></li>
            <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
          </ul>
        </div>

        <div>
          <h4>Studio</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/process">Process</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Projects</h4>
          <ul>
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/portfolio/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
            <li><Link href="/portfolio">All projects</Link></li>
            <li><Link href="/bangalore">Areas we serve</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Get occasional notes on new work &amp; process</h4>
          <NewsletterForm variant="dark" />
        </div>
      </div>

      {socialLinks.length > 0 && (
        <div className="wrap footer-social-row">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      )}

      <div className="footer-wordmark-band">
        <div className="footer-wordmark-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about/studio-detail.jpg" alt="" aria-hidden="true" />
        </div>
        <span className="footer-wordmark" aria-hidden="true">{brand.name}</span>
      </div>

      <div className="wrap footer-bottom">
        <span>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <span>Crafted with care in {brand.city}.</span>
      </div>
    </footer>
  );
}
