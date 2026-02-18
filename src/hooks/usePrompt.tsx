import { PromptContext } from "@/context/PromptContext";
import { Mode } from "@/types";
import { useContext, useState } from "react";
import { getRequestConfig, buildFinalBody } from "@/lib/promptRequest";
import { postPrompt } from "@/lib/promptService";

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

  const generate = async (
    extraData?: Record<string, unknown>,
    preciseData?: Record<string, unknown>,
  ) => {
    try {
      setLoading(true);
      setError(null);

      const { endpoint, body } = getRequestConfig(
        mode as Mode,
        prompt,
        extraData,
      );

      const finalBody = buildFinalBody(body, extraData, preciseData);

      const data = await postPrompt(endpoint, finalBody);

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
