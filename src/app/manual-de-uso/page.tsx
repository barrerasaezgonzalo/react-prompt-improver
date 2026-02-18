"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { ScrollTop } from "@/components/ui/scrollTop";

export default function ManualDeUso() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <Sidebar />

      <section className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          <header className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-white mt-6 md:mt-0">
              <span className="text-cyan-500">Manual</span> de uso
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Esta aplicación transforma una idea simple en un prompt claro,
              estructurado y optimizado para modelos de inteligencia artificial.
              A continuación encontrarás cómo funciona y cuándo usar cada modo.
            </p>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              Preguntas frecuentes
            </h2>

            <div className="flex flex-col gap-3 text-gray-400 text-md leading-relaxed mt-2">
              <div>
                <strong className="text-cyan-500">¿Qué es un prompt?</strong>
                <p>
                  Es la instrucción que escribes para que una inteligencia
                  artificial genere una respuesta.
                </p>
              </div>

              <div>
                <strong className="text-cyan-500">¿Qué es el contexto?</strong>
                <p>
                  Es información adicional que ayuda a la IA a entender mejor tu
                  solicitud (tecnologías, público, restricciones, propósito).
                </p>
              </div>

              <div>
                <strong className="text-cyan-500">
                  ¿Qué significa “modo”?
                </strong>
                <p>
                  Es la estrategia que utiliza la aplicación para mejorar tu
                  prompt. Cada modo ofrece distintos niveles de estructura.
                </p>
              </div>

              <div>
                <strong className="text-cyan-500">
                  ¿Necesito conocimientos técnicos?
                </strong>
                <p>
                  No. Puedes usar el modo Rápido sin conocimientos previos. Los
                  otros modos permiten mayor control si lo necesitas.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              <span className="text-cyan-500">Estructura</span> del sitio
            </h2>

            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Campo principal donde escribes tu idea.</li>
              <li>Selector de modo (Rápido, Guiado o Preciso).</li>
              <li>Página de resultado con el prompt optimizado.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              Cómo usar la aplicación
            </h2>

            <div className="flex flex-col gap-3 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-cyan-500">Paso 1:</strong> Escribe tu
                idea.
              </p>
              <p>
                <strong className="text-cyan-500">Paso 2:</strong> Selecciona el
                modo.
              </p>
              <p>
                <strong className="text-cyan-500">Paso 3:</strong> Genera el
                prompt mejorado.
              </p>
              <p>
                <strong className="text-cyan-500">Paso 4:</strong> Copia y úsalo
                en tu herramienta de IA.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold text-white">
              Modos disponibles
            </h2>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">
                Modo <span className="text-cyan-500">Rápido</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Mejora automáticamente tu texto manteniendo simplicidad. No
                agrega campos adicionales.
              </p>
              <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
                Entrada: “Explícame React.”
                <br />
                Resultado: Prompt estructurado solicitando definición,
                funcionamiento y ejemplo práctico.
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">
                Modo <span className="text-cyan-500">Guiado</span>
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Agrega un único campo adicional:{" "}
                <strong className="text-white">Contexto adicional</strong>.
                Permite complementar tu idea sin necesidad de estructurar
                múltiples parámetros.
              </p>

              <ul className="list-disc list-inside text-gray-400 text-sm">
                <li>Prompt principal</li>
                <li>Contexto adicional</li>
              </ul>

              <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
                Prompt: “Explícame cómo optimizar una aplicación.”
                <br />
                Contexto adicional: “Aplicación hecha en Next.js con problemas
                de rendimiento.”
              </div>

              <p className="text-gray-400 text-sm">
                Diferencia clave: Guiado solo amplía el contexto.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-white">
                Modo <span className="text-cyan-500">Preciso</span>
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Permite controlar completamente la estructura del prompt. Está
                pensado para respuestas técnicas o altamente específicas.
              </p>

              <ul className="list-disc list-inside text-gray-400 text-sm">
                <li className="text-cyan-500">Prompt principal</li>
                <li className="text-cyan-500">Contexto</li>
                <li className="text-cyan-500">Rol</li>
                <li className="text-cyan-500">Objetivo</li>
                <li className="text-cyan-500">Restricciones</li>
                <li className="text-cyan-500">Formato de salida</li>
              </ul>

              <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
                Prompt: “Explícame autenticación.”
                <br />
                Contexto: “App en Next.js con backend Node.”
                <br />
                Rol: “Desarrollador backend senior.”
                <br />
                Objetivo: “Implementar JWT.”
                <br />
                Restricciones: “Enfócate en código.”
                <br />
                Formato: “Pasos numerados con ejemplos.”
              </div>

              <p className="text-gray-300 text-sm">
                Diferencia clave: Preciso permite definir estructura, rol,
                restricciones y formato exacto.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              <span className="text-cyan-500">
                Después de generar el prompt
              </span>
            </h2>

            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                <strong className="text-white">Copiar:</strong> copia el texto
                optimizado.
              </li>
              <li>
                <strong className="text-white">Generar nuevo mejorado:</strong>
                crea una nueva versión del mismo contenido.
              </li>
            </ul>

            <p className="text-gray-400 leading-relaxed">
              Puedes iterar varias veces hasta obtener la versión que mejor se
              adapte a tu necesidad.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              <span className="text-cyan-500">Recursos disponibles</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Además del generador principal, la plataforma incluye herramientas
              complementarias para ayudarte a escribir mejores prompts.
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-2">
                <a
                  href="/guia-escribir-prompts"
                  className="text-cyan-500 font-semibold hover:underline"
                >
                  Guía para mejorar prompts
                </a>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Documento explicativo con buenas prácticas para redactar
                  prompts más claros, estructurados y efectivos.
                </p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-lg flex flex-col gap-2">
                <a
                  href="/plantillas"
                  className="text-cyan-500 font-semibold hover:underline"
                >
                  Sistema de plantillas
                </a>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Puedes seleccionar una plantilla que se parezca a tu
                  necesidad. Al elegirla, se cargará un prompt inicial editable.
                  Solo debes reemplazar el contenido dentro de los corchetes
                  <span className="text-white"> [ ] </span>y luego generar la
                  versión mejorada.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <ScrollTop />
    </main>
  );
}
