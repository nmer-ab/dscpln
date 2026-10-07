import { FaqList } from "./faq-list";

const faqs = [
  {
    q: "What is dscpln?",
    a: "One line a day to push you: motivation, discipline or a punchline, picked for your goal.",
  },
  {
    q: "Are the quotes real?",
    a: "Real quotes show their author. If an attribution is uncertain, we say so. Punchlines are written by Milo.",
  },
  {
    q: "Who is Milo?",
    a: "The dscpln mascot and your AI coach. Ask him anything when you're stuck.",
  },
  {
    q: "Is Milo a therapist?",
    a: (
      <>
        No. Milo is for motivation, not medical advice. If you&apos;re struggling, visit{" "}
        <a
          href="https://findahelpline.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-green underline underline-offset-2"
        >
          findahelpline.com
        </a>
        .
      </>
    ),
  },
  {
    q: "Where is my audio stored?",
    a: "Only on your phone. We never upload it.",
  },
  {
    q: "Which phones does it work on?",
    a: "iPhone and Android. Download it from the App Store or Google Play.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-[72px] lg:py-28">
      <div className="wrap">
        <h2 className="text-center font-syne text-[34px] leading-[1.1] font-bold text-ink lg:text-[48px]">
          Frequently asked questions
        </h2>
        <FaqList items={faqs} />
      </div>
    </section>
  );
}
