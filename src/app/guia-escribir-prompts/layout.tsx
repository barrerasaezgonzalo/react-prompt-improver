import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía para Escribir Prompts Efectivos",
  description:
    "Aprende paso a paso cómo crear prompts claros y precisos para obtener mejores resultados de la inteligencia artificial.",
};

interface Props {
  children: ReactNode;
}

export default function GuiaLayout({ children }: Props) {
  return <>{children}</>;
}
