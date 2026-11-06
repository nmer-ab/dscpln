import type { Metadata } from "next";
import Link from "next/link";
import { Article, ArticleApps, ArticleTable, appsToc } from "@/components/guide/article";
import { articleJsonLd, type GuideApp } from "@/components/guide/guide";

const path = "/best-motivation-widgets-iphone";
const title = "Best motivation widgets for iPhone in 2026";
const description =
  "The best motivation widgets for iPhone in 2026: dscpln, Motivation, I am, Streaks and Widgetsmith compared, plus how to add a widget to your Home Screen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", title, description, url: path, images: "/og.png" },
};

const apps: GuideApp[] = [
  {
    id: "dscpln",
    name: "dscpln",
    bestFor: "A daily line and your streak, in one widget",
    widgetSizes: "Small and medium",
    platforms: "iPhone",
    about: [
      "dscpln is a daily discipline app built around the Home Screen. You pick one or two habits, tick them off each day and build a streak. The widget keeps that streak in view, along with a fresh line every morning, so you get the reason and the progress in one glance.",
      "There are seven widget styles to choose from, including Poster, Handwritten, Outline and Sketch, and you can switch any time in Profile. On the Poster, Milo, the app's coach, climbs a little higher with every habit you tick. The Handwritten style pairs today's line with your day count.",
    ],
    widget: "Shows your streak and today's line, in the style you pick.",
    bestForLong:
      "People who want motivation and accountability in the same place: a line to start the day, and a streak they won't want to break.",
    limitation:
      "You need a subscription, though the yearly plan starts with a free trial. It's iPhone only, and it's a habit app first, so if all you want is a quote on your screen, it does more than you need.",
  },
  {
    id: "motivation",
    name: "Motivation – Daily quotes",
    bestFor: "A steady stream of quotes",
    widgetSizes: "Home Screen widget, styled in the app",
    platforms: "iPhone, Android",
    about: [
      "Motivation – Daily quotes does one thing: it serves short quotes to help you stay positive and focused. You choose the topics you care about, and it can send quotes as reminders through the day.",
      "Its Home Screen widget puts a quote where you'll see it, and you customize how it looks from inside the app. It's a simple, low-effort way to see a new thought without opening anything.",
    ],
    widget: "Shows a quote on your Home Screen, with a look you set in the app.",
    bestForLong: "People who find a good quote genuinely lifts their mood, and want more of them with no setup.",
    limitation:
      "It's quotes only. Nothing in it tracks what you do, so the widget can remind you why you started, but not whether you showed up today.",
  },
  {
    id: "i-am",
    name: "I am – Daily affirmations",
    bestFor: "Positive self-talk, in the first person",
    widgetSizes: "Home Screen widget",
    platforms: "iPhone, Android",
    about: [
      "I am – Daily affirmations works like a quote app, but in your own voice. Instead of other people's words, you read short first-person statements about who you are and who you're becoming. You pick the areas you want to work on, and it can remind you to read them through the day.",
      "The widget brings those affirmations to your Home Screen, so the habit of reading them doesn't depend on remembering to open the app.",
    ],
    widget: "Shows an affirmation on your Home Screen.",
    bestForLong: "People working on confidence or self-talk, who like the idea of repeating something kind to themselves.",
    limitation:
      "Affirmations work on how you talk to yourself, not on what you do. There's no habit tracking or streak, and if affirmations feel forced to you, a widget won't change that.",
  },
  {
    id: "streaks",
    name: "Streaks",
    bestFor: "Seeing your habit progress at a glance",
    widgetSizes: "Home Screen, including a stats widget",
    platforms: "iPhone, iPad, Apple Watch",
    about: [
      "Streaks is a calm, focused habit tracker made for Apple devices. You set habits for the days you choose, track habits you want to stop, and connect it to Apple Health so a workout or a step goal can tick itself off.",
      "Its widgets are the most data-driven on this list. They can show your habits for the day, a ring that fills as you complete them, or a stats widget with your streaks and completion rates over time.",
    ],
    widget: "Shows your habits and progress, from a filling ring to charts of your streaks.",
    bestForLong: "People who are motivated by numbers and want to see what's left today without opening the app.",
    limitation:
      "It shows progress, not encouragement. The widget tells you what's left to do, but there's no line or coaching for the moment you don't feel like doing it.",
  },
  {
    id: "widgetsmith",
    name: "Widgetsmith",
    bestFor: "Custom widgets with your own words",
    widgetSizes: "Small, medium and large, plus Lock Screen",
    platforms: "iPhone, iPad",
    about: [
      "Widgetsmith isn't a motivation app. It's a widget builder: you design your own widgets for things like the date, weather, calendar, photos and text, choose the fonts and colors, and place them on your Home Screen or Lock Screen.",
      "Its standout feature is scheduling. You can set a widget to change at certain times of day, so a morning reminder can give way to something else in the evening. For motivation, most people use a text widget with a line they've written themselves.",
    ],
    widget: "Shows whatever you design, including your own text, and can change on a schedule.",
    bestForLong: "People who already know the words they need to see and want full control over how they look.",
    limitation:
      "It doesn't track habits, so the motivation part is up to you: you choose the words, the look and when they change.",
  },
];

