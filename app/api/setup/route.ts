import { mkdir } from "fs/promises"
import { existsSync } from "fs"
import { join } from "path"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Crea la directory della galleria se non esiste
    const galleryDir = join(process.cwd(), "public", "images", "gallery")
    if (!existsSync(galleryDir)) {
      await mkdir(galleryDir, { recursive: true })
    }

    // Crea la directory temporanea se non esiste
    const tempDir = join(process.cwd(), "public", "images", "gallery", "temp")
    if (!existsSync(tempDir)) {
      await mkdir(tempDir, { recursive: true })
    }

    return NextResponse.json({
      success: true,
      message: "Setup completato con successo",
    })
  } catch (error) {
    console.error("Errore durante il setup:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Si è verificato un errore durante il setup",
      },
      { status: 500 },
    )
  }
}

