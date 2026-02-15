import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantillas para Prompts y Contenido AI",
  description:
    "Accede a nuestras plantillas listas para usar y optimiza la creación de prompts y contenido con inteligencia artificial de manera rápida y efectiva.",
};

interface Props {
  children: ReactNode;
}

export default function PlantillasLayout({ children }: Props) {
  return <>{children}</>;
}
