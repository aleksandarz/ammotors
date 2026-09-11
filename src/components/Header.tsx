"use client";

import Link from "next/link";
import { useState } from "react";

const leftLinks = [
  { href: "/#otkup-prodaja", label: "Otkup vozila" },
  { href: "/#uvoz-vozila", label: "Uvoz vozila" },
];

const rightLinks = [
  { href: "/#o-nama", label: "O nama" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      {/* Mobile header: menu row above, centered logo row below */}
      <div className="lg:hidden">
        <div className="flex h-16 items-center px-2">
          <button
            type="button"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-neutral-800"
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
        </div>
        <Link href="/" className="flex flex-col items-center pb-5 text-center">
          <span className="font-serif text-2xl font-bold tracking-[0.06em] text-neutral-900">
            AM MOTORS
          </span>
          <span className="mt-1 text-[0.65rem] font-medium tracking-[0.35em] text-neutral-500 uppercase">
            Otkup i prodaja vozila
          </span>
        </Link>
      </div>

      {/* Desktop header: left nav / centered logo / right nav */}
      <div className="mx-auto hidden h-24 max-w-7xl items-center justify-between px-6 lg:flex lg:px-10">
        <nav className="flex flex-1 items-center gap-8">
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

        <Link href="/" className="flex flex-col items-center text-center">
          <span className="font-serif text-3xl font-bold tracking-[0.06em] text-neutral-900">
            AM MOTORS
          </span>
          <span className="mt-1 text-[0.65rem] font-medium tracking-[0.35em] text-neutral-500 uppercase">
            Otkup i prodaja vozila
          </span>
        </Link>

        <nav className="flex flex-1 items-center justify-end gap-8">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.15em] text-neutral-700 uppercase transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
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
              className="rounded-md px-2 py-3 text-sm font-medium tracking-widest text-neutral-800 uppercase transition-colors hover:bg-neutral-50 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+381665938839"
            className="rounded-md px-2 py-3 text-sm font-medium tracking-widest text-neutral-800 uppercase transition-colors hover:bg-neutral-50 hover:text-accent"
          >
            Pozovite nas
          </a>
        </nav>
      )}
    </header>
  );
}
