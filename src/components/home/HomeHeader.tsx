export function HomeHeader() {
  return (
    <header className="flex flex-col gap-3">
      <h1 className="mb-4 text-3xl font-bold text-white">
        Mejora tus prompts <span className="text-cyan-500">en segundos</span>
      </h1>

      <p className="leading-relaxed text-md text-gray-400 mb-2">
        Escribe lo que quieres pedirle a la AI y deja que nuestra herramienta lo
        transforme en un prompt{" "}
        <span className="text-cyan-500">claro, estructurado y optimizado</span>.
      </p>
      <p className="leading-relaxed text-md text-gray-400">
        A través de un proceso simple y guiado, el mejorador analiza tu idea
        inicial, detecta falta de contexto o ambigüedades y te ayuda a{" "}
        <span className="text-cyan-500">
          construir instrucciones más precisas y efectivas
        </span>
        , para que obtengas mejores resultados en tus interacciones con modelos
        de lenguaje, sin importar tu nivel de experiencia.
      </p>
    </header>
  );
}
