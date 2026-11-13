// The article template for the guides (design/article-demo.html): breadcrumb, title block with a cover,
// the body with a sticky "On this page", the app banner, FAQ, author box and related articles.
import Link from "next/link";
import type { ReactNode } from "react";
import { MonoD } from "@/components/mono-d";
import { APP_STORE_URL } from "@/config/links";
import { serifDisplay } from "@/lib/fonts";
import { ArticleActions, ArticleToc, type TocItem } from "./article-client";
import { Cover } from "./cover";
import { faqJsonLd, getArticle, JsonLd, type GuideApp, type GuideFaqItem } from "./guide";
import "@/app/landing.css";
import "./guide.css";
import "./article.css";

export type { TocItem };

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
/** "2026-11-06" → "Nov 6, 2026" */
const formatDate = (iso: string) => dateFormat.format(new Date(`${iso}T00:00:00Z`));

/** The guide page shell. Category, date, read time, cover and related articles come from the shared list in guide.tsx, by `path`. */
export function Article({ path, title, intro, disclosure = false, faqs = [], jsonLd, toc, children }: {
  path: string;
  title: string;
  /** The first paragraph is the lede under the title; the others open the body. */
  intro: ReactNode[];
  disclosure?: boolean;
  faqs?: GuideFaqItem[];
  /** The page's own structured data, rendered after the FAQPage data. */
  jsonLd?: object;
  /** The page's sections, in order. FAQ is added automatically. */
  toc: TocItem[];
  children: ReactNode;
}) {
  const article = getArticle(path);
  const related = (article.related ?? []).map(getArticle);
  const items = faqs.length > 0 ? [...toc, { id: "faq", label: "FAQ" }] : toc;
  const [lede, ...rest] = intro;

  return (
    <div className={`lp guide ar ${serifDisplay.variable}`}>
      {faqs.length > 0 && <JsonLd data={faqJsonLd(faqs)} />}
      {jsonLd && <JsonLd data={jsonLd} />}
      <div className="ar-wrap">
        <nav aria-label="Breadcrumb" className="ar-crumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/guides">Blog</Link></li>
            <li><b>{article.category}</b></li>
          </ol>
        </nav>

        <article>
          <header className="ar-top">
            <div className="ar-head">
              <span className="ar-tag">{article.category}</span>
              <h1>{title}</h1>
              <p className="ar-lede">{lede}</p>
              {disclosure && <p className="disclose"><b>Disclosure</b> We make dscpln.</p>}
              <div className="ar-meta">
                <span className="ar-av" aria-hidden="true"><MonoD className="ar-mono" /></span>
                <span>dscpln team</span>
                <time dateTime={article.published}>{formatDate(article.published)}</time>
                <span>{article.readMinutes} min read</span>
                <ArticleActions path={path} title={title} />
              </div>
            </div>
            <Cover cover={article.cover} />
          </header>

          <div className="ar-body">
            <div className="ar-main">
              {rest.map((p, i) => <p key={i}>{p}</p>)}
              {children}
              <AppBanner />
              {faqs.length > 0 && <ArticleFaq faqs={faqs} />}
              <div className="ar-author">
                <span className="ar-av big" aria-hidden="true"><MonoD className="ar-mono" /></span>
                <div>
                  <b>Written by the dscpln team</b>
                  <span>Short, honest guides to help you keep going.</span>
                </div>
              </div>
            </div>

            <aside className="ar-side">
              <div className="ar-stick">
                <ArticleToc items={items} />
                {path !== "/discipline-quote-generator" && (
                  <div className="ar-wall">
                    <p className="ar-wall-title">Turn a line into a wallpaper</p>
                    <p>Pick a line, pick a theme, save it to your lock screen.</p>
                    <Link href="/discipline-quote-generator" className="ar-btn ink">Make a wallpaper</Link>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </article>

        {related.length > 0 && (
          <section className="ar-rel" aria-labelledby="ar-rel-title">
            <h2 id="ar-rel-title">Related articles</h2>
            <ul className="ar-grid">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="ar-card">
                    <Cover cover={r.cover} />
                    <div className="ar-card-t">
                      <small>{r.category}</small>
                      <b>{r.title}</b>
                      <span>{formatDate(r.published)} · {r.readMinutes} min read</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

/** The ink "Your streak, on your Home Screen" banner with the tilted "d." tile. */
function AppBanner() {
  return (
    <aside className="ar-promo" aria-label="The dscpln app">
      <div>
        <small>The dscpln app</small>
        <p className="ar-promo-title">Your streak, on your Home Screen.</p>
        <p>A new line every morning, habits to tick and a coach for the hard days.</p>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="ar-btn white">Download on the App Store</a>
      </div>
      <span className="ar-tile" aria-hidden="true"><i /><MonoD className="ar-mono" /></span>
    </aside>
  );
}

function ArticleFaq({ faqs }: { faqs: GuideFaqItem[] }) {
  return (
    <section id="faq" className="ar-sec ar-faq">
      <span className="eyebrow">FAQ</span>
      <h2>Questions, answered.</h2>
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}

/** A body section with an h2. `number` shows before the title as in "4. Track a visible streak"; it's hidden from screen readers, like the old rank badge. */
export function ArticleSection({ id, title, eyebrow, number, className = "", children }: {
  id: string;
  title: ReactNode;
  eyebrow?: ReactNode;
  number?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className={`ar-sec ${className}`.trim()}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {number !== undefined && <span aria-hidden="true">{number}. </span>}
        {title}
      </h2>
      {children}
    </section>
  );
}

/** "Label: text" boxes (the demo's "Try today" box). `plain` is the white version, for limitations. */
export function ArticleNotes({ notes }: { notes: { label: string; text: ReactNode; plain?: boolean }[] }) {
  return (
    <dl className="ar-notes">
      {notes.map((n) => (
        <div key={n.label} className={`ar-note${n.plain ? " plain" : ""}`}>
          <dt>{n.label}</dt>
          <dd>{n.text}</dd>
        </div>
      ))}
    </dl>
  );
}

/** A quote block with an ink left border and an optional label on the right. */
export function ArticleQuote({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <figure className="ar-q">
      <blockquote>{children}</blockquote>
      {label && <figcaption>{label}</figcaption>}
    </figure>
  );
}

/** The comparison table, as an "At a glance" section. */
export function ArticleTable({ apps, heading }: { apps: GuideApp[]; heading: string }) {
  const sizes = apps.some((a) => a.widgetSizes);
  return (
    <ArticleSection id="at-a-glance" eyebrow="At a glance" title={heading}>
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
    </ArticleSection>
  );
}

/** One numbered section per app. */
export function ArticleApps({ apps }: { apps: GuideApp[] }) {
  return apps.map((app, i) => (
    <ArticleSection key={app.id} id={app.id} number={i + 1} title={app.name}>
      {app.about.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      <ArticleNotes
        notes={[
          ...(app.widget ? [{ label: "The widget", text: app.widget }] : []),
          { label: "Best for", text: app.bestForLong },
          { label: "Limitation", text: app.limitation, plain: true },
        ]}
      />
    </ArticleSection>
  ));
}

/** "On this page" entries for ArticleApps. */
export const appsToc = (apps: GuideApp[]): TocItem[] => apps.map((a, i) => ({ id: a.id, label: `${i + 1}. ${a.name}` }));
