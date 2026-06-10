import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Experience({ locale }: { locale: Locale }) {
  const t = getDict(locale).experience;
  const f = t.featured;

  return (
    <section id="experience" className="container-page scroll-mt-24 py-20 md:py-28">
      <SectionHeading>{t.eyebrow}</SectionHeading>

      {/* Experiencia destacada: Boston Scientific */}
      <Reveal>
        <article className="mt-14 grid gap-6 border-t border-ink/80 py-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <h3 className="display-md">{f.company}</h3>
            <p className="meta mt-3">
              {f.period}
              {f.duration ? ` · ${f.duration}` : ""}
            </p>
          </div>

          <div className="md:col-span-8">
            <ul className="space-y-2 border-b border-line pb-6">
              {f.roles.map((r) => (
                <li
                  key={r.role}
                  className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-6"
                >
                  <span className="font-serif text-lg font-light text-ink">
                    {r.role}
                  </span>
                  <span className="meta whitespace-nowrap">{r.dates}</span>
                </li>
              ))}
            </ul>

            <details className="group mt-6">
              <summary className="flex cursor-pointer list-none items-center gap-1.5 font-sans text-[10px] font-normal uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-ink-soft [&::-webkit-details-marker]:hidden">
                <span>{f.bulletsLabel}</span>
                <svg
                  aria-hidden
                  viewBox="0 0 12 12"
                  className="h-2 w-2 transition-transform duration-300 group-open:rotate-180"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <ul className="mt-6 space-y-3">
                {f.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-balance font-sans text-sm font-light leading-relaxed text-ink-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.7em] h-px w-4 shrink-0 bg-line-strong"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </article>
      </Reveal>

      {/* Otra experiencia, menos destacada — desplegable */}
      <Reveal delay={0.1}>
        <details className="exp-extra group mt-12">
          <summary className="kicker flex cursor-pointer list-none items-center gap-2 transition-colors hover:text-ink-soft [&::-webkit-details-marker]:hidden">
            <span>{t.otherTitle}</span>
            <svg
              aria-hidden
              viewBox="0 0 12 12"
              className="h-2 w-2 transition-transform duration-300 group-open:rotate-180"
            >
              <path
                d="M2 4l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </summary>
          <ul className="mt-3">
            {t.items.map((item, i) => (
              <li
                key={i}
                className="flex flex-col gap-1 border-t border-line py-5 md:flex-row md:items-baseline md:justify-between md:gap-6"
              >
                <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-3">
                  <span className="font-serif text-base font-light text-ink">
                    {item.company}
                  </span>
                  <span className="meta">{item.role}</span>
                </div>
                <span className="meta whitespace-nowrap">{item.dates}</span>
              </li>
            ))}
            <li className="border-t border-line" />
          </ul>
        </details>
      </Reveal>
    </section>
  );
}
