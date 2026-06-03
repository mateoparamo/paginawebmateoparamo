import Image from "next/image";
import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function About({ locale }: { locale: Locale }) {
  const t = getDict(locale).about;

  return (
    <section id="about" className="container-page scroll-mt-24 py-24 md:py-36">
      <SectionHeading kicker={t.eyebrow} title={t.title} />

      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <div className="space-y-6 md:col-span-6">
          {t.body.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="body-text text-balance">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-paper-card">
            <Image
              src="/mateo.jpg"
              alt="Mateo Páramo"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-[center_25%]"
              priority
            />
          </div>

          <dl className="mt-10 space-y-4">
            {[
              [locale === "es" ? "Base" : "Based in", "Madrid"],
              [locale === "es" ? "Enfoque" : "Focus", locale === "es" ? "Mercados × IA" : "Markets × AI"],
              [locale === "es" ? "Idiomas" : "Languages", "ES · EN"],
              [locale === "es" ? "Estado" : "Status", locale === "es" ? "Disponible" : "Available"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
              >
                <dt className="meta">{k}</dt>
                <dd className="font-sans text-sm font-light text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
