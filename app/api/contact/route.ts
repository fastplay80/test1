import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const { name, email, message, to } = await request.json()

    // Validazione
    if (!name || !email || !message || !to) {
      return NextResponse.json({ error: "Tutti i campi sono obbligatori" }, { status: 400 })
    }

    // Configurazione del trasporto email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Opzioni email
    const mailOptions = {
      from: process.env.MAIL_FROM || "noreply@premioaniellodevita.it",
      to: to,
      subject: `Nuovo messaggio dal sito - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
      html: `
        <h2>Nuovo messaggio dal sito</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Invio email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error)
    return NextResponse.json({ error: "Si è verificato un errore nell'invio dell'email" }, { status: 500 })
  }
}

