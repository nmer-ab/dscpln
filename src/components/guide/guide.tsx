/* eslint-disable @next/next/no-img-element -- static line-art SVGs, sized by CSS (same as the home page) */
// Shared data and blocks for the guides: the guide list (with each article's cover and related articles), JSON-LD helpers,
// and the pieces the index pages use (/guides, /quotes, /quotes/[slug]). The guide pages themselves use article.tsx.
import Link from "next/link";
import type { ReactNode } from "react";
import { APP_STORE_URL } from "@/config/links";
import { quoteCategories } from "@/data/quotes";
import "@/app/landing.css";
import "./guide.css";

export type GuideApp = {
  id: string;
  name: string;
  /** Short version for the comparison table. */
  bestFor: string;
  platforms: string;
  /** Optional table column and fact for the widget guides. */
  widgetSizes?: string;
  widget?: string;
  about: string[];
  bestForLong: string;
  limitation: string;
};

export type GuideFaqItem = { q: string; a: string };

export function Check() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

/** Structured data as a <script> tag, per the Next.js JSON-LD guide. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the payload can't close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Article structured data for the how-to guides. */
export function articleJsonLd({ path, title, description, published, modified = published }: {
  path: string;
  title: string;
  description: string;
  published: string;
  modified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: "https://dscpln.app/og.png",
    datePublished: published,
    dateModified: modified,
    author: { "@type": "Organization", name: "dscpln", url: "https://dscpln.app" },
    publisher: {
      "@type": "Organization",
      name: "dscpln",
      logo: { "@type": "ImageObject", url: "https://dscpln.app/brand/app-icon-1024.png" },
    },
    mainEntityOfPage: `https://dscpln.app${path}`,
  };
}

