import type { Metadata } from "next";
import { articleJsonLd, Guide, GuideCta, GuideFaq, GuideHead, GuideMore, JsonLd } from "@/components/guide/guide";
import { PrintButton } from "@/components/guide/print-button";

const path = "/30-day-discipline-challenge";
const title = "The 30-day discipline challenge";
const description =
  "A simple 30-day challenge: one small rule a week, stacked, from a fixed wake-up time to phone-free mornings. With a free printable checklist.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", title, description, url: path, images: "/og.png" },
};

const weeks: { id: string; days: string; title: string; body: string[]; rules: string; tip: string }[] = [
  {
    id: "week-1",
    days: "Days 1–7",
    title: "Week 1: Wake at the same time and make your bed",
    body: [
      "Pick a wake-up time you can keep every day, weekends included. Choose one that fits your life as it is now, not the one you wish you had. Keeping the same time matters more than how early it is.",
      "If you're a night owl, don't force a sunrise start. A later time you can actually hold beats an early one you keep missing.",
      "Then, as soon as you're up, make your bed. It takes a minute or two, and it gives you a small win before the day has asked anything of you.",
      "That's all for week one. It may feel too easy, and that's the point. You're building the habit of keeping a promise to yourself, and an easy promise is one you can keep every single day.",
    ],
    rules: "Wake at your chosen time. Make your bed.",
    tip: "Put your alarm across the room so you have to stand up to turn it off, then walk straight to the bed.",
  },
  {
    id: "week-2",
    days: "Days 8–14",
    title: "Week 2: Add 10 minutes of movement",
    body: [
      "Keep both rules from week one and add ten minutes of movement. A walk, some stretching, a short bodyweight routine or dancing in the kitchen all count. The only requirement is that you move on purpose.",
      "Do it at the same point each morning, ideally right after you make your bed. Linking the new rule to the old ones turns separate tasks into a single routine.",
      "Resist the urge to do more. If you feel like going longer, go ahead, but the rule stays at ten minutes so it still fits on a busy day.",
      "On good days, ten minutes has a way of turning into more. That's a bonus, not the new rule, so tomorrow's ten minutes still counts in full.",
    ],
    rules: "Wake at your chosen time. Make your bed. Move for 10 minutes.",
    tip: "Lay out your shoes or workout clothes the night before, so there's nothing to decide in the morning.",
  },
  {
    id: "week-3",
    days: "Days 15–21",
    title: "Week 3: Keep the first 30 minutes phone-free",
    body: [
      "This is often the hardest rule, which is why it comes once the routine is already in place. For the first 30 minutes after you wake up, leave your phone alone: no messages, no news, no feeds.",
      "Those first minutes set the tone for the day. When they start with other people's demands, the rest of the day tends to follow. When they start with your bed, your movement and a bit of quiet, they're yours.",
      "The urge to check is usually strongest in the first few minutes and fades once your morning gets going. Give your hands something else to do, like making coffee or opening the curtains.",
      "If your phone is your alarm, that's fine. Turn the alarm off, then put the phone face down somewhere you can't reach from bed.",
    ],
    rules: "Wake at your chosen time. Make your bed. Move for 10 minutes. No phone for the first 30 minutes.",
    tip: "Charge your phone outside the bedroom and use a simple alarm clock instead.",
  },
  {
    id: "week-4",
    days: "Days 22–30",
    title: "Week 4: Add 10 minutes of reading or planning",
    body: [
      "The last rule gives your morning direction. Spend ten minutes reading something worthwhile or planning your day. Both work, so pick the one you need more right now.",
      "If you choose reading, keep a book where your phone used to be. If you choose planning, write down the one or two things that would make today a good day, and when you'll do them.",
      "Whichever you choose, keep it simple. A few pages of a good book or a short list on paper is enough. This isn't the moment for a full planning session.",
      "Week four runs for nine days, through day 30. By now the routine should feel familiar, and the extra days give it time to settle in.",
    ],
    rules:
      "Wake at your chosen time. Make your bed. Move for 10 minutes. No phone for the first 30 minutes. Read or plan for 10 minutes.",
    tip: "Keep a notebook and pen next to your book, so either option is ready the moment you sit down.",
  },
];

const legend = [
  { days: "Days 1–7", text: "Same wake-up time, make your bed" },
  { days: "Days 8–14", text: "+ 10 minutes of movement" },
  { days: "Days 15–21", text: "+ phone-free first 30 minutes" },
  { days: "Days 22–30", text: "+ 10 minutes of reading or planning" },
];

const weekOf = (day: number) => (day <= 7 ? 1 : day <= 14 ? 2 : day <= 21 ? 3 : 4);

