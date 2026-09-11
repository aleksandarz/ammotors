"use client";

import { FaCheck } from "react-icons/fa6";
import { useInView } from "@/hooks/useInView";

const reasons = [
  "Brza i poštena procena vozila",
  "Isplata odmah, bez odlaganja",
  "Transparentnost u svakom koraku saradnje",
  "Posvećenost svakom klijentu ponaosob",
];

export default function AboutSection() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="o-nama" className="scroll-mt-32 bg-white lg:scroll-mt-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 py-20 text-center transition-all duration-700 ease-out sm:px-8 lg:px-10 motion-reduce:transition-none ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        }`}
      >
        <h2 className="font-serif text-3xl font-semibold uppercase tracking-wide text-neutral-900 sm:text-4xl">
          O nama
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
          AM Motors je nova firma iz Beograda, specijalizovana za otkup i
          prodaju vozila, kao i uvoz automobila iz inostranstva. Iako smo tek
          zakoračili na tržište, naš tim čine ljudi sa dugogodišnjim
          iskustvom u auto-industriji, koji dobro poznaju procedure, tržišne
          cene i, što je najvažnije, potrebe klijenata.
        </p>

        <h3 className="mt-12 text-xs font-semibold tracking-[0.2em] text-neutral-900 uppercase">
          Zašto baš mi
        </h3>
        <ul className="mx-auto mt-6 grid max-w-2xl gap-4 text-center sm:grid-cols-2 sm:text-left">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="flex items-start justify-center gap-3 sm:justify-start"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-accent text-accent">
                <FaCheck aria-hidden="true" className="h-2.5 w-2.5" />
              </span>
              <span className="text-sm text-neutral-700 sm:text-base">
                {reason}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
