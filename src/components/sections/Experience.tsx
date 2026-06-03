import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Experience({ locale }: { locale: Locale }) {
  const t = getDict(locale).experience;

  return (
    <section id="experience" className="container-page scroll-mt-24 py-24 md:py-36">
      <SectionHeading kicker={t.eyebrow} title={t.title} />

      <div className="mt-14">
        {t.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <article className="grid gap-3 border-t border-line py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <span className="meta">{item.period}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="display-md">{item.role}</h3>
                <p className="mt-1 font-sans text-sm font-light text-ink-muted">
                  {item.company}
                </p>
                <p className="body-text mt-4 max-w-2xl text-balance">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
