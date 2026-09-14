"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { useInView } from "@/hooks/useInView";

const phoneNumbers = [
  { display: "066 593 8839", tel: "+381665938839", whatsapp: "381665938839" },
  { display: "061 146 4997", tel: "+381611464997", whatsapp: "381611464997" },
];

const buttonClass =
  "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-neutral-900";

export default function CallCta() {
  const { ref, inView } = useInView<HTMLDivElement>();

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

        <div className="mx-auto mt-10 grid max-w-xl gap-10 sm:grid-cols-2">
          {phoneNumbers.map((phone) => (
            <div key={phone.tel} className="flex flex-col items-center gap-4">
              <span className="text-sm font-medium tracking-widest text-neutral-900">
                {phone.display}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${phone.tel}`}
                  aria-label={`Pozovite ${phone.display}`}
                  className={buttonClass}
                >
                  <FaPhone aria-hidden="true" className="h-3.5 w-3.5" />
                  Pozovite
                </a>
                <a
                  href={`https://wa.me/${phone.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${phone.display}`}
                  className={buttonClass}
                >
                  <FaWhatsapp aria-hidden="true" className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
