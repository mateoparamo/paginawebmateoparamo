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

      <div className="mt-14">
        {t.items.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="group grid gap-5 border-t border-line py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <span className="font-serif text-2xl font-light text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker mt-3 block">{p.tag}</span>
              </div>

              <div className="md:col-span-8">
                <h3 className="display-md">{p.title}</h3>
                <p className="body-text mt-4 max-w-2xl text-balance">
                  {p.description}
                </p>

                {p.showBrands && (
                  <div className="mt-7">
                    <span className="meta block">{t.brandsLabel}</span>
                    <p className="mt-2 font-sans text-sm font-light text-ink-soft">
                      {collaborations.map((c) => c.name).join("   ·   ")}
                    </p>
                  </div>
                )}

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line mt-8"
                  >
                    {p.linkLabel}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
