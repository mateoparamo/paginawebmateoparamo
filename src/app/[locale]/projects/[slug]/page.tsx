import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/i18n";
import { getDict, locales } from "@/content/i18n";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = getDict(locale).projects;

  return (
    <article className="container-page max-w-3xl py-20 md:py-28">
      <Link
        href={`/${locale}#projects`}
        className="link-line"
      >
        <span aria-hidden>←</span>
        {t.backToProjects}
      </Link>

      <div className="mt-12 flex items-center gap-4">
        <span className="kicker">{t.categories[project.category]}</span>
        <span className="text-line-strong">·</span>
        <span className="meta">{project.year}</span>
      </div>

      <h1 className="display-lg mt-6 text-balance">{project.title[locale]}</h1>
      <p className="mt-4 font-serif text-xl font-light italic leading-relaxed text-ink-muted">
        {project.tagline[locale]}
      </p>

      <div className="mt-12 hairline" />

      <p className="body-text mt-12 text-balance">{project.description[locale]}</p>

      <h2 className="kicker mt-16 mb-6">{t.highlights}</h2>
      <ul className="space-y-4">
        {project.highlights[locale].map((h, i) => (
          <li key={i} className="flex items-baseline gap-4 border-b border-line pb-4">
            <span className="meta shrink-0">{`0${i + 1}`}</span>
            <span className="body-text">{h}</span>
          </li>
        ))}
      </ul>

      <h2 className="kicker mt-16 mb-6">{t.stack}</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {project.stack.map((s) => (
          <span key={s} className="font-sans text-[15px] font-light text-ink-soft">
            {s}
          </span>
        ))}
      </div>

      {project.link && (
        <div className="mt-14">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {locale === "es" ? "Visitar proyecto" : "Visit project"}
            <span aria-hidden>↗</span>
          </a>
        </div>
      )}
    </article>
  );
}
