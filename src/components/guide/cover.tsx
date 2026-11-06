/* eslint-disable @next/next/no-img-element -- static line-art SVGs, sized by CSS (same as the home page) */
import type { CoverSpec } from "./guide";

/** An article cover: a rounded color card with a Milo pose on a ground line, an optional soft circle and an optional line card. Decorative. */
export function Cover({ cover, className = "" }: { cover: CoverSpec; className?: string }) {
  return (
    <div className={`ar-cover ${cover.color} ${className}`.trim()} aria-hidden="true">
      {cover.circle && <span className="ar-cover-sun" />}
      {cover.line && <span className="ar-cover-card">{cover.line}</span>}
      <img className="ar-cover-milo" src={`/milo-v3/milo-${cover.pose}.svg`} alt="" width={188} height={292} />
      <span className="ar-cover-ground" />
    </div>
  );
}
