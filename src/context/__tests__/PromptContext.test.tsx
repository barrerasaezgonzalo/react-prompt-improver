import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useContext, type ReactNode } from "react";
import { PromptContext, PromptProvider } from "../PromptContext";
import { type Template } from "@/types";

function wrapper({ children }: { children: ReactNode }) {
  return <PromptProvider>{children}</PromptProvider>;
}

describe("PromptProvider", () => {
  it("expone valores iniciales esperados", () => {
    const { result } = renderHook(() => useContext(PromptContext), { wrapper });

    expect(result.current).not.toBeNull();

    if (!result.current) {
      throw new Error("PromptContext no disponible");
    }

    expect(result.current.mode).toBe("rapido");
    expect(result.current.prompt).toBe("");
    expect(result.current.loading).toBe(false);
    expect(result.current.extraData).toBe("");
    expect(result.current.response).toBe("");
    expect(result.current.improvedPrompt).toBe("");
    expect(result.current.role).toBe("");
    expect(result.current.objective).toBe("");
    expect(result.current.inputContext).toBe("");
    expect(result.current.constraints).toBe("");
    expect(result.current.outputFormat).toBe("");
    expect(result.current.template).toBeNull();
  });

  it("actualiza el estado mediante sus setters", () => {
    const { result } = renderHook(() => useContext(PromptContext), { wrapper });

    if (!result.current) {
      throw new Error("PromptContext no disponible");
    }

    const template: Template = {
      id: "tpl-1",
      title: "Plantilla",
      description: "Descripcion",
      href: "/plantillas/1",
      prompt: "Prompt base",
    };

    act(() => {
      result.current?.setMode("preciso");
      result.current?.setPrompt("Nuevo prompt");
      result.current?.setLoading(true);
      result.current?.setExtraData("extra");
      result.current?.setResponse("respuesta");
      result.current?.setImprovedPrompt("mejorado");
      result.current?.setRole("Developer");
      result.current?.setObjective("Optimizar");
      result.current?.setInputContext("React app");
      result.current?.setConstraints("Sin markdown");
      result.current?.setOutputFormat("JSON");
      result.current?.setTemplate(template);
    });

    expect(result.current.mode).toBe("preciso");
    expect(result.current.prompt).toBe("Nuevo prompt");
    expect(result.current.loading).toBe(true);
    expect(result.current.extraData).toBe("extra");
    expect(result.current.response).toBe("respuesta");
    expect(result.current.improvedPrompt).toBe("mejorado");
    expect(result.current.role).toBe("Developer");
    expect(result.current.objective).toBe("Optimizar");
    expect(result.current.inputContext).toBe("React app");
    expect(result.current.constraints).toBe("Sin markdown");
    expect(result.current.outputFormat).toBe("JSON");
    expect(result.current.template).toEqual(template);
  });
});