/** FAQPage structured data for a page's FAQ. */
export function faqJsonLd(faqs: GuideFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Page shell for the index pages (/guides, /quotes and the quote categories): the .lp scope plus FAQPage JSON-LD when there are FAQs. */
export function Guide({ faqs = [], children }: { faqs?: GuideFaqItem[]; children: ReactNode }) {
  return (
    <div className="lp guide">
      {faqs.length > 0 && <JsonLd data={faqJsonLd(faqs)} />}
      {children}
    </div>
  );
}

export function GuideHead({ title, intro, disclosure = true, eyebrow = "Guide" }: {
  title: ReactNode;
  intro: ReactNode[];
  disclosure?: boolean;
  eyebrow?: ReactNode;
}) {
  return (
    <header className="g-head">
      <div className="lp-wrap">
        <div className="g-col">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {intro.map((p, i) => <p key={i} className="lede">{p}</p>)}
          {disclosure && <p className="disclose"><b>Disclosure</b> We make dscpln.</p>}
        </div>
      </div>
    </header>
  );
}

export type CoverColor = "lime" | "ink" | "olive" | "sand";
/** A file in /public/milo-v3/, without "milo-" and ".svg". */
export type MiloPose = "cheer" | "clipboard" | "flex" | "idle" | "think" | "wave";
/** An article cover, drawn in code (see cover.tsx). `circle` adds a soft circle, `line` a small white line card. */
export type CoverSpec = { color: CoverColor; pose: MiloPose; circle?: boolean; line?: string };

export type GuideLink = {
  href: string;
  title: string;
  text: string;
  tag?: string;
  /** Shown as the tag and in the breadcrumb. */
  category: string;
  /** ISO date. */
  published: string;
  /** About 230 words a minute over the article body; update it when the text changes a lot. */
  readMinutes: number;
  cover: CoverSpec;
  /** Three paths for "Related articles", from this list or the quote pages. */
  related?: [string, string, string];
};

// Every guide, with its cover and related articles. /guides lists them all; add new guides here.
export const guides: GuideLink[] = [
  {
    href: "/best-discipline-apps",
    title: "Best discipline apps in 2026",
    text: "A wider comparison of discipline and habit apps, from coaches and games to simple trackers.",
    category: "Comparison",
    published: "2026-11-06",
    readMinutes: 7,
    cover: { color: "sand", pose: "cheer", line: "Start small. Start now." },
    related: ["/fabulous-alternatives", "/habitica-alternatives", "/how-to-build-self-discipline"],
  },
  {
    href: "/fabulous-alternatives",
    title: "Best Fabulous alternatives in 2026",
    text: "Like the idea of Fabulous but want something simpler, more direct or widget-first? Here are the options.",
    category: "Comparison",
    published: "2026-11-06",
    readMinutes: 5,
    cover: { color: "olive", pose: "clipboard", circle: true },
    related: ["/habitica-alternatives", "/best-discipline-apps", "/best-motivation-widgets-iphone"],
  },
  {
    href: "/habitica-alternatives",
    title: "Best Habitica alternatives in 2026",
    text: "Want less game, a calmer or more direct tone, or progress on your Home Screen? Here are the options.",
    category: "Comparison",
    published: "2026-11-06",
    readMinutes: 5,
    cover: { color: "lime", pose: "idle", line: "Small steps. No speeches." },
    related: ["/fabulous-alternatives", "/best-discipline-apps", "/30-day-discipline-challenge"],
  },
  {
    href: "/how-to-build-self-discipline",
    title: "How to build self-discipline: 7 steps that work",
    text: "Practical steps for the days motivation doesn't show up, from starting small to never missing twice.",
    category: "Discipline",
    published: "2026-11-06",
    readMinutes: 8,
    cover: { color: "lime", pose: "flex", circle: true, line: "One rep. Then decide." },
    related: ["/30-day-discipline-challenge", "/best-discipline-apps", "/quotes/stoic"],
  },
  {
    href: "/30-day-discipline-challenge",
    title: "The 30-day discipline challenge",
    text: "One small rule a week for four weeks, with a printable checklist to keep you honest.",
    category: "Guide",
    published: "2026-11-06",
    readMinutes: 6,
    cover: { color: "ink", pose: "think", circle: true },
    related: ["/how-to-build-self-discipline", "/quotes/discipline", "/best-discipline-apps"],
  },
  {
    href: "/discipline-quote-generator",
    title: "Discipline quote generator",
    text: "60 original short lines on discipline and motivation. Copy one or save it for your Stories.",
    tag: "Free tool",
    category: "Free tool",
    published: "2026-11-06",
    readMinutes: 2,
    cover: { color: "sand", pose: "wave", line: "Feelings are opinions, not instructions." },
    related: ["/quotes/discipline", "/quotes/motivation", "/best-motivation-widgets-iphone"],
  },
  {
    href: "/best-motivation-widgets-iphone",
    title: "Best motivation widgets for iPhone in 2026",
    text: "Quotes, affirmations, streaks or your own words: the widgets worth a spot on your Home Screen.",
    category: "Comparison",
    published: "2026-11-06",
    readMinutes: 6,
    cover: { color: "ink", pose: "cheer", circle: true },
    related: ["/discipline-quote-generator", "/best-discipline-apps", "/quotes/motivation"],
  },
];

const quoteCovers: Record<string, CoverSpec> = {
  discipline: { color: "lime", pose: "flex", line: "Motivation is a guest. Discipline lives here." },
  motivation: { color: "sand", pose: "cheer", line: "Small progress is still progress. Count it." },
  stoic: { color: "olive", pose: "wave", circle: true },
};

const words = (texts: string[]) => texts.join(" ").split(/\s+/).filter(Boolean).length;

// The quote pages, listed under a "Quotes" heading after the guides.
export const quotePages: GuideLink[] = quoteCategories.map((c) => ({
  href: `/quotes/${c.slug}`,
  title: `${c.name} quotes`,
  text: c.summary,
  tag: `${c.lines.length} lines`,
  category: "Quotes",
  published: "2026-11-06",
  readMinutes: Math.max(1, Math.ceil(words([...c.intro, ...c.lines]) / 230)),
  cover: quoteCovers[c.slug],
}));

/** A guide or quote page by path. Fails the build if the path isn't listed. */
export function getArticle(href: string) {
  const article = [...guides, ...quotePages].find((g) => g.href === href);
  if (!article) throw new Error(`Unknown guide: ${href}`);
  return article;
}

/** A titled list of link cards (the "More guides" look). */
export function GuideCards({ heading, items, className = "" }: {
  heading: string;
  items: Pick<GuideLink, "href" | "title" | "text" | "tag">[];
  className?: string;
}) {
  return (
    <section className={`g-more ${className}`.trim()}>
      <div className="lp-wrap">
        <div className="g-col">
          <h2 className="eyebrow">{heading}</h2>
          <ul className="g-more-list">
            {items.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="g-more-card">
                  {g.tag && <span className="g-more-tag">{g.tag}</span>}
                  <b>{g.title}</b>
                  <span className="g-more-text">{g.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Cards for specific guides, by path. Fails the build if a path isn't in the guides list. */
export function GuideRelated({ hrefs, heading = "Related guides", className }: { hrefs: string[]; heading?: string; className?: string }) {
  const items = hrefs.map((href) => {
    const guide = guides.find((g) => g.href === href);
    if (!guide) throw new Error(`Unknown guide: ${href}`);
    return guide;
  });
  return <GuideCards heading={heading} items={items} className={className} />;
}

/** "Get a new line every morning" box: the Handwritten widget showing `line`, plus the App Store badge. */
export function GuideHomeScreen({ line, className = "" }: { line: string; className?: string }) {
  return (
    <section id="home-screen" className={`g-plain qg-home ${className}`.trim()}>
      <div className="lp-wrap">
        <div className="g-col">
          <span className="eyebrow">dscpln widget</span>
          <h2>Get a new line every morning on your Home Screen</h2>
          <p>
            dscpln, the app we make, gives you a fresh line every morning. Add the Handwritten widget and it sits on your Home Screen next to your streak, so you see it every time you unlock your phone.
          </p>
          <div className="wall qg-wall" role="img" aria-label="The dscpln Handwritten widget showing today's line and the streak">
            <div className="w wide w-hand">
              <span className="dayn">12</span>
              <div><p>{line}</p><small>DAY 12 · 1 OF 2 DONE</small></div>
            </div>
          </div>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="g-badge">
            {/* Official black badge; viewBox is 119.66 × 40 */}
            <img src="/badges/app-store.svg" alt="Download dscpln on the App Store" width={132} height={44} />
          </a>
        </div>
      </div>
    </section>
  );
}
