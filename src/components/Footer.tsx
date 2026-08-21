import Link from "next/link";
import Image from "next/image";
import { brand, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/images/brand/logo.png"
              alt={brand.name}
              width={160}
              height={30}
              style={{ height: 30, width: "auto" }}
            />
            <p>{brand.address}. Serving all of Bangalore.</p>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
              <li><Link href="/services">All services</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={brand.phoneHref}>{brand.phone}</a></li>
              <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li><Link href="/contact">Book a Consultation</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {brand.name} — {brand.tagline}.</span>
          <span>Bengaluru, India.</span>
        </div>
      </div>
    </footer>
  );
}
