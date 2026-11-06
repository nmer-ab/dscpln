// Quote categories for /quotes and /quotes/[slug]. Every line is original, written for dscpln: no famous
// quotes, no attributions. Keep lines at 16 words or fewer so they fit a card and the Stories image.
// `related` holds guide paths; they must match an entry in the guides list in components/guide/guide.tsx.

export type QuoteCategory = {
  slug: string;
  /** Short name, used on cards and as the label on the Stories image. */
  name: string;
  /** <title>, before the site suffix. */
  title: string;
  description: string;
  /** One line for the category card on /quotes. */
  summary: string;
  /** About 120 words, split into paragraphs. */
  intro: string[];
  related: [string, string];
  lines: string[];
};

export const quoteCategories: QuoteCategory[] = [
  {
    slug: "discipline",
    name: "Discipline",
    title: "Discipline quotes: 30 short lines to keep going",
    description:
      "30 original short discipline quotes, 16 words or fewer. Copy a line or save it as a 1080×1920 image for your Stories.",
    summary: "For the days you'd rather skip it: small promises, kept daily.",
    intro: [
      "These are 30 short lines about discipline, written for the moments when you'd rather skip it. None of them are famous quotes, and none come with a name attached. We wrote them for dscpln, so every line is original and short enough to read at a glance on your phone, even on a busy morning.",
      "They lean on one idea: discipline isn't a personality trait. It's a small, boring promise you keep again and again until it's simply who you are. Read through the list slowly and take the one that hits hardest today. Copy it into your notes, send it to a friend who needs it, or save it as a Stories image to see first thing tomorrow morning.",
    ],
    related: ["/how-to-build-self-discipline", "/30-day-discipline-challenge"],
    lines: [
      "Do the small thing now, before your mood gets a vote.",
      "You don't need a better plan. You need the next rep.",
      "Every kept promise makes the next one easier to keep.",
      "Set the alarm once. Get up once. Keep it that simple.",
      "Nobody's watching at 6 a.m. That's exactly why it counts.",
      "Routine isn't a cage. It's the floor you stand on when things shake.",
      "Show up on the days it feels pointless. Those days build the rest.",
      "The habit doesn't ask how you slept. It asks if you're here.",
      "Choose the hard thing early, and the rest of the day gets lighter.",
      "Plans are cheap. Repetition is where the price gets paid.",
      "Do it badly today, better tomorrow. Just do it daily.",
      "Protect the first hour. The rest of the day follows its lead.",
      "Fewer goals, kept daily, beat many goals kept sometimes.",
      "You won't always feel strong. You can always do the minimum.",
      "The work you skip today waits for you tomorrow, a little heavier.",
      "Consistency is deciding once and refusing to reopen the debate.",
      "Earn the evening by finishing what you started this morning.",
      "If it matters, give it a time. If it doesn't, let it go.",
      "Willpower runs out by noon. A routine runs all day.",
      "Tired is a feeling. Done is a fact. Aim for done.",
      "The streak isn't the goal. Who you become keeping it is.",
      "Start with five minutes. Stay because you already started.",
      "Stop waiting for Monday. Today has a morning too.",
      "Discipline sounds strict. Mostly it's just showing up again.",
      "Comfort always asks for one more day. Give it one less.",
      "Keep the bar low enough to clear on your worst day.",
      "A clear desk, a set time, one task. Begin there.",
      "The gap between wanting it and having it is mostly repetition.",
      "Finish today's part. Tomorrow's part can wait for tomorrow.",
      "Put your shoes by the door. Tomorrow's run starts tonight.",
    ],
  },
  {
    slug: "motivation",
    name: "Motivation",
    title: "Motivation quotes: 30 short lines for hard days",
    description:
      "30 original short motivation quotes for slow mornings and hard weeks. Copy a line or save it as a 1080×1920 image for your Stories.",
    summary: "Gentle pushes for slow mornings, bad weeks and moments of doubt.",
    intro: [
      "Motivation comes and goes, and that's normal. These 30 short lines are for the days it goes: the slow mornings, the bad weeks and the moments you wonder whether any of this is working. They're original, written for dscpln, so you won't find a famous name under any of them.",
      "Each one is short enough to read in a few seconds, wherever you are. Some are gentle, some give you a small push, and all of them point the same way: keep going, even a little. Scroll until you find the one that fits how you feel right now. Copy it, share it or save it as a Stories image, then go and do the next small thing on your list.",
    ],
    related: ["/best-motivation-widgets-iphone", "/discipline-quote-generator"],
    lines: [
      "You've made it through every hard day so far. Here's one more.",
      "Small progress is still progress. Count it.",
      "You don't need a perfect week. Just a few good hours.",
      "The version of you that tried today is already ahead.",
      "Go at your own pace. The finish line doesn't check the clock.",
      "Every expert you admire had a clumsy first attempt.",
      "Today counts, even if nobody else notices it.",
      "Your effort is quiet now. The results won't be.",
      "A fresh start is waiting every morning. No permission needed.",
      "You're allowed to be tired and still keep going.",
      "One brave minute can change the shape of a whole day.",
      "Look at how far you've come before you judge how far is left.",
      "Doubt can come along for the ride. Just don't hand it the wheel.",
      "Give today what you can. That's enough.",
      "Little wins stack up faster than you think.",
      "It's okay that it's hard. Hard is usually where you grow.",
      "Some seasons are for planting. Keep watering, even when nothing shows.",
      "You're closer than you were yesterday. Keep moving.",
      "Rest when you need to, then come back. Quitting isn't resting.",
      "The life you want gets built in hours nobody sees.",
      "Trust the next step, even when you can't see the top.",
      "A bad week is a chapter, not the whole story.",
      "You started for a reason. Go find it again.",
      "Be someone who finishes what they start.",
      "Today's effort is a gift to the person you'll be next summer.",
      "Hope is good. A plan with a start time is better.",
      "Trying again is its own kind of courage.",
      "Keep showing up. Momentum is shy, but it comes.",
      "Every good day you've had started with one small choice.",
      "Make today a little lighter for tomorrow's you.",
    ],
  },
  {
    slug: "stoic",
    name: "Stoic",
    title: "Stoic quotes: 30 short lines for a steady mind",
    description:
      "30 original short lines in the Stoic spirit, on control, calm and character. Copy one or save it as a 1080×1920 image for your Stories.",
    summary: "Original lines in the Stoic spirit: control, calm and character.",
    intro: [
      "The Stoics spent their lives on a few plain questions: what's in your control, what isn't, and how to act well either way. These 30 short lines are written in that spirit. They aren't quotes from Marcus Aurelius, Seneca or Epictetus, and they aren't paraphrases dressed up as quotes.",
      "They're original lines we wrote for dscpln, drawing on the same ideas: calm over reaction, effort over outcome and character over comfort. Each one is short enough to read in a single breath and remember all day. Pick one for the morning, before the day and everyone in it starts pulling at you. Copy it, share it or save it as a Stories image to keep it close at hand.",
    ],
    related: ["/30-day-discipline-challenge", "/best-motivation-widgets-iphone"],
    lines: [
      "Sort what's yours to control from what isn't. Then act on yours.",
      "The weather, the traffic, their mood: none of it is yours. Your answer is.",
      "Most of the hurt lives in the story you tell about it.",
      "Do your work well, and let the applause go where it likes.",
      "You can't choose the day you're given. You choose how you meet it.",
      "Expect a hard day, and it loses its power to surprise you.",
      "Be calm first. Clever can come later.",
      "Before you react, ask whether this will matter in a year.",
      "Hold what you love gently. Everything is on loan for a while.",
      "An insult only lands if you agree to pick it up.",
      "Do the next right thing, then the one after that.",
      "Your character goes everywhere you go. Keep it worth carrying.",
      "Rise early, work honestly, rest without guilt.",
      "Comfort is a pleasant guest and a poor master.",
      "Practice going without, so losing things never owns you.",
      "Time is the one thing you can't earn back. Spend it on purpose.",
      "Judge your day by your effort, not by how it turned out.",
      "Let other people be wrong without making it your job.",
      "Someone will test your patience today. Decide now to pass.",
      "Name the fear plainly. Most fears shrink once they have a name.",
      "Need less, and almost every day becomes a good one.",
      "Every setback is practice for the next one. Keep the lesson.",
      "Speak less than you know. Do more than you say.",
      "A calm reply has ended more arguments than a clever one.",
      "Picture your worry from a mountaintop. See how small it gets.",
      "This moment will pass. Act in it the way you'll respect later.",
      "Be the same person in private that you are in public.",
      "Don't wish the hard thing away. Ask what it's teaching you.",
      "Duty first, then comfort. The order matters.",
      "Tonight, review the day honestly. Keep what worked, fix what didn't.",
    ],
  },
];

export function getQuoteCategory(slug: string) {
  return quoteCategories.find((c) => c.slug === slug);
}
