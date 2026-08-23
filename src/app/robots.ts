import type { MetadataRoute } from "next";

// Real production domain — matches metadataBase in layout.tsx.
const SITE_URL = "https://www.theallurestudio.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
