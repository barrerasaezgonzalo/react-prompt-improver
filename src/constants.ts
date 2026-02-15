import { optionsProps } from "./types";

export const modeOptions: optionsProps[] = [
  { id: "rapido", label: "Rápido" },
  { id: "guiado", label: "Guiado" },
  { id: "preciso", label: "Preciso" },
];

export const TEMPLATES = [
  {
    id: "code-assistant",
    title: "Asistente de Código",
    description:
      "Genera código estructurado y alineado con buenas prácticas a partir de una necesidad técnica.",
    href: "/templates/asistente-codigo",
    prompt: `
Actúa como desarrollador senior especializado en [TECNOLOGÍA].

Necesito que desarrolles [FUNCIONALIDAD].

Contexto del proyecto:
[DESCRIBE AQUÍ EL CONTEXTO]

Requisitos:
- [REQUISITO 1]
- [REQUISITO 2]

Devuelve el código con explicación breve.
    `,
  },
  {
    id: "debug-helper",
    title: "Depuración de Errores",
    description: "Analiza errores y propone soluciones claras paso a paso.",
    href: "/templates/depuracion-errores",
    prompt: `
Actúa como ingeniero de software senior.

Estoy obteniendo el siguiente error:
[PEGA AQUÍ EL ERROR]

Este es el fragmento de código:
[PEGA AQUÍ EL CÓDIGO]

Explícame la causa y cómo solucionarlo.
    `,
  },
  {
    id: "content-writer",
    title: "Redactor de Artículos",
    description:
      "Crea artículos estructurados con introducción, desarrollo y conclusión.",
    href: "/templates/redactor-articulos",
    prompt: `
Actúa como redactor profesional.

Escribe un artículo sobre:
[TEMA]

Dirigido a:
[PÚBLICO OBJETIVO]

Extensión aproximada:
[NÚMERO DE PALABRAS]

Incluye título atractivo y subtítulos.
    `,
  },
  {
    id: "copywriting",
    title: "Copy Persuasivo",
    description: "Genera textos comerciales optimizados para conversión.",
    href: "/templates/copy-persuasivo",
    prompt: `
Actúa como copywriter experto.

Producto o servicio:
[DESCRIBE AQUÍ]

Público objetivo:
[DEFINE EL PÚBLICO]

Objetivo:
[VENTA / REGISTRO / DESCARGA]

Crea un texto persuasivo orientado a conversión.
    `,
  },
  {
    id: "technical-explainer",
    title: "Explicador Técnico",
    description: "Transforma conceptos complejos en explicaciones claras.",
    href: "/templates/explicador-tecnico",
    prompt: `
Explícame el siguiente concepto técnico:
[CONCEPTO]

Nivel del lector:
[BÁSICO / INTERMEDIO / AVANZADO]

Incluye ejemplos prácticos.
    `,
  },
  {
    id: "marketing-ideas",
    title: "Ideas de Marketing",
    description: "Genera ideas de campañas y estrategias creativas.",
    href: "/templates/ideas-marketing",
    prompt: `
Actúa como estratega de marketing.

Producto:
[PRODUCTO]

Público objetivo:
[PÚBLICO]

Canal:
[REDES / EMAIL / ADS]

Genera 5 ideas de campaña con breve descripción.
    `,
  },
  {
    id: "seo-optimizer",
    title: "Optimización SEO",
    description: "Crea contenido optimizado para posicionamiento orgánico.",
    href: "/templates/seo",
    prompt: `
Actúa como especialista en SEO.

Tema principal:
[KEYWORD PRINCIPAL]

Público:
[PÚBLICO OBJETIVO]

Crea un esquema optimizado con:
- Título SEO
- Meta descripción
- Subtítulos estructurados
    `,
  },
  {
    id: "product-description",
    title: "Descripción de Producto",
    description: "Redacta descripciones atractivas para ecommerce.",
    href: "/templates/descripcion-producto",
    prompt: `
Escribe una descripción atractiva para el siguiente producto:

Nombre:
[NOMBRE DEL PRODUCTO]

Características:
[CARACTERÍSTICAS]

Beneficios clave:
[BENEFICIOS]

Tono:
[FORMAL / MODERNO / JUVENIL]
    `,
  },
  {
    id: "email-professional",
    title: "Email Profesional",
    description: "Redacta correos claros y estructurados según el contexto.",
    href: "/templates/email-profesional",
    prompt: `
Redacta un correo profesional.

Motivo:
[DESCRIBE EL MOTIVO]

Destinatario:
[ROL O RELACIÓN]

Tono:
[FORMAL / CERCANO]

Incluye asunto sugerido.
    `,
  },
  {
    id: "resume-improver",
    title: "Mejora de CV",
    description: "Optimiza experiencia laboral para mayor impacto.",
    href: "/templates/mejora-cv",
    prompt: `
Mejora la siguiente experiencia laboral para que sea más impactante:

[PÁRRAFO ACTUAL]

Sector:
[SECTOR]

Enfócalo en logros medibles.
    `,
  },
  {
    id: "social-media-post",
    title: "Post para Redes Sociales",
    description: "Crea publicaciones optimizadas para engagement.",
    href: "/templates/post-redes",
    prompt: `
Crea un post para [PLATAFORMA].

Tema:
[TEMA]

Objetivo:
[INTERACCIÓN / VENTA / VISIBILIDAD]

Incluye llamado a la acción.
    `,
  },
  {
    id: "learning-plan",
    title: "Plan de Aprendizaje",
    description:
      "Genera una hoja de ruta estructurada para aprender cualquier tema.",
    href: "/templates/plan-aprendizaje",
    prompt: `
Crea un plan de aprendizaje para:

[TEMA]

Nivel actual:
[PRINCIPIANTE / INTERMEDIO]

Tiempo disponible por semana:
[HORAS]

Incluye recursos sugeridos y estructura por semanas.
    `,
  },
];
