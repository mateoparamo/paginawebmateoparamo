import { notFound } from "next/navigation";
import type { Locale } from "@/content/i18n";
import { locales } from "@/content/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const typed = locale as Locale;
  return (
    <>
      <Navbar locale={typed} />
      <main>{children}</main>
      <Footer locale={typed} />
    </>
  );
}
