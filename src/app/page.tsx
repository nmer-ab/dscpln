import { AppPreview } from "@/components/home/app-preview";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { SeeItInAction } from "@/components/home/see-it-in-action";
import { Topics } from "@/components/home/topics";

export default function Home() {
  return (
    <>
      <Hero />
      <Topics />
      <HowItWorks />
      <SeeItInAction />
      <AppPreview />
      <Faq />
      <FinalCta />
    </>
  );
}
