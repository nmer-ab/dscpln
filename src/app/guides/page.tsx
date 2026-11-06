import type { Metadata } from "next";
import { Guide, GuideCards, GuideHead, guides } from "@/components/guide/guide";

const path = "/guides";
const title = "Guides";
const description =
  "Every dscpln guide in one place: comparisons of discipline and habit apps, practical how-tos and free tools.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "website", title, description, url: path, images: "/og.png" },
};

export default function GuidesPage() {
  return (
    <Guide>
      <GuideHead
        eyebrow="Guides"
        title="Guides"
        intro={["Comparisons of discipline and habit apps, practical how-tos and free tools. Written by the people who make dscpln."]}
        disclosure={false}
      />
      <GuideCards heading="All guides" items={guides} className="qx-last" />
    </Guide>
  );
}
