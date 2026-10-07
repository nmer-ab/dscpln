import type { MetadataRoute } from "next";
import { docSlugs } from "@/lib/content";

export const dynamic = "force-static";

const BASE = "https://dscpln.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/get`, changeFrequency: "monthly", priority: 0.8 },
    ...docSlugs.map((slug) => ({
      url: `${BASE}/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
