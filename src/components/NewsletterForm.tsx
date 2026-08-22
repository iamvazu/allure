"use client";

import { useState } from "react";

// Not wired to an email provider yet — there's no ConvertKit/Mailchimp/
// Beehiiv account to send these to, and a form that pretends to collect
// emails into nothing would be worse than no form at all. This captures the
// UI and shows an honest status instead of a fake "you're subscribed"
// message. Wire the TODO below up to a real provider before launch.
export default function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: POST to a real email provider (Mailchimp / ConvertKit / Beehiiv)
    // once one is set up. Until then this intentionally does not claim to
    // have subscribed anyone.
    setStatus("submitted");
  };

  return (
    <form className={`newsletter-form is-${variant}`} onSubmit={onSubmit}>
      {status === "idle" ? (
        <>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <div className="newsletter-row">
            <input
              id="newsletter-email"
              className="newsletter-input"
              type="email"
              required
              placeholder="you@example.com"
            />
            <button className="newsletter-submit" type="submit">
              Subscribe <span aria-hidden="true">→</span>
            </button>
          </div>
          <p className="newsletter-note">No spam — occasional notes on new projects and design thinking.</p>
        </>
      ) : (
        <p className="newsletter-note newsletter-note-confirm">
          Thanks — this form isn&apos;t connected to a mailing list yet, so nothing was actually sent.
          Ask your developer to wire it up to an email provider.
        </p>
      )}
    </form>
  );
}
