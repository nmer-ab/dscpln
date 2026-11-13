import Link from "next/link";
import { guides } from "@/components/guide/guide";
import { APP_STORE_URL } from "@/config/links";
import { quoteCategories } from "@/data/quotes";
import { serifDisplay } from "@/lib/fonts";
import { siteNav } from "@/lib/nav";
import { MonoD } from "./mono-d";

type FooterLink = { label: string; href: string };

// Built from the shared lists, so new guides, tools and quote categories show up here on the next build.
const label = (g: { title: string; short?: string }) => g.short ?? g.title;
const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Quotes",
    links: [...quoteCategories.map((c) => ({ label: c.name, href: `/quotes/${c.slug}` })), { label: "All quotes", href: "/quotes" }],
  },
  {
    title: "Blog",
    links: [
      ...guides.filter((g) => g.category !== "Free tool").map((g) => ({ label: label(g), href: g.href })),
      { label: "All articles", href: "/guides" },
    ],
  },
  { title: "Tools", links: guides.filter((g) => g.category === "Free tool").map((g) => ({ label: label(g), href: g.href })) },
  { title: "dscpln", links: siteNav },
];

const serif = "font-[family-name:var(--font-serif-display),Georgia,serif]";

export function SiteFooter() {
  return (
    <footer className={`${serifDisplay.variable} bg-ink pt-14 pb-7 text-white`}>
      <div className="mx-auto w-full max-w-[1120px] px-6">
        <div className="grid gap-7 max-md:gap-9 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="md:col-span-3 lg:col-span-1">
            <Link href="/" className={`inline-flex items-center gap-2.5 text-[22px] font-bold ${serif}`}>
              <span className="relative flex size-[38px] items-center justify-center rounded-[11px] bg-[#2C2C29]">
                <MonoD className="h-auto w-5" />
                <i className="absolute right-2 bottom-2.5 size-1.5 rounded-full bg-lime" />
              </span>
              dscpln
            </Link>
            <p className="mt-3.5 max-w-[340px] text-[14px] leading-[1.55] text-white/62">
              Daily discipline, one small promise at a time. Original quotes, honest guides and free tools, plus the dscpln app for iPhone.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[18px] inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-[13px] font-semibold text-ink transition-opacity hover:opacity-85"
            >
              <svg width="14" height="17" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
                <path d="M788 340c-6 4-110 63-110 193 0 151 132 204 136 206-1 3-21 73-70 145-43 63-89 126-158 126s-87-40-167-40c-78 0-106 41-169 41s-107-58-158-130C33 797-15 667-15 543c0-198 129-303 256-303 67 0 124 44 166 44 40 0 103-47 180-47 29 0 133 3 201 103zM554 155c31-37 54-89 54-140 0-7-1-14-2-20-51 2-112 34-149 77-28 32-55 84-55 136 0 8 1 16 2 19 3 1 9 1 14 1 46 0 103-31 136-73z" />
              </svg>
              Download on the App Store
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-3 text-[13px] font-semibold tracking-[0.5px] text-lime uppercase">{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href} className="mt-[9px] text-[14px] leading-[1.4]">
                    <Link href={link.href} className="text-[14px] text-white/75 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-11 flex justify-between gap-2 border-t border-white/12 pt-5 text-[13px] text-white/50 max-sm:flex-col">
          <span>© 2026 dscpln · TechLoops</span>
          <span>Made for people who quit on bad days</span>
        </div>
      </div>
    </footer>
  );
}
