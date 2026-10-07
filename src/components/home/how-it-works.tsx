import { Bookmark, Sunrise, Target } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  { icon: Target, title: "Pick your goal", text: "Answer a few questions. Takes a minute." },
  { icon: Sunrise, title: "Get your line", text: "One line every morning. Swipe for more." },
  { icon: Bookmark, title: "Keep it", text: "Save it, share it, come back to it." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-alt py-[72px] lg:py-28">
      <div className="wrap">
        <SectionHeading
          pill="How it works"
          title={["Ten seconds a day.", "Three simple steps."]}
          sub="No scrolling. No noise. Just the line you need."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step, i) => (
            <FeatureCard key={step.title} {...step} eyebrow={`Step 0${i + 1}`} className="bg-white" />
          ))}
        </div>
      </div>
    </section>
  );
}
