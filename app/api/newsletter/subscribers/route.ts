import { type NextRequest, NextResponse } from "next/server"
import { getSubscribers, removeSubscriber, exportSubscribersToCSV } from "@/lib/newsletter"
import { isAuthenticated } from "@/lib/auth"

export async function GET(request: NextRequest) {
  // Verifica autenticazione
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ success: false, message: "Non autorizzato" }, { status: 401 })
  }

  const format = request.nextUrl.searchParams.get("format")

  if (format === "csv") {
    const csv = exportSubscribersToCSV()
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=newsletter-subscribers.csv",
      },
    })
  }

  const subscribers = getSubscribers()
  return NextResponse.json({ success: true, subscribers })
}

export async function DELETE(request: NextRequest) {
  // Verifica autenticazione
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ success: false, message: "Non autorizzato" }, { status: 401 })
  }

  try {
    const data = await request.json()
    const { id } = data

    if (!id) {
      return NextResponse.json({ success: false, message: "ID richiesto" }, { status: 400 })
    }

    const result = removeSubscriber(id)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Errore nella rimozione dell'iscritto:", error)
    return NextResponse.json(
      { success: false, message: "Errore durante l'elaborazione della richiesta" },
      { status: 500 },
    )
  }
}

