import Link from "next/link";
import { mainNav } from "@/lib/nav";
import { MobileMenu } from "./mobile-menu";
import { StoreBadges } from "./store-badges";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-hero/90 backdrop-blur-[12px]">
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
              className="text-[17px] font-semibold text-ink transition-colors hover:text-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <StoreBadges size="sm" captions={false} className="hidden justify-self-end lg:flex" />
        <MobileMenu />
      </div>
    </header>
  );
}
