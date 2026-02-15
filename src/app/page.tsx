"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { HomeHeader } from "@/components/home/HomeHeader";
import { PromptInput } from "@/components/home/PromptInput";
import { useRouter } from "next/navigation";
import { usePrompt } from "@/hooks/usePrompt";
import { FromTemplate } from "@/components/home/FromTemplate";
import { useEffect } from "react";

export default function HomePage() {
  const {
    loading,
    generate,
    mode,
    setMode,
    prompt,
    setPrompt,
    template,
    setTemplate,
  } = usePrompt();
  const router = useRouter();

  const handleGenerate = async () => {
    const result = await generate();
    if (result) {
      router.push("/prompt-response");
    }
  };

  useEffect(() => {
    if (template?.prompt) {
      setPrompt(template.prompt);
    }
  }, [template?.prompt, setPrompt]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <Sidebar />

      <section className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <HomeHeader />

          <FromTemplate template={template} />

          <PromptInput
            prompt={prompt}
            mode={mode}
            onPromptChange={setPrompt}
            onModeChange={setMode}
            onSubmit={handleGenerate}
            loading={loading}
            setTemplate={setTemplate}
          />
        </div>
      </section>
    </main>
  );
}
