export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const dict = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Colaboraciones",
      experience: "Experiencia",
      contact: "Contacto",
      cv: "Descargar CV",
    },
    hero: {
      eyebrow: "Finanzas × Inteligencia Artificial",
      title: "Mateo Páramo",
      subtitle:
        "Vengo de la comunicación y la creación de contenido, con una comunidad de +500.000 seguidores. Me he formado en Derecho (UCM) y finanzas (MBA, IEB). Hoy construyo en la intersección de los mercados financieros y la IA.",
      ctaPrimary: "Ver colaboraciones",
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
      eyebrow: "Colaboraciones",
      title: "Marcas con las que he trabajado",
      subtitle:
        "Como creador de contenido he colaborado con marcas y medios de primer nivel.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria",
      featured: {
        role: "Creación de contenido",
        company: "Redes sociales · TikTok +500.000 seguidores",
        description:
          "Producción de contenido y crecimiento de audiencia en redes, con colaboraciones para marcas y medios como Amazon Prime, La Liga, Diario AS, MotoGP o Ac2ality. Comunicación, narrativa y constancia.",
      },
      otherTitle: "Otra experiencia",
      items: [
        { role: "Teleoperador", company: "Randstad" },
        { role: "Encargado de sala", company: "Miga Bakery" },
        { role: "Encargado de comedor · Auxiliar administrativo", company: "Bristol School" },
        { role: "Monitor de ocio y tiempo libre", company: "Funny World" },
        { role: "Monitor de ocio y tiempo libre", company: "Grupo Tucán" },
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
      projects: "Collaborations",
      experience: "Experience",
      contact: "Contact",
      cv: "Download CV",
    },
    hero: {
      eyebrow: "Finance × Artificial Intelligence",
      title: "Mateo Páramo",
      subtitle:
        "I come from communication and content creation, with a community of 500,000+ followers. I trained in Law (UCM) and finance (MBA, IEB). Today I build at the intersection of financial markets and AI.",
      ctaPrimary: "See collaborations",
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
      eyebrow: "Collaborations",
      title: "Brands I've worked with",
      subtitle:
        "As a content creator I've collaborated with top-tier brands and media outlets.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Career",
      featured: {
        role: "Content creation",
        company: "Social media · TikTok 500,000+ followers",
        description:
          "Content production and audience growth on social media, with collaborations for brands and media such as Amazon Prime, La Liga, Diario AS, MotoGP and Ac2ality. Communication, storytelling and consistency.",
      },
      otherTitle: "Other experience",
      items: [
        { role: "Call centre agent", company: "Randstad" },
        { role: "Floor manager", company: "Miga Bakery" },
        { role: "Dining manager · Administrative assistant", company: "Bristol School" },
        { role: "Activity & leisure monitor", company: "Funny World" },
        { role: "Activity & leisure monitor", company: "Grupo Tucán" },
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
