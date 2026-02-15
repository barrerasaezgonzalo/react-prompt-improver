"use client";

import { Mode, PromptContextType, Template } from "@/types";
import { createContext, useState } from "react";

export const PromptContext = createContext<PromptContextType | null>(null);

export function PromptProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("rapido");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [extraData, setExtraData] = useState("");
  const [response, setResponse] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState<string | null>("");
  const [role, setRole] = useState("");
  const [objective, setObjective] = useState("");
  const [inputContext, setInputContext] = useState("");
  const [constraints, setConstraints] = useState("");
  const [outputFormat, setOutputFormat] = useState("");
  const [template, setTemplate] = useState<Template | null>(null);

  return (
    <PromptContext.Provider
      value={{
        mode,
        setMode,
        prompt,
        setPrompt,
        loading,
        setLoading,
        extraData,
        setExtraData,
        response,
        setResponse,
        improvedPrompt,
        setImprovedPrompt,
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
        template,
        setTemplate,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
}
