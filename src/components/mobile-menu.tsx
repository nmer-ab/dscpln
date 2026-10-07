"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mainNav } from "@/lib/nav";
import { StoreBadges } from "./store-badges";
import { Wordmark } from "./wordmark";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const desktop = window.matchMedia("(min-width: 1024px)");

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="-mr-2.5 flex size-11 items-center justify-center text-ink lg:hidden"
      >
        <Menu size={26} />
      </button>

      {/* Portal: the header's backdrop-filter would otherwise trap this fixed sheet inside it. */}
      {open &&
        createPortal(
          <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-hero lg:hidden">
            <div className="wrap flex h-[68px] items-center justify-between">
              <Link href="/" aria-label="dscpln home" onClick={() => setOpen(false)}>
                <Wordmark height={30} />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                autoFocus
                onClick={() => setOpen(false)}
                className="-mr-2.5 flex size-11 items-center justify-center text-ink"
              >
                <X size={26} />
              </button>
            </div>

            <nav aria-label="Mobile" className="wrap flex flex-col gap-6 pt-10">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-syne text-[28px] leading-tight font-bold text-ink transition-colors hover:text-green"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="wrap mt-auto pb-10">
              <StoreBadges size="sm" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
