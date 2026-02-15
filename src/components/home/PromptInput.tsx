import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ModeSelector } from "./ModeSelector";
import { PromptInputProps } from "@/types";
import { useAutoResizeTextarea } from "@/hooks/useAutoResizeTextarea";
import { BrushCleaning } from "lucide-react";

export function PromptInput({
  prompt,
  mode,
  onPromptChange,
  onModeChange,
  onSubmit,
  loading,
  setTemplate,
}: PromptInputProps) {
  const textareaRef = useAutoResizeTextarea(prompt);

  const handleClearPrompt = () => {
    onPromptChange("");
    if (setTemplate) {
      setTemplate?.(null);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-6 flex flex-col gap-4">
      <Textarea
        ref={textareaRef}
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="¿Qué quieres pedirle a la IA?"
        className="min-h-20 resize-none"
      />

      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <ModeSelector value={mode} onChange={onModeChange} />

        <Button
          disabled={!prompt || loading}
          onClick={handleClearPrompt}
          className="bg-white text-zinc-900 hover:bg-zinc-200 ml-auto"
          title="Limpiear"
        >
          <BrushCleaning size={20} />
        </Button>

        <Button
          disabled={!prompt || loading}
          onClick={onSubmit}
          title="Mejorar Propmpt"
          className="bg-white text-zinc-900 hover:bg-zinc-200"
        >
          {loading ? "Mejorando..." : "Mejorar prompt"}
        </Button>
      </div>
    </div>
  );
}
