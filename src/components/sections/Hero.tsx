import Link from "next/link";
import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDict(locale).hero;

  return (
    <section className="container-page">
      <div className="flex min-h-[78vh] flex-col justify-center py-20">
        <span
          className="kicker opacity-0 animate-fade-in"
          style={{ animationDelay: "0.05s" }}
        >
          {t.eyebrow}
        </span>

        <h1
          className="display-xl mt-7 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.12s" }}
        >
          {t.title}
        </h1>

        <p
          className="lead mt-8 max-w-2xl text-balance opacity-0 animate-fade-up"
          style={{ animationDelay: "0.24s" }}
        >
          {t.subtitle}
        </p>

        <div
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.36s" }}
        >
          <Link href={`/${locale}#projects`} className="btn-outline">
            {t.ctaPrimary}
            <span aria-hidden>→</span>
          </Link>
          <Link href={`/${locale}#contact`} className="link-line">
            {t.ctaSecondary}
          </Link>
          <span className="meta flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
            {t.status}
          </span>
        </div>
      </div>
    </section>
  );
}
