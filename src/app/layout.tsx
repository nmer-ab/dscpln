import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--font-serif",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const title = "dscpln: Daily Discipline";
const description =
  "Pick one or two habits, build a streak you'll want to protect, and get a coach when motivation drops.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dscpln.app"),
  title: { default: title, template: "%s · dscpln" },
  description,
  openGraph: {
    title,
    description,
    images: "/og.png",
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
