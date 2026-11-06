/* eslint-disable @next/next/no-img-element -- static line-art SVGs, sized by CSS (same as the home page) */
import type { Metadata } from "next";
import { APP_STORE_URL } from "@/config/links";
import "../landing.css";
import "./guide.css";

const title = "Best discipline apps in 2026";
const description =
  "An honest comparison of the best discipline and habit apps in 2026, including dscpln, Fabulous, Habitica, Streaks, Finch and Stoic.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/best-discipline-apps" },
  openGraph: { title, description, url: "/best-discipline-apps", images: "/og.png" },
};

function Check() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

const criteria = [
  {
    title: "Daily habit support",
    text: "Can you set up a habit in a minute and tick it off in a second? Does a streak or history make a missed day visible?",
  },
  {
    title: "Motivation",
    text: "What happens on the day you don't feel like it: a coach, a game, a quote, a pet, or nothing at all?",
  },
  {
    title: "Widgets",
    text: "Does your progress live on your Home Screen, where you see it every time you unlock your phone, or only inside the app?",
  },
  {
    title: "Price model",
    text: "Free, a one-time purchase or a subscription, and what you get before you pay. We describe the model, not the price, because prices change and vary by country.",
  },
];

type App = {
  id: string;
  name: string;
  bestFor: string;
  platforms: string;
  about: string[];
  bestForLong: string;
  limitation: string;
};

const apps: App[] = [
  {
    id: "dscpln",
    name: "dscpln",
    bestFor: "One or two daily habits, with a coach for the hard days",
    platforms: "iPhone (Android coming soon)",
    about: [
      "dscpln is built around a simple idea: pick one or two habits and do them every day. You give each habit a time, sign a short pledge to yourself, and tick it off as you go. Your streak grows with every day you show up, and a missed day is plain to see.",
      "Milo, the app's coach, climbs your Home Screen widget as you tick habits off, and there are several widget styles to choose from. When motivation drops, you can message Milo and get a straight answer and one next step. Each morning brings three short reads on discipline and mindset, and your journal and mood check-ins stay on your phone.",
    ],
    bestForLong:
      "People who want a small daily commitment, a streak worth protecting, and some help on the days they don't feel like it.",
    limitation:
      "You need a subscription to use it, though the yearly plan starts with a free trial. It's iPhone-only for now, and it's deliberately narrow: it won't replace a to-do list or a full planner.",
  },
  {
    id: "fabulous",
    name: "Fabulous",
    bestFor: "Guided routines, built up step by step",
    platforms: "iPhone, Android",
    about: [
      "Fabulous turns habit building into a guided program. Instead of starting from a blank list, you follow journeys that add small habits a little at a time, like drinking water when you wake up or stretching, and stack them into morning, afternoon and evening routines.",
      "Along the way it offers coaching content, guided audio sessions and reminders, all wrapped in a warm, illustrated design. The approach is grounded in behavioral science, and it's made to help you form routines rather than just record them.",
    ],
    bestForLong: "People who like being told what to do next and want help designing a morning or evening routine.",
    limitation:
      "Most of the program sits behind a subscription, and the app nudges you toward upgrading early. If you only want to track a habit you've already chosen, the guided structure can feel slow.",
  },
  {
    id: "habitica",
    name: "Habitica",
    bestFor: "Gamers and friends who keep each other on track",
    platforms: "iPhone, Android, web",
    about: [
      "Habitica turns your life into a role-playing game. You create a pixel-art avatar and add habits you want to build or break, dailies you have to do every day, and to-dos. Completing them earns experience and gold, which you spend on gear, pets and mounts. Skipping a daily costs your character health.",
      "The real hook is social. You can join a party with friends, take on quests together, and feel it when someone skips their dailies. It's free to use, with an optional subscription, and it runs on the web as well as on phones.",
    ],
    bestForLong: "Gamers, and groups of friends who want to hold each other accountable.",
    limitation:
      "The game takes setup and attention of its own, and the retro look isn't for everyone. Once the novelty wears off, some people find the rewards stop meaning much.",
  },
  {
    id: "streaks",
    name: "Streaks",
    bestFor: "A clean, pay-once tracker for Apple devices",
    platforms: "iPhone, iPad, Apple Watch",
    about: [
      "Streaks is a focused habit tracker made for Apple devices, and it looks and feels like it belongs there. You can set habits to repeat on certain days, track habits you want to stop, and add timed tasks.",
      "It connects to Apple Health, so a step goal or a workout can tick itself off. It has Home Screen widgets and an Apple Watch app, and it's sold as a one-time purchase rather than a subscription.",
    ],
    bestForLong: "iPhone and Apple Watch users who want a tidy tracker they pay for once.",
    limitation:
      "It only runs on Apple devices, so it won't follow you to Android. And it tracks rather than motivates: there's no coaching or content to lean on when you're tempted to skip.",
  },
  {
    id: "finch",
    name: "Finch",
    bestFor: "Gentle self-care with a pet to look after",
    platforms: "iPhone, Android",
    about: [
      "Finch pairs self-care with a virtual pet. You adopt a small bird and set goals for the day, and every goal you complete gives your bird energy to go on adventures and grow.",
      "Around that loop sit mood check-ins, journaling prompts, breathing exercises and reflections, all in a soft, kind tone. The core app is free, with an optional subscription for extra content and customization.",
    ],
    bestForLong: "People who want a low-pressure routine, especially around mental well-being.",
    limitation:
      "It's designed for self-care more than accountability. If you want firm discipline and a streak that stings when you break it, Finch's gentle approach may feel too soft.",
  },
  {
    id: "stoic",
    name: "Stoic.",
    bestFor: "Daily journaling and reflection",
    platforms: "iPhone, Android",
    about: [
      "Stoic. is a journaling app inspired by Stoic philosophy. It guides you through a morning check-in to prepare for the day and an evening reflection to review it, with prompts to get you writing.",
      "It adds mood tracking, quotes from Stoic thinkers, and breathing and meditation exercises. Over time, your entries build a picture of how your days and moods connect. It's a calm, well-designed place to think.",
    ],
    bestForLong: "People who build discipline through reflection and want a steady journaling habit.",
    limitation:
      "It's journaling first. If you want to tick off concrete actions and watch a streak grow, you'll probably want a separate habit tracker next to it.",
  },
  {
    id: "motivation",
    name: "Motivation – Daily quotes",
    bestFor: "A quote on your Home Screen, with no setup",
    platforms: "iPhone, Android",
    about: [
      "Motivation – Daily quotes keeps things simple: it puts motivational quotes in front of you through the day. You pick the topics you care about and when you want reminders, and quotes arrive as notifications and on Home Screen widgets.",
      "You can save favorites, change the look with themes, and add quotes of your own.",
    ],
    bestForLong: "Anyone who wants a quick boost and a line to think about, without setting anything up.",
    limitation:
      "It doesn't track habits or streaks. A good quote can get you moving, but nothing records whether you actually did the thing.",
  },
];

