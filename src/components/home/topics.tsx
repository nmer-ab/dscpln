import { BookOpen, MessageCircle, Sparkles, type LucideIcon } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";

const topics = [
  { emoji: "☀️", label: "Mornings" },
  { emoji: "💼", label: "Work" },
  { emoji: "🙅", label: "Excuses" },
  { emoji: "💸", label: "Money" },
  { emoji: "💪", label: "Confidence" },
  { emoji: "📵", label: "Phone & focus" },
  { emoji: "🏋️", label: "Gym & body" },
  { emoji: "🤝", label: "People" },
  { emoji: "🔁", label: "Comebacks" },
];

const stats: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: BookOpen,
    title: "298 hand-picked lines",
    text: "Motivation, discipline and punchlines, sorted by topic.",
  },
  {
    icon: Sparkles,
    title: "45 fresh lines a day",
    text: "New AI lines every morning, across 9 moods.",
  },
  {
    icon: MessageCircle,
    title: "Milo, your coach",
    text: "Ask anything. Get a straight answer and a next step.",
  },
];

export function Topics() {
  return (
    <section className="bg-white py-[72px] lg:py-28">
      <div className="wrap">
        <SectionHeading
          pill="Made for your day"
          title={["Your excuses aren't new.", "Neither are our answers."]}
          sub="Lines for the real parts of your day — not just Monday-morning hype."
        />

        <ul className="mt-12 flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <li
              key={topic.label}
              className="flex h-[76px] w-[calc(50%-8px)] items-center justify-center gap-2.5 rounded-2xl border border-border bg-white sm:w-[222px]"
            >
              <span className="text-[28px] leading-none" aria-hidden="true">
                {topic.emoji}
              </span>
              <span className="text-[18px] font-semibold text-ink">{topic.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {stats.map((stat) => (
            <FeatureCard key={stat.title} {...stat} className="bg-card" />
          ))}
        </div>
      </div>
    </section>
  );
}
