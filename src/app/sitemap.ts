import type { MetadataRoute } from "next";
import { services, localities, projects } from "@/lib/data";
import { journalPosts } from "@/lib/journal";

// Real production domain — matches metadataBase in layout.tsx.
const SITE_URL = "https://www.theallurestudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/process`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/bangalore`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/journal`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const localityRoutes: MetadataRoute.Sitemap = localities.map((l) => ({
    url: `${SITE_URL}/bangalore/${l.slug}/interior-designer`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/portfolio/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const journalRoutes: MetadataRoute.Sitemap = journalPosts.map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...localityRoutes, ...projectRoutes, ...journalRoutes];
}
