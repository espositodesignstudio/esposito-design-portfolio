import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, interests, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Si prega di compilare tutti i campi obbligatori (Nome, Email e Messaggio)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY non trovata in process.env. Inserisci la tua API key in .env.local");
      return NextResponse.json(
        { error: "Configurazione server incompleta: RESEND_API_KEY non definita in process.env" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formattedInterests = Array.isArray(interests) && interests.length > 0
      ? interests.join(", ")
      : "Nessun interesse specificato";

    const { error } = await resend.emails.send({
      from: "Esposito Design <noreply@espositodesign.me>",
      to: ["espositodesign@outlook.it"],
      subject: `Nuovo contatto dal sito — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0267C1; max-width: 600px; margin: 0 auto; border: 1px solid #0267C1; padding: 24px; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #0267C1; margin-top: 0; font-size: 22px;">Nuovo Contatto dal Sito Web</h2>
          <hr style="border: none; border-top: 1px solid #0267C1; opacity: 0.3; margin: 16px 0;" />
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #0267C1;">${email}</a></p>
          <p><strong>Telefono:</strong> ${phone || "Non fornito"}</p>
          <p><strong>Interessi / Servizi:</strong> ${formattedInterests}</p>
          <hr style="border: none; border-top: 1px solid #0267C1; opacity: 0.3; margin: 16px 0;" />
          <p><strong>Messaggio:</strong></p>
          <div style="white-space: pre-wrap; background-color: #F1E3CB; padding: 16px; border-radius: 12px; color: #0267C1; font-size: 15px;">${message}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error details:", error);
      return NextResponse.json(
        { error: error.message || "Errore durante l'invio dell'email con Resend." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Server Error sending email:", error);
    return NextResponse.json(
      { error: "Errore interno del server durante l'invio dell'email." },
      { status: 500 }
    );
  }
}
