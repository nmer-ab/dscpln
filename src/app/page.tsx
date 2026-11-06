import { Landing } from "@/components/home/landing";
import { APP_STORE_URL } from "@/config/links";
import "./landing.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "dscpln: Daily Discipline",
  operatingSystem: "iOS",
  applicationCategory: "LifestyleApplication",
  url: APP_STORE_URL,
  offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so the payload can't close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Landing />
    </>
  );
}
