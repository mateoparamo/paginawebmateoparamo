import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDict(locale).blog;

  return (
    <section className="container-page py-24 md:py-36">
      <span className="kicker">{t.eyebrow}</span>
      <h1 className="display-lg mt-5 max-w-3xl text-balance">{t.title}</h1>
      <p className="lead mt-8 max-w-xl text-balance">{t.subtitle}</p>

      <div className="mt-16 border-t border-line pt-16">
        <p className="mx-auto max-w-md text-center font-serif text-lg font-light italic leading-relaxed text-ink-muted">
          {t.empty}
        </p>
      </div>
    </section>
  );
}
