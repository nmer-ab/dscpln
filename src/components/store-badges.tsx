import Image from "next/image";
import { APP_STORE_URL } from "@/config/links";

// Official black artwork in public/badges/, used as-is. Ratio comes from the SVG's viewBox.
const ratio = 119.66407 / 40;

const heights = { sm: 44, lg: 56 };

export function StoreBadges({ size, className = "" }: { size: "sm" | "lg"; className?: string }) {
  const height = heights[size];

  return (
    <div className={`flex items-start ${className}`}>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="block">
        <Image
          src="/badges/app-store.svg"
          alt="Download on the App Store"
          width={Math.round(height * ratio)}
          height={height}
          style={{ height, width: "auto" }}
        />
      </a>
    </div>
  );
}
