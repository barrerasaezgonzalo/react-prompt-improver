"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  BookText,
  ClipboardList,
  FileStack,
  GitBranch,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", icon: <Sparkles size={15} />, label: "Mejorar Prompt" },
    {
      href: "/guia-escribir-prompts",
      icon: <BookText size={15} />,
      label: "Guía para escribir prompts",
    },
    {
      href: "/manual-de-uso",
      icon: <ClipboardList size={15} />,
      label: "Manual de uso",
    },
    { href: "/plantillas", icon: <FileStack size={15} />, label: "Plantillas" },
  ];

  return (
    <>
      <div className="md:hidden fixed top-3 left-4 z-[999]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 bg-zinc-900 rounded  cursor-pointer"
          aria-label={isOpen ? "Cerrar menú" : "Mostrar menú"}
        >
          {isOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
      </div>

      <aside className="hidden md:flex w-64 border-r border-zinc-800 px-6 py-4 flex-col gap-6 bg-zinc-900">
        <div className="text-xl font-semibold text-white border-b border-gray-300 pb-2">
          <Image
            src="/logo.avif"
            alt="Prompt Improver"
            width={100}
            height={150}
            priority
            className="object-contain"
          />
          <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-3">
            Prompt Improver
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-gray-300 py-0.5 transition flex gap-1 items-center"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="fixed bottom-5">
          <Link
            href="https://github.com/barrerasaezgonzalo/react-prompt-improver"
            target="_blank"
            aria-label="Repositorio en GitHub"
          >
            <GitBranch size={15} />
          </Link>
        </div>
      </aside>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity md:hidden z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 px-6 py-4 flex flex-col gap-6 bg-zinc-900 md:hidden transform transition-transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-xl font-semibold text-white border-b border-gray-300 pb-2">
          <Image
            src="/logo.avif"
            alt="Prompt Improver"
            width={100}
            height={150}
            priority
            className="object-contain"
          />
          <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-3">
            Prompt Improver
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-gray-300 py-0.5 transition flex gap-1 items-center"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            href="https://github.com/barrerasaezgonzalo/react-prompt-improver"
            target="_blank"
            aria-label="Repositorio en GitHub"
          >
            <GitBranch size={15} />
          </Link>
        </div>
      </aside>
    </>
  );
}
