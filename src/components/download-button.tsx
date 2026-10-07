"use client";

import Link from "next/link";
import { storeUrlForDevice } from "@/lib/store-url";

// Phones go straight to their store; desktops (or a store without a URL yet) scroll to #download.
export function DownloadButton({ className = "" }: { className?: string }) {
  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const url = storeUrlForDevice();
    if (!url) return;
    e.preventDefault();
    window.location.href = url;
  }

  return (
    <Link
      href="/#download"
      onClick={onClick}
      className={`inline-flex h-14 items-center justify-center rounded-[10px] bg-green px-7 text-[19px] font-semibold text-white transition-colors hover:bg-[#317339] ${className}`}
    >
      Download dscpln →
    </Link>
  );
}
