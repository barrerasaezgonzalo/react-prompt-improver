import { OriginalPromptProps } from "@/types";

export function OriginalPrompt({ prompt }: OriginalPromptProps) {
  return (
    <div className="text-gray-300">
      <h2 className="font-bold">Prompt Original</h2>
      <p className="mt-2 border-l border-l-gray-400 pl-4 whitespace-pre-wrap">
        {prompt}
      </p>
    </div>
  );
}
