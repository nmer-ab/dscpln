import Link from "next/link";
import { legalNav, productNav } from "@/lib/nav";
import { StoreBadges } from "./store-badges";
import { Wordmark } from "./wordmark";

function FooterLinks({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-syne text-[20px] leading-tight font-bold">{title}</h2>
      <ul className="mt-5 flex flex-col gap-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[17px] text-ink transition-colors hover:text-green">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(31,31,29,0.14)] bg-footer pt-20 pb-12">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <Wordmark height={40} />
            <p className="mt-5 max-w-[360px] text-[17px] text-ink">Keep the promises you make to yourself.</p>
          </div>

          <FooterLinks title="Product" links={productNav} />
          <FooterLinks title="Legal" links={legalNav} />

          <div>
            <h2 className="font-syne text-[20px] leading-tight font-bold">Get the app</h2>
            <StoreBadges size="sm" stacked className="mt-5" />
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-[14px] text-muted">
          © 2026 dscpln, operated by TechLoops, Clermont-Ferrand, France
        </div>
      </div>
    </footer>
  );
}
