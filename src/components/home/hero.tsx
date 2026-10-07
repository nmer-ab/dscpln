import Image from "next/image";
import { DownloadButton } from "@/components/download-button";
import { StoreBadges } from "@/components/store-badges";

// The phone stage is laid out on a 550×720 design grid (front phone ends at 250 + 300) and scales
// with its width, so every px value from the design goes through cq() (1cqw = 5.5px at full size).
const cq = (px: number) => `${(px / 5.5).toFixed(3)}cqw`;

function Phone({
  src,
  alt,
  x,
  y,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  x: number;
  y: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute motion-safe:animate-float ${className}`}
      style={{ left: cq(x), top: cq(y), width: cq(300), height: cq(620) }}
    >
      {/* 44 outer radius − 10 border = 34 radius on the screen */}
      <div
        className="relative size-full overflow-hidden bg-ink shadow-[0_30px_60px_rgba(0,0,0,.18)]"
        style={{ border: `${cq(10)} solid var(--color-ink)`, borderRadius: cq(44) }}
      >
        <Image src={src} alt={alt} fill sizes="280px" priority className="object-cover object-top" />
      </div>
      {children}
    </div>
  );
}

function Sparkle({ style }: { style: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="absolute z-20" style={style}>
      <defs>
        <linearGradient id="hero-sparkle" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C8E26A" />
          <stop offset="1" stopColor="#3A8745" />
        </linearGradient>
      </defs>
      <path
        d="M32 0C34 20 44 30 64 32C44 34 34 44 32 64C30 44 20 34 0 32C20 30 30 20 32 0Z"
        fill="url(#hero-sparkle)"
      />
    </svg>
  );
}

// Drawn pointing up-left, mirrored so its tip lands on the front phone's lower-left edge.
function CurvedArrow({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 90 110"
      aria-hidden="true"
      fill="none"
      stroke="#1F1F1D"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute z-20 -scale-x-100"
      style={style}
    >
      <path d="M80 106C86 84 70 70 52 74C34 78 34 100 50 98C70 96 66 52 30 12" />
      <path d="M33 28L30 12L45 17" />
    </svg>
  );
}

function PhoneStage() {
  return (
    <div className="@container relative mx-auto aspect-[550/720] w-full max-w-[550px] lg:mr-0">
      <Phone src="/screens/hero-back.png" alt="dscpln app screen" x={0} y={70}>
        <Image
          src="/milo/milo-peek.svg"
          alt=""
          width={100}
          height={100}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ width: cq(100), height: "auto", top: cq(-70) }}
        />
      </Phone>
      <Phone
        src="/screens/home.png"
        alt="dscpln home screen showing today's line"
        x={250}
        y={0}
        className="z-10 [animation-delay:1s]"
      />
      <Sparkle style={{ left: cq(196), top: cq(6), width: cq(64), height: cq(64) }} />
      <CurvedArrow style={{ left: cq(200), bottom: cq(24), width: cq(90), height: cq(110) }} />
    </div>
  );
}

export function Hero() {
  return (
    <section className="bg-hero pt-14 pb-24 lg:pt-24 lg:pb-[120px]">
      {/* Text column sizes to the unwrapped H1; the phone stage takes what's left, up to its full 550×720.
          H1 is 58px at xl (not 64) so the phones fit at exactly 300×620 inside the 1192px container. */}
      <div className="wrap grid items-center gap-16 lg:grid-cols-[auto_1fr] lg:gap-10 xl:gap-8">
        <div>
          <h1 className="font-syne text-[40px] leading-[1.08] font-bold tracking-[-1.5px] text-ink lg:text-[48px] lg:whitespace-nowrap xl:text-[58px]">
            <span className="block">Lines that push you.</span>
            <span className="block">Every day.</span>
            <span className="block text-green">No excuses.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-[20px] leading-[1.5] text-muted">
            Most motivation apps flood you with quotes. dscpln gives you one line a day, picked for your
            goal — and Milo when you&apos;re stuck.
          </p>
          <p className="mt-5 text-[16px] text-green">
            Real quotes show their author. Punchlines are written by Milo.
          </p>
          <DownloadButton className="mt-7" />
          <StoreBadges size="sm" className="mt-4" />
        </div>

        <PhoneStage />
      </div>
    </section>
  );
}
