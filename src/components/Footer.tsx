import { Fragment } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebookF },
  {
    href: "https://www.instagram.com/ammotors.rs",
    label: "Instagram",
    Icon: FaInstagram,
  },
  { href: "https://tiktok.com", label: "TikTok", Icon: FaTiktok },
];

const phoneNumbers = [
  {
    label: "Broj telefona 1",
    waLabel: "Whatsapp 1",
    tel: "+381665938839",
    whatsapp: "381665938839",
  },
  {
    label: "Broj telefona 2",
    waLabel: "Whatsapp 2",
    tel: "+381611464997",
    whatsapp: "381611464997",
  },
];

const actionButtonClass =
  "inline-flex items-center justify-center gap-1 rounded-full bg-accent px-3 py-2.5 text-center text-xs font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-neutral-950 sm:px-2.5";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="mt-auto scroll-mt-32 bg-neutral-950 text-white lg:scroll-mt-24"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <Link href="/" className="flex flex-col items-center">
          <span className="font-serif text-3xl font-bold tracking-[0.06em]">
            AM MOTORS
          </span>
          <span className="mt-1 text-[0.65rem] font-medium tracking-[0.35em] text-neutral-400 uppercase">
            Otkup i prodaja vozila
          </span>
        </Link>

        <p className="text-xs font-medium tracking-[0.2em] text-neutral-300 uppercase">
          Luke Ćelovića Trebinjca
          <br />
          Beograd, Srbija
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

        <div className="grid grid-flow-col grid-rows-2 justify-center gap-x-3 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:gap-1.5">
          {phoneNumbers.map((phone) => (
            <Fragment key={phone.tel}>
              <a href={`tel:${phone.tel}`} className={actionButtonClass}>
                <FaPhone aria-hidden="true" className="h-4 w-4" />
                {phone.label}
              </a>
              <a
                href={`https://wa.me/${phone.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={actionButtonClass}
              >
                <FaWhatsapp
                  aria-hidden="true"
                  className="h-5 w-5 sm:h-4.5 sm:w-4.5"
                />
                <span className="sm:hidden">{phone.waLabel}</span>
                <span className="hidden sm:inline">Pišite nam na WhatsApp</span>
              </a>
            </Fragment>
          ))}
        </div>

        <p className="max-w-2xl text-xs leading-relaxed text-neutral-400">
          Ponuda vozila i cene su informativnog karaktera i podložne su
          izmenama. Za detaljne informacije o vozilima iz prodaje i uvoza
          obratite nam se putem telefona ili kontakt forme.
        </p>

        <div className="mt-6 flex w-full flex-col items-center gap-4 border-t border-neutral-800 pt-6 sm:flex-row sm:justify-between">
          <nav className="flex items-center gap-6">
            <Link
              href="/#otkup-prodaja"
              className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase hover:text-accent"
            >
              Otkup vozila
            </Link>
            <Link
              href="/#uvoz-vozila"
              className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase hover:text-accent"
            >
              Uvoz vozila
            </Link>
          </nav>

          <nav className="flex items-center gap-6">
            <Link
              href="/#o-nama"
              className="text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase hover:text-accent"
            >
              O nama
            </Link>
            <Link
              href="/#kontakt"
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
