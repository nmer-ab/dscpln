import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="wrap flex flex-1 flex-col items-center justify-center py-24 text-center">
      <Image src="/milo/milo-think.svg" alt="" width={140} height={140} priority />
      <h1 className="mt-6 font-syne text-[40px] leading-[1.1] font-bold text-ink">Page not found</h1>
      <Link
        href="/"
        className="mt-8 inline-flex h-14 items-center rounded-[10px] bg-green px-7 text-[19px] font-semibold text-white transition-colors hover:bg-[#317339]"
      >
        Back home
      </Link>
    </div>
  );
}
