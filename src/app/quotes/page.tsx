import type { Metadata } from "next";
import Link from "next/link";
import { Guide, GuideHead, GuideHomeScreen, JsonLd } from "@/components/guide/guide";
import { quoteCategories } from "@/data/quotes";

const BASE = "https://dscpln.app";
const path = "/quotes";
const total = quoteCategories.reduce((n, c) => n + c.lines.length, 0);
const title = "Short quotes on discipline, motivation and Stoicism";
const description = `${total} original short quotes on discipline, motivation and Stoic calm. Copy any line or save it as a 1080×1920 image for your Stories.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", title, description, url: path, images: "/og.png" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: title,
  description,
  url: `${BASE}${path}`,
  numberOfItems: quoteCategories.length,
  itemListElement: quoteCategories.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.title,
    url: `${BASE}/quotes/${c.slug}`,
  })),
};

export default function QuotesPage() {
  return (
    <Guide>
      <JsonLd data={itemListJsonLd} />
      <GuideHead
        eyebrow="Quotes"
        title={<>Short <em>quotes</em>, all original</>}
        disclosure={false}
        intro={[
          "Short lines on discipline, motivation and Stoic calm. We wrote every one for dscpln, so there are no famous names and nothing is misattributed. Pick a category, then copy a line or save it as an image for your Stories.",
        ]}
      />

      <section id="categories" className="g-tool">
        <div className="lp-wrap">
          <div className="g-col">
            <h2 className="eyebrow">Categories</h2>
            <ul className="qx-grid">
              {quoteCategories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/quotes/${c.slug}`} className="qx-card">
                    <span className="g-more-tag">{c.lines.length} lines</span>
                    <b>{c.name}</b>
                    <span className="qx-text">{c.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GuideHomeScreen line={quoteCategories[0].lines[0]} className="qx-last" />
    </Guide>
  );
}
