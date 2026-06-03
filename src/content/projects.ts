export type ProjectCategory = "ai-coding" | "ai-finance" | "corporate" | "content";

export interface Project {
  slug: string;
  category: ProjectCategory;
  year: string;
  stack: string[];
  link?: string;
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  highlights: { es: string[]; en: string[] };
}

export const projects: Project[] = [
  {
    slug: "ai-coded-portfolio",
    category: "ai-coding",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Tailwind", "Claude Code"],
    title: {
      es: "Este mismo portfolio",
      en: "This very portfolio",
    },
    tagline: {
      es: "Construido íntegramente con Claude Code y Codex",
      en: "Built entirely with Claude Code and Codex",
    },
    description: {
      es: "Diseño y desarrollo de una web personal premium en colaboración con agentes de IA. Demuestra mi capacidad para dirigir IA en proyectos técnicos complejos — desde la arquitectura hasta el deploy.",
      en: "Premium personal website designed and built in collaboration with AI agents. Showcases my ability to direct AI in complex technical projects — from architecture to deploy.",
    },
    highlights: {
      es: [
        "Arquitectura Next.js 15 App Router con i18n integrado",
        "Sistema de diseño propio sobre Tailwind CSS",
        "Cero dependencias de terceros para el contenido",
      ],
      en: [
        "Next.js 15 App Router architecture with built-in i18n",
        "Custom design system on top of Tailwind CSS",
        "Zero third-party dependencies for content",
      ],
    },
  },
  {
    slug: "market-research-ai",
    category: "ai-finance",
    year: "2025",
    stack: ["Python", "LLMs", "APIs financieras"],
    title: {
      es: "Análisis de mercados con LLMs",
      en: "Market research with LLMs",
    },
    tagline: {
      es: "Pipeline de research financiero asistido por IA",
      en: "AI-assisted financial research pipeline",
    },
    description: {
      es: "Sistema que combina datos de mercado en tiempo real con modelos de lenguaje para generar tesis de inversión, resúmenes de earnings y detección de catalizadores. Caso de uso real de la intersección IA × finanzas.",
      en: "System combining real-time market data with language models to generate investment theses, earnings summaries and catalyst detection. Real-world use case of the AI × finance intersection.",
    },
    highlights: {
      es: [
        "Ingesta de earnings, filings y noticias",
        "Resúmenes accionables con citas verificables",
        "Backtesting cualitativo de las tesis generadas",
      ],
      en: [
        "Ingestion of earnings, filings and news",
        "Actionable summaries with verifiable citations",
        "Qualitative backtesting of generated theses",
      ],
    },
  },
  {
    slug: "boston-scientific-finance",
    category: "corporate",
    year: "2022 — 2024",
    stack: ["SAP", "Excel avanzado", "Power Query", "Reporting"],
    title: {
      es: "Boston Scientific — Finanzas España",
      en: "Boston Scientific — Finance Spain",
    },
    tagline: {
      es: "Dos años en el corazón financiero de una multinacional MedTech",
      en: "Two years at the financial core of a MedTech multinational",
    },
    description: {
      es: "Responsable de cierres mensuales, reporting y análisis de variaciones para la filial española. Foco en automatización de procesos repetitivos y mejora del time-to-insight de la dirección local.",
      en: "Owned monthly closes, reporting and variance analysis for the Spanish subsidiary. Focused on automating repetitive processes and improving local leadership's time-to-insight.",
    },
    highlights: {
      es: [
        "Automatización de reportes recurrentes",
        "Cierres mensuales sin incidencias",
        "Interlocución con HQ y stakeholders locales",
      ],
      en: [
        "Automation of recurring reports",
        "Monthly closes delivered without incidents",
        "Interface with HQ and local stakeholders",
      ],
    },
  },
  {
    slug: "content-creation",
    category: "content",
    year: "2020 — 2022",
    stack: ["Instagram", "TikTok", "YouTube", "Edición"],
    title: {
      es: "Creación de contenido en redes",
      en: "Social media content creation",
    },
    tagline: {
      es: "Dos años produciendo, editando y haciendo crecer audiencias",
      en: "Two years producing, editing and growing audiences",
    },
    description: {
      es: "Antes de pasar a finanzas dediqué dos años profesionalmente a crear contenido en redes sociales. Aprendí narrativa, edición, métricas y la disciplina de publicar de forma consistente — habilidades que ahora aplico a comunicar finanzas y producto.",
      en: "Before moving into finance I spent two years professionally creating content on social media. I learned narrative, editing, metrics and the discipline of shipping consistently — skills I now apply to communicating finance and product.",
    },
    highlights: {
      es: [
        "Producción end-to-end: idea → guion → edición → publicación",
        "Comunicación clara y orientada al hook",
        "Mentalidad de iteración basada en datos",
      ],
      en: [
        "End-to-end production: idea → script → editing → publishing",
        "Clear, hook-driven communication",
        "Data-driven iteration mindset",
      ],
    },
  },
];
