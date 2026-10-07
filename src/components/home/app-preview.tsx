import Image from "next/image";
import { PhoneFrame } from "@/components/phone-frame";
import { SectionHeading } from "@/components/section-heading";

const screens = [
  { src: "/screens/home.png", caption: "Today's line" },
  { src: "/screens/action-3.png", caption: "Ask Milo" },
  { src: "/screens/screen-2.png", caption: "Your audio" },
];

export function AppPreview() {
  return (
    <section className="bg-alt py-[72px] lg:py-28">
      <div className="wrap">
        <SectionHeading pill="App preview" title={["Small app.", "Big push."]} sub="Built to be opened every day." />

        {/* Below 1024px the row doesn't fit, so it becomes an edge-to-edge snap scroller. */}
        <ul className="-mx-6 mt-12 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:justify-center lg:gap-16 lg:overflow-visible lg:px-0 lg:pb-0">
          {screens.map((s) => (
            <li key={s.src} className="snap-center">
              <figure>
                <PhoneFrame className="border-[10px] border-ink bg-ink">
                  <Image src={s.src} alt={`dscpln: ${s.caption}`} fill sizes="280px" className="object-cover object-top" />
                </PhoneFrame>
                <figcaption className="mt-4 text-center text-[16px] font-semibold text-ink">{s.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
