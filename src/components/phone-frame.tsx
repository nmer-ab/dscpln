// 300×620 phone; pass the border (width + color) via className. The screen is always clipped to radius 34.
export function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`h-[620px] w-[300px] shrink-0 overflow-hidden rounded-[44px] ${className}`}>
      <div className="relative size-full overflow-hidden rounded-[34px]">{children}</div>
    </div>
  );
}
