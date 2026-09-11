import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      {/* Split image band — replace the two images in public/images
          (hero-left.jpg / hero-right.jpg) with real photos. Loaded with
          priority since this is the first thing visible (LCP element). */}
      <div className="grid h-[46vh] min-h-[280px] w-full grid-cols-1 sm:h-[60vh] sm:grid-cols-2">
        <div className="relative bg-neutral-900">
          <Image
            src="/images/hero-left.jpg"
            alt="Vozilo iz ponude AM Motors"
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative hidden bg-neutral-800 sm:block">
          <Image
            src="/images/hero-right.jpg"
            alt="Vozilo iz ponude AM Motors"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-wide text-neutral-900 uppercase sm:text-4xl lg:text-5xl">
            Luksuzni automobili na prodaju
          </h1>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
            AM Motors donosi pažljivo odabrana vozila iz prodaje i uvoza, uz
            proveren kvalitet i potpunu podršku kroz ceo proces kupovine.
          </p>
        </div>

        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/#otkup-prodaja"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-accent"
          >
            Prodaja kola
          </Link>
          <Link
            href="/#uvoz-vozila"
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-8 text-xs font-medium tracking-[0.15em] text-neutral-800 uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Uvoz kola
          </Link>
        </div>
      </div>
    </section>
  );
}
