import Link from "next/link";
import Image from "next/image";
import {
  BookText,
  ClipboardList,
  FileStack,
  GitBranch,
  Sparkles,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 px-6 py-4 hidden md:flex flex-col gap-6 bg-zinc-900">
      <div className="text-xl font-semibold text-white border-b border-gray-300">
        <Image
          src="/logo.avif"
          alt="Prompt Improver"
          width={100}
          height={150}
          priority
          className="object-contain"
        />
        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-3 pb-2">
          Prompt Improver
        </p>
      </div>

      <nav className="flex flex-col gap-2 text-sm">
        <Link
          href="/"
          className="text-zinc-400 hover:text-gray-300 py-0.5 transition flex gap-1 items-center"
        >
          <Sparkles size={15} />
          Mejorar Prompt
        </Link>

        <Link
          href="/guia-escribir-prompts"
          className="text-zinc-400 hover:text-gray-300 py-0.5 transition flex gap-1 items-center"
        >
          <BookText size={15} />
          Guía para escribir prompts
        </Link>
        <Link
          href="/manual-de-uso"
          className="text-zinc-400 hover:text-gray-300 py-0.5 transition flex gap-1 items-center"
        >
          <ClipboardList size={15} />
          Manual de uso
        </Link>

        <Link
          href="/plantillas"
          className="text-zinc-400 hover:text-gray-300 py-0.5 transition flex gap-1 items-center"
        >
          <FileStack size={15} />
          Plantillas
        </Link>
      </nav>

      <div className="fixed bottom-5">
        <Link href="https://github.com/barrerasaezgonzalo/react-prompt-improver" target="_blank"  aria-label="Repositorio en GitHub"> 
          <GitBranch size={15} />
        </Link>
      </div>
    </aside>
  );
}
