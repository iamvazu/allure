"use client";

import { useState } from "react";
import Link from "next/link";
import { brand, localities, editPackages } from "@/lib/data";

// QUOTE FORM — this site has no backend, CRM, or email service connected
// (see the privacy policy's note on the footer newsletter field). Rather
// than fabricate a "your request has been sent" flow that quietly goes
// nowhere, this form compiles the visitor's answers into a message and
// hands it to WhatsApp or their email app to actually send — nothing is
// stored on this website, and the visitor sees exactly where it's going
// before it goes.

const PROPERTY_TYPES = ["Apartment / Flat", "Independent House / Villa", "Row House / Duplex", "Other"];

const TIMELINES = ["Immediately", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];

const WHATSAPP_DIGITS = "919187206290"; // brand.phoneHref ("tel:+919187206290") without the "tel:+"

type FormState = {
  name: string;
  whatsapp: string;
  locality: string;
  pinCode: string;
  email: string;
  propertyType: string;
  packageType: string;
  timeline: string;
  agreed: boolean;
};

const initialState: FormState = {
  name: "",
  whatsapp: "",
  locality: "",
  pinCode: "",
  email: "",
  propertyType: "",
  packageType: "",
  timeline: "",
  agreed: false,
};

function buildMessage(s: FormState): string {
  const lines = [
    `New quote request from theallurestudio.com`,
    ``,
    `Name: ${s.name}`,
    `WhatsApp number: ${s.whatsapp}`,
  ];
  if (s.locality) lines.push(`Property location: ${s.locality}`);
  if (s.pinCode) lines.push(`Pin code: ${s.pinCode}`);
  lines.push(`Email: ${s.email}`);
  if (s.propertyType) lines.push(`Type of property: ${s.propertyType}`);
  if (s.packageType) lines.push(`Type of package: ${s.packageType}`);
  if (s.timeline) lines.push(`Planned start: ${s.timeline}`);
  return lines.join("\n");
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  function validate(): boolean {
    if (!form.name.trim() || !form.whatsapp.trim() || !form.email.trim()) {
      setError("Please fill in your name, WhatsApp number and email so we can get back to you.");
      return false;
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      setError("That email address doesn't look complete — please double-check it.");
      return false;
    }
    if (!form.agreed) {
      setError("Please confirm you agree with the Terms and Conditions to continue.");
      return false;
    }
    setError(null);
    return true;
  }

  function sendViaWhatsApp() {
    if (!validate()) return;
    const message = buildMessage(form);
    window.open(`https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  function sendViaEmail() {
    if (!validate()) return;
    const message = buildMessage(form);
    const subject = `Quote Request — ${form.name}`;
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
      <div className="quote-grid">
        <div className="quote-field">
          <label className="quote-label" htmlFor="qf-name">Name</label>
          <input
            id="qf-name"
            className="quote-input"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>
        <div className="quote-field">
          <label className="quote-label" htmlFor="qf-whatsapp">WhatsApp mobile number</label>
          <input
            id="qf-whatsapp"
            className="quote-input"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
          />
        </div>

        <div className="quote-field">
          <label className="quote-label" htmlFor="qf-locality">Where&apos;s your property located?</label>
          <select
            id="qf-locality"
            className="quote-input quote-select"
            value={form.locality}
            onChange={(e) => set("locality", e.target.value)}
          >
            <option value="">Select…</option>
            {localities.map((l) => (
              <option key={l.slug} value={l.name}>{l.name}</option>
            ))}
            <option value="Elsewhere in Bangalore">Elsewhere in Bangalore</option>
          </select>
        </div>
        <div className="quote-field">
          <label className="quote-label" htmlFor="qf-pin">Pin code</label>
          <input
            id="qf-pin"
            className="quote-input"
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="560064"
            value={form.pinCode}
            onChange={(e) => set("pinCode", e.target.value)}
          />
        </div>

        <div className="quote-field quote-field-full">
          <label className="quote-label" htmlFor="qf-email">Email</label>
          <input
            id="qf-email"
            className="quote-input"
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>

        <div className="quote-field">
          <label className="quote-label" htmlFor="qf-property">Type of property</label>
          <select
            id="qf-property"
            className="quote-input quote-select"
            value={form.propertyType}
            onChange={(e) => set("propertyType", e.target.value)}
          >
            <option value="">Select…</option>
            {PROPERTY_TYPES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="quote-field">
          <label className="quote-label" htmlFor="qf-package">Type of package</label>
          <select
            id="qf-package"
            className="quote-input quote-select"
            value={form.packageType}
            onChange={(e) => set("packageType", e.target.value)}
          >
            <option value="">Select…</option>
            {editPackages.map((p) => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
            <option value="Not sure yet — I'd like advice">Not sure yet — I&apos;d like advice</option>
          </select>
        </div>

        <div className="quote-field quote-field-full">
          <label className="quote-label" htmlFor="qf-timeline">When do you plan to start the project?</label>
          <select
            id="qf-timeline"
            className="quote-input quote-select"
            value={form.timeline}
            onChange={(e) => set("timeline", e.target.value)}
          >
            <option value="">Select…</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <label className="quote-checkbox-row">
        <input
          type="checkbox"
          checked={form.agreed}
          onChange={(e) => set("agreed", e.target.checked)}
        />
        <span>
          I agree with the{" "}
          <Link href="/terms-and-conditions" className="quote-terms-link">Terms and Conditions</Link>
        </span>
      </label>

      {error && <p className="quote-error">{error}</p>}

      <div className="quote-actions">
        <button type="button" className="btn btn-solid" onClick={sendViaWhatsApp}>
          Send via WhatsApp
        </button>
        <button type="button" className="btn btn-ghost" onClick={sendViaEmail}>
          Send via Email
        </button>
      </div>

      <p className="quote-note">
        This opens WhatsApp or your email app with your answers filled in, ready to send directly
        to the studio — nothing is stored on this website.
      </p>
    </form>
  );
}
