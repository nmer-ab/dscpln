import Image from "next/image";

// wordmark.svg viewBox is 381.9 × 89.7
const RATIO = 381.9 / 89.7;

export function Wordmark({ height }: { height: number }) {
  return (
    <Image
      src="/brand/wordmark.svg"
      alt="dscpln"
      width={Math.round(height * RATIO)}
      height={height}
      priority
    />
  );
}
