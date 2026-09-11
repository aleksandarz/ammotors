"use client";

import Link from "next/link";
import { useState } from "react";

const leftLinks = [
  { href: "/prodaja-kola", label: "Prodaja kola" },
  { href: "/uvoz-kola", label: "Uvoz kola" },
];

const rightLinks = [
  { href: "/o-nama", label: "O nama" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* Left nav (desktop) */}
        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.15em] text-neutral-700 uppercase transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-neutral-800 lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-6 w-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Center logo */}
        <Link
          href="/"
          className="flex flex-1 flex-col items-center text-center lg:flex-none"
        >
          <span className="font-serif text-2xl font-bold tracking-[0.06em] text-neutral-900 sm:text-3xl">
            AM MOTORS
          </span>
          <span className="mt-1 hidden text-[0.65rem] font-medium tracking-[0.35em] text-neutral-500 uppercase sm:block">
            Prodaja i uvoz vozila
          </span>
        </Link>

        {/* Right nav (desktop) */}
        <nav className="hidden flex-1 items-center justify-end gap-8 lg:flex">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.15em] text-neutral-700 uppercase transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+381600000000"
            aria-label="Pozovite nas"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-4.5 w-4.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.5 1.5 0 0 0-1.147-1.457l-3.61-.902a1.5 1.5 0 0 0-1.594.556l-.638.852a1.5 1.5 0 0 1-1.712.494 11.99 11.99 0 0 1-6.516-6.516 1.5 1.5 0 0 1 .494-1.712l.852-.638a1.5 1.5 0 0 0 .556-1.594l-.902-3.61A1.5 1.5 0 0 0 5.622 2.25H4.25A2.25 2.25 0 0 0 2.25 4.5v.75Z"
              />
            </svg>
          </a>
        </nav>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm font-medium tracking-[0.1em] text-neutral-800 uppercase transition-colors hover:bg-neutral-50 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+381600000000"
            className="rounded-md px-2 py-3 text-sm font-medium tracking-[0.1em] text-neutral-800 uppercase transition-colors hover:bg-neutral-50 hover:text-accent"
          >
            Pozovite nas
          </a>
        </nav>
      )}
    </header>
  );
}
