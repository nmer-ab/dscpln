"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PhoneFrame } from "@/components/phone-frame";

const INTERVAL_MS = 3000;

export function ActionDemo({
  steps,
  screen,
  children,
}: {
  steps: string[];
  screen: { src: string; alt: string };
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  // No auto change for visitors who prefer reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAutoplay(!reduce.matches);
    update();
    reduce.addEventListener("change", update);
    return () => reduce.removeEventListener("change", update);
  }, []);

  // Restarts on every change, so a click gets a full 3s before moving on.
  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % steps.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [active, autoplay, steps.length]);

  return (
    <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
      <div>
        {children}
        <ol className="mt-10 flex flex-col gap-4">
          {steps.map((label, i) => {
            const on = i === active;
            return (
              <li key={label}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-4 text-left text-[18px]"
                >
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full font-semibold transition-colors duration-300 ${on ? "bg-lime text-ink" : "bg-dark-line text-white"}`}
                  >
                    {i + 1}
                  </span>
                  <span className={`transition-colors duration-300 ${on ? "text-white" : "text-dark-muted hover:text-white"}`}>
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <PhoneFrame className="mx-auto border-8 border-dark-line bg-dark-line">
        <Image src={screen.src} alt={screen.alt} fill sizes="284px" className="object-cover object-top" />
      </PhoneFrame>
    </div>
  );
}
