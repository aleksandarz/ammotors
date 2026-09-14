"use client";

import { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { useInView } from "@/hooks/useInView";

const phoneNumbers = [
  { display: "066 593 8839", tel: "+381665938839" },
  { display: "061 146 4997", tel: "+381611464997" },
];

const WHATSAPP_NUMBER = "381665938839";

const buttonClass =
  "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-neutral-900";

export default function CallCta() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [showNumbers, setShowNumbers] = useState(false);

  return (
    <section className="bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 py-16 text-center transition-all duration-700 ease-out sm:px-8 lg:px-10 motion-reduce:transition-none ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        }`}
      >
        <h2 className="font-serif text-3xl font-semibold uppercase tracking-wide text-neutral-900 sm:text-4xl">
          Pozovite nas
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
          Javite nam se telefonom ili preko WhatsApp-a — tu smo za sva vaša
          pitanja.
        </p>

        <div className="mt-10 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowNumbers((v) => !v)}
              aria-expanded={showNumbers}
              aria-controls="cta-phone-numbers"
              className={buttonClass}
            >
              <FaPhone aria-hidden="true" className="h-3.5 w-3.5" />
              Pozovite
            </button>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <FaWhatsapp aria-hidden="true" className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>

          <div
            id="cta-phone-numbers"
            className={`grid w-full overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
              showNumbers ? "mt-4 max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-200 px-6 py-4">
              {phoneNumbers.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="text-sm font-medium tracking-widest text-neutral-900 hover:text-accent"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
