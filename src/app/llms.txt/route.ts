// /llms.txt: a plain-text summary of dscpln for AI assistants (https://llmstxt.org).
// The page lists come from the same data as /guides, so new guides show up here on the next build.
import { guides, quotePages } from "@/components/guide/guide";
import { APP_STORE_URL } from "@/config/links";

export const dynamic = "force-static";

const BASE = "https://dscpln.app";

const item = (g: { href: string; title: string; text: string }) => `- [${g.title}](${BASE}${g.href}): ${g.text}`;

export function GET() {
  const tools = guides.filter((g) => g.category === "Free tool");
  const reads = guides.filter((g) => g.category !== "Free tool");

  const body = `# dscpln

> iPhone app for building daily discipline. Pick one or two small habits, keep a streak, and get a new motivation or discipline line every morning on your Home Screen widget. Includes Milo, an AI coach for the days you don't feel like it, plus three short reads a day. 3-day free trial on the yearly plan.

## Pricing

- Free to download.
- dscpln Pro yearly: $99.99 per year, with a 3-day free trial.
- dscpln Pro monthly: $14.99 per month.
- dscpln Pro weekly: $4.99 per week.

## Download

- [dscpln on the App Store](${APP_STORE_URL})

## Guides

${reads.map(item).join("\n")}

## Quotes

- [Quotes](${BASE}/quotes): Original short lines on discipline, motivation and stoicism, written for dscpln.
${quotePages.map(item).join("\n")}

## Tools

${tools.map(item).join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
