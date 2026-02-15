"use client";

import { usePrompt } from "@/hooks/usePrompt";
import { GuidedHeader } from "./GuidedHeader";
import { useAutoResizeTextarea } from "@/hooks/useAutoResizeTextarea";
import { Textarea } from "@/components/ui/textarea";
import { OriginalPrompt } from "../Commons/OriginalPrompt";
import { ImprovedPrompt } from "../Commons/improvedPrompt";
import { OptionsPrompt } from "../Commons/OptionsPrompt";

export function Guided() {
  const { improvedPrompt, prompt, generate, extraData, setExtraData, loading } =
    usePrompt();

  const handleGenerate = () => {
    generate({ extraData: extraData });
  };

  const textareaRef = useAutoResizeTextarea(extraData);

  return (
    <section className="flex-1 p-6 md:p-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <GuidedHeader />

        <OriginalPrompt prompt={prompt} />

        <div className="flex flex-col gap-2 mt-2">
          <h2 className="text-gray-300 font-bold">
            Contexto adicional (opcional)
          </h2>
          <Textarea
            ref={textareaRef}
            value={extraData}
            onChange={(e) => setExtraData(e.target.value)}
            placeholder="Ej: público objetivo, tono, formato esperado, restricciones…"
            className="min-h-20 resize-none"
          />
        </div>

        <div className="text-gray-300">
          <ImprovedPrompt improvedPrompt={improvedPrompt ?? ""} />

          <OptionsPrompt
            generate={handleGenerate}
            loading={loading}
            improvedPrompt={improvedPrompt}
          />
        </div>
      </div>
    </section>
  );
}
