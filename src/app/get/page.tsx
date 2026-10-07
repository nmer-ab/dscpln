import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StoreBadges } from "@/components/store-badges";
import { StoreRedirect } from "./store-redirect";

const description = "Download dscpln on the App Store or Google Play.";

export const metadata: Metadata = {
  title: "Get dscpln",
  description,
  alternates: { canonical: "/get" },
  openGraph: { title: "Get dscpln", description, url: "/get", images: "/og.png" },
};

// One link for QR codes and social bios: phones are sent to their store, everything else sees the badges.
export default function GetPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-hero px-6 py-24 text-center">
      <StoreRedirect />
      {/* monogram.svg viewBox is 85.9 × 70.8 */}
      <Image src="/brand/monogram.svg" alt="dscpln" width={72} height={59} priority />
      <h1 className="mt-6 font-syne text-[40px] leading-[1.1] font-bold text-ink">Get dscpln</h1>
      <StoreBadges size="lg" className="mt-8 justify-center" />
      <Link
        href="/"
        className="mt-10 text-[15px] text-muted underline decoration-green decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-green"
      >
        Back to dscpln.app
      </Link>
    </div>
  );
}
