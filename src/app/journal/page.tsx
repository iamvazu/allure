import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts, readMinutes } from "@/lib/journal";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Journal — Bangalore Interior Design Insights",
  description:
    "Design thinking, materials, and process notes from The Allure Studio — Bangalore interior design, explained.",
  alternates: { canonical: "/journal" },
};

export default function JournalIndexPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">The Journal</span>
          <h1>Design thinking, from the studio.</h1>
          <p className="lede">
            Materials, process and practical guidance for Bangalore homes — written by the studio,
            not licensed from a generic content mill.
          </p>
        </div>
      </section>

      <section className="journal-index-section">
        <div className="wrap">
          <div className="journal-index-grid">
            {journalPosts.map((post) => (
              <Link className="journal-index-card" href={`/journal/${post.slug}`} key={post.slug}>
                <div className="journal-index-card-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.coverImage} alt={post.title} />
                </div>
                <div className="journal-index-card-body">
                  <span className="journal-card-meta-light">
                    {post.category} · {readMinutes(post)} min read
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="journal-index-newsletter">
            <h3>Stay inspired</h3>
            <p>Notes on materials, process, and finished projects — from the studio, occasionally.</p>
            <NewsletterForm variant="light" />
          </div>
        </div>
      </section>
    </main>
  );
}
