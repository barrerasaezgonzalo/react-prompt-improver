import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manual de Uso de la Plataforma",
  description:
    "Consulta nuestro manual de uso completo para aprender a manejar la plataforma de manera eficiente y aprovechar todas sus funcionalidades.",
};

interface Props {
  children: ReactNode;
}

export default function ManualDeUsoLayout({ children }: Props) {
  return <>{children}</>;
}
