import Link from "next/link";

export default function Hero() {
  return (
    <section>
      {/* Split image band — replace the two background images in
          public/images (hero-left.jpg / hero-right.jpg) with real photos. */}
      <div className="grid h-[46vh] min-h-[280px] w-full grid-cols-1 sm:h-[60vh] sm:grid-cols-2">
        <div
          className="bg-neutral-900 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-left.jpg)" }}
          role="img"
          aria-label="Vozilo iz ponude AM Motors"
        />
        <div
          className="hidden bg-neutral-800 bg-cover bg-center sm:block"
          style={{ backgroundImage: "url(/images/hero-right.jpg)" }}
          role="img"
          aria-label="Vozilo iz ponude AM Motors"
        />
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
            href="/prodaja-kola"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-accent"
          >
            Prodaja kola
          </Link>
          <Link
            href="/uvoz-kola"
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-8 text-xs font-medium tracking-[0.15em] text-neutral-800 uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Uvoz kola
          </Link>
        </div>
      </div>
    </section>
  );
}
