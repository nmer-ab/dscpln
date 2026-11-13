import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// AI assistants and their search crawlers, allowed by name.
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: "https://dscpln.app/sitemap.xml",
    host: "https://dscpln.app",
  };
}
