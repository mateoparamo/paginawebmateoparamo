import type { Locale } from "@/content/i18n";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <Hero locale={locale} />
      <About locale={locale} />
      <Experience locale={locale} />
      <Skills locale={locale} />
      <Projects locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
