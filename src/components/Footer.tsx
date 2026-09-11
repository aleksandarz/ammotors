import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebookF },
  { href: "https://instagram.com", label: "Instagram", Icon: FaInstagram },
  { href: "https://tiktok.com", label: "TikTok", Icon: FaTiktok },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <Link href="/" className="flex flex-col items-center">
          <span className="font-serif text-3xl font-bold tracking-[0.06em]">
            AM MOTORS
          </span>
          <span className="mt-1 text-[0.65rem] font-medium tracking-[0.35em] text-neutral-400 uppercase">
            Prodaja i uvoz vozila
          </span>
        </Link>

        <p className="text-xs font-medium tracking-[0.2em] text-neutral-300 uppercase">
          {/* TODO: zameniti pravom adresom prodajnog salona */}
          Adresa prodajnog salona, Grad
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-accent"
            >
              <Icon aria-hidden="true" className="h-5 w-5" />
            </a>
          ))}
        </div>

        <a
          href="tel:+381600000000"
          className="text-lg font-medium tracking-widest text-white hover:text-accent"
        >
          +381 60 000 0000
        </a>

        <p className="max-w-2xl text-xs leading-relaxed text-neutral-400">
          Ponuda vozila i cene su informativnog karaktera i podložne su
          izmenama. Za detaljne informacije o vozilima iz prodaje i uvoza
          obratite nam se putem telefona ili kontakt forme.
        </p>

        <div className="mt-6 flex w-full flex-col items-center gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:justify-between">
          <nav className="flex items-center gap-6">
            <Link
              href="/prodaja-kola"
              className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase hover:text-accent"
            >
              Prodaja kola
            </Link>
            <Link
              href="/uvoz-kola"
              className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase hover:text-accent"
            >
              Uvoz kola
            </Link>
          </nav>

          <nav className="flex items-center gap-6">
            <Link
              href="/o-nama"
              className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase hover:text-accent"
            >
              O nama
            </Link>
            <Link
              href="/kontakt"
              className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase hover:text-accent"
            >
              Kontakt
            </Link>
          </nav>
        </div>

        <p className="text-[0.65rem] tracking-wide text-neutral-500">
          © {new Date().getFullYear()} AM Motors. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
