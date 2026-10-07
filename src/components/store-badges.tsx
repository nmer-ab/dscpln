import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/config/links";

// Official artwork in public/badges/, used as-is. Ratios come from each SVG's viewBox.
const badges = [
  {
    src: "/badges/app-store.svg",
    alt: "Download on the App Store",
    url: APP_STORE_URL,
    ratio: 119.66407 / 40,
  },
  {
    src: "/badges/google-play.svg",
    alt: "Get it on Google Play",
    url: PLAY_STORE_URL,
    ratio: 238.96 / 70.87,
  },
];

const heights = { sm: 44, lg: 56 };

export function StoreBadges({
  size,
  stacked = false,
  captions = true,
  className = "",
}: {
  size: "sm" | "lg";
  stacked?: boolean;
  /** Show "Coming soon" under badges that have no store URL yet. */
  captions?: boolean;
  className?: string;
}) {
  const height = heights[size];

  return (
    <div className={`flex items-start ${stacked ? "flex-col gap-3" : "flex-wrap gap-4"} ${className}`}>
      {badges.map((badge) => {
        const img = (
          <Image
            src={badge.src}
            alt={badge.alt}
            width={Math.round(height * badge.ratio)}
            height={height}
            style={{ height, width: "auto" }}
          />
        );

        if (badge.url) {
          return (
            <a key={badge.src} href={badge.url} target="_blank" rel="noopener noreferrer" className="block">
              {img}
            </a>
          );
        }

        return (
          <Link
            key={badge.src}
            href="/#download"
            aria-label={`${badge.alt}: coming soon`}
            className="flex flex-col items-center"
          >
            {img}
            {captions && <span className="mt-1 text-[12px] leading-none font-medium text-muted">Coming soon</span>}
          </Link>
        );
      })}
    </div>
  );
}
