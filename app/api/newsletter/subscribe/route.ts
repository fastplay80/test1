import { type NextRequest, NextResponse } from "next/server"
import { addSubscriber } from "@/lib/newsletter"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { email, privacyConsent } = data

    if (!email) {
      return NextResponse.json({ success: false, message: "Email richiesta" }, { status: 400 })
    }

    if (!privacyConsent) {
      return NextResponse.json({ success: false, message: "Consenso alla privacy policy richiesto" }, { status: 400 })
    }

    // Validazione email semplice
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Email non valida" }, { status: 400 })
    }

    const result = addSubscriber(email, privacyConsent)

    if (result.success) {
      return NextResponse.json(result, { status: 200 })
    } else {
      return NextResponse.json(result, { status: 400 })
    }
  } catch (error) {
    console.error("Errore nella richiesta di iscrizione:", error)
    return NextResponse.json(
      { success: false, message: "Errore durante l'elaborazione della richiesta" },
      { status: 500 },
    )
  }
}

