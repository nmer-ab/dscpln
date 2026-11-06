import type { Metadata } from "next";
import { articleJsonLd, Guide, GuideCta, GuideFaq, GuideHead, GuideMore, JsonLd } from "@/components/guide/guide";

const path = "/how-to-build-self-discipline";
const title = "How to build self-discipline: 7 steps that work";
const description =
  "Motivation fades; discipline doesn't. Seven practical steps to build self-discipline, from starting small to never missing twice, with something to try today.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", title, description, url: path, images: "/og.png" },
};

const steps: { id: string; title: string; body: string[]; example: string; tryToday: string }[] = [
  {
    id: "start-small",
    title: "Start smaller than feels useful",
    body: [
      "When you're motivated, it's tempting to aim high: an hour at the gym, a chapter every night, no sugar ever again. The plan feels exciting on day one.",
      "Then a busy day arrives. The plan suddenly feels heavy, so you skip it, and skipping once makes skipping again easier.",
      "A small habit survives the days a big one doesn't. At the start, the goal isn't results. It's becoming someone who shows up. Once showing up is automatic, making the habit bigger is the easy part.",
      "Small also means quick. A habit that takes a couple of minutes leaves no room to argue with yourself about whether you have time.",
      "So make the first version so small it feels almost silly. If you couldn't do it on your worst day, it's still too big.",
    ],
    example:
      "Instead of \"work out for an hour,\" commit to putting on your workout clothes and doing ten push-ups. Instead of \"read more,\" read two pages before bed.",
    tryToday: "Pick one habit and shrink it until it takes less than two minutes. Do that version tonight.",
  },
  {
    id: "same-time-same-place",
    title: "Same time, same place",
    body: [
      "A habit that floats around your day, waiting for a free moment, rarely gets done. The free moment doesn't come, or it comes when you're too tired to care.",
      "Give the habit a fixed slot instead. The same time and the same place turn a daily decision into a routine, and routines don't need to be negotiated.",
      "The easiest anchor is something you already do without thinking: making coffee, brushing your teeth, getting home from work. Attach the new habit right after it.",
      "If your days vary a lot, pick an anchor rather than a clock time. \"After lunch\" works whether lunch is at noon or mid-afternoon.",
      "Over time, the place starts doing the reminding for you. You sit in that chair, and your hand is already reaching for the book.",
    ],
    example: "\"After I pour my morning coffee, I write three lines in my journal at the kitchen table.\"",
    tryToday:
      "Write one sentence: \"After I [something I already do], I will [new habit] at [place].\" Put it where you'll see it tomorrow.",
  },
  {
    id: "design-your-environment",
    title: "Design your environment",
    body: [
      "Relying on willpower is a weak plan when temptation is within arm's reach. It's far easier to change your surroundings than to resist them all day.",
      "Make the good habit easy and the bad one awkward. Put what you need for the habit where you'll trip over it. Put what distracts you somewhere that takes effort to reach.",
      "Small changes add up. Leave your running shoes by the door, keep a water bottle on your desk, take the guitar out of its case. Every barrier you remove is one less excuse.",
      "For most people, the biggest distraction is the phone. If it sits on your desk while you work or on your pillow at night, it will win most arguments.",
      "You don't have to get rid of it. You just have to add a little distance between you and it.",
    ],
    example:
      "Charge your phone in the kitchen instead of next to your bed, and leave a book on your pillow. At night, picking up the book is now easier than walking to the kitchen.",
    tryToday: "Before bed, put your phone out of reach and set out one thing you'll need for tomorrow's habit.",
  },
  {
    id: "track-a-visible-streak",
    title: "Track a visible streak",
    body: [
      "Progress you can see is progress you'll protect. A streak turns a vague intention into something concrete: a chain of days you don't want to break.",
      "The important word is visible. A tracker buried in an app you never open won't do much. Your streak needs to live somewhere you look many times a day, like your fridge, your desk or your Home Screen.",
      "Keep the tracking itself effortless, too. If logging a habit takes longer than doing it, you'll stop logging.",
      "It also helps to track only one or two things. A wall of checkboxes is hard to keep up and easy to give up on.",
      "A paper calendar with a big X for each day works well. So does an app: dscpln, the app we make, puts your streak on a Home Screen widget, so you see it every time you unlock your phone.",
    ],
    example:
      "Hang a calendar next to your bathroom mirror and mark an X each day you do your habit. After a week or so, the row of Xs starts to motivate you on its own.",
    tryToday: "Decide where your streak will live, on paper or on your Home Screen, and mark today as day one.",
  },
  {
    id: "plan-for-bad-days",
    title: "Plan for bad days, and never miss twice",
    body: [
      "Bad days are coming. You'll be sick, traveling, exhausted or simply not in the mood. Disciplined people don't avoid those days; they plan for them.",
      "Decide in advance what the minimum version of your habit looks like on a bad day. Ten minutes instead of thirty. One page instead of a chapter. The bad-day version isn't cheating. It's what keeps the habit alive.",
      "And if you do miss a day, don't let it become two. Missing once is an accident. Missing twice is the start of a new habit: the one where you don't do it.",
      "Treat a missed day as information, not a verdict. Then get back on track the very next day.",
    ],
    example:
      "Your plan is a run every morning. On a bad day, the plan becomes a ten-minute walk around the block. If you missed yesterday, today's walk is non-negotiable.",
    tryToday: "Write down the bad-day version of your habit, and under it, the rule: never miss twice.",
  },
  {
    id: "act-like-the-person",
    title: "Act like the person you want to be",
    body: [
      "Goals describe what you want to have. Identity describes who you are. And people tend to act in line with who they believe they are.",
      "So change the question you ask yourself. Instead of \"How do I finish a marathon?\", ask \"What would a runner do today?\" A runner goes for a run, even a short one. A reader reads, even a page.",
      "Each time you do the habit, you collect a little evidence that you're that kind of person. You don't need a perfect record. You just need enough evidence that you start to believe it.",
      "It changes how bad days feel, too. Skipping a run is easy when running is a goal on a list. It's harder when you think of yourself as a runner.",
      "Over time, the habit stops being something you force yourself to do and becomes something you simply do.",
    ],
    example:
      "You want to be someone who keeps their word to themselves. So when you said you'd stretch before bed, you stretch, even if only for a minute, because that's what someone who keeps their word does.",
    tryToday: "Finish this sentence: \"I'm the kind of person who…\" Then do one small thing today that proves it.",
  },
  {
    id: "review-weekly",
    title: "Review weekly",
    body: [
      "Discipline isn't only about doing; it's also about adjusting. A habit that fit last month's schedule might not fit this month's. Without a review, small problems quietly turn into quitting.",
      "Once a week, take ten minutes to look back. What went well? Where did you slip, and why? What will you change for next week?",
      "Be curious, not harsh. The point isn't to grade yourself. It's to make next week a little easier than this one.",
      "Write your answers down, even if it's only a line or two. A few weeks of notes will show you patterns you'd never notice day to day.",
      "End each review by choosing one thing to keep and one thing to change. Small, steady adjustments are what turn a habit you're trying into a habit you keep.",
    ],
    example:
      "On Sunday evening, you look at your streak and notice you missed both days you worked late. Next week, you move the habit to the morning on those days.",
    tryToday: "Put a ten-minute weekly review in your calendar for the end of this week, and make it repeat.",
  },
];

