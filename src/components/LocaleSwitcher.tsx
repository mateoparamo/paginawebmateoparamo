"use client";

import Link from "next/link";
import type { Locale } from "@/content/i18n";
import { locales } from "@/content/i18n";

interface LocaleSwitcherProps {
  currentLocale: Locale;
  pathname: string;
}

export function LocaleSwitcher({ currentLocale, pathname }: LocaleSwitcherProps) {
  const swap = (target: Locale) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${target}`;
    segments[0] = target;
    return "/" + segments.join("/");
  };

  return (
    <div className="flex items-center gap-1.5 font-sans text-[12px] uppercase tracking-wide">
      {locales.map((l, i) => {
        const active = l === currentLocale;
        return (
          <span key={l} className="flex items-center gap-1.5">
            <Link
              href={swap(l)}
              className={`transition-colors ${
                active ? "text-ink" : "text-ink-faint hover:text-ink"
              }`}
            >
              {l}
            </Link>
            {i < locales.length - 1 && <span className="text-line-strong">/</span>}
          </span>
        );
      })}
    </div>
  );
}
