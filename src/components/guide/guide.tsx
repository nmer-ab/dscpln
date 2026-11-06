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
      <script
        type="application/ld+json"
        // Escape "<" so the payload can't close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      {children}
    </div>
  );
}

export function GuideHead({ title, intro }: { title: ReactNode; intro: string[] }) {
  return (
    <header className="g-head">
      <div className="lp-wrap">
        <div className="g-col">
          <span className="eyebrow">Guide</span>
          <h1>{title}</h1>
          {intro.map((p) => <p key={p.slice(0, 24)} className="lede">{p}</p>)}
          <p className="disclose"><b>Disclosure</b> We make dscpln.</p>
        </div>
      </div>
    </header>
  );
}

export function GuideTable({ apps, heading }: { apps: GuideApp[]; heading: string }) {
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
              <tr><th scope="col">App</th><th scope="col">Best for</th><th scope="col">Platforms</th></tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr key={app.id}>
                  <th scope="row"><a href={`#${app.id}`}>{app.name}</a></th>
                  <td>{app.bestFor}</td>
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
            <div><dt>Best for</dt><dd>{app.bestForLong}</dd></div>
            <div><dt>Limitation</dt><dd>{app.limitation}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  ));
}

/** Cross-link to the other guide. */
export function GuideRelated({ href, title, text }: { href: string; title: string; text: string }) {
  return (
    <section className="g-related">
      <div className="lp-wrap">
        <div className="g-col">
          <Link href={href} className="g-related-card">
            <span className="eyebrow">Related guide</span>
            <b>{title}</b>
            <span className="g-related-text">{text}</span>
          </Link>
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
