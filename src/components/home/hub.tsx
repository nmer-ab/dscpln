/* eslint-disable @next/next/no-img-element -- static line-art SVGs, sized by CSS */
// The content hub on the home page, under the hero: quote of the day, quote categories, latest guides and free tools.
// Everything comes from the shared lists (data/quotes.ts, components/guide/guide.tsx). Layout matches design/home-hub-demo.html.
import Link from "next/link";
import { Cover } from "@/components/guide/cover";
import { getArticle, guides, type CoverColor, type MiloPose } from "@/components/guide/guide";
import { quoteCategories } from "@/data/quotes";
import { serifDisplay } from "@/lib/fonts";
import { QuoteOfTheDay, type DailyLine } from "./quote-of-the-day";
import "./hub.css";

// Icon tile per quote category. A new category gets the fallback until it's added here.
const categoryIcons: Record<string, { color: CoverColor; pose: MiloPose }> = {
  discipline: { color: "ink", pose: "flex" },
  motivation: { color: "soft", pose: "cheer" },
  stoic: { color: "ink", pose: "think" },
};
const iconFor = (slug: string) => categoryIcons[slug] ?? { color: "soft" as const, pose: "idle" as const };

// Every quote line, taking one from each category in turn so the category changes every day.
const longest = Math.max(...quoteCategories.map((c) => c.lines.length));
const dailyLines: DailyLine[] = Array.from({ length: longest }, (_, i) =>
  quoteCategories.flatMap((c) => (i < c.lines.length ? [{ text: c.lines[i], name: c.name, slug: c.slug, pose: iconFor(c.slug).pose }] : [])),
).flat();

// The 3 newest guides (ties keep list order). Free tools have their own section.
const latest = guides
  .filter((g) => g.category !== "Free tool")
  .map((g, i) => ({ g, i }))
  .sort((a, b) => b.g.published.localeCompare(a.g.published) || a.i - b.i)
  .slice(0, 3)
  .map(({ g }) => g);

// The UTC day of the build: the static HTML shows that day's line until the browser takes over.
const buildDay = Math.floor(Date.now() / 86_400_000);

const generator = getArticle("/discipline-quote-generator");

const date = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

function Head({ title, text, more }: { title: string; text: string; more?: { label: string; href: string } }) {
  return (
    <div className="hub-head">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {more && <Link href={more.href} className="hub-more">{more.label} →</Link>}
    </div>
  );
}

export function Hub() {
  return (
    <div className={`hub ${serifDisplay.variable}`}>
      <section className="hub-sec" aria-labelledby="qotd-title">
        <div className="hub-wrap">
          <div className="hub-head">
            <div>
              <h2 id="qotd-title">Quote of the day</h2>
              <p>A new line every morning, picked from our original lines.</p>
            </div>
          </div>
          <QuoteOfTheDay lines={dailyLines} buildDay={buildDay} />
        </div>
      </section>

      <section className="hub-sec">
        <div className="hub-wrap">
          <Head title="Browse quotes" text="Short, original lines, sorted by what you need today." more={{ label: "All quotes", href: "/quotes" }} />
          <ul className="hub-cats">
            {quoteCategories.map((c) => {
              const icon = iconFor(c.slug);
              return (
                <li key={c.slug}>
                  <Link href={`/quotes/${c.slug}`} className="hub-cat">
                    <span className={`hub-ic ${icon.color}`} aria-hidden="true">
                      <img src={`/milo-v3/milo-${icon.pose}.svg`} alt="" width={188} height={292} />
                    </span>
                    <span>
                      <b>{c.name} quotes</b>
                      <span>{c.summary}</span>
                      <u>{c.lines.length} lines →</u>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="hub-sec">
        <div className="hub-wrap">
          <Head
            title="Latest from the blog"
            text="Short, honest guides on discipline, habits and staying consistent."
            more={{ label: "View all articles", href: "/guides" }}
          />
          <ul className="hub-grid">
            {latest.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="hub-card">
                  <Cover cover={g.cover} />
                  <span className="hub-card-t">
                    <small>{g.category}</small>
                    <b>{g.title}</b>
                    <span>{date.format(new Date(g.published))} · {g.readMinutes} min read</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hub-sec">
        <div className="hub-wrap">
          <Head title="Free tools" text="No sign-up. Made for your lock screen and your Stories." />
          <div className="hub-tools">
            <Link href={generator.href} className="hub-tool dark">
              <span>
                <small>Free tool</small>
                <b>{generator.title}</b>
                <span>{generator.text}</span>
              </span>
              <span className="hub-b hub-b-tool">Open the generator →</span>
            </Link>
            <div className="hub-tool light">
              <div>
                <small>Coming soon</small>
                <b>Lock screen wallpaper maker</b>
                <span>Pick a line and a theme, save it as your wallpaper.</span>
              </div>
              <span className="hub-soon">Soon</span>
            </div>
            <div className="hub-tool light">
              <div>
                <small>Coming soon</small>
                <b>Habit streak calculator</b>
                <span>See what 30 small days add up to.</span>
              </div>
              <span className="hub-soon">Soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
