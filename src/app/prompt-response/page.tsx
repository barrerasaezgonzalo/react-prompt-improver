"use client";

import { Sidebar } from "@/components/layout/Sidebar";
import { Fast } from "@/components/response/Fast/Fast";
import { Guided } from "@/components/response/Guided/Guided";
import { Precise } from "@/components/response/Precise/Precise";
import { usePrompt } from "@/hooks/usePrompt";
import { useEffect } from "react";
import { ScrollTop } from "@/components/ui/scrollTop";

const MODE_COMPONENTS = {
  rapido: Fast,
  guiado: Guided,
  preciso: Precise,
};

export default function PromptResponse() {
  const { mode, prompt } = usePrompt();

  useEffect(() => {
    if (!prompt) {
      window.location.replace("/");
    }
  }, [prompt]);

  if (!mode || !prompt) return null;

  const Component = MODE_COMPONENTS[mode];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <Sidebar />
      <Component />
      <ScrollTop />
    </main>
  );
}