const faqs = [
  {
    q: "What is the best app for building discipline?",
    a: "It depends on what keeps you going. For a small daily streak with a coach on the hard days, start with dscpln. If a game motivates you, try Habitica. If you want a guided program, try Fabulous. If you only need a clean tracker on Apple devices, Streaks does that well.",
  },
  {
    q: "Do habit trackers actually work?",
    a: "They help most when they keep the habit small and make a missed day visible. An app won't do the habit for you, but a streak you can see, a reminder at the right time and a nudge on a bad day all make showing up more likely.",
  },
  {
    q: "Is it worth paying for a discipline app?",
    a: "Try the free version or a free trial first. Paying makes sense when you use the coaching, content or guidance every day. If you only tick boxes, a free tracker or a one-time purchase is often enough.",
  },
  {
    q: "How many habits should I start with?",
    a: "One or two. Small habits you can do even on a bad day beat an ambitious list you drop by the end of the week. Add more once the first ones feel automatic.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BestDisciplineApps() {
  return (
    <div className="lp guide">
      <script
        type="application/ld+json"
        // Escape "<" so the payload can't close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="g-head">
        <div className="lp-wrap">
          <div className="g-col">
            <span className="eyebrow">Guide</span>
            <h1>
              Best discipline apps in <em>2026</em>
            </h1>
            <p className="lede">
              Discipline isn&apos;t about willpower on your best day. It&apos;s about what you do on an ordinary Tuesday when you&apos;d rather not. The right app makes that day a little easier: it reminds you, keeps score, and gives you a reason to show up.
            </p>
            <p className="lede">
              We looked at the apps people mention most when they talk about building discipline, and wrote down what each one is good at, who it suits, and where it falls short.
            </p>
            <p className="disclose"><b>Disclosure</b> We make dscpln.</p>
          </div>
        </div>
      </header>

      <section id="how-we-picked">
        <div className="lp-wrap">
          <div className="g-col">
            <span className="eyebrow">Method</span>
            <h2>How we picked</h2>
            <p className="lede">We judged every app on the same four things.</p>
          </div>
          <div className="feats">
            {criteria.map((c) => (
              <article key={c.title} className="feat">
                <span className="tick"><Check /></span>
                <div><h3>{c.title}</h3><p>{c.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="at-a-glance">
        <div className="lp-wrap">
          <div className="g-col">
            <span className="eyebrow">At a glance</span>
            <h2>The apps, side by side</h2>
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

      {apps.map((app, i) => (
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
      ))}

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

      <section className="cta-band" id="download">
        <div className="lp-wrap">
          <div className="cta-box">
            <div>
              <h2>Start with one habit tonight.</h2>
              <p className="lede">dscpln keeps your streak in sight and Milo one message away. The yearly plan starts with a free trial.</p>
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
    </div>
  );
}
