/* eslint-disable @next/next/no-img-element -- static line-art SVGs, sized by CSS */
import { QRCodeSVG } from "qrcode.react";
import { StoreBadges } from "@/components/store-badges";

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
  { q: "How do I cancel?", a: "On iPhone: Settings, your name, Subscriptions, dscpln. On Android: Google Play, Payments & subscriptions, Subscriptions. Cancelling stops the next renewal; you keep access until the end of the period you paid for." },
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
  { q: "Which phones does it work on?", a: "iPhone and Android, through the App Store and Google Play." },
];

function Hero() {
  return (
    <section className="hero">
      <div className="lp-wrap">
        <div>
          <span className="eyebrow">dscpln: Daily Discipline</span>
          <h1>
            Keep the promises you make to <em>yourself.</em>
          </h1>
          <p className="lede">
            Pick one or two habits. Tick them off every day and watch your streak grow. When motivation drops, Milo, your coach, is one message away.
          </p>
          <StoreBadges size="lg" className="hero-badges" />
        </div>
        <div className="hero-art">
          <img className="hero-milo" src="/milo-v3/milo-cheer.svg" alt="" width={188} height={292} />
          <div className="phone" role="img" aria-label="The dscpln Today screen: today's line, two habits, today's reads and a 7-day streak">
            <span className="isl" />
            <div className="ph-in">
              <span className="ph-date">FRIDAY 30 OCTOBER</span>
              <span className="ph-hi">Good morning, Ahmed.</span>
              <div className="ph-line">
                Do the small thing before the day talks you out of it.<small>TODAY&apos;S LINE · DISCIPLINE</small>
              </div>
              <div className="ph-h"><span className="r on"><Check /></span><span>Walk 10 minutes<small>08:00 · Done</small></span></div>
              <div className="ph-h"><span className="r" /><span>Read 10 pages<small>21:00</small></span></div>
              <div className="ph-h"><span className="r sq">3</span><span>Today&apos;s reads<small>3 new · 6 min</small></span></div>
              <div className="ph-streak">
                <div>
                  <b>Day 7</b>
                  <div className="dots7">{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</div>
                </div>
                <span>First streak<br />done</span>
              </div>
              <div className="ph-tabs"><b>TODAY</b><span>TOPICS</span><span>COACH</span><span>SAVED</span><span>PROFILE</span></div>
            </div>
          </div>
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
              <path d="M-2 160 L80 34 L162 160 Z" fill="#C8E26A" stroke="#1F1F1D" strokeWidth={2} />
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
          Prices in US dollars; the App Store and Google Play show the price in your currency. Subscriptions renew automatically until you cancel. Cancel any time in your store&apos;s subscription settings; access continues until the end of the period you paid for.
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
            <StoreBadges size="lg" className="cta-badges" />
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
