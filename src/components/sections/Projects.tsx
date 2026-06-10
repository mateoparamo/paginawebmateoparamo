import Image from "next/image";
import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import { collaborations } from "@/content/collaborations";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

function hostOf(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/* Chrome del "navegador" que enmarca la captura real del proyecto */
function BrowserFrame({
  url,
  image,
  title,
}: {
  url: string;
  image: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-paper-card shadow-[0_18px_44px_-16px_rgba(26,25,22,0.22)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
        </div>
        <span className="truncate rounded-full bg-ink/[0.04] px-3 py-0.5 font-sans text-[11px] font-light text-ink-muted">
          {hostOf(url)}
        </span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-[16/10] overflow-hidden bg-ink"
      >
        <Image
          src={image}
          alt={`Captura de ${title}`}
          width={1440}
          height={900}
          sizes="(max-width: 768px) 100vw, 620px"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </a>
    </div>
  );
}

export function Projects({ locale }: { locale: Locale }) {
  const t = getDict(locale).projects;

  return (
    <section id="projects" className="container-page scroll-mt-24 py-20 md:py-28">
      <SectionHeading>{t.eyebrow}</SectionHeading>

      <div className="mt-10">
        {t.items.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="group grid gap-6 border-t border-line py-12 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <span className="font-serif text-2xl font-light text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker mt-3 block">{p.tag}</span>

                <h3 className="display-md mt-5">{p.title}</h3>
                <p className="body-text mt-4 max-w-md text-balance">
                  {p.description}
                </p>

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line mt-7"
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

              <div className="md:col-span-7 md:col-start-6">
                {p.url && p.image && (
                  <BrowserFrame url={p.url} image={p.image} title={p.title} />
                )}

                {p.showBrands && (
                  <div className="mt-6">
                    <span className="kicker mb-3 block">{t.brandsLabel}</span>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                      {collaborations.map((c, idx) => (
                        <span key={c.name} className="flex items-center gap-2.5">
                          {idx > 0 && (
                            <span aria-hidden className="text-ink-faint">
                              ·
                            </span>
                          )}
                          <span className="cursor-default font-sans text-[13px] font-light text-ink-muted transition-colors duration-300 hover:text-accent">
                            {c.name}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
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
