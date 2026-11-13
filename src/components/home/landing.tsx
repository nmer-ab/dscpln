/* eslint-disable @next/next/no-img-element -- static line-art SVGs, sized by CSS */
import { QRCodeSVG } from "qrcode.react";
import { StoreBadges } from "@/components/store-badges";
import { APP_STORE_URL } from "@/config/links";
import { serifDisplay } from "@/lib/fonts";
import { HeroVideo } from "./hero-video";
import { Hub } from "./hub";

function Check({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

const features = [
  { title: "Don't break the chain", text: "Daily habits and a streak you'll want to protect. Miss a day and you see it, so you show up." },
  { title: "Your progress, always in sight", text: "Milo climbs your Home Screen with every habit you tick. Seven widget styles to pick from." },
  { title: "A coach when motivation drops", text: "Talk it through with Milo, 30 messages a day. Straight answers and one next step." },
  { title: "Three reads a day", text: "Short reads on discipline, written fresh every morning. Two minutes each." },
];

const steps = [
  { title: "Pick one or two habits", text: "Start small: 2 to 15 minutes a day. A walk, ten pages, no phone in bed." },
  { title: "Sign your pledge", text: "Hold to sign a promise to yourself, with your first streak and its finish date." },
  { title: "Show up every day", text: "Tick your habits. Your streak grows and Milo climbs. Nudges come at the hours you pick." },
];

const widgetStyles = ["Poster", "Handwritten", "Outline", "Sunset", "Blobs", "Board", "Sketch"];

const reads = [
  { kind: "Discipline", title: "The two-minute rule for bad days", time: "2 min" },
  { kind: "Mindset", title: "Motivation follows action, not the other way round", time: "3 min" },
  { kind: "Punchline", title: "You don't need a new year. You need a next hour.", time: "1 min" },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "What is dscpln?", a: "A daily discipline app. You pick one or two habits, tick them off each day and build a streak. Milo, the app's coach, helps when you're stuck, and three short reads arrive every morning." },
  { q: "Is there a free trial?", a: "Yes. The yearly plan starts with 3 days free. We remind you the day before it ends, and you can cancel in Settings before then and pay nothing." },
  { q: "How do I cancel?", a: "Open Settings on your iPhone, tap your name, then Subscriptions, then dscpln. Cancelling stops the next renewal; you keep access until the end of the period you paid for." },
  {
    q: "Is Milo a therapist?",
    a: (
      <>
        No. Milo gives motivation and next steps, not medical advice. If you&apos;re struggling,{" "}
        <a href="https://findahelpline.com" target="_blank" rel="noopener noreferrer">findahelpline.com</a> lists free support near you.
      </>
    ),
  },
  { q: "Where is my journal stored?", a: "Your journal and mood check-ins stay on your phone. They are not uploaded." },
  { q: "Which phones does it work on?", a: "iPhone. You can download it from the App Store." },
];

function Hero() {
  return (
    <section className={`hero ${serifDisplay.variable}`}>
      <div className="hero-top">
        <h1>
          Keep the <em>small promises</em> you make <em>to yourself.</em>
        </h1>
        <p className="hero-sub">
          An iPhone app for people who quit on a bad day, not on day one. Tiny habits, a streak worth protecting, a new
          line every morning, and Milo, a coach for the days you don&apos;t feel like it.
        </p>
        <a className="hero-dl" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <svg width="15" height="18" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
            <path d="M788 340c-6 4-110 63-110 193 0 151 132 204 136 206-1 3-21 73-70 145-43 63-89 126-158 126s-87-40-167-40c-78 0-106 41-169 41s-107-58-158-130C33 797-15 667-15 543c0-198 129-303 256-303 67 0 124 44 166 44 40 0 103-47 180-47 29 0 133 3 201 103zM554 155c31-37 54-89 54-140 0-7-1-14-2-20-51 2-112 34-149 77-28 32-55 84-55 136 0 8 1 16 2 19 3 1 9 1 14 1 46 0 103-31 136-73z" />
          </svg>
          Download for iPhone
        </a>
        <p className="hero-small">Free to download · 3-day free trial on the yearly plan</p>
      </div>
      <div className="lp-wrap">
        <div className="hero-frame">
          <HeroVideo src="/videos/hero.mp4" poster="/videos/hero-poster.jpg" />
        </div>
      </div>
    </section>
  );
}

function Landscape() {
  return (
    <div className="land" aria-hidden="true">
      <div className="land-track"><img src="/landscape.svg" alt="" width={4219} height={210} /></div>
      <img className="walker" src="/milo-v3/milo-idle.svg" alt="" width={188} height={292} />
    </div>
  );
}

function Features() {
  return (
    <section id="features">
      <div className="lp-wrap">
        <span className="eyebrow">What you get</span>
        <h2>Built for the day you don&apos;t feel like it.</h2>
        <p className="lede">Most people don&apos;t quit on day one. They quit on a bad Tuesday. Everything in dscpln is there for that day.</p>
        <div className="feats">
          {features.map((f) => (
            <article key={f.title} className="feat">
              <span className="tick"><Check /></span>
              <div><h3>{f.title}</h3><p>{f.text}</p></div>
            </article>
          ))}
        </div>
        <p className="also"><b>Also in the app:</b> today&apos;s line, quotes by topic, morning and evening check-ins, and nudges between the hours you choose.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="lp-wrap">
        <div>
          <span className="eyebrow">How it works</span>
          <h2>One minute to start. A few minutes a day.</h2>
          <img className="how-milo" src="/milo-v3/milo-clipboard.svg" alt="" width={188} height={292} />
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step"><span className="num">{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Widgets() {
  return (
    <section className="widgets" id="widgets">
      <div className="lp-wrap">
        <div>
          <span className="eyebrow">Home Screen widgets</span>
          <h2>Your streak, every time you unlock your phone.</h2>
          <p className="lede">Pick a widget during setup or any time in Profile. On the Poster, Milo climbs a little higher with every habit you tick.</p>
          <div className="pills">{widgetStyles.map((w) => <span key={w} className="pill">{w}</span>)}</div>
        </div>
        <div className="wall" role="img" aria-label="Three dscpln widgets on a Home Screen">
          <div className="w w-poster">
            <svg className="peak" viewBox="0 0 160 160" preserveAspectRatio="none" aria-hidden="true">
              <path d="M-2 160 L80 34 L162 160 Z" fill="#D9D9D6" stroke="#1F1F1D" strokeWidth={2} />
              <path d="M80 34 L80 22 L96 27 L80 32" fill="#FFFFFF" stroke="#1F1F1D" strokeWidth={2} strokeLinejoin="round" />
            </svg>
            <span className="lbl">STREAK</span>
            <img className="climb" src="/milo-v3/milo-cheer.svg" alt="" width={188} height={292} />
            <span className="big">12</span>
          </div>
          <div className="w w-out"><span>DAYS IN A ROW</span><b>12</b></div>
          <div className="w wide w-hand">
            <span className="dayn">12</span>
            <div><p>Show up for the version of you that&apos;s watching.</p><small>DAY 12 · 1 OF 2 DONE</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadsAndCoach() {
  return (
    <section className="duo">
      <div className="lp-wrap">
        <div className="panel">
          <span className="eyebrow">Daily reads</span>
          <h2>Three short reads a day.</h2>
          <p className="lede">Fresh every morning, on discipline, mindset and a punchline to start the day. Each one takes a couple of minutes.</p>
          <ol className="reads">
            {reads.map((r, i) => (
              <li key={r.title}><span className="rn">{i + 1}</span><div><span className="kind">{r.kind.toUpperCase()}</span><b>{r.title}</b></div><span className="rt">{r.time}</span></li>
            ))}
          </ol>
        </div>
        <div className="panel">
          <div className="coach-head">
            <div><span className="eyebrow">Milo, your coach</span><h2>Stuck? Ask Milo.</h2></div>
            <img src="/milo-v3/milo-think.svg" alt="" width={188} height={292} />
          </div>
          <div className="chat">
            <div className="msg me">I don&apos;t feel like training today.</div>
            <div className="msg milo-m">Then don&apos;t train. Just put your shoes on and walk to the door. Decide there.</div>
            <div className="msg me">Ok. Shoes on.</div>
            <div className="msg milo-m">That&apos;s the hard part done. Ten minutes, then you can stop.</div>
          </div>
          <p className="note">Milo is a motivation coach, not a therapist. Up to 30 messages a day.</p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing">
      <div className="lp-wrap">
        <span className="eyebrow">Pricing</span>
        <h2>Try it free for 3 days.</h2>
        <p className="lede">One subscription, every feature. Start with the yearly plan&apos;s free trial, or pay by the month or week.</p>
        <div className="plans">
          <div className="plan best">
            <span className="tag">3 DAYS FREE · SAVE 44%</span>
            <h3>Yearly</h3>
            <div className="price">$99.99 <small>a year</small></div>
            <span className="sub">That&apos;s $8.33 a month</span>
            <ul>
              <li><span className="tick"><Check /></span>3-day free trial</li>
              <li><span className="tick"><Check /></span>Reminder the day before it ends</li>
              <li><span className="tick"><Check /></span>Everything in dscpln</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Monthly</h3>
            <div className="price">$14.99 <small>a month</small></div>
            <span className="sub">Billed every month</span>
            <ul>
              <li><span className="tick"><Check /></span>Everything in dscpln</li>
              <li><span className="tick"><Check /></span>Cancel any time</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Weekly</h3>
            <div className="price">$4.99 <small>a week</small></div>
            <span className="sub">Billed every week</span>
            <ul>
              <li><span className="tick"><Check /></span>Everything in dscpln</li>
              <li><span className="tick"><Check /></span>Cancel any time</li>
            </ul>
          </div>
        </div>
        <p className="fine">
          Prices in US dollars; the App Store shows the price in your currency. Subscriptions renew automatically until you cancel. Cancel any time in your App Store subscription settings; access continues until the end of the period you paid for.
        </p>
      </div>
    </section>
  );
}

function Faq() {
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

function FinalCta() {
  return (
    <section className="cta-band" id="download">
      <div className="lp-wrap">
        <div className="cta-box">
          <div>
            <h2>Stop waiting to feel ready.</h2>
            <p className="lede">Pick one habit tonight. Tick it off tomorrow morning.</p>
            <StoreBadges size="sm" className="cta-badges" />
          </div>
          <div className="cta-side">
            <figure className="qr">
              <div><QRCodeSVG value="https://dscpln.app/get" size={110} fgColor="#1F1F1D" title="QR code linking to https://dscpln.app/get" /></div>
              <figcaption>Scan with your phone</figcaption>
            </figure>
            <div className="cta-milo"><img src="/milo-v3/milo-wave.svg" alt="" width={188} height={292} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Landing() {
  return (
    <div className="lp">
      <Hero />
      <Landscape />
      <Hub />
      <Features />
      <HowItWorks />
      <Widgets />
      <ReadsAndCoach />
      <Pricing />
      <Faq />
      <FinalCta />
    </div>
  );
}
