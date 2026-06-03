import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { email, socials } from "@/content/socials";
import { Reveal } from "../Reveal";

export function Contact({ locale }: { locale: Locale }) {
  const t = getDict(locale).contact;

  return (
    <section id="contact" className="container-page scroll-mt-24 py-24 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <span className="kicker">{t.eyebrow}</span>
          <h2 className="display-lg mt-5 max-w-2xl text-balance">{t.title}</h2>
          <p className="lead mt-8 max-w-xl text-balance">{t.subtitle}</p>

          <a
            href={`mailto:${email}`}
            className="group mt-12 inline-flex items-baseline gap-3 font-serif text-2xl font-light text-ink md:text-3xl"
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

        <Reveal delay={0.12} className="md:col-span-3 md:col-start-10">
          <p className="kicker mb-5">{t.socialsLabel}</p>
          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
