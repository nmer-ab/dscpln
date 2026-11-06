import Link from "next/link";
import { mainNav } from "@/lib/nav";
import { MonoD } from "./mono-d";

export function SiteHeader() {
  return (
    <header className="flex justify-center px-4 pt-6">
      <nav
        aria-label="Main"
        className="flex items-center gap-4 rounded-[14px] bg-[rgba(31,31,29,0.06)] py-2 pr-3.5 pl-2.5 text-[14px] leading-normal font-medium max-[360px]:gap-3 min-[641px]:gap-[22px] min-[641px]:pr-[18px]"
      >
        <Link
          href="/"
          aria-label="dscpln home"
          className="relative flex size-[30px] items-center justify-center rounded-[9px] bg-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green"
        >
          <MonoD className="h-auto w-[17px]" />
          <i className="absolute right-1.5 bottom-2 size-[5px] rounded-full bg-lime" />
        </Link>
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md text-ink transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-green"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
