import type { Metadata } from "next";
import { Guide, GuideAppSections, GuideCta, GuideFaq, GuideHead, GuideMore, GuideTable, type GuideApp } from "@/components/guide/guide";

const title = "Best Habitica alternatives in 2026";
const description =
  "Want less game, a calmer tone or a widget-first habit app? A fair look at Habitica alternatives: dscpln, Streaks, Finch, Fabulous and Productive.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/habitica-alternatives" },
  openGraph: { title, description, url: "/habitica-alternatives", images: "/og.png" },
};

const apps: GuideApp[] = [
  {
    id: "dscpln",
    name: "dscpln",
    bestFor: "A simple daily streak, on your Home Screen, with a coach for the hard days",
    platforms: "iPhone",
    about: [
      "dscpln keeps the streak and drops the game. You pick one or two habits, give each a time, and sign a short pledge to yourself. Then you tick them off every day and watch your streak grow, and a missed day is plain to see.",
      "Instead of gold and gear, the reward is progress you can see: Milo, the app's coach, climbs your Home Screen widget as you tick habits off. When motivation drops, you can message Milo for a straight answer and one next step. Three short reads arrive each morning, and your journal and mood check-ins stay on your phone.",
    ],
    bestForLong:
      "People who want less to manage, a streak they can see without opening the app, and a direct nudge when they're tempted to skip.",
    limitation:
      "You need a subscription to use it, though the yearly plan starts with a free trial. It only runs on iPhone, and there are no parties or quests to share with friends the way Habitica has.",
  },
  {
    id: "streaks",
    name: "Streaks",
    bestFor: "A calm, pay-once tracker for Apple devices",
    platforms: "iPhone, iPad, Apple Watch",
    about: [
      "Streaks drops the game entirely: it's a clean, focused tracker made for Apple devices. You set habits to repeat on certain days, track habits you want to stop, and add timed tasks.",
      "It connects to Apple Health, so a step goal or a workout can tick itself off, and it has Home Screen widgets and an Apple Watch app. It's sold as a one-time purchase rather than a subscription.",
    ],
    bestForLong: "iPhone and Apple Watch users who want a calm, simple tracker and no subscription.",
    limitation:
      "It tracks rather than motivates. There's no coaching or guidance, so on a bad day, getting started is entirely up to you.",
  },
  {
    id: "finch",
    name: "Finch",
    bestFor: "Gentle self-care with a pet to look after",
    platforms: "iPhone, Android",
    about: [
      "Finch keeps a little of the game feel but swaps quests for a virtual pet and a much softer tone. You adopt a small bird and set goals for the day, and every goal you complete gives your bird energy to go on adventures and grow.",
      "Around that loop sit mood check-ins, journaling prompts, breathing exercises and reflections. The core app is free, with an optional subscription for extra content and customization.",
    ],
    bestForLong: "People who want a calmer, low-pressure routine, especially around mental well-being.",
    limitation:
      "It's designed for self-care more than accountability. If you're looking for a more direct push, its gentle approach may feel too soft.",
  },
  {
    id: "fabulous",
    name: "Fabulous",
    bestFor: "Guided routines, built up step by step",
    platforms: "iPhone, Android",
    about: [
      "Fabulous replaces the game with a guided program. Instead of building your own list, you follow journeys that add small habits a little at a time and stack them into morning, afternoon and evening routines.",
      "Along the way it offers coaching content, guided audio sessions and reminders, all in a warm, illustrated design. The approach is grounded in behavioral science.",
    ],
    bestForLong: "People who would rather be told what to do next than design their own system.",
    limitation:
      "Most of the program sits behind a subscription, and the app nudges you toward upgrading early. If you only want to track habits you've already chosen, the guided structure can feel slow.",
  },
  {
    id: "productive",
    name: "Productive – Habit Tracker",
    bestFor: "A plain tracker, organized by time of day",
    platforms: "iPhone, Android",
    about: [
      "Productive is a straightforward habit tracker with no game layer. It organizes your habits by time of day, so your morning, afternoon and evening each get their own list. You can start from suggested habits or create your own, schedule them for the days you want, and get reminders when it's time.",
      "It keeps track of your streaks and shows how you're doing over time. It's free to start, with a subscription that unlocks more features.",
    ],
    bestForLong: "People who like Habitica's mix of habits and dailies but want a plain, uncluttered tracker.",
    limitation:
      "It's a tracker, not a coach: it reminds you and keeps score, but there's nothing to lean on when you don't feel like it.",
  },
];

const faqs = [
  {
    q: "What is the best alternative to Habitica?",
    a: "It depends on why you're switching. For a simple daily streak with a Home Screen widget and a coach on the hard days, try dscpln. For a plain tracker, Streaks works well on Apple devices and Productive on iPhone or Android. For something gentler, try Finch, and for a guided program, try Fabulous.",
  },
  {
    q: "Is there a habit app like Habitica but without the game?",
    a: "Yes. Streaks, Productive and dscpln all track habits and streaks without avatars, gear or quests. dscpln keeps a little character in Milo, its coach, but there's nothing to level up or manage.",
  },
  {
    q: "Can I still keep habits with friends?",
    a: "Habitica's parties are hard to replace, and most of the apps here are built for one person. If accountability with friends matters to you, pair a solo tracker with a simple check-in, like sending a friend your streak at the end of each week.",
  },
  {
    q: "Can I move my habits from Habitica to another app?",
    a: "Habit apps don't share a common format, so the easiest way is to set up the habits that matter by hand in the new app. It's also a good moment to keep only the habits you actually do.",
  },
];

export default function HabiticaAlternatives() {
  return (
    <Guide faqs={faqs}>
      <GuideHead
        title={<>Best Habitica alternatives in <em>2026</em></>}
        intro={[
          "Habitica turns your habits into a role-playing game, and for a lot of people that's exactly what gets them moving. Over time, some people find they want something different: less game to manage, a calmer or more direct tone, or progress they can see on their Home Screen without opening an app.",
          "That's less about Habitica and more about what each person needs from a habit app. Here are the alternatives worth a look, depending on what you're after.",
        ]}
      />

      <section id="what-habitica-does-well">
        <div className="lp-wrap">
          <div className="g-col">
            <span className="eyebrow">Credit where it&apos;s due</span>
            <h2>What Habitica does well</h2>
            <p className="lede">
              Habitica is good at making habits fun. Its avatar, gold, gear and quests turn a plain checklist into a game with real stakes, and parties let friends hold each other accountable in a way few habit apps match. It&apos;s free to use, works on the web as well as on phones, and its code is open source.
            </p>
          </div>
        </div>
      </section>

      <GuideTable apps={apps} heading="The alternatives, side by side" />
      <GuideAppSections apps={apps} />
      <GuideMore current="/habitica-alternatives" />
      <GuideFaq faqs={faqs} />
      <GuideCta
        heading="Start with one habit tonight."
        text="dscpln keeps your streak in sight and Milo one message away. The yearly plan starts with a free trial."
      />
    </Guide>
  );
}
