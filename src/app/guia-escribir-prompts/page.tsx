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
              Guía para escribir{" "}
              <span className="text-cyan-500">mejores prompts</span>
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Aprende a estructurar instrucciones claras y efectivas para{" "}
              <span className="text-cyan-500">
                obtener mejores resultados de modelos de inteligencia
                artificial.
              </span>{" "}
              Esta guía está pensada para usuarios básicos e intermedios.
            </p>
          </header>

          <section className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-white">
              Preguntas frecuentes
            </h2>

            <div className="flex flex-col gap-4 text-gray-400 leading-relaxed">
              <div>
                <p className="font-medium text-cyan-500">¿Qué es un prompt?</p>
                <p>
                  Es la instrucción o texto que le das a una inteligencia
                  artificial para que genere una respuesta. Es básicamente “lo
                  que le pides”.
                </p>
              </div>

              <div>
                <p className="font-medium text-cyan-500">
                  ¿Qué significa contexto?
                </p>
                <p>
                  Es la información adicional que ayuda al modelo a entender
                  mejor tu situación. Por ejemplo: tecnología que usas, público
                  objetivo, nivel técnico o limitaciones.
                </p>
              </div>

              <div>
                <p className="font-medium text-cyan-500">
                  ¿Qué es el formato de salida?
                </p>
                <p>
                  Es la forma en que quieres que la respuesta sea entregada:
                  lista, tabla, JSON, código, pasos numerados, etc.
                </p>
              </div>

              <div>
                <p className="font-medium text-cyan-500">
                  ¿Por qué a veces la respuesta es mala?
                </p>
                <p>
                  Generalmente porque el prompt es muy corto, ambiguo o no
                  incluye suficiente contexto. La calidad de la respuesta
                  depende en gran parte de la calidad de la instrucción.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              1. Sé claro y específico
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Evita instrucciones vagas.{" "}
              <span className="text-cyan-500">
                Mientras más específico seas, más útil será la respuesta.
              </span>
            </p>

            <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
              ❌ Malo: “Explícame programación.”
              <br />✅ Mejor: “Explícame qué es JavaScript, cómo funcionan las
              funciones y dame un ejemplo simple.”
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              2. Define el <span className="text-cyan-500">rol del modelo</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Puedes pedirle al modelo que actúe como un experto en un área.
              Esto ayuda a que la respuesta tenga un enfoque más claro.
            </p>

            <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
              “Actúa como un profesor de matemáticas y explícame ecuaciones de
              segundo grado paso a paso.”
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              3. Añade <span className="text-cyan-500">contexto</span> relevante
            </h2>
            <p className="text-gray-400 leading-relaxed">
              El contexto permite que la respuesta sea más personalizada.
              Incluye información que ayude a entender tu situación.
            </p>

            <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
              “Estoy creando una aplicación en React para principiantes.
              Necesito un ejemplo sencillo y fácil de entender.”
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              4. Especifica el{" "}
              <span className="text-cyan-500">formato de salida</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Si necesitas la respuesta en un formato concreto, indícalo
              claramente.
            </p>

            <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
              “Devuelve la respuesta en una lista numerada con pasos claros.”
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              5. <span className="text-cyan-500">Divide</span> tareas complejas
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Si el problema es grande, pide que se divida en partes. Esto
              reduce errores y mejora la claridad.
            </p>

            <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300">
              “Explícame paso a paso cómo crear una página web desde cero,
              incluyendo estructura, estilos y despliegue.”
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">
              Plantilla <span className="text-cyan-500">recomendada</span>
            </h2>

            <div className="bg-zinc-900 p-4 rounded-lg text-sm text-gray-300 whitespace-pre-line">
              {`Actúa como [rol].
              Mi objetivo es: [qué quiero lograr].
              Contexto: [información relevante].
              Restricciones: [límites o condiciones].
              Formato de salida: [cómo quiero la respuesta].`}
            </div>

            <p className="text-gray-400 leading-relaxed">
              Puedes usar esta estructura como base para obtener resultados más
              consistentes.
            </p>
          </section>
        </div>
      </section>

      <ScrollTop />
    </main>
  );
}
