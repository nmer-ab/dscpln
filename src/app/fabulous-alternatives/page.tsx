import type { Metadata } from "next";
import { Guide, GuideAppSections, GuideCta, GuideFaq, GuideHead, GuideMore, GuideTable, type GuideApp } from "@/components/guide/guide";

const title = "Best Fabulous alternatives in 2026";
const description =
  "Want something simpler, more direct or widget-first than Fabulous? A fair look at dscpln, Habitica, Finch, Streaks and Productive.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fabulous-alternatives" },
  openGraph: { title, description, url: "/fabulous-alternatives", images: "/og.png" },
};

const apps: GuideApp[] = [
  {
    id: "dscpln",
    name: "dscpln",
    bestFor: "A simple daily streak, on your Home Screen, with a coach for the hard days",
    platforms: "iPhone",
    about: [
      "dscpln is a smaller, more direct take on habit building. You pick one or two habits, give each a time, and sign a short pledge to yourself. Then you tick them off every day and watch your streak grow, and a missed day is plain to see.",
      "Where Fabulous guides you through a program, dscpln keeps the focus on showing up today. Milo, the app's coach, climbs your Home Screen widget as you tick habits off, and when motivation drops you can message Milo for a straight answer and one next step. Three short reads arrive each morning, and your journal and mood check-ins stay on your phone.",
    ],
    bestForLong:
      "People who want fewer steps, a streak they can see without opening the app, and a direct nudge when they're tempted to skip.",
    limitation:
      "You need a subscription to use it, though the yearly plan starts with a free trial. It only runs on iPhone, and it doesn't offer guided programs the way Fabulous does.",
  },
  {
    id: "habitica",
    name: "Habitica",
    bestFor: "Turning habits into a game, alone or with friends",
    platforms: "iPhone, Android, web",
    about: [
      "Habitica swaps guided routines for a role-playing game. You create a pixel-art avatar and add habits you want to build or break, dailies you have to do every day, and to-dos. Finishing them earns experience and gold for gear, pets and mounts, and skipping a daily costs your character health.",
      "You can also join a party with friends and take on quests together, so your habits affect other people too. It's free to use, with an optional subscription.",
    ],
    bestForLong: "People who are motivated by rewards, and by not wanting to let their friends down.",
    limitation:
      "The game takes setup and attention of its own, and the retro look isn't for everyone. Once the novelty wears off, some people find the rewards stop meaning much.",
  },
  {
    id: "finch",
    name: "Finch",
    bestFor: "Gentle self-care with a pet to look after",
    platforms: "iPhone, Android",
    about: [
      "Finch keeps a warm, encouraging tone but builds it around a virtual pet. You adopt a small bird and set goals for the day, and every goal you complete gives your bird energy to go on adventures and grow.",
      "Around that loop sit mood check-ins, journaling prompts, breathing exercises and reflections. The core app is free, with an optional subscription for extra content and customization.",
    ],
    bestForLong: "People who want a low-pressure routine, especially around mental well-being.",
    limitation:
      "It's designed for self-care more than accountability. If you're looking for a more direct push, its gentle approach may feel too soft.",
  },
  {
    id: "streaks",
    name: "Streaks",
    bestFor: "A clean, pay-once tracker for Apple devices",
    platforms: "iPhone, iPad, Apple Watch",
    about: [
      "Streaks is close to the opposite of a guided program: a clean, focused tracker made for Apple devices. You set habits to repeat on certain days, track habits you want to stop, and add timed tasks.",
      "It connects to Apple Health, so a step goal or a workout can tick itself off, and it has Home Screen widgets and an Apple Watch app. It's sold as a one-time purchase rather than a subscription.",
    ],
    bestForLong: "iPhone and Apple Watch users who want a simple tracker and no subscription.",
    limitation:
      "It tracks rather than motivates. There's no coaching or guidance, so on a bad day, getting started is entirely up to you.",
  },
  {
    id: "productive",
    name: "Productive – Habit Tracker",
    bestFor: "Building your own routines, organized by time of day",
    platforms: "iPhone, Android",
    about: [
      "Productive is a straightforward habit tracker that organizes your habits by time of day, so your morning, afternoon and evening each get their own list. You can start from suggested habits or create your own, schedule them for the days you want, and get reminders when it's time.",
      "It keeps track of your streaks and shows how you're doing over time. It's free to start, with a subscription that unlocks more features.",
    ],
    bestForLong: "People who liked building routines in Fabulous but would rather set them up themselves, without a guided program.",
    limitation:
      "It's a tracker, not a coach: it reminds you and keeps score, but there's nothing to lean on when you don't feel like it.",
  },
];

const faqs = [
  {
    q: "What is the best alternative to Fabulous?",
    a: "It depends on why you're switching. For a simpler daily streak with a Home Screen widget and a coach on the hard days, try dscpln. If a game motivates you, try Habitica. For gentle self-care, try Finch. For a plain tracker, Streaks works well on Apple devices and Productive on iPhone or Android.",
  },
  {
    q: "Is there a simpler app than Fabulous?",
    a: "Yes. If you'd rather choose your own habits than follow a guided program, a tracker like dscpln, Streaks or Productive gets you started faster. dscpln goes furthest on simplicity: it asks you to pick just one or two habits.",
  },
  {
    q: "Can I move my habits from Fabulous to another app?",
    a: "Habit apps don't share a common format, so the easiest way is to set up the habits that matter by hand in the new app. It's also a good moment to keep only the habits you actually do.",
  },
  {
    q: "Do I need to cancel Fabulous before switching?",
    a: "Deleting an app doesn't cancel its subscription, so cancel it where you subscribed. On iPhone, that's Settings, then your name, then Subscriptions. App Store subscriptions keep working until the end of the period you've paid for.",
  },
];

export default function FabulousAlternatives() {
  return (
    <Guide faqs={faqs}>
      <GuideHead
        title={<>Best Fabulous alternatives in <em>2026</em></>}
        intro={[
          "Fabulous is a popular habit app, and for many people it's the first one they try. Over time, some people find they want something different: a simpler app that tracks just a habit or two, a more direct push on the days they don't feel like it, or progress they can see on their Home Screen without opening an app.",
          "That's less about Fabulous and more about what each person needs from a habit app. Here are the alternatives worth a look, depending on what you're after.",
        ]}
      />

      <section id="what-fabulous-does-well">
        <div className="lp-wrap">
          <div className="g-col">
            <span className="eyebrow">Credit where it&apos;s due</span>
            <h2>What Fabulous does well</h2>
            <p className="lede">
              Fabulous is good at turning vague goals into a routine you can follow. Its guided journeys introduce small habits gradually and stack them into morning, afternoon and evening routines, with coaching content and audio sessions along the way. The design is warm and encouraging, and the approach draws on behavioral science, which makes it a solid place to start.
            </p>
          </div>
        </div>
      </section>

      <GuideTable apps={apps} heading="The alternatives, side by side" />
      <GuideAppSections apps={apps} />
      <GuideMore current="/fabulous-alternatives" />
      <GuideFaq faqs={faqs} />
      <GuideCta
        heading="Start with one habit tonight."
        text="dscpln keeps your streak in sight and Milo one message away. The yearly plan starts with a free trial."
      />
    </Guide>
  );
}
