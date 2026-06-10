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
          title: "Base de datos del Real Madrid",
          tag: "IA · Datos",
          description:
            "Aplicación web de estadísticas y datos del Real Madrid. Diseñada, construida y publicada por mí con IA generativa como herramienta de desarrollo.",
          url: "https://data-base-real-madrid-stats.pages.dev/real-madrid-premium-v5?vmpyn9tsz",
          linkLabel: "Ver proyecto",
          image: "/projects/realmadrid.png",
          showBrands: false,
        },
        {
          title: "Creador de contenido",
          tag: "Comunicación · Audiencia",
          description:
            "Comunidad de +500.000 seguidores en Redes Sociales construida desde cero.",
          url: "https://portfoliomateoparamo.netlify.app/",
          linkLabel: "Ver portfolio",
          image: "/projects/creator.png",
          showBrands: true,
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
          "Concilié cuentas y preparé la documentación de soporte del cierre mensual para el equipo financiero de la filial.",
          "Elaboré el reporting recurrente —ventas, gastos operativos y P&L por línea de negocio— en Excel y PowerPoint para dirección financiera local.",
          "Controlé y revisé facturas y gastos garantizando el cumplimiento de la política interna y la correcta imputación contable y analítica.",
          "Coordiné con ventas, logística y RR. HH. la información necesaria para registrar correctamente las operaciones.",
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
          name: "Herramientas",
          items: [
            "Excel financiero avanzado",
            "Reporting & P&L",
            "PowerPoint ejecutivo",
            "IA generativa (Claude Code)",
            "Análisis de datos",
            "Creación de contenido",
          ],
        },
        {
          name: "Idiomas",
          items: ["Castellano — Nativo", "Inglés — Profesional"],
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
          title: "Real Madrid database",
          tag: "AI · Data",
          description:
            "A Real Madrid stats and data web app. Designed, built and shipped by me using generative AI as a development tool.",
          url: "https://data-base-real-madrid-stats.pages.dev/real-madrid-premium-v5?vmpyn9tsz",
          linkLabel: "View project",
          image: "/projects/realmadrid.png",
          showBrands: false,
        },
        {
          title: "Content creator",
          tag: "Communication · Audience",
          description:
            "A community of 500,000+ followers on Social Media built from scratch.",
          url: "https://portfoliomateoparamo.netlify.app/",
          linkLabel: "View portfolio",
          image: "/projects/creator.png",
          showBrands: true,
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
          "Reconciled accounts and prepared the supporting documentation for the monthly close for the local finance team.",
          "Produced recurring reporting — sales, operating expenses and P&L by business line — in Excel and PowerPoint for local finance leadership.",
          "Controlled and reviewed invoices and expenses, ensuring compliance with internal policy and correct accounting and analytical allocation.",
          "Coordinated with sales, logistics and HR to gather the information needed to record operations correctly.",
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
          name: "Tools",
          items: [
            "Advanced financial Excel",
            "Reporting & P&L",
            "Executive PowerPoint",
            "Generative AI (Claude Code)",
            "Data analysis",
            "Content creation",
          ],
        },
        {
          name: "Languages",
          items: ["Spanish — Native", "English — Professional"],
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
