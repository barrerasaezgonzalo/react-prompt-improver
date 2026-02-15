interface ImprovedPromptProps {
  improvedPrompt: string;
}
export function ImprovedPrompt({ improvedPrompt }: ImprovedPromptProps) {
  return (
    <>
      <h2 className="font-bold">Prompt Mejorado</h2>
      <p className="mt-2 border-gray-400 border-l-4 bg-zinc-900 p-4 rounded  whitespace-pre-wrap">
        {improvedPrompt}
      </p>
    </>
  );
}
