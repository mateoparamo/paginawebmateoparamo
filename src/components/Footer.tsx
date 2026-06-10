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
                {s.name === "LinkedIn" && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 rounded-[5px]"
                    aria-hidden
                  >
                    <rect width="24" height="24" rx="5.5" fill="#0A66C2" />
                    <g transform="translate(4 4) scale(0.6667)" fill="#fff">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5V23h-4V8z" />
                    </g>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
