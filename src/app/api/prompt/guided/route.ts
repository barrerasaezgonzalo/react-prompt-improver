import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, extraData } = body;

    if (!prompt) {
      return NextResponse.json({ error: "Prompt requerido" }, { status: 400 });
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            `
            Eres un Senior Prompt Engineer experto en arquitectura de prompts.
            Tu tarea es transformar la entrada del usuario en un prompt operativo de alto rendimiento.
            Reglas:
            - Devuelve únicamente un JSON válido con la estructura:
              { "prompt": "…" } No incluyas mas nodos que ese 
            - Haz que el prompt sea **detallado y extenso**, incluyendo ejemplos, pasos y contexto razonable.
            - No agregues explicaciones ni texto extra.
            - Reescribe el prompt de forma única, variando la estructura y palabras, manteniendo el mismo objetivo. 
             ${extraData}? '\nContexto adicional: ${extraData} : '' } 
            ` +
            " | " +
            new Date().getTime(),
        },
        {
          role: "user",
          content: prompt,
        },
      ],
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
