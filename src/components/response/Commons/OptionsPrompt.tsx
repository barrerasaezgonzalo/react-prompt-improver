import { OptionsPromptProps } from "@/types";
import { RefreshCcw, Check, Copy } from "lucide-react";
import { useState } from "react";

export function OptionsPrompt({
  generate,
  loading,
  improvedPrompt,
}: OptionsPromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(improvedPrompt ?? "");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center mt-4 gap-4">
      <button
        onClick={generate}
        disabled={loading}
        className="flex items-center gap-2 cursor-pointer! text-sm text-gray-400 hover:text-cyan-500 transition disabled:opacity-50"
        aria-label="Mejorar nuevamente"
      >
        <RefreshCcw size={15} />
        {loading ? "Mejorando..." : "Mejorar nuevamente"}
      </button>

      <button
        onClick={handleCopy}
        className="flex items-center gap-1 cursor-pointer!  text-sm text-gray-400 hover:text-cyan-500 transition"
        aria-label="Copiar prompt mejorado"
      >
        {copied ? <Check size={15} /> : <Copy size={15} />}
        <span className="text-xs">{copied ? "Copiado" : "Copiar"}</span>
      </button>
    </div>
  );
}
