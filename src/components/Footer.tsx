import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-10">
        <div>
          <span className="font-serif text-lg font-bold tracking-[0.06em] text-neutral-900">
            AM MOTORS
          </span>
          <p className="mt-1 text-xs tracking-wide text-neutral-500">
            Prodaja i uvoz vozila
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            href="/prodaja-kola"
            className="text-xs font-medium tracking-[0.1em] text-neutral-600 uppercase hover:text-accent"
          >
            Prodaja kola
          </Link>
          <Link
            href="/uvoz-kola"
            className="text-xs font-medium tracking-[0.1em] text-neutral-600 uppercase hover:text-accent"
          >
            Uvoz kola
          </Link>
          <Link
            href="/o-nama"
            className="text-xs font-medium tracking-[0.1em] text-neutral-600 uppercase hover:text-accent"
          >
            O nama
          </Link>
          <Link
            href="/kontakt"
            className="text-xs font-medium tracking-[0.1em] text-neutral-600 uppercase hover:text-accent"
          >
            Kontakt
          </Link>
        </nav>

        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} AM Motors. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
