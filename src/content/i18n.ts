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
      eyebrow: "Mateo Páramo · Madrid",
      title: "Finanzas, datos e IA aplicados a problemas reales",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
      status: "Disponible para nuevos proyectos",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Curioso, inquieto y autodidacta",
      body: [
        "Mi primera buena decisión profesional fue admitir que me había equivocado de carrera. Estudié Derecho en la UCM y descubrí que lo mío eran las finanzas, por lo que opté por hacer un MBA con especialización en finanzas en el IEB. Hoy en día, con el auge de la inteligencia artificial, se junta todo lo que me apasiona: IA y finanzas.",
        "Tengo 29 años, soy de Madrid y llevo toda la vida detrás de un balón. Tras 2 años en Boston Scientific busco crecer como analista, aplicando la IA en las empresas y las finanzas. Siempre con ganas de aprender, mejorar y aportar.",
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
            "Comunidad de +500.000 seguidores en Redes Sociales construida desde cero.",
          url: "https://portfoliomateoparamo.netlify.app/",
          linkLabel: "Ver portfolio",
          showBrands: true,
        },
        {
          title: "Base de datos del Real Madrid",
          tag: "IA · Datos",
          description:
            "Aplicación web de estadísticas y datos del Real Madrid programada con vibe coding.",
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
        bulletsLabel: "Funciones",
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
        {
          name: "Información adicional",
          items: ["Curso de Entrenador (RFEF)", "Carnet de conducir B"],
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos juntos",
      subtitle:
        "Si quieres hablar de un proyecto, una oportunidad o simplemente cambiar impresiones, escríbeme.",
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
      eyebrow: "Mateo Páramo · Madrid",
      title: "Finance, data & AI applied to real problems",
      ctaPrimary: "See projects",
      ctaSecondary: "Let's talk",
      status: "Available for new projects",
    },
    about: {
      eyebrow: "About",
      title: "Curious, restless and self-taught",
      body: [
        "My first good career decision was admitting I'd picked the wrong degree. I studied Law at UCM and discovered finance was what really drew me in, so I chose to do an MBA specialising in finance at IEB. Today, with the rise of artificial intelligence, everything I'm passionate about comes together: AI and finance.",
        "I'm 29, from Madrid, and I've spent my whole life chasing a football. After 2 years at Boston Scientific, I want to keep growing as an analyst, applying AI to business and finance. Always eager to learn, improve and add value.",
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
            "A community of 500,000+ followers on Social Media built from scratch.",
          url: "https://portfoliomateoparamo.netlify.app/",
          linkLabel: "View portfolio",
          showBrands: true,
        },
        {
          title: "Real Madrid database",
          tag: "AI · Data",
          description:
            "A Real Madrid stats and data web app built with vibe coding.",
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
        bulletsLabel: "Duties",
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
        {
          name: "Additional information",
          items: ["Football Coaching Course (RFEF)", "Driving licence (B)"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      subtitle:
        "If you want to talk about a project, an opportunity, or simply exchange thoughts, drop me a line.",
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
