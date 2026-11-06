import { Source_Serif_4 } from "next/font/google";

// Source Serif 4 with its optical-size axis, so large titles use the display cut.
// Used by the home hero and the articles; the rest of the site keeps --font-serif (layout.tsx).
// Defined once here, per the Next.js font docs, so every page shares one instance.
export const serifDisplay = Source_Serif_4({
  variable: "--font-serif-display",
  axes: ["opsz"],
  subsets: ["latin"],
});
