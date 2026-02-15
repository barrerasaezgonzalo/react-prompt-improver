"use client";

import { usePrompt } from "@/hooks/usePrompt";
import { FastHeader } from "./FastHeader";
import { OriginalPrompt } from "../Commons/OriginalPrompt";
import { ImprovedPrompt } from "../Commons/improvedPrompt";
import { OptionsPrompt } from "../Commons/OptionsPrompt";

export function Fast() {
  const { prompt } = usePrompt();
  const { improvedPrompt, loading, generate } = usePrompt();

  const handleGenerate = () => {
    generate();
  };

  return (
    <section className="flex-1 p-6 md:p-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <FastHeader />

        <OriginalPrompt prompt={prompt} />

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
