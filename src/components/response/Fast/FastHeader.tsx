import Link from "next/link";

export function FastHeader() {
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-white">
        Este es tu prompt mejorado (modo rápido)
      </h1>

      <p className="leading-relaxed text-md text-gray-400">
        A partir de tu texto original,{" "}
        <span className="text-cyan-500">
          hemos generado una versión más clara y estructurada
        </span>{" "}
        para que la IA comprenda mejor tu intención.
      </p>

      <p className="leading-relaxed text-md text-gray-400 mb-4">
        Este resultado corresponde al modo rápido. Si necesitas mayor detalle,
        contexto o reglas específicas,{" "}
        <Link href="/">
          <span className="text-cyan-500 underline underline-offset-4">
            puedes probar otros modos de mejora.
          </span>
        </Link>
      </p>
    </>
  );
}
