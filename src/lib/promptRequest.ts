import { Mode } from "@/types";

export function getRequestConfig(
  mode: Mode,
  prompt: string,
  extraData: unknown,
) {
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
}

export function buildFinalBody(
  body: Record<string, unknown>,
  extraData?: Record<string, unknown>,
  preciseData?: Record<string, unknown>,
) {
  return {
    ...body,
    ...extraData,
    ...preciseData,
  };
}
