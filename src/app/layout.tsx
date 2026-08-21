import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { brand } from "@/lib/data";
import { Analytics } from "@vercel/analytics/next";

// Loaded via a <link> tag below rather than next/font/google: keeps the
// production build working in network-restricted CI/build environments,
// at the (small) cost of a render-blocking font request. Swap to
// next/font/google once the deploy target's build has open egress to
// fonts.googleapis.com, for better performance.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theallurestudio.com"),
  title: {
    default: "The Allure Studio | Luxury Interior Designers in Bangalore",
    template: "%s | The Allure Studio",
  },
  description:
    "Everlasting Luxury — full-home interior design, modular kitchens, wardrobes and renovation across every part of Bangalore. Book a consultation with The Allure Studio.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: brand.name,
  alternateName: "Allure Studio",
  slogan: brand.tagline,
  image: "https://www.theallurestudio.com/images/brand/logo.png",
  telephone: brand.phone,
  email: brand.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Site # 11, 1st Floor ABS Towers, MCHS Jakkur Layout",
    addressLocality: "Bengaluru",
    postalCode: "560064",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "City",
    name: "Bengaluru",
  },
  url: "https://www.theallurestudio.com",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500;6..96,600;6..96,700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
