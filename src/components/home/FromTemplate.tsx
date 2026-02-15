import { FromTemplateProps } from "@/types";

export function FromTemplate({ template }: FromTemplateProps) {
  return (
    <div>
      {template?.title ? (
        <div className="leading-relaxed text-md text-gray-300 mb-2 border-l border-l-gray-300 border-l-2 pl-4">
          Has cargado la plantilla{" "}
          <span className="text-cyan-500 font-medium">{template?.title}</span>.{" "}
          <span className="font-bold">
            Edita el contenido dentro de los [corchetes] con tus datos reales
          </span>{" "}
          y luego haz clic en{" "}
          <span className="text-cyan-500 font-medium">Mejorar Prompt.</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
