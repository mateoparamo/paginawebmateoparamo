import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Skills({ locale }: { locale: Locale }) {
  const t = getDict(locale).skills;

  return (
    <section id="skills" className="container-page scroll-mt-24 py-24 md:py-36">
      <SectionHeading kicker={t.eyebrow} title={t.title} />

      <div className="mt-14 grid gap-12 md:grid-cols-3">
        {t.groups.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.08}>
            <div>
              <h3 className="font-serif text-xl font-normal text-ink">{group.name}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="font-sans text-[15px] font-light text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