const faqs = [
  {
    q: "How long does it take to build self-discipline?",
    a: "There's no fixed number of days. It depends on the habit, how small you start and how consistent you are. It usually gets easier once the habit stops feeling like a decision. Focus on showing up today, not on a finish line.",
  },
  {
    q: "Is self-discipline the same as willpower?",
    a: "Not quite. Willpower is the effort you spend resisting something in the moment, and it runs low when you're tired or stressed. Self-discipline is broader: the habits, routines and surroundings that mean you need less willpower in the first place.",
  },
  {
    q: "What should I do after I break a streak?",
    a: "Start again today, without punishing yourself. A broken streak doesn't erase the days you showed up. Look at why you missed, adjust your bad-day plan if you need to, and make sure one missed day doesn't turn into two.",
  },
  {
    q: "How many habits should I work on at once?",
    a: "One or two. Every new habit takes attention, and attention is limited. Get one habit to the point where it feels automatic before you add the next.",
  },
];

export default function HowToBuildSelfDiscipline() {
  return (
    <Guide faqs={faqs}>
      <JsonLd data={articleJsonLd({ path, title, description, published: "2026-11-06" })} />
      <GuideHead
        title={<>How to build self-discipline: <em>7 steps</em> that work</>}
        disclosure={false}
        intro={[
          "Motivation is a feeling, and feelings come and go. It shows up on a fresh Monday or after a good video, and it's often gone by Thursday.",
          "That isn't a flaw in you. Motivation rises and falls with your sleep, your stress, your mood and plenty of other things you don't control. A plan that only works when you feel motivated is a plan that works some of the time.",
          "Discipline is different. It isn't a feeling you wait for. It's a set of habits and decisions that keep working after the feeling has left.",
          "The good news is that it isn't a personality trait you either have or don't. You build it the way you build anything: small, often and on purpose. These seven steps are designed for your ordinary days, and especially your bad ones.",
        ]}
      />

      {steps.map((step, i) => (
        <section key={step.id} id={step.id} className="g-app">
          <div className="lp-wrap">
            <div className="g-col">
              <div className="g-app-head">
                <span className={`g-rank${i === 0 ? " first" : ""}`} aria-hidden="true">{i + 1}</span>
                <h2>{step.title}</h2>
              </div>
              {step.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <dl className="g-facts">
                <div><dt>Example</dt><dd>{step.example}</dd></div>
                <div><dt>Try today</dt><dd>{step.tryToday}</dd></div>
              </dl>
            </div>
          </div>
        </section>
      ))}

      <GuideMore current={path} />
      <GuideFaq faqs={faqs} />
      <GuideCta
        heading="Start with one habit tonight."
        text="dscpln keeps your streak in sight and Milo one message away. The yearly plan starts with a free trial."
      />
    </Guide>
  );
}
