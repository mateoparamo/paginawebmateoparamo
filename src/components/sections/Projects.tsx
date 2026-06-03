"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/content/i18n";
import { getDict } from "@/content/i18n";
import type { ProjectCategory } from "@/content/projects";
import { projects } from "@/content/projects";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

type Filter = "all" | ProjectCategory;

export function Projects({ locale }: { locale: Locale }) {
  const t = getDict(locale).projects;
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const filters: Filter[] = ["all", "ai-coding", "ai-finance", "corporate", "content"];

  return (
    <section id="projects" className="container-page scroll-mt-24 py-24 md:py-36">
      <SectionHeading kicker={t.eyebrow} title={t.title} />

      <Reveal>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-sans text-[13px] font-light transition-colors ${
                filter === f
                  ? "text-ink underline underline-offset-4"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {t.categories[f]}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 0.06}>
            <Link
              href={`/${locale}/projects/${project.slug}`}
              className="group grid items-baseline gap-2 border-t border-line py-8 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-6">
                <h3 className="font-serif text-2xl font-light leading-snug text-ink transition-opacity group-hover:opacity-50 md:text-3xl">
                  {project.title[locale]}
                </h3>
                <p className="mt-2 font-sans text-sm font-light text-ink-muted">
                  {project.tagline[locale]}
                </p>
              </div>

              <div className="md:col-span-4">
                <span className="meta">{t.categories[project.category]}</span>
              </div>

              <div className="flex items-baseline justify-between md:col-span-2 md:justify-end md:gap-5">
                <span className="meta">{project.year}</span>
                <span
                  aria-hidden
                  className="font-serif text-xl text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
