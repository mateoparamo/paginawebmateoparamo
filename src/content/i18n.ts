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
      eyebrow: "Finanzas × Inteligencia Artificial",
      title: "Mateo Páramo",
      subtitle:
        "Vengo de la comunicación y la creación de contenido, con una comunidad de +500.000 seguidores. Me he formado en Derecho (UCM) y finanzas (MBA, IEB). Hoy construyo en la intersección de los mercados financieros y la IA.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      status: "Disponible para nuevos proyectos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Comunicación, marcas y mercados",
      body: [
        "Soy Mateo Páramo. Me apasiona el mundo de la comunicación, del marketing y de las marcas. Soy una persona con ambiciones, ganas de aprender y de crecer profesionalmente.",
        "Como creador de contenido he construido una comunidad de más de 500.000 seguidores en TikTok y he colaborado con marcas y medios de primer nivel como Amazon Prime, La Liga, el Diario AS, MotoGP o Ac2ality.",
        "En lo académico estudié Derecho en la Universidad Complutense de Madrid y completé un MBA con especialización en finanzas en el IEB. Hoy oriento esa base hacia los mercados financieros y la inteligencia artificial.",
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
          dates: "2019 · sept–dic 2020",
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
      eyebrow: "Finance × Artificial Intelligence",
      title: "Mateo Páramo",
      subtitle:
        "I come from communication and content creation, with a community of 500,000+ followers. I trained in Law (UCM) and finance (MBA, IEB). Today I build at the intersection of financial markets and AI.",
      ctaPrimary: "See projects",
      ctaSecondary: "Let's talk",
      status: "Available for new projects",
    },
    about: {
      eyebrow: "About",
      title: "Communication, brands and markets",
      body: [
        "I'm Mateo Páramo. I'm passionate about communication, marketing and brands. I'm ambitious, eager to learn and to grow professionally.",
        "As a content creator I've built a community of more than 500,000 followers on TikTok and collaborated with top-tier brands and media such as Amazon Prime, La Liga, Diario AS, MotoGP and Ac2ality.",
        "Academically, I studied Law at the Complutense University of Madrid and completed an MBA specialised in finance at IEB. Today I'm channelling that foundation towards financial markets and artificial intelligence.",
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
          dates: "2019 · Sep–Dec 2020",
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
