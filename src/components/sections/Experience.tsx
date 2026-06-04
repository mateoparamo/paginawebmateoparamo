import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Experience({ locale }: { locale: Locale }) {
  const t = getDict(locale).experience;
  const f = t.featured;

  return (
    <section id="experience" className="container-page scroll-mt-24 py-24 md:py-36">
      <SectionHeading kicker={t.eyebrow} title={t.title} />

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

            <ul className="mt-6 space-y-3">
              {f.bullets.map((b, i) => (
                <li key={i} className="body-text flex gap-3 text-balance">
                  <span
                    aria-hidden
                    className="mt-[0.7em] h-px w-4 shrink-0 bg-line-strong"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      {/* Otra experiencia, menos destacada */}
      <Reveal delay={0.1}>
        <p className="kicker mt-12 mb-2">{t.otherTitle}</p>
        <ul>
          {t.items.map((item, i) => (
            <li
              key={i}
              className="flex flex-col gap-1 border-t border-line py-5 md:flex-row md:items-baseline md:justify-between md:gap-6"
            >
              <div className="md:flex md:items-baseline md:gap-3">
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
      </Reveal>
    </section>
  );
}
