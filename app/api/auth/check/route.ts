import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const adminSession = cookies().get("admin-session")?.value

    console.log(`API check: Verifica autenticazione, cookie admin-session: ${adminSession || "non presente"}`)

    return NextResponse.json({
      authenticated: adminSession === "authenticated",
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Errore durante la verifica dell'autenticazione:", error)
    return NextResponse.json(
      {
        authenticated: false,
        error: "Si è verificato un errore durante la verifica dell'autenticazione",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}

