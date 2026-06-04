export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const dict = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      cv: "Descargar CV",
    },
    hero: {
      eyebrow: "Finanzas - Inteligencia Artificial",
      title: "Mateo Páramo",
      subtitle:
        "Soy Mateo: curioso por naturaleza, me gusta entender cómo funcionan las cosas y no parar hasta que encajan. Hoy, lo que de verdad me mueve son los mercados financieros y la inteligencia artificial.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      status: "Disponible para nuevos proyectos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Entre el derecho, las finanzas y la IA",
      body: [
        "Soy Mateo Páramo, de Madrid. Curioso por naturaleza, me gusta entender cómo funcionan las cosas por dentro —un mercado, un negocio, una herramienta nueva— y no parar hasta que las piezas encajan. Aprender y construir es lo que de verdad me mueve.",
        "Mi formación es algo poco común: estudié Derecho en la Universidad Complutense de Madrid, completé un MBA con especialización en finanzas en el IEB y me he formado en Big Data e Inteligencia Artificial en ADAMS. Esa mezcla de derecho, finanzas y tecnología es justo la que me gusta aplicar para mirar un problema desde varios ángulos.",
        "Soy ambicioso, con iniciativa y mejor en equipo que en solitario —algo que me viene del deporte, una de mis grandes pasiones—; rara vez me conformo con la primera respuesta. Hoy me apasionan los mercados financieros y todo lo que la inteligencia artificial está cambiando en nuestra forma de trabajar, y es ahí donde quiero seguir creciendo: aprendiendo rápido y creando cosas que sirvan.",
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos que he construido",
      subtitle:
        "De la creación de contenido a la inteligencia artificial aplicada a los datos. Cosas que he ideado, construido y publicado.",
      brandsLabel: "Marcas y medios",
      items: [
        {
          title: "Creador de contenido",
          tag: "Comunicación · Redes",
          description:
            "Comunidad de +500.000 seguidores en TikTok construida desde cero. Guion, grabación, edición y estrategia de contenido, con colaboraciones para marcas y medios de primer nivel.",
          url: "https://portfoliomateoparamo.netlify.app/",
          linkLabel: "Ver portfolio",
          showBrands: true,
        },
        {
          title: "Base de datos del Real Madrid",
          tag: "IA · Datos",
          description:
            "Aplicación web de estadísticas del Real Madrid programada con inteligencia artificial. Reúne datos de la plantilla, competiciones y partidos con buscador, tablas, mapas de tiro, métricas avanzadas (xG, xA) y comparador de jugadores.",
          url: "https://data-base-real-madrid-stats.pages.dev/real-madrid-premium-v5?vmpyn9tsz",
          linkLabel: "Ver proyecto",
          showBrands: false,
        },
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria",
      featured: {
        company: "Boston Scientific",
        period: "abr 2024 — mar 2026",
        duration: "~2 años",
        roles: [
          { role: "Finance Analyst", dates: "mar 2025 — mar 2026" },
          { role: "Finance Intern", dates: "abr 2024 — mar 2025" },
        ],
        bullets: [
          "Apoyo en el cierre mensual: recopilación de datos contables, conciliación de cuentas y preparación de documentación de soporte para revisión del analista sénior.",
          "Elaboración de informes financieros periódicos (ventas, gastos operativos, P&L por línea de negocio) en Excel y PowerPoint para el equipo financiero local.",
          "Control y revisión de facturas y gastos, verificando el cumplimiento de la política interna y la correcta imputación contable y analítica.",
          "Colaboración con otros departamentos (ventas, logística, RR. HH.) para obtener la información necesaria en el registro de operaciones.",
        ],
      },
      otherTitle: "Otra experiencia",
      items: [
        {
          role: "Monitor de ocio y eventos",
          company: "Grupo Tucán · Funny World · Workout Events",
          dates: "2015 — 2023",
          duration: "eventos puntuales",
        },
        {
          role: "Auxiliar administrativo · Encargado de cafetería",
          company: "Bristol School",
          dates: "sept–dic 2020",
          duration: "",
        },
        {
          role: "Teleoperador / agente de call center",
          company: "Randstad",
          dates: "abr — may 2018",
          duration: "1 mes",
        },
        {
          role: "Atención al cliente, facturación e inventario",
          company: "Miga Bakery",
          dates: "sept 2016 — mar 2017",
          duration: "7 meses",
        },
      ],
    },
    skills: {
      eyebrow: "Perfil",
      title: "Formación, habilidades e idiomas",
      groups: [
        {
          name: "Formación",
          items: [
            "Derecho — UCM",
            "MBA en Finanzas — IEB",
            "Curso de Big Data e IA — ADAMS",
            "Curso de Entrenador (RFEF)",
            "Carnet de conducir B",
          ],
        },
        {
          name: "Habilidades",
          items: [
            "Comunicación",
            "Trabajo en equipo",
            "Resolución de problemas",
            "Creatividad",
            "Iniciativa",
            "Adaptabilidad",
          ],
        },
        {
          name: "Idiomas",
          items: ["Castellano — Nativo", "Inglés — Nivel medio-alto"],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      subtitle:
        "Si quieres hablar de un proyecto, una oportunidad o simplemente cambiar impresiones sobre comunicación, marcas, finanzas o IA, escríbeme.",
      directLabel: "Contacto directo",
      phoneLabel: "Teléfono",
      socialsLabel: "Conecta por aquí",
    },
    footer: {
      copyright: "Mateo Páramo. Todos los derechos reservados.",
      builtWith: "Construido con Next.js, Tailwind y un poco de Claude Code.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      cv: "Download CV",
    },
    hero: {
      eyebrow: "Finance - Artificial Intelligence",
      title: "Mateo Páramo",
      subtitle:
        "I'm Mateo: curious by nature, I like to understand how things really work and I don't stop until the pieces fit. Today, what truly drives me are financial markets and artificial intelligence.",
      ctaPrimary: "See projects",
      ctaSecondary: "Let's talk",
      status: "Available for new projects",
    },
    about: {
      eyebrow: "About",
      title: "Between law, finance and AI",
      body: [
        "I'm Mateo Páramo, from Madrid. Curious by nature, I like to understand how things really work —a market, a business, a new tool— and I don't stop until the pieces fit together. Learning and building is what truly drives me.",
        "My background is a slightly unusual one: I studied Law at the Complutense University of Madrid, completed an MBA specialised in finance at IEB and trained in Big Data and Artificial Intelligence at ADAMS. That mix of law, finance and technology is exactly what I like to bring to a problem, looking at it from several angles.",
        "I'm ambitious, proactive and better as part of a team than on my own —something that comes from sport, one of my great passions—; I rarely settle for the first answer. Today I'm passionate about financial markets and everything artificial intelligence is changing in the way we work — and that's where I want to keep growing: learning fast and building things that are genuinely useful.",
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Projects I've built",
      subtitle:
        "From content creation to AI applied to data. Things I've imagined, built and shipped.",
      brandsLabel: "Brands & media",
      items: [
        {
          title: "Content creator",
          tag: "Communication · Social",
          description:
            "A community of 500,000+ followers on TikTok built from scratch. Scripting, filming, editing and content strategy, with collaborations for top-tier brands and media.",
          url: "https://portfoliomateoparamo.netlify.app/",
          linkLabel: "View portfolio",
          showBrands: true,
        },
        {
          title: "Real Madrid database",
          tag: "AI · Data",
          description:
            "A Real Madrid stats web app built by programming with artificial intelligence. It brings together squad, competition and match data with search, tables, shot maps, advanced metrics (xG, xA) and a player comparison tool.",
          url: "https://data-base-real-madrid-stats.pages.dev/real-madrid-premium-v5?vmpyn9tsz",
          linkLabel: "View project",
          showBrands: false,
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Career",
      featured: {
        company: "Boston Scientific",
        period: "Apr 2024 — Mar 2026",
        duration: "~2 years",
        roles: [
          { role: "Finance Analyst", dates: "Mar 2025 — Mar 2026" },
          { role: "Finance Intern", dates: "Apr 2024 — Mar 2025" },
        ],
        bullets: [
          "Support with the monthly close: compiling accounting data, reconciling accounts and preparing supporting documentation for the senior analyst's review.",
          "Preparation of recurring financial reports (sales, operating expenses, P&L by business line) in Excel and PowerPoint for the local finance team.",
          "Control and review of invoices and expenses, checking compliance with internal policy and correct accounting and analytical allocation.",
          "Collaboration with other departments (sales, logistics, HR) to gather the information needed to record operations correctly.",
        ],
      },
      otherTitle: "Other experience",
      items: [
        {
          role: "Activity & events monitor",
          company: "Grupo Tucán · Funny World · Workout Events",
          dates: "2015 — 2023",
          duration: "occasional events",
        },
        {
          role: "Administrative assistant · Coffee shop manager",
          company: "Bristol School",
          dates: "Sep–Dec 2020",
          duration: "",
        },
        {
          role: "Call centre agent / telemarketer",
          company: "Randstad",
          dates: "Apr — May 2018",
          duration: "1 month",
        },
        {
          role: "Customer service, billing & inventory",
          company: "Miga Bakery",
          dates: "Sep 2016 — Mar 2017",
          duration: "7 months",
        },
      ],
    },
    skills: {
      eyebrow: "Profile",
      title: "Education, skills and languages",
      groups: [
        {
          name: "Education",
          items: [
            "Law — UCM",
            "MBA in Finance — IEB",
            "Big Data & AI Course — ADAMS",
            "Football Coaching Course (RFEF)",
            "Driving licence (B)",
          ],
        },
        {
          name: "Skills",
          items: [
            "Communication",
            "Teamwork",
            "Problem solving",
            "Creativity",
            "Initiative",
            "Adaptability",
          ],
        },
        {
          name: "Languages",
          items: ["Spanish — Native", "English — Upper-intermediate"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      subtitle:
        "If you want to talk about a project, an opportunity, or simply exchange thoughts on communication, brands, finance or AI, drop me a line.",
      directLabel: "Direct contact",
      phoneLabel: "Phone",
      socialsLabel: "Connect here",
    },
    footer: {
      copyright: "Mateo Páramo. All rights reserved.",
      builtWith: "Built with Next.js, Tailwind and a little Claude Code.",
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];

export function getDict(locale: Locale): Dict {
  return dict[locale];
}
