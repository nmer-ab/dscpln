import { QRCodeSVG } from "qrcode.react";
import { StoreBadges } from "@/components/store-badges";

export function FinalCta() {
  return (
    <section id="download" className="bg-gradient-to-b from-alt to-white py-20 text-center lg:py-[120px]">
      <div className="wrap">
        <h2 className="font-syne text-[36px] leading-[1.1] font-bold text-ink lg:text-[52px]">
          <span className="block">Stop waiting to feel ready.</span>
          <span className="block text-green">Download dscpln.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-[18px] text-muted">
          One line a day. Ten seconds. Start tomorrow morning.
        </p>

        <StoreBadges size="lg" className="mt-8 justify-center" />

        <figure className="mt-10 hidden flex-col items-center lg:flex">
          <div className="rounded-2xl bg-white p-3">
            <QRCodeSVG
              value="https://dscpln.app/get"
              size={140}
              fgColor="#1F1F1D"
              title="QR code linking to https://dscpln.app/get"
            />
          </div>
          <figcaption className="mt-3 text-[14px] text-muted">Scan with your phone</figcaption>
        </figure>
      </div>
    </section>
  );
}
