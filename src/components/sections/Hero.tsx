import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDict(locale).hero;

  return (
    <section className="relative overflow-hidden">
      <div className="container-page relative">
        <div className="grid min-h-[76vh] grid-cols-1 items-center gap-y-4 py-16 md:grid-cols-12 md:gap-x-6 md:py-20">
          {/* Texto */}
          <div className="order-2 md:order-1 md:col-span-7 md:pr-4">
            <span
              className="kicker opacity-0 animate-fade-in"
              style={{ animationDelay: "0.05s" }}
            >
              {t.eyebrow}
            </span>

            <h1
              className="display-xl mt-6 max-w-xl text-balance opacity-0 animate-fade-up md:max-w-2xl"
              style={{ animationDelay: "0.12s" }}
            >
              {t.title}
            </h1>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.36s" }}
            >
              <Link href={`/${locale}#projects`} className="btn-outline">
                {t.ctaPrimary}
                <span aria-hidden>→</span>
              </Link>
              <Link href={`/${locale}#contact`} className="link-line">
                {t.ctaSecondary}
              </Link>
            </div>

            <span className="meta mt-8 flex items-center gap-2 opacity-0 animate-fade-up" style={{ animationDelay: "0.46s" }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
              </span>
              {t.status}
            </span>
          </div>

          {/* Retrato recortado, directo sobre el papel */}
          <div className="relative order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
            <div
              className="relative w-[58%] max-w-[230px] opacity-0 animate-fade-up md:w-full md:max-w-[290px]"
              style={{ animationDelay: "0.2s" }}
            >
              <Image
                src="/mateo-portrait.png"
                alt="Mateo Páramo"
                width={900}
                height={806}
                priority
                sizes="(max-width: 768px) 58vw, 290px"
                className="h-auto w-full select-none [filter:drop-shadow(0_16px_28px_rgba(26,25,22,0.12))] [mask-image:linear-gradient(to_bottom,black_96%,transparent_100%)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="hairline" />
      </div>
    </section>
  );
}
