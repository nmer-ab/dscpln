/* eslint-disable @next/next/no-img-element -- static badge SVG, sized by CSS (same as the guides) */
import type { Metadata } from "next";
import { Guide, GuideFaq, GuideHead, GuideMore, JsonLd } from "@/components/guide/guide";
import { QuoteGenerator } from "@/components/guide/quote-generator";
import { APP_STORE_URL } from "@/config/links";

const path = "/discipline-quote-generator";
const title = "Discipline quote generator";
const description =
  "Free discipline quote generator with 60 original short lines. Pick a category, copy a line or save it as a 1080×1920 image for your Stories.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", title, description, url: path, images: "/og.png" },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: title,
  description,
  url: `https://dscpln.app${path}`,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "dscpln", url: "https://dscpln.app" },
};

const faqs = [
  {
    q: "Are these quotes from famous people?",
    a: "No. All 60 lines are original and were written for dscpln, so there are no names attached and nothing is misattributed. They're short on purpose, 14 words or fewer, so they read well on a phone.",
  },
  {
    q: "Can I share them on Instagram or TikTok?",
    a: "Yes, share them wherever you like. Download for Stories saves a 1080×1920 image of the card, the size Instagram, TikTok and other vertical formats expect, with a small dscpln.app mark at the bottom.",
  },
  {
    q: "Do I need an account to use the generator?",
    a: "No. The generator runs in your browser with no sign-up and no tracking. The lines you copy or download are made on your device and aren't sent anywhere.",
  },
];

export default function QuoteGeneratorPage() {
  return (
    <Guide faqs={faqs}>
      <JsonLd data={webAppJsonLd} />
      <GuideHead
        eyebrow="Free tool"
        title={<>Discipline <em>quote</em> generator</>}
        disclosure={false}
        intro={[
          "Sixty short, original lines for the days you need a push. Pick a category, tap New line until one fits, then copy it or save it as an image for your Stories.",
        ]}
      />

      <section id="generator" className="g-tool">
        <div className="lp-wrap">
          <div className="g-col">
            <QuoteGenerator />
            <p className="qg-note">No sign-up, no tracking. Lines won&apos;t repeat until you&apos;ve seen every one in the category.</p>
          </div>
        </div>
      </section>

      <section id="home-screen" className="g-plain qg-home">
        <div className="lp-wrap">
          <div className="g-col">
            <span className="eyebrow">dscpln widget</span>
            <h2>Get a new line every morning on your Home Screen</h2>
            <p>
              dscpln, the app we make, gives you a fresh line every morning. Add the Handwritten widget and it sits on your Home Screen next to your streak, so you see it every time you unlock your phone.
            </p>
            <div className="wall qg-wall" role="img" aria-label="The dscpln Handwritten widget showing today's line and the streak">
              <div className="w wide w-hand">
                <span className="dayn">12</span>
                <div><p>Keep the promise while it&apos;s still small enough to keep.</p><small>DAY 12 · 1 OF 2 DONE</small></div>
              </div>
            </div>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="g-badge">
              {/* Official black badge; viewBox is 119.66 × 40 */}
              <img src="/badges/app-store.svg" alt="Download dscpln on the App Store" width={132} height={44} />
            </a>
          </div>
        </div>
      </section>

      <GuideMore current={path} />
      <GuideFaq faqs={faqs} />
    </Guide>
  );
}
