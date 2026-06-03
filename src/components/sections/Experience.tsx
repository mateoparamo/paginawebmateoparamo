import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Experience({ locale }: { locale: Locale }) {
  const t = getDict(locale).experience;

  return (
    <section id="experience" className="container-page scroll-mt-24 py-24 md:py-36">
      <SectionHeading kicker={t.eyebrow} title={t.title} />

      {/* Experiencia destacada */}
      <Reveal>
        <article className="mt-14 grid gap-4 border-t border-ink/80 py-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <span className="meta text-ink">{t.featured.company}</span>
          </div>
          <div className="md:col-span-8">
            <h3 className="display-md">{t.featured.role}</h3>
            <p className="body-text mt-4 max-w-2xl text-balance">
              {t.featured.description}
            </p>
          </div>
        </article>
      </Reveal>

      {/* Otra experiencia, en formato compacto */}
      <Reveal delay={0.1}>
        <p className="kicker mt-12 mb-2">{t.otherTitle}</p>
        <ul>
          {t.items.map((item, i) => (
            <li
              key={i}
              className="flex flex-col gap-1 border-t border-line py-5 md:flex-row md:items-baseline md:justify-between"
            >
              <span className="font-serif text-lg font-light text-ink">{item.role}</span>
              <span className="meta">{item.company}</span>
            </li>
          ))}
          <li className="border-t border-line" />
        </ul>
      </Reveal>
    </section>
  );
}
