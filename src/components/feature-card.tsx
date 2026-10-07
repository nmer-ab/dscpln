import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  text,
  className = "",
}: {
  icon: LucideIcon;
  eyebrow?: string;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div className={`rounded-[28px] p-10 text-center ${className}`}>
      <div className="mx-auto flex size-[68px] items-center justify-center rounded-[18px] bg-pill">
        <Icon size={32} className="text-green" />
      </div>
      {eyebrow && <p className="mt-5 text-[18px] font-semibold text-green">{eyebrow}</p>}
      <h3 className={`font-syne text-[24px] leading-tight font-bold text-ink ${eyebrow ? "mt-1.5" : "mt-5"}`}>
        {title}
      </h3>
      <p className="mt-2.5 text-[17px] text-muted">{text}</p>
    </div>
  );
}
