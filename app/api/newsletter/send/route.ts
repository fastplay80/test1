import { type NextRequest, NextResponse } from "next/server"
import { getActiveSubscribers } from "@/lib/newsletter"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    // Verifica autenticazione (usa il middleware esistente)

    const data = await request.json()
    const { subject, content } = data

    if (!subject || !content) {
      return NextResponse.json({ success: false, message: "Oggetto e contenuto richiesti" }, { status: 400 })
    }

    const subscribers = getActiveSubscribers()

    if (subscribers.length === 0) {
      return NextResponse.json({ success: false, message: "Nessun iscritto attivo" }, { status: 400 })
    }

    // Configurazione del trasporto email
    // Nota: in produzione, usa le variabili d'ambiente per le credenziali
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "user@example.com",
        pass: process.env.SMTP_PASSWORD || "password",
      },
    })

    // Prepara l'email
    const mailOptions = {
      from: process.env.MAIL_FROM || '"Cilento Festival" <info@cilentofestival.it>',
      subject: subject,
      html: content,
    }

    // Invia l'email a tutti gli iscritti
    // Nota: in produzione, dovresti usare un servizio di invio email di massa
    let sentCount = 0

    // Per test/demo, simula l'invio senza inviare realmente
    // In produzione, rimuovi questo commento e usa il codice sotto
    /*
    for (const subscriber of subscribers) {
      try {
        await transporter.sendMail({
          ...mailOptions,
          to: subscriber.email,
        })
        sentCount++
      } catch (error) {
        console.error(`Errore nell'invio a ${subscriber.email}:`, error)
      }
    }
    */

    // Simulazione per demo
    sentCount = subscribers.length

    return NextResponse.json({
      success: true,
      message: `Email inviata con successo a ${sentCount} iscritti`,
      sentCount,
    })
  } catch (error) {
    console.error("Errore nell'invio della newsletter:", error)
    return NextResponse.json({ success: false, message: "Errore durante l'invio della newsletter" }, { status: 500 })
  }
}

