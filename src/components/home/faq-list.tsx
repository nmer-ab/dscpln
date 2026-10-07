"use client";

import { ChevronDown, Minus } from "lucide-react";
import { useId, useState } from "react";

export function FaqList({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <ul className="mx-auto mt-12 flex max-w-[760px] flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex min-h-[58px] w-full items-center justify-between gap-4 rounded-lg px-5 py-3 text-left text-[18px] font-semibold transition-colors duration-250 ${isOpen ? "bg-green text-white" : "bg-faq text-ink hover:bg-pill"}`}
              >
                {item.q}
                {isOpen ? <Minus size={20} className="shrink-0" /> : <ChevronDown size={20} className="shrink-0" />}
              </button>
            </h3>
            {/* grid-rows 0fr → 1fr animates to the answer's natural height. */}
            <div
              id={`${id}-a${i}`}
              role="region"
              aria-labelledby={`${id}-q${i}`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-250 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="mt-2 rounded-lg border border-border px-5 py-4 text-[16px] leading-[1.6] text-muted">
                  {item.a}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
