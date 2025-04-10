import { cookies } from "next/headers"
import { NextResponse } from "next/server"

// Credenziali di accesso (in un'app reale, queste sarebbero in un database o in variabili d'ambiente)
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "cilentofestival2024"

export async function POST(request: Request) {
  try {
    console.log("API login: Inizio elaborazione richiesta")

    const body = await request.json()
    const { username, password } = body

    console.log(`API login: Tentativo di login per l'utente ${username}`)

    // Verifica delle credenziali
    if (!username || !password) {
      console.log("API login: Username o password mancanti")
      return NextResponse.json({ success: false, message: "Username e password sono obbligatori" }, { status: 400 })
    }

    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      console.log("API login: Credenziali non valide")
      return NextResponse.json({ success: false, message: "Username o password non corretti" }, { status: 401 })
    }

    // Imposta un cookie di sessione
    console.log("API login: Credenziali valide, impostazione cookie di sessione")
    cookies().set("admin-session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 giorno
      path: "/",
    })

    console.log("API login: Cookie impostato con successo")
    return NextResponse.json({ success: true, message: "Login effettuato con successo" })
  } catch (error) {
    console.error("Errore durante il login:", error)
    return NextResponse.json({ success: false, message: "Si è verificato un errore durante il login" }, { status: 500 })
  }
}

