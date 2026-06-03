import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mateo Páramo — Finanzas × IA",
  description:
    "Portfolio personal de Mateo Páramo. Finanzas, mercados e inteligencia artificial.",
  openGraph: {
    title: "Mateo Páramo — Finanzas × IA",
    description:
      "Portfolio personal de Mateo Páramo. Finanzas, mercados e inteligencia artificial.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${newsreader.variable} ${archivo.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
