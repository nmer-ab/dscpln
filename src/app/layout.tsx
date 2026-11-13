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
  "iPhone app for building daily discipline. Pick one or two small habits, keep a streak, and get a new motivation or discipline line every morning on your Home Screen widget. Includes Milo, an AI coach for the days you don't feel like it, plus three short reads a day. 3-day free trial on the yearly plan.";

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
  // Safari's Smart App Banner: <meta name="apple-itunes-app" content="app-id=…"> on every page.
  itunes: { appId: "6827655519" },
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
