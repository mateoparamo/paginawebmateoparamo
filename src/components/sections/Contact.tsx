import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { email } from "@/content/socials";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

export function Contact({ locale }: { locale: Locale }) {
  const t = getDict(locale).contact;

  return (
    <section id="contact" className="container-page scroll-mt-24 py-20 md:py-32">
      <SectionHeading>{t.eyebrow}</SectionHeading>

      <div className="mt-10 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <h3 className="display-md max-w-2xl text-balance">{t.title}</h3>
          <p className="body-text mt-6 max-w-xl text-balance">{t.subtitle}</p>

          <a
            href={`mailto:${email}`}
            className="group mt-12 inline-flex items-baseline gap-3 font-serif text-xl font-light text-ink md:text-2xl"
          >
            <span className="border-b border-line-strong pb-1 transition-colors group-hover:border-ink">
              {email}
            </span>
            <span
              aria-hidden
              className="text-xl text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
