import { PromptContext } from "@/context/PromptContext";
import { Mode } from "node:fs";
import { useContext, useState } from "react";

export function usePrompt() {
  const context = useContext(PromptContext);

  if (!context) {
    throw new Error("usePrompt debe usarse dentro de PromptProvider");
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    prompt,
    mode,
    extraData,
    setExtraData,
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
  } = context;

  const getRequestConfig = (mode: Mode) => {
    switch (mode) {
      case "rapido":
        return {
          endpoint: "/api/prompt/rapid",
          body: { prompt },
        };

      case "guiado":
        return {
          endpoint: "/api/prompt/guided",
          body: { prompt, extraData },
        };

      case "preciso":
        return {
          endpoint: "/api/prompt/precise",
          body: { prompt, extraData },
        };

      default:
        throw new Error("Modo inválido");
    }
  };

  const generate = async (
    extraData?: Record<string, unknown>,
    preciseData?: Record<string, unknown>,
  ) => {
    try {
      setLoading(true);
      setError(null);
      const { endpoint, body } = getRequestConfig(mode);
      const finalBody = { ...body, ...extraData, ...preciseData };
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalBody),
      });
      const data = await response.json();
      const parsedResult = JSON.parse(data.result);
      setImprovedPrompt(parsedResult.prompt);

      return data.result;
    } catch (err) {
      console.log(err);
      setError("Error al generar");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    ...context,
    generate,
    loading,
    error,
    extraData,
    setExtraData,
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
  };
}
