import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { collaborations } from "@/content/collaborations";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Projects({ locale }: { locale: Locale }) {
  const t = getDict(locale).projects;

  return (
    <section id="projects" className="container-page scroll-mt-24 py-24 md:py-36">
      <SectionHeading kicker={t.eyebrow} title={t.title} />

      <Reveal>
        <p className="lead mt-6 max-w-2xl text-balance">{t.subtitle}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
        {collaborations.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.06}>
            <div className="flex h-full min-h-[120px] items-center justify-center bg-paper px-6 py-10 transition-colors hover:bg-paper-card md:min-h-[150px]">
              <span className="text-center font-serif text-xl font-light text-ink md:text-2xl">
                {c.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
