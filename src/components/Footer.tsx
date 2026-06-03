import Link from "next/link";
import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { socials, email } from "@/content/socials";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = getDict(locale).footer;
  const year = "2026";

  return (
    <footer className="py-16">
      <div className="container-page">
        <div className="hairline" />
        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Link
              href={`/${locale}`}
              className="font-serif text-2xl font-light tracking-tight text-ink"
            >
              Mateo Páramo
            </Link>
            <p className="meta mt-3">© {year} · {t.copyright}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={`mailto:${email}`} className="link-line">
              Email
            </a>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-line"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
