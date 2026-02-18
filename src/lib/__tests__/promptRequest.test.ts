import { describe, it, expect } from "vitest";
import { buildFinalBody, getRequestConfig } from "../promptRequest";
import { Mode } from "@/types";

describe("getRequestConfig", () => {
  it("debe retornar endpoint y body correctos para modo 'rapido'", () => {
    const mode = "rapido";
    const prompt = "Mejora este texto";
    const extraData = {};

    const result = getRequestConfig(mode as Mode, prompt, extraData);

    expect(result).toEqual({
      endpoint: "/api/prompt/rapid",
      body: { prompt },
    });
  });

  it("debe retornar endpoint y body correctos para modo 'guiado'", () => {
    const mode: Mode = "guiado";
    const prompt = "Mejora este texto";
    const extraData = { tone: "formal" };

    const result = getRequestConfig(mode, prompt, extraData);

    expect(result).toEqual({
      endpoint: "/api/prompt/guided",
      body: { prompt, extraData },
    });
  });

  it("debe retornar endpoint y body correctos para modo 'preciso'", () => {
    const mode: Mode = "preciso";
    const prompt = "Mejora este texto";
    const extraData = { rol: "Lider", objective: "Crear un manual" };

    const result = getRequestConfig(mode, prompt, extraData);

    expect(result).toEqual({
      endpoint: "/api/prompt/precise",
      body: { prompt, extraData },
    });
  });

  it("debe retornar error con modo invalido", () => {
    const mode = "principiante" as Mode;
    const prompt = "Mejora este texto";
    const extraData = { rol: "Lider", objective: "Crear un manual" };

    expect(() => {
      getRequestConfig(mode, prompt, extraData);
    }).toThrow("Modo inválido");
  });
});

describe("buildFinalBody", () => {
  it("debe retornar solo el body base si no hay extraData ni preciseData", () => {
    const body = { prompt: "Hola" };

    const result = buildFinalBody(body);

    expect(result).toEqual({ prompt: "Hola" });
  });

  it("debe mergear correctamente extraData", () => {
    const body = { prompt: "Hola" };
    const extraData = { tone: "formal" };

    const result = buildFinalBody(body, extraData);

    expect(result).toEqual({
      prompt: "Hola",
      tone: "formal",
    });
  });

  it("debe mergear correctamente preciseData", () => {
    const body = { prompt: "Hola" };
    const preciseData = { format: "markdown" };

    const result = buildFinalBody(body, undefined, preciseData);

    expect(result).toEqual({
      prompt: "Hola",
      format: "markdown",
    });
  });

  it("preciseData debe sobrescribir extraData y body si hay conflictos", () => {
    const body = { prompt: "Hola", level: "basico" };
    const extraData = { level: "intermedio" };
    const preciseData = { level: "avanzado" };

    const result = buildFinalBody(body, extraData, preciseData);

    expect(result).toEqual({
      prompt: "Hola",
      level: "avanzado",
    });
  });
});
