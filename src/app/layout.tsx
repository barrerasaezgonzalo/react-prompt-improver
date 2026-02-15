import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PromptProvider } from "@/context/PromptContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prompt Improver",
  description: "Descubre cómo nuestro mejorador de prompts puede ayudarte a mejorar tus resultados de IA con algoritmos avanzados y técnicas de optimización inteligentes. Potencia ChatGPT y otros modelos en segundos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="robots" content="index, follow" />
         <script async src="https://www.googletagmanager.com/gtag/js?id=G-7VQE9GZRD4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7VQE9GZRD4');
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PromptProvider>{children}</PromptProvider>
      </body>
    </html>
  );
}
