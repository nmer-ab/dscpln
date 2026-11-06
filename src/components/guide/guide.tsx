/* eslint-disable @next/next/no-img-element -- static line-art SVGs, sized by CSS (same as the home page) */
// Shared building blocks for the comparison guides (/best-discipline-apps, /fabulous-alternatives).
import Link from "next/link";
import type { ReactNode } from "react";
import { APP_STORE_URL } from "@/config/links";
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

/** Page shell: the .lp scope from the home page plus the FAQPage JSON-LD. */
export function Guide({ faqs, children }: { faqs: GuideFaqItem[]; children: ReactNode }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="lp guide">
      <JsonLd data={faqJsonLd} />
      {children}
    </div>
  );
}

export function GuideHead({ title, intro, disclosure = true, eyebrow = "Guide" }: {
  title: ReactNode;
  intro: ReactNode[];
  disclosure?: boolean;
  eyebrow?: string;
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

export function GuideTable({ apps, heading }: { apps: GuideApp[]; heading: string }) {
  const sizes = apps.some((a) => a.widgetSizes);
  return (
    <section id="at-a-glance">
      <div className="lp-wrap">
        <div className="g-col">
          <span className="eyebrow">At a glance</span>
          <h2>{heading}</h2>
        </div>
        <div className="g-table" role="region" aria-label="Comparison table" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th scope="col">App</th>
                <th scope="col">Best for</th>
                {sizes && <th scope="col">Widget sizes</th>}
                <th scope="col">Platforms</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr key={app.id}>
                  <th scope="row"><a href={`#${app.id}`}>{app.name}</a></th>
                  <td>{app.bestFor}</td>
                  {sizes && <td>{app.widgetSizes}</td>}
                  <td>{app.platforms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function GuideAppSections({ apps }: { apps: GuideApp[] }) {
  return apps.map((app, i) => (
    <section key={app.id} id={app.id} className="g-app">
      <div className="lp-wrap">
        <div className="g-col">
          <div className="g-app-head">
            <span className={`g-rank${i === 0 ? " first" : ""}`} aria-hidden="true">{i + 1}</span>
            <h2>{app.name}</h2>
          </div>
          {app.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          <dl className="g-facts">
            {app.widget && <div><dt>The widget</dt><dd>{app.widget}</dd></div>}
            <div><dt>Best for</dt><dd>{app.bestForLong}</dd></div>
            <div><dt>Limitation</dt><dd>{app.limitation}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  ));
}

// Every guide. Each page lists the others under "More guides"; add new guides here.
const guides: { href: string; title: string; text: string; tag?: string }[] = [
  {
    href: "/best-discipline-apps",
    title: "Best discipline apps in 2026",
    text: "A wider comparison of discipline and habit apps, from coaches and games to simple trackers.",
  },
  {
    href: "/fabulous-alternatives",
    title: "Best Fabulous alternatives in 2026",
    text: "Like the idea of Fabulous but want something simpler, more direct or widget-first? Here are the options.",
  },
  {
    href: "/habitica-alternatives",
    title: "Best Habitica alternatives in 2026",
    text: "Want less game, a calmer or more direct tone, or progress on your Home Screen? Here are the options.",
  },
  {
    href: "/how-to-build-self-discipline",
    title: "How to build self-discipline: 7 steps that work",
    text: "Practical steps for the days motivation doesn't show up, from starting small to never missing twice.",
  },
  {
    href: "/30-day-discipline-challenge",
    title: "The 30-day discipline challenge",
    text: "One small rule a week for four weeks, with a printable checklist to keep you honest.",
  },
  {
    href: "/discipline-quote-generator",
    title: "Discipline quote generator",
    text: "60 original short lines on discipline and motivation. Copy one or save it for your Stories.",
    tag: "Free tool",
  },
  {
    href: "/best-motivation-widgets-iphone",
    title: "Best motivation widgets for iPhone in 2026",
    text: "Quotes, affirmations, streaks or your own words: the widgets worth a spot on your Home Screen.",
  },
];

/** Cross-links to the other guides. `current` is this page's path. */
export function GuideMore({ current }: { current: string }) {
  return (
    <section className="g-more">
      <div className="lp-wrap">
        <div className="g-col">
          <h2 className="eyebrow">More guides</h2>
          <ul className="g-more-list">
            {guides
              .filter((g) => g.href !== current)
              .map((g) => (
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

export function GuideFaq({ faqs }: { faqs: GuideFaqItem[] }) {
  return (
    <section className="faq" id="faq">
      <div className="lp-wrap">
        <div><span className="eyebrow">FAQ</span><h2>Questions, answered.</h2></div>
        <div>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}<span className="pm" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GuideCta({ heading, text }: { heading: string; text: string }) {
  return (
    <section className="cta-band" id="download">
      <div className="lp-wrap">
        <div className="cta-box">
          <div>
            <h2>{heading}</h2>
            <p className="lede">{text}</p>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="g-badge">
              {/* Official black badge; viewBox is 119.66 × 40 */}
              <img src="/badges/app-store.svg" alt="Download dscpln on the App Store" width={132} height={44} />
            </a>
          </div>
          <div className="cta-side">
            <div className="cta-milo"><img src="/milo-v3/milo-wave.svg" alt="" width={188} height={292} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
