import Link from "next/link";
import { mainNav } from "@/lib/nav";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(31,31,29,0.14)] bg-hero/90 backdrop-blur-[12px]">
      {/* 1024–1279: nav centers in the space between logo and badges (no room for true centering). ≥1280: page-centered. */}
      <div className="wrap flex h-[68px] items-center justify-between lg:grid lg:h-[88px] lg:grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="dscpln home" className="justify-self-start">
          <Wordmark height={30} />
        </Link>

        <nav aria-label="Main" className="hidden gap-8 justify-self-center lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#download"
          className="hidden h-11 items-center justify-self-end rounded-xl bg-ink px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#3a3a37] lg:inline-flex"
        >
          Get the app
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
