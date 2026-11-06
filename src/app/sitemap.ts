import type { MetadataRoute } from "next";
import { quoteCategories } from "@/data/quotes";
import { docSlugs } from "@/lib/content";

export const dynamic = "force-static";

const BASE = "https://dscpln.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/get`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/best-discipline-apps`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fabulous-alternatives`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/habitica-alternatives`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/how-to-build-self-discipline`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/30-day-discipline-challenge`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/discipline-quote-generator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/best-motivation-widgets-iphone`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/quotes`, changeFrequency: "monthly", priority: 0.7 },
    ...quoteCategories.map(({ slug }) => ({
      url: `${BASE}/quotes/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...docSlugs.map((slug) => ({
      url: `${BASE}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
