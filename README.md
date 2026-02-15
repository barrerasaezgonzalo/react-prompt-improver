# AI Prompt Enhancer

AI Prompt Enhancer es una aplicación web desarrollada con Next.js (App
Router) que permite transformar prompts básicos en prompts optimizados y
estructurados para modelos de inteligencia artificial.

La aplicación implementa distintos modos de mejora (Rapid, Guided y
Precise), cada uno con una estrategia específica para maximizar
claridad, contexto y calidad de salida del modelo objetivo.

------------------------------------------------------------------------

## 🚀 Tecnologías Utilizadas

-   Next.js (App Router)
-   React
-   TypeScript
-   Route Handlers (API interna)
-   React Context API
-   Hooks personalizados
-   Componentes UI reutilizables

------------------------------------------------------------------------

## 🏗 Arquitectura

El proyecto sigue una arquitectura basada en capas (Layer-Based
Architecture), organizada por responsabilidades técnicas.

### Estructura principal

app/\
components/\
context/\
hooks/\
lib/\
types.ts\
constants.ts

### Capas

-   **app**: Definición de rutas y endpoints (App Router).
-   **components**: Componentes UI y componentes específicos por
    feature.
-   **context**: Manejo de estado global.
-   **hooks**: Lógica reutilizable desacoplada.
-   **lib**: Utilidades puras.
-   **types.ts / constants.ts**: Definición de contratos y
    configuración.

Dentro de `components/response` existe una organización parcial por
feature (Rapid, Guided, Precise), agrupando los componentes específicos
de cada modo.

------------------------------------------------------------------------

## 🔄 Flujo Funcional

1.  El usuario ingresa un prompt en la pantalla principal.
2.  Selecciona un modo de mejora.
3.  El prompt y el modo se almacenan en un Context global.
4.  Se redirige a `/prompt-response`.
5.  Según el modo seleccionado, se invoca el endpoint correspondiente en
    `/api/prompt/`.
6.  El backend procesa la solicitud.
7.  Se renderiza el resultado optimizado.

### Flujo simplificado

UI → Context → Route Handler → Modelo → Respuesta → UI

------------------------------------------------------------------------

## 🧠 Gestión de Estado

Se utiliza React Context para:

-   Persistir el prompt original.
-   Persistir el modo seleccionado.
-   Compartir estado entre páginas.

No se utilizan librerías externas de estado debido a la simplicidad
actual del dominio.

------------------------------------------------------------------------

## 🔌 API Interna

Endpoints definidos en:

app/api/prompt/

Cada modo implementa su propio `route.ts`:

-   /api/prompt/rapid
-   /api/prompt/guided
-   /api/prompt/precise

Esto permite desacoplar la lógica de cada estrategia de mejora y
facilita la escalabilidad.

------------------------------------------------------------------------

## 📈 Escalabilidad

Para agregar un nuevo modo de mejora:

1.  Crear carpeta en `app/api/prompt/`.
2.  Implementar el `route.ts`.
3.  Crear componentes en `components/response/`.
4.  Agregar la opción al selector de modos.

La arquitectura permite crecer horizontalmente por modo sin afectar el
núcleo del sistema.

------------------------------------------------------------------------

## ⚠️ Manejo de Errores

-   Validación de existencia de prompt y modo.
-   Estados de carga.
-   Posibilidad de extender los handlers para capturar errores de red o
    limitaciones del modelo.

------------------------------------------------------------------------

## 🧩 Decisiones Técnicas Clave

- Uso de App Router en lugar de Pages Router.
- Uso de Context API por simplicidad del dominio.
- Separación parcial por feature dentro de response/.
- Endpoints desacoplados por modo.

------------------------------------------------------------------------

## 🔮 Mejoras Futuras

-   Migración a arquitectura completamente feature-based.
-   Validación de datos con Zod.
-   Implementación de testing unitario.
-   Persistencia de historial de prompts.
-   Introducción de caching.
-   Optimización de renderizado.
-   Manejo avanzado de errores y retry automático.

------------------------------------------------------------------------

## ⚙️ Configuración de Variables de Entorno

- Antes de ejecutar el proyecto, crea un archivo .env.local en la raíz del proyecto.

Ejemplo:

```
GROQ_API_KEY=tu_token_aqui
```

Este token se utiliza en los Route Handlers ubicados en:

app/api/prompt/

Asegúrate de no subir este archivo al repositorio.
.env.local ya está incluido por defecto en .gitignore en proyectos Next.js.

------------------------------------------------------------------------

## 📦 Instalación

``` bash
npm install
npm run dev
```

La aplicación estará disponible en:

http://localhost:3000

## 📸 Capturas de pantalla


![Vista principal](./Public/Readme/screenshot1.png)
![Vista Modo Rapido](./Public/Readme/screenshot2.png)
![Vista Modo Guiado](./Public/Readme/screenshot3.png)
![Vista Modo Preciso](./Public/Readme/screenshot4.png)
![Vista Plantillas](./Public/Readme/screenshot5.png)

## 🔗 Link a Vercel

- Aplicación desplegada en: URL

## 📄 License

MIT 