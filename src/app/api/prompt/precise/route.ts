import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, role, objective, inputContext, constraints, outputFormat } =
      body;

    if (!prompt) {
      return NextResponse.json({ error: "Prompt requerido" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
            Eres un Senior Prompt Engineer experto en arquitectura de prompts.
            Tu tarea es transformar la entrada del usuario en un prompt operativo de alto rendimiento.
            Reglas:
            - Devuelve únicamente un JSON válido con la estructura:
              { "prompt": "…" }
            - La salida debe ser **solo JSON válido**, sin explicación, sin markdown, sin texto adicional. 
            - El JSON debe tener una sola clave "prompt" y el valor debe ser la descripción detallada.
            - Haz que el prompt sea **detallado y extenso**, incluyendo ejemplos, pasos y contexto razonable.
            - No agregues explicaciones ni texto extra. 
          ${role ? `El prompt debe indicar que debe "Actúar como ${role}.` : ""}
          ${objective ? `El objetivo del prompt es: ${objective}.` : ""}
          ${inputContext ? `El prompt debe considerar el siguiente contexto adicional: ${inputContext}.` : ""}
          ${constraints ? `El prompt debe indicar que se Aplican las siguientes restricciones: ${constraints}.` : ""}
          ${outputFormat ? `El prompt debe indicar que la salida final del modelo objetivo esté en este formato: ${outputFormat}.` : ""}
          \nID: ${Date.now()}
            `.trim(),
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1.0,
      seed: Math.floor(Math.random() * 1_000_000),
    });

    const improved = completion.choices[0]?.message?.content;

    return NextResponse.json({ result: improved });
  } catch (error) {
    console.error("GROQ ERROR:", error);

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
