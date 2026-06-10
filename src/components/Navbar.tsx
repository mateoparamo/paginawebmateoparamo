"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { LocaleSwitcher } from "./LocaleSwitcher";

interface NavbarProps {
  locale: Locale;
}

export function Navbar({ locale }: NavbarProps) {
  const t = getDict(locale).nav;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}#about`, label: t.about },
    { href: `/${locale}#experience`, label: t.experience },
    { href: `/${locale}#projects`, label: t.projects },
    { href: `/${locale}#contact`, label: t.contact },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="font-serif text-lg font-normal tracking-tight text-ink transition-opacity hover:opacity-60"
        >
          Mateo Páramo
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] font-light text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="/cv.pdf"
            download="CV-Mateo-Paramo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-sans text-[13px] font-medium text-ink transition-opacity hover:opacity-60 md:inline"
          >
            {t.cv}
          </a>
          <LocaleSwitcher currentLocale={locale} pathname={pathname} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink"
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      </header>

      {/* Menú móvil: panel lateral sobre la página, entra desde la derecha */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-30 bg-ink/15 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 max-w-[82vw] border-l border-line bg-paper transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 px-8 pt-28">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-sans text-sm font-light text-ink-soft"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            download="CV-Mateo-Paramo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 font-sans text-sm font-medium text-ink"
          >
            {t.cv}
          </a>
        </nav>
      </div>
    </>
  );
}
