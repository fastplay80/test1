"use server"

import { mkdir, writeFile } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"
import * as AdmZip from "adm-zip"
import { v4 as uuidv4 } from "uuid"

// Funzione per verificare se un file è un'immagine
function isImageFile(filename: string): boolean {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"]
  const ext = filename.toLowerCase().substring(filename.lastIndexOf("."))
  return imageExtensions.includes(ext)
}

export async function uploadZipFile(formData: FormData) {
  try {
    // Ottieni il file ZIP dal FormData
    const zipFile = formData.get("zipFile") as File
    if (!zipFile) {
      return { success: false, error: "Nessun file caricato" }
    }

    // Converti il file in un buffer
    const arrayBuffer = await zipFile.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Crea una directory temporanea per l'estrazione
    const tempDir = join(process.cwd(), "public", "images", "gallery", "temp")
    if (!existsSync(tempDir)) {
      await mkdir(tempDir, { recursive: true })
    }

    // Salva il file ZIP temporaneamente
    const zipPath = join(tempDir, `${Date.now()}_${zipFile.name}`)
    await writeFile(zipPath, buffer)

    // Estrai il file ZIP
    const zip = new AdmZip(zipPath)
    const zipEntries = zip.getEntries()

    // Filtra solo i file immagine
    const imageEntries = zipEntries.filter((entry) => !entry.isDirectory && isImageFile(entry.name))

    // Crea la directory di destinazione se non esiste
    const galleryDir = join(process.cwd(), "public", "images", "gallery")
    if (!existsSync(galleryDir)) {
      await mkdir(galleryDir, { recursive: true })
    }

    // Estrai e salva le immagini
    let extractedCount = 0
    for (const entry of imageEntries) {
      const entryData = entry.getData()
      const uniqueFilename = `${Date.now()}_${uuidv4()}${entry.name.substring(entry.name.lastIndexOf("."))}`
      const imagePath = join(galleryDir, uniqueFilename)

      await writeFile(imagePath, entryData)
      extractedCount++
    }

    return {
      success: true,
      extractedFiles: extractedCount,
      message: `Sono state estratte ${extractedCount} immagini con successo.`,
    }
  } catch (error) {
    console.error("Errore durante l'elaborazione del file ZIP:", error)
    return {
      success: false,
      error: "Si è verificato un errore durante l'elaborazione del file ZIP.",
    }
  }
}

