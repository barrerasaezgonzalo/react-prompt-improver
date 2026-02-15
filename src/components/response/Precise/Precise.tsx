"use client";

import { OriginalPrompt } from "../Commons/OriginalPrompt";
import { usePrompt } from "@/hooks/usePrompt";
import { ImprovedPrompt } from "../Commons/improvedPrompt";
import { OptionsPrompt } from "../Commons/OptionsPrompt";
import { PreciseHeader } from "./PreciseHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/useAutoResizeTextarea";

export function Precise() {
  const {
    prompt,
    generate,
    improvedPrompt,
    loading,
    role,
    setRole,
    objective,
    setObjective,
    inputContext,
    setInputContext,
    constraints,
    setConstraints,
    outputFormat,
    setOutputFormat,
  } = usePrompt();

  const payload = { role, objective, inputContext, constraints, outputFormat };
  const handleGenerate = () => {
    generate({}, payload);
  };

  const objectiveTextareaRef = useAutoResizeTextarea(objective);
  const inputContextTextareaRef = useAutoResizeTextarea(inputContext);
  const constraintsTextareaRef = useAutoResizeTextarea(constraints);

  return (
    <section className="flex-1 p-6 md:p-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <PreciseHeader />

        <div className="text-gray-300">
          <OriginalPrompt prompt={prompt} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-gray-200">Rol</h2>

          {/* Role */}
          <Input
            value={role}
            onChange={setRole}
            placeHolder="ej: Especialista en Marketing, Consultor, etc."
          />
        </div>

        {/* Objetivo */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-gray-200">Objetivo</h2>
          <Textarea
            ref={objectiveTextareaRef}
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="¿Qué necesitas obtener exactamente?"
            className="min-h-20 resize-none"
          />
        </div>

        {/* Contexto */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-gray-200">Contexto</h2>
          <Textarea
            ref={inputContextTextareaRef}
            value={inputContext}
            onChange={(e) => setInputContext(e.target.value)}
            placeholder="Información relevante, público objetivo, escenario, etc."
            className="min-h-20 resize-none"
          />
        </div>

        {/* Restricciones adicionales */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-gray-200">
            Restricciones adicionales
          </h2>
          <Textarea
            ref={constraintsTextareaRef}
            value={constraints}
            onChange={(e) => setConstraints(e.target.value)}
            placeholder="Ej: evitar tecnicismos, no mencionar marcas, etc"
            className="min-h-20 resize-none"
          />
        </div>

        {/* Formato de salida */}
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-gray-200">Formato de salida</h2>
          <Input
            value={outputFormat}
            onChange={setOutputFormat}
            placeHolder="Ej: Texto estructurado, Json, CSV, etc."
          />
        </div>

        <div className="text-gray-300 mt-4">
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
