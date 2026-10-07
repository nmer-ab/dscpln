import { SectionHeading } from "@/components/section-heading";
import { ActionDemo } from "./action-demo";

const steps = ["Open dscpln", "Read today's line", "Ask Milo what's next"];

export function SeeItInAction() {
  return (
    <section id="features" className="bg-ink py-[72px] lg:py-28">
      <div className="wrap">
        <ActionDemo steps={steps} screen={{ src: "/screens/action-3.png", alt: "Asking Milo in dscpln" }}>
          <SectionHeading
            tone="dark"
            align="left"
            pill="See it in action"
            title={["From a bad morning", "to a better day."]}
            sub="Open the app, read the line picked for you, and when you're stuck, ask Milo. That's the whole routine."
          />
        </ActionDemo>
      </div>
    </section>
  );
}
