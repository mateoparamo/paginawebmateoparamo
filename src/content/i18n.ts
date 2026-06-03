export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const dict = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      skills: "Skills",
      blog: "Blog",
      contact: "Contacto",
      cv: "Descargar CV",
    },
    hero: {
      eyebrow: "Finanzas × Inteligencia Artificial",
      title: "Mateo Páramo",
      subtitle:
        "Construyo en la intersección de los mercados financieros y la IA. Antes: finanzas en Boston Scientific. Ahora: aplicando IA a inversión y producto.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      status: "Disponible para nuevos proyectos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "De la finanza corporativa a los mercados con IA",
      body: [
        "Soy Mateo Páramo. Vengo de dos años en el departamento financiero de Boston Scientific (España), donde aprendí cómo funciona el dinero por dentro: cierres, reporting, análisis de variaciones y la disciplina de un entorno multinacional.",
        "Antes pasé otros dos años creando contenido en redes sociales. Aprendí a comunicar, a entender audiencias y a iterar basándome en métricas — algo que sigue siendo parte de cómo trabajo.",
        "Hoy mi foco son los mercados financieros y la inteligencia artificial. Construyo proyectos en esa intersección utilizando herramientas como Claude Code y Codex, y dirijo modelos para ir mucho más rápido sin perder rigor.",
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria",
      items: [
        {
          period: "2022 — 2024",
          role: "Finance Analyst",
          company: "Boston Scientific (España)",
          description:
            "Responsable de cierres mensuales, reporting y análisis de variaciones para la filial española. Automatización de procesos y soporte a la dirección local.",
        },
        {
          period: "2020 — 2022",
          role: "Creador de contenido",
          company: "Independiente",
          description:
            "Dos años produciendo, editando y haciendo crecer audiencias en Instagram, TikTok y YouTube. Comunicación, narrativa y datos.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Herramientas y dominios",
      groups: [
        {
          name: "Inteligencia Artificial",
          items: ["ChatGPT", "Claude", "APIs de LLMs", "Claude Code", "Codex", "Prompt engineering"],
        },
        {
          name: "Finanzas",
          items: ["Reporting financiero", "Cierres mensuales", "Análisis de variaciones", "Modelado en Excel"],
        },
        {
          name: "Comunicación",
          items: ["Creación de contenido", "Storytelling", "Edición de vídeo", "Crecimiento de audiencia"],
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Cosas que he construido",
      subtitle:
        "Una mezcla de proyectos personales con IA, experiencia corporativa y trabajo creativo. Lo que mejor define cómo trabajo.",
      categories: {
        all: "Todos",
        "ai-coding": "Coding con IA",
        "ai-finance": "IA × Finanzas",
        corporate: "Corporate",
        content: "Contenido",
      },
      viewProject: "Ver detalle",
      backToProjects: "Volver a proyectos",
      highlights: "Highlights",
      stack: "Stack",
    },
    blog: {
      eyebrow: "Blog",
      title: "Notas sobre IA, mercados y producto",
      subtitle: "Pensamiento en público. Trabajo en progreso.",
      empty: "Pronto publicaré aquí. Mientras tanto, sígueme en las redes para no perderte nada.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      subtitle:
        "Si quieres hablar de un proyecto, una oportunidad o simplemente cambiar impresiones sobre IA y mercados, escríbeme.",
      emailLabel: "Escríbeme un email",
      socialsLabel: "O conecta por aquí",
    },
    footer: {
      copyright: "Mateo Páramo. Todos los derechos reservados.",
      builtWith: "Construido con Next.js, Tailwind y un poco de Claude Code.",
    },
    notFound: {
      title: "Página no encontrada",
      body: "La página que buscas no existe o se ha movido.",
      cta: "Volver al inicio",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      blog: "Blog",
      contact: "Contact",
      cv: "Download CV",
    },
    hero: {
      eyebrow: "Finance × Artificial Intelligence",
      title: "Mateo Páramo",
      subtitle:
        "I build at the intersection of financial markets and AI. Previously: finance at Boston Scientific. Now: applying AI to investing and product.",
      ctaPrimary: "See projects",
      ctaSecondary: "Get in touch",
      status: "Available for new projects",
    },
    about: {
      eyebrow: "About",
      title: "From corporate finance to markets with AI",
      body: [
        "I'm Mateo Páramo. I spent two years in the finance department of Boston Scientific (Spain), where I learned how money works from the inside: closes, reporting, variance analysis and the discipline of a multinational environment.",
        "Before that I spent two more years creating content on social media. I learned how to communicate, understand audiences and iterate based on metrics — something that's still part of how I work.",
        "Today my focus is financial markets and artificial intelligence. I build projects at that intersection using tools like Claude Code and Codex, directing models to move much faster without losing rigor.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Track record",
      items: [
        {
          period: "2022 — 2024",
          role: "Finance Analyst",
          company: "Boston Scientific (Spain)",
          description:
            "Owned monthly closes, reporting and variance analysis for the Spanish subsidiary. Process automation and support to local leadership.",
        },
        {
          period: "2020 — 2022",
          role: "Content creator",
          company: "Independent",
          description:
            "Two years producing, editing and growing audiences on Instagram, TikTok and YouTube. Communication, narrative and data.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Tools and domains",
      groups: [
        {
          name: "Artificial Intelligence",
          items: ["ChatGPT", "Claude", "LLM APIs", "Claude Code", "Codex", "Prompt engineering"],
        },
        {
          name: "Finance",
          items: ["Financial reporting", "Monthly closes", "Variance analysis", "Excel modeling"],
        },
        {
          name: "Communication",
          items: ["Content creation", "Storytelling", "Video editing", "Audience growth"],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I've built",
      subtitle:
        "A mix of personal AI projects, corporate experience and creative work. The best way to understand how I operate.",
      categories: {
        all: "All",
        "ai-coding": "AI coding",
        "ai-finance": "AI × Finance",
        corporate: "Corporate",
        content: "Content",
      },
      viewProject: "View detail",
      backToProjects: "Back to projects",
      highlights: "Highlights",
      stack: "Stack",
    },
    blog: {
      eyebrow: "Blog",
      title: "Notes on AI, markets and product",
      subtitle: "Thinking in public. Work in progress.",
      empty: "I'll be posting here soon. In the meantime, follow me on socials so you don't miss it.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      subtitle:
        "If you want to talk about a project, an opportunity, or simply exchange thoughts on AI and markets, drop me a line.",
      emailLabel: "Send me an email",
      socialsLabel: "Or connect here",
    },
    footer: {
      copyright: "Mateo Páramo. All rights reserved.",
      builtWith: "Built with Next.js, Tailwind and a little Claude Code.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has moved.",
      cta: "Back home",
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];

export function getDict(locale: Locale): Dict {
  return dict[locale];
}
