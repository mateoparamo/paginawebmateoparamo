# Mateo Páramo — Portfolio personal

Web personal de Mateo Páramo. Finanzas, mercados e inteligencia artificial.

Stack: **Next.js 15 + TypeScript + Tailwind CSS + Framer Motion**.
Idiomas: ES / EN con selector.
Deploy objetivo: **Vercel**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir http://localhost:3000 — redirige automáticamente a `/es`.

## Build de producción

```bash
npm run build
npm start
```

## Estructura

```
src/
  app/
    [locale]/              Páginas internacionalizadas (es / en)
      page.tsx             Home con todas las secciones
      blog/page.tsx        Blog (placeholder)
      projects/[slug]/     Detalle de cada proyecto
    layout.tsx             Layout raíz + fuentes
    page.tsx               Redirect a /es
  components/
    sections/              Hero, About, Projects, Experience, Skills, Contact
    Navbar.tsx
    Footer.tsx
    LocaleSwitcher.tsx
    Reveal.tsx             Animación de entrada por scroll
  content/
    i18n.ts                Todos los textos ES/EN
    projects.ts            Lista de proyectos
    socials.ts             Email + redes sociales
```

## Cómo editar tus contenidos

- **Textos generales** (hero, sobre mí, experiencia, skills…): [src/content/i18n.ts](src/content/i18n.ts)
- **Proyectos**: [src/content/projects.ts](src/content/projects.ts) — añade, edita o elimina entradas
- **Redes y email**: [src/content/socials.ts](src/content/socials.ts) — actualiza los handles reales
- **CV en PDF**: reemplaza `public/cv.pdf` con tu CV real
- **Colores y tipografía**: [tailwind.config.ts](tailwind.config.ts)

## Deploy en Vercel

1. Subir el repo a GitHub.
2. En vercel.com → "New Project" → importar el repo.
3. Vercel detecta Next.js automáticamente. Click en "Deploy".
4. URL pública en ~1 minuto: `mateo-paramo-cv.vercel.app`.
5. (Opcional) Conectar dominio propio en *Project → Settings → Domains*.