const faqs = [
  {
    q: "Can I change my wake-up time during the challenge?",
    a: "Try to keep it the same for all 30 days, weekends included. If the time you picked turns out to be unrealistic in the first week, adjust it once, then stick with the new time.",
  },
  {
    q: "What if I already do some of these things?",
    a: "Keep doing them, and make the rule a little more specific so it still asks something of you. If you already exercise, for example, the movement rule can be a short morning stretch on top of your usual workout.",
  },
  {
    q: "What happens after day 30?",
    a: "Keep the routine that worked. The rules can stay exactly as they are, or you can slowly grow one of them, like moving for twenty minutes instead of ten. You can also start a new challenge with a different rule each week.",
  },
  {
    q: "Should I start over if I miss a day?",
    a: "No. Leave that day's box empty and carry on. The goal is a routine that lasts, not a perfect record, so the only rule is to never miss twice in a row.",
  },
];

export default function ThirtyDayChallenge() {
  return (
    <Guide faqs={faqs}>
      <JsonLd data={articleJsonLd({ path, title, description, published: "2026-11-06" })} />
      <GuideHead
        title={<>The <em>30-day</em> discipline challenge</>}
        disclosure={false}
        intro={[
          "Big resolutions tend to collapse under their own weight. This challenge goes the other way: it starts with something almost too easy and adds one small rule each week.",
          "Here's how it works. Each week brings one new rule, and you keep the rules from the weeks before. By day 30, you have a short morning routine that runs on its own: a steady wake-up time, a made bed, some movement, a calm start without your phone and a few minutes to read or plan.",
          "The first three weeks last seven days each, and week four runs through day 30. Print the checklist below, put it somewhere you'll see it, and tick a box each day you keep all of that week's rules.",
        ]}
      />

      {weeks.map((week, i) => (
        <section key={week.id} id={week.id} className="g-app">
          <div className="lp-wrap">
            <div className="g-col">
              <span className="eyebrow">{week.days}</span>
              <div className="g-app-head g-week-head">
                <span className={`g-rank${i === 0 ? " first" : ""}`} aria-hidden="true">{i + 1}</span>
                <h2>{week.title}</h2>
              </div>
              {week.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <dl className="g-facts">
                <div><dt>Daily rules</dt><dd>{week.rules}</dd></div>
                <div><dt>Tip</dt><dd>{week.tip}</dd></div>
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section id="checklist" className="g-print">
        <div className="lp-wrap">
          <div className="g-col">
            <span className="eyebrow">Printable</span>
            <h2>Your 30-day checklist</h2>
            <p className="lede">Tick a box each day you keep all of that week&apos;s rules. Put it on your fridge, your mirror or next to your bed.</p>
            <ol className="g-weeks">
              {legend.map((w) => <li key={w.days}><b>{w.days}</b><span>{w.text}</span></li>)}
            </ol>
            <p className="g-start">Start date: <span aria-hidden="true" /></p>
            <ol className="g-checklist">
              {Array.from({ length: 30 }, (_, i) => {
                const day = i + 1;
                const week = weekOf(day);
                return (
                  <li key={day} className={`g-day w${week}`}>
                    <label>
                      <input type="checkbox" aria-label={`Day ${day}`} />
                      <span className="g-day-num" aria-hidden="true">Day {day}</span>
                      <span className="g-day-week" aria-hidden="true">Week {week}</span>
                    </label>
                  </li>
                );
              })}
            </ol>
            <div className="g-print-actions">
              <PrintButton label="Print the checklist" />
              <p>Rather keep it on your phone? dscpln, the app we make, tracks your streak and nudges you each day.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="if-you-miss-a-day" className="g-plain">
        <div className="lp-wrap">
          <div className="g-col">
            <h2>What to do if you miss a day</h2>
            <p>You&apos;ll probably miss a day at some point. That doesn&apos;t end the challenge.</p>
            <p>
              Leave the box empty and keep going. Don&apos;t restart from day one, and don&apos;t try to make up for it by doubling tomorrow&apos;s rules. An empty box is honest, and an honest checklist is more useful than a perfect one.
            </p>
            <p>
              The rule that matters most is simple: never miss twice in a row. One missed day is a blip. Two in a row is how old habits find their way back.
            </p>
            <p>
              It also helps to plan ahead for days you know will be hard, like an early flight or a late night out. Decide the evening before which rules you&apos;ll keep no matter what, even if it&apos;s only waking up on time and making your bed.
            </p>
            <p>
              Then ask what got in the way. Did you go to bed too late? Was the new rule too big for your mornings? Change the setup, not your commitment, and pick up where you left off.
            </p>
          </div>
        </div>
      </section>

      <GuideMore current={path} />
      <GuideFaq faqs={faqs} />
      <GuideCta
        heading="Start with one habit tonight."
        text="dscpln keeps your streak in sight and Milo one message away. The yearly plan starts with a free trial."
      />
    </Guide>
  );
}
