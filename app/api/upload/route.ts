import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"
import { v4 as uuidv4 } from "uuid"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const pathPrefix = (formData.get("path") as string) || "uploads"

    if (!file) {
      return NextResponse.json({ success: false, message: "Nessun file caricato" }, { status: 400 })
    }

    // Crea una directory per il tipo di file se non esiste
    const uploadDir = join(process.cwd(), "public", pathPrefix)

    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Ottieni l'estensione del file
    const fileExt = file.name.split(".").pop()?.toLowerCase() || ""

    // Genera un nome file univoco
    const fileName = `${uuidv4()}.${fileExt}`
    const filePath = join(uploadDir, fileName)

    // Converti il file in un array di byte
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Scrivi il file sul disco
    await writeFile(filePath, buffer)

    // Restituisci il percorso relativo del file
    const relativePath = `/${pathPrefix}/${fileName}`

    return NextResponse.json({
      success: true,
      path: relativePath,
      fileName: fileName,
    })
  } catch (error) {
    console.error("Errore durante l'upload del file:", error)
    return NextResponse.json(
      {
        success: false,
        message: `Errore durante l'upload del file: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
      },
      { status: 500 },
    )
  }
}

