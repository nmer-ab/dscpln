import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Guide, GuideCards, GuideHead, GuideHomeScreen, GuideRelated, JsonLd } from "@/components/guide/guide";
import { QuoteCard } from "@/components/guide/quote-card";
import { getQuoteCategory, quoteCategories } from "@/data/quotes";

const BASE = "https://dscpln.app";

export const dynamicParams = false;

export function generateStaticParams() {
  return quoteCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/quotes/[slug]">): Promise<Metadata> {
  const category = getQuoteCategory((await props.params).slug);
  if (!category) return {};
  const { slug, title, description } = category;
  const path = `/quotes/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", title, description, url: path, images: "/og.png" },
  };
}

export default async function QuoteCategoryPage(props: PageProps<"/quotes/[slug]">) {
  const category = getQuoteCategory((await props.params).slug);
  if (!category) notFound();
  const { slug, name, title, description, intro, related, lines } = category;
  const path = `/quotes/${slug}`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    url: `${BASE}${path}`,
    numberOfItems: lines.length,
    itemListElement: lines.map((line, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: line,
      url: `${BASE}${path}#line-${i + 1}`,
    })),
  };

  const others = quoteCategories
    .filter((c) => c.slug !== slug)
    .map((c) => ({ href: `/quotes/${c.slug}`, title: `${c.name} quotes`, text: c.summary, tag: `${c.lines.length} lines` }));

  return (
    <Guide>
      <JsonLd data={itemListJsonLd} />
      <GuideHead
        eyebrow={<Link href="/quotes">Quotes</Link>}
        title={<>{name} <em>quotes</em></>}
        disclosure={false}
        intro={intro}
      />

      <section id="lines" className="g-tool">
        <div className="lp-wrap">
          <div className="g-col">
            <h2 className="qc-head">{lines.length} short {name.toLowerCase()} lines</h2>
            <ol className="qc-list">
              {lines.map((line, i) => (
                <QuoteCard key={line} id={`line-${i + 1}`} n={i + 1} text={line} category={name} />
              ))}
            </ol>
          </div>
        </div>
      </section>

      <GuideHomeScreen line={lines[0]} />
      <GuideRelated hrefs={related} />
      <GuideCards heading="More quotes" items={others} className="qx-last" />
    </Guide>
  );
}
