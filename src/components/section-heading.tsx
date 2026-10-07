type Tone = "light" | "dark";

export function Pill({ children, tone = "light" }: { children: React.ReactNode; tone?: Tone }) {
  const colors = tone === "dark" ? "bg-dark-pill text-lime" : "bg-pill text-green";
  return (
    <span className={`inline-flex h-9 items-center rounded-full px-5 text-[17px] font-medium ${colors}`}>
      {children}
    </span>
  );
}

export function SectionHeading({
  pill,
  title,
  sub,
  tone = "light",
  align = "center",
}: {
  pill: string;
  title: [string, string];
  sub?: string;
  tone?: Tone;
  align?: "center" | "left";
}) {
  const dark = tone === "dark";
  const center = align === "center";
  return (
    <div className={center ? "text-center" : ""}>
      <Pill tone={tone}>{pill}</Pill>
      <h2
        className={`mt-5 font-syne text-[34px] leading-[1.1] font-bold lg:text-[48px] ${dark ? "text-white" : "text-ink"}`}
      >
        <span className="block">{title[0]}</span>
        <span className={`block ${dark ? "text-lime" : "text-green"}`}>{title[1]}</span>
      </h2>
      {sub && (
        <p
          className={`mt-5 text-[18px] ${center ? "mx-auto max-w-[720px]" : "max-w-[520px]"} ${dark ? "text-dark-muted" : "text-sub"}`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
