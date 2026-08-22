import Link from "next/link";
import type { JournalPost } from "@/lib/journal";
import { readMinutes } from "@/lib/journal";
import NewsletterForm from "@/components/NewsletterForm";

export default function JournalSection({ posts }: { posts: JournalPost[] }) {
  const [featured, ...rest] = posts;

  return (
    <section className="journal-section">
      <div className="wrap">
        <div className="journal-head">
          <div>
            <span className="eyebrow">From the journal</span>
            <h2>Ideas, materials, and the thinking behind the work</h2>
          </div>
          <Link className="journal-read-all" href="/journal">
            Read the Journal <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="journal-body">
          <div className="journal-newsletter">
            <h3>Stay inspired</h3>
            <p>Notes on materials, process, and finished projects — from the studio, occasionally.</p>
            <NewsletterForm variant="dark" />
          </div>

          <div className="journal-posts-grid">
            {featured && (
              <Link className="journal-card is-large" href={`/journal/${featured.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.coverImage} alt={featured.title} />
                <span className="journal-card-meta">
                  {featured.category} · {readMinutes(featured)} min read · {featured.author}
                </span>
                <span className="journal-card-title">{featured.title}</span>
              </Link>
            )}
            {rest.map((post) => (
              <Link className="journal-card" href={`/journal/${post.slug}`} key={post.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.coverImage} alt={post.title} />
                <span className="journal-card-meta">
                  {post.category} · {readMinutes(post)} min read
                </span>
                <span className="journal-card-title">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="journal-foot">
          <Link className="journal-read-all" href="/journal">
            Read the Journal <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
