import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo.avif"
            alt="Prompt Improver"
            width={100}
            height={150}
            priority
            className="object-contain"
          />
          <h1 className="text-3xl font-bold">404</h1>
          <p className="text-zinc-400">
            La página que buscas no existe o fue movida.
          </p>
        </div>

        {/* Navegación útil */}
        <div className="flex flex-col gap-3 w-full">
          <Link
            href="/"
            className="bg-white text-zinc-900 py-2 rounded-md hover:bg-zinc-200 transition"
          >
            Ir al Mejorador de Prompts
          </Link>

          <Link
            href="/guia-escribir-prompts"
            className="border border-zinc-700 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            Ver Guía para escribir mejores prompts
          </Link>

          <Link
            href="/manual-de-uso"
            className="border border-zinc-700 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            Manual de uso
          </Link>

          <Link
            href="/plantillas"
            className="border border-zinc-700 py-2 rounded-md hover:bg-zinc-800 transition"
          >
            Explorar plantillas
          </Link>
        </div>
      </div>
    </main>
  );
}
