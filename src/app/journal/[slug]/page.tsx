import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts, readMinutes } from "@/lib/journal";

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    image: `https://www.theallurestudio.com${post.coverImage}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">
            <Link href="/journal">The Journal</Link> · {post.category}
          </span>
          <h1>{post.title}</h1>
          <p className="lede">{post.excerpt}</p>
          <p className="journal-post-byline">
            {post.author} · {readMinutes(post)} min read
          </p>
          <div className="editorial-photo-frame is-wide" style={{ marginTop: 40 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="editorial-photo" src={post.coverImage} alt={post.title} />
          </div>
        </div>
      </section>

      <section className="journal-post-body-section">
        <div className="wrap">
          <article className="journal-post-body">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
          <div className="journal-post-cta">
            <Link className="btn btn-solid" href="/contact">
              Book a Consultation
            </Link>
            <Link className="btn btn-ghost" href="/journal">
              More from the Journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
