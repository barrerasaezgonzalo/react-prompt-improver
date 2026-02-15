import Link from "next/link";

export function GuidedHeader() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white">
        Este es tu prompt mejorado (modo guiado)
      </h1>

      <p className="leading-relaxed text-md text-gray-400">
        En el modo guiado puedes{" "}
        <span className="text-cyan-500">agregar contexto adicional</span> para
        ajustar mejor el resultado a tus necesidades.
      </p>

      <p className="leading-relaxed text-md text-gray-400">
        Si necesitas aún más control, reglas estrictas o un formato específico,{" "}
        <Link href="/">
          <span className="text-cyan-500">
            puedes probar los modos avanzados.
          </span>
        </Link>
      </p>
    </>
  );
}
