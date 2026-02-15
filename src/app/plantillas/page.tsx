"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { ScrollTop } from "@/components/ui/scrollTop";
import { TEMPLATES } from "@/constants";
import { usePrompt } from "@/hooks/usePrompt";
import { Template } from "@/types";
import { useRouter } from "next/navigation";

export default function Plantillas() {
  const { setTemplate } = usePrompt();
  const router = useRouter();

  const handleLoadTemplate = async (template: Template) => {
    setTemplate(template);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <Sidebar />

      <section className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white mt-6 md:mt-0">
              Plantillas disponibles
            </h1>
            <p className="text-gray-400">
              Selecciona la plantilla que más se adapte a tu necesidad. Se
              cargará un prompt inicial editable donde solo debes reemplazar el
              contenido dentro de los [corchetes].
            </p>
          </header>

          <div className="flex flex-col divide-y divide-zinc-800">
            {TEMPLATES.map((template) => (
              <article key={template.id} className="py-6 flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-white">
                  {template.title}
                </h2>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {template.description}
                </p>

                <button
                  onClick={() => {
                    handleLoadTemplate(template);
                  }}
                  className="text-sm text-cyan-500 hover:underline w-fit cursor-pointer"
                >
                  Usar plantilla →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ScrollTop />
    </main>
  );
}