const faqs = [
  {
    q: "What is the best motivation widget for iPhone?",
    a: "It depends on what moves you. For a daily line and your streak in one widget, try dscpln. For quotes, try Motivation, and for affirmations, try I am. If seeing your progress keeps you going, Streaks is a good fit, and if you'd rather write your own words, Widgetsmith lets you build the widget yourself.",
  },
  {
    q: "Can I put my own text on a widget?",
    a: "Yes. A widget builder like Widgetsmith lets you write your own text and style it however you like. Apps like dscpln, Motivation and I am bring the lines to you instead, so there's something new to read without you having to write it.",
  },
  {
    q: "Why isn't my widget showing a new line?",
    a: "iOS decides when widgets refresh, so a new line can take a little while to appear. Opening the app usually updates it right away. If it still looks stuck, remove the widget and add it again.",
  },
  {
    q: "Do widgets drain my iPhone's battery?",
    a: "Not noticeably. Widgets don't run all the time: iOS updates them now and then and shows a saved snapshot in between, so a quote or streak widget uses very little power.",
  },
];

const steps = [
  "Touch and hold an empty spot on your Home Screen until the apps start to jiggle.",
  "Tap Edit in the top-left corner.",
  "Tap Add Widget.",
  "Search for the app, pick a size, then tap Add Widget and Done.",
];

export default function BestMotivationWidgets() {
  return (
    <Article
      path={path}
      title={title}
      faqs={faqs}
      jsonLd={articleJsonLd({ path, title, description, published: "2026-11-06" })}
      disclosure
      toc={[
        { id: "how-to-add-a-widget", label: "How to add a widget on iPhone" },
        { id: "at-a-glance", label: "The widgets, side by side" },
        ...appsToc(apps),
      ]}
      intro={[
        "A motivation app only helps when you open it, and on the days you need it most, you won't. A Home Screen widget turns that around. The line, the streak or the reminder is already there every time you unlock your phone, with nothing to tap and no app to remember.",
        <>
          Here are the widgets worth a spot on your Home Screen, from daily quotes and affirmations to streak trackers and fully custom designs. Want to find a line you like first? Try our free{" "}
          <Link href="/discipline-quote-generator">discipline quote generator</Link>.
        </>,
      ]}
    >
      <section id="how-to-add-a-widget" className="ar-sec">
        <div className="g-steps">
          <span className="eyebrow">Quick how-to</span>
          <h2>How to add a widget on iPhone</h2>
          <ol>
            {steps.map((s) => <li key={s}>{s}</li>)}
          </ol>
          <p className="note">You can drag the widget anywhere on the Home Screen, or stack several widgets on top of each other and swipe between them.</p>
        </div>
      </section>

      <ArticleTable apps={apps} heading="The widgets, side by side" />
      <ArticleApps apps={apps} />
    </Article>
  );
}
