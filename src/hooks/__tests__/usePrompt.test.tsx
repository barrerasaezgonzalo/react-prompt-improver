import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { usePrompt } from "../usePrompt";
import { PromptContext } from "@/context/PromptContext";
import { PromptContextType } from "@/types";
import { getRequestConfig, buildFinalBody } from "@/lib/promptRequest";
import { postPrompt } from "@/lib/promptService";

vi.mock("@/lib/promptRequest", () => ({
  getRequestConfig: vi.fn(),
  buildFinalBody: vi.fn(),
}));

vi.mock("@/lib/promptService", () => ({
  postPrompt: vi.fn(),
}));

function createContextValue(
  overrides: Partial<PromptContextType> = {},
): PromptContextType {
  return {
    mode: "guiado",
    setMode: vi.fn(),
    prompt: "prompt inicial",
    setPrompt: vi.fn(),
    loading: false,
    setLoading: vi.fn(),
    response: "",
    setResponse: vi.fn(),
    extraData: "",
    setExtraData: vi.fn(),
    improvedPrompt: null,
    setImprovedPrompt: vi.fn(),
    role: "",
    setRole: vi.fn(),
    objective: "",
    setObjective: vi.fn(),
    inputContext: "",
    setInputContext: vi.fn(),
    constraints: "",
    setConstraints: vi.fn(),
    outputFormat: "",
    setOutputFormat: vi.fn(),
    template: null,
    setTemplate: vi.fn(),
    ...overrides,
  };
}

describe("usePrompt", () => {
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.clearAllMocks();
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it("lanza error si se usa fuera del provider", () => {
    expect(() => renderHook(() => usePrompt())).toThrow(
      "usePrompt debe usarse dentro de PromptProvider",
    );
  });

  it("generate construye request, guarda prompt mejorado y retorna result", async () => {
    const contextValue = createContextValue();
    const requestConfig = {
      endpoint: "/api/prompt/guided",
      body: { prompt: "prompt inicial", extraData: { tone: "formal" } },
    };
    const finalBody = { prompt: "prompt inicial", tone: "formal" };

    vi.mocked(getRequestConfig).mockReturnValue(requestConfig);
    vi.mocked(buildFinalBody).mockReturnValue(finalBody);
    vi.mocked(postPrompt).mockResolvedValue({
      result: JSON.stringify({ prompt: "prompt mejorado" }),
    });

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <PromptContext.Provider value={contextValue}>
        {children}
      </PromptContext.Provider>
    );

    const { result } = renderHook(() => usePrompt(), { wrapper });

    let response: string | null = null;
    await act(async () => {
      response = await result.current.generate({ tone: "formal" });
    });

    expect(getRequestConfig).toHaveBeenCalledWith("guiado", "prompt inicial", {
      tone: "formal",
    });
    expect(buildFinalBody).toHaveBeenCalledWith(
      requestConfig.body,
      { tone: "formal" },
      undefined,
    );
    expect(postPrompt).toHaveBeenCalledWith("/api/prompt/guided", finalBody);
    expect(contextValue.setImprovedPrompt).toHaveBeenCalledWith(
      "prompt mejorado",
    );
    expect(response).toBe(JSON.stringify({ prompt: "prompt mejorado" }));
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it("generate retorna null y setea error cuando postPrompt falla", async () => {
    const contextValue = createContextValue();

    vi.mocked(getRequestConfig).mockReturnValue({
      endpoint: "/api/prompt/guided",
      body: { prompt: "prompt inicial", extraData: {} },
    });
    vi.mocked(buildFinalBody).mockReturnValue({ prompt: "prompt inicial" });
    vi.mocked(postPrompt).mockRejectedValue(new Error("network"));

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <PromptContext.Provider value={contextValue}>
        {children}
      </PromptContext.Provider>
    );

    const { result } = renderHook(() => usePrompt(), { wrapper });

    let response: string | null = "placeholder";
    await act(async () => {
      response = await result.current.generate();
    });

    expect(response).toBeNull();
    expect(contextValue.setImprovedPrompt).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledOnce();
    expect(result.current.error).toBe("Error al generar");
    expect(result.current.loading).toBe(false);
  });
});
