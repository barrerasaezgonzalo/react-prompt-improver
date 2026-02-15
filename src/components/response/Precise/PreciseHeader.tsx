export function PreciseHeader() {
  return (
    <>
      {" "}
      <h1 className="text-3xl font-bold text-white">
        Construye tu prompt (modo preciso)
      </h1>
      <p className="leading-relaxed text-md text-gray-400">
        Define con precisión el rol, el objetivo, el contexto, el formato de
        salida, las restricciones y otros elementos relevantes. Al hacerlo,
        podrás{" "}
        <span className="text-cyan-500">
          {" "}
          generar un prompt completamente personalizado
        </span>
        , adaptado a tus necesidades específicas y diseñado para producir
        resultados claros, efectivos y alineados con tus objetivos.
      </p>
      <p className="leading-relaxed text-md text-gray-400 mt-4">
        Cuanto más detalle proporciones, mayor será la calidad y precisión del
        prompt final.
      </p>
    </>
  );
}
