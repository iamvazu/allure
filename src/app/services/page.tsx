import type { Metadata } from "next";
import ServiceGrid from "@/components/ServiceGrid";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Interior Design Services in Bangalore",
  description: "Every service The Allure Studio offers across Bangalore — from full-home interior design to modular kitchens, wardrobes and styling.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h1>Every service, in the open</h1>
          <p className="lede">
            From a single room styling refresh to a full turnkey home, every service here can be
            booked on its own or combined into one of the studio&apos;s Edit packages.
          </p>
          <img src="/images/services/hero.jpg" alt="Interior Design Services" style={{ width: "100%", height: "auto", marginTop: 48, borderRadius: 4 }} />
        </div>
      </section>
      <section className="services-section">
        <div className="wrap">
          <ServiceGrid services={services} />
        </div>
      </section>
    </main>
  );
}
