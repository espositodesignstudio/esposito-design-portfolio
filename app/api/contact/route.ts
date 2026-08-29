import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interests, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Si prega di compilare i campi obbligatori." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Return success with mock notification if RESEND_API_KEY is not configured yet locally
      console.log("Mock Email Received:", { name, email, phone, interests, message });
      return NextResponse.json({ success: true, mock: true });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Esposito Design Portfolio <onboarding@resend.dev>",
      to: "espositodesign.dev@gmail.com",
      subject: `Nuovo contatto da ${name} - Esposito Design`,
      html: `
        <h2>Nuova richiesta di contatto dal Portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${phone || "Non fornito"}</p>
        <p><strong>Interessi:</strong> ${interests?.join(", ") || "Generico"}</p>
        <hr/>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend API Error:", error);
    return NextResponse.json(
      { error: "Errore durante l'invio dell'email." },
      { status: 500 }
    );
  }
}
