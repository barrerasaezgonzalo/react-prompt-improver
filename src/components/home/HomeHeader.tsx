export function HomeHeader() {
  return (
    <header className="flex flex-col gap-4 max-w-3xl">
      <h1 className="mb-4 text-3xl font-bold text-white mt-6 md:mt-0 leading-tight">
        Mejorador de Prompts con{" "}
        <span className="text-cyan-500">
          Optimización Inteligente para Modelos de IA
        </span>
      </h1>

      <p className="leading-relaxed text-md text-gray-300">
        Convierte ideas simples en{" "}
        <span className="text-cyan-500 font-medium">
          prompts claros, estructurados y altamente efectivos
        </span>{" "}
        para ChatGPT, Claude, Gemini y otros modelos de inteligencia artificial.
      </p>

      <p className="leading-relaxed text-md text-gray-300">
        Nuestra herramienta analiza el contexto, detecta ambigüedades y aplica
        técnicas avanzadas de ingeniería de prompts para ayudarte a obtener{" "}
        <span className="text-cyan-500 font-medium">
          respuestas más precisas, completas y profesionales
        </span>
        , sin necesidad de experiencia técnica.
      </p>

      <p className="leading-relaxed text-md text-gray-300">
        Optimiza tus instrucciones en segundos y mejora tus resultados en IA
        desde el primer intento.
      </p>
    </header>
  );
}
