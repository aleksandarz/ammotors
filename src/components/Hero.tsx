import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";

export default function Hero() {
  return (
    <section>
      {/* Full-bleed autoplaying background video (GIF-style: muted, looped,
          no controls) spanning the whole band, left edge to right edge. */}
      <div className="relative h-[52vh] min-h-80 w-full bg-neutral-900 sm:h-[66vh]">
        <HeroVideo
          src="/videos/hero.mp4"
          ariaLabel="Vozilo iz ponude AM Motors"
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:text-left">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-wide text-neutral-900 uppercase sm:text-4xl lg:text-5xl">
            Otkup i prodaja svih vrsta vozila
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-accent lg:mx-0" />
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base lg:mx-0">
            AM Motors donosi pažljivo odabrana vozila iz otkupa i uvoza, uz
            proveren kvalitet i potpunu podršku kroz ceo proces kupovine.
          </p>
        </div>

        <div className="flex flex-shrink-0 flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/#otkup-prodaja"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-xs font-medium tracking-[0.15em] text-white uppercase transition-colors hover:bg-accent"
          >
            Otkup vozila
          </Link>
          <Link
            href="/#uvoz-vozila"
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-8 text-xs font-medium tracking-[0.15em] text-neutral-800 uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Uvoz vozila
          </Link>
        </div>
      </div>

      <div className="h-px w-full bg-neutral-200" />
    </section>
  );
}
