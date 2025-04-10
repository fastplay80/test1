"use server"

import { readdir, unlink } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

// Funzione per verificare se un file è un'immagine
function isImageFile(filename: string): boolean {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg"]
  const ext = filename.toLowerCase().substring(filename.lastIndexOf("."))
  return imageExtensions.includes(ext)
}

export async function getGalleryImages() {
  try {
    const galleryDir = join(process.cwd(), "public", "images", "gallery")

    // Verifica se la directory esiste
    if (!existsSync(galleryDir)) {
      return {
        success: false,
        error: "La directory della galleria non esiste",
      }
    }

    // Leggi i file nella directory
    const files = await readdir(galleryDir)

    // Filtra solo i file immagine
    const imageFiles = files.filter((file) => isImageFile(file))

    // Crea l'array di oggetti immagine
    const images = imageFiles.map((file) => {
      const filePath = `/images/gallery/${file}`
      return {
        src: filePath,
        alt: `Immagine della galleria: ${file.split("_").pop()?.split(".")[0] || file}`,
        width: 800, // Dimensioni predefinite
        height: 600,
      }
    })

    return {
      success: true,
      images,
    }
  } catch (error) {
    console.error("Errore nel recupero delle immagini della galleria:", error)
    return {
      success: false,
      error: "Si è verificato un errore nel recupero delle immagini della galleria",
      images: [],
    }
  }
}

export async function deleteImage(imagePath: string) {
  try {
    // Estrai il nome del file dal percorso
    const filename = imagePath.split("/").pop()
    if (!filename) {
      return { success: false, error: "Percorso immagine non valido" }
    }

    // Costruisci il percorso completo del file
    const filePath = join(process.cwd(), "public", imagePath)

    // Verifica se il file esiste
    if (!existsSync(filePath)) {
      return { success: false, error: "L'immagine non esiste" }
    }

    // Elimina il file
    await unlink(filePath)

    return { success: true }
  } catch (error) {
    console.error("Errore durante l'eliminazione dell'immagine:", error)
    return {
      success: false,
      error: "Si è verificato un errore durante l'eliminazione dell'immagine",
    }
  }
}

