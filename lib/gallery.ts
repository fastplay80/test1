"use server"

import fs from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import { z } from "zod"

const galleryDir = path.join(process.cwd(), "public", "images", "gallery")

// Assicurati che la directory esista
async function ensureGalleryDir(year?: string) {
  try {
    await fs.access(galleryDir)
  } catch (error) {
    await fs.mkdir(galleryDir, { recursive: true })
  }

  if (year) {
    const yearDir = path.join(galleryDir, year)
    try {
      await fs.access(yearDir)
    } catch (error) {
      await fs.mkdir(yearDir, { recursive: true })
    }
  }
}

// Schema per la validazione delle immagini
const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number(),
  height: z.number(),
  year: z.string(),
})

export type GalleryImage = z.infer<typeof imageSchema>

// Ottieni tutte le immagini
export async function getAllImages() {
  await ensureGalleryDir()

  try {
    // Leggi tutte le directory e file nella cartella gallery
    const items = await fs.readdir(galleryDir, { withFileTypes: true })

    // Filtra solo le directory (anni)
    const yearDirs = items.filter((item) => item.isDirectory()).map((item) => item.name)

    // Aggiungi manualmente "2023" se non esiste già
    if (!yearDirs.includes("2023")) {
      yearDirs.push("2023")
      // Crea la directory 2023 se non esiste
      await ensureGalleryDir("2023")
    }

    const images: GalleryImage[] = []

    for (const year of yearDirs) {
      const yearImages = await getImagesByYear(year)
      images.push(...yearImages)
    }

    return images
  } catch (error) {
    console.error("Errore nel recupero delle immagini:", error)
    return []
  }
}

// Ottieni le immagini per anno
export async function getImagesByYear(year: string) {
  await ensureGalleryDir(year)

  try {
    const yearDir = path.join(galleryDir, year)

    // Gestione speciale per l'anno 2023
    if (year === "2023" && !(await directoryHasFiles(yearDir))) {
      // Per 2023, includi anche le immagini dalla root della galleria e dalla cartella winners
      return get2023Images()
    }

    const files = await fs.readdir(yearDir)
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase()
      return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)
    })

    const images: GalleryImage[] = []

    for (const file of imageFiles) {
      const src = `/images/gallery/${year}/${file}`
      images.push({
        src,
        alt: file.split(".")[0].replace(/-/g, " "),
        width: 1200, // Default width
        height: 800, // Default height
        year,
      })
    }

    return images
  } catch (error) {
    console.error(`Errore nel recupero delle immagini per l'anno ${year}:`, error)
    return []
  }
}

// Verifica se una directory contiene file
async function directoryHasFiles(dir: string) {
  try {
    const files = await fs.readdir(dir)
    return files.length > 0
  } catch (error) {
    return false
  }
}

// Funzione speciale per ottenere le immagini del 2023
async function get2023Images() {
  const images: GalleryImage[] = [
    {
      src: "/images/winners/group-photo-stage.jpeg",
      alt: "Foto di gruppo sul palco con tutti i vincitori e presentatori del Premio Aniello De Vita 2023",
      width: 1200,
      height: 800,
      year: "2023",
    },
    {
      src: "/images/gallery/winners-group-photo-2.jpeg",
      alt: "I vincitori e i presentatori dell'edizione 2023 sul palco con il logo del Premio Aniello De Vita",
      width: 1200,
      height: 800,
      year: "2023",
    },
    {
      src: "/images/winners/winners-group-photo.jpeg",
      alt: "I vincitori del Premio Aniello De Vita 2023 sul palco con i presentatori",
      width: 1200,
      height: 800,
      year: "2023",
    },
    // Aggiungi altre immagini del 2023 qui...
  ]

  return images
}

// Salva un'immagine
export async function saveImage(formData: FormData) {
  try {
    const year = formData.get("year") as string
    const alt = formData.get("alt") as string
    const file = formData.get("image") as File

    if (!year || !file) {
      return {
        success: false,
        message: "Anno e immagine sono obbligatori",
      }
    }

    await ensureGalleryDir(year)

    const buffer = Buffer.from(await file.arrayBuffer())
    const filename = `${Date.now()}_${uuidv4()}${path.extname(file.name)}`
    const filePath = path.join(galleryDir, year, filename)

    await fs.writeFile(filePath, buffer)

    return {
      success: true,
      message: "Immagine caricata con successo",
      image: {
        src: `/images/gallery/${year}/${filename}`,
        alt: alt || filename.split(".")[0].replace(/-/g, " "),
        width: 1200, // Default width
        height: 800, // Default height
        year,
      },
    }
  } catch (error) {
    console.error("Errore nel salvataggio dell'immagine:", error)
    return {
      success: false,
      message: "Errore nel salvataggio dell'immagine",
    }
  }
}

// Elimina un'immagine
export async function deleteImage(src: string) {
  try {
    // Gestisci il caso speciale delle immagini 2023 che potrebbero non essere nella cartella gallery/2023
    if (src.includes("/winners/") || !src.includes("/gallery/")) {
      return {
        success: false,
        message: "Non è possibile eliminare questa immagine perché fa parte della collezione predefinita",
      }
    }

    const relativePath = src.replace("/images/gallery/", "")
    const filePath = path.join(galleryDir, relativePath)

    await fs.unlink(filePath)

    return {
      success: true,
      message: "Immagine eliminata con successo",
    }
  } catch (error) {
    console.error(`Errore nell'eliminazione dell'immagine ${src}:`, error)
    return {
      success: false,
      message: "Errore nell'eliminazione dell'immagine",
    }
  }
}

// Ottieni gli anni disponibili per la galleria
export async function getAvailableYears() {
  await ensureGalleryDir()

  try {
    const items = await fs.readdir(galleryDir, { withFileTypes: true })

    // Filtra solo le directory (anni)
    let years = items.filter((item) => item.isDirectory()).map((item) => item.name)

    // Aggiungi manualmente "2023" se non esiste già
    if (!years.includes("2023")) {
      years.push("2023")
    }

    // Ordina gli anni in ordine decrescente
    years = years.sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

    return years
  } catch (error) {
    console.error("Errore nel recupero degli anni disponibili:", error)
    return ["2023", "2024"] // Fallback con anni predefiniti
  }
}

// Crea una nuova galleria per un anno specifico
export async function createGalleryYear(year: string) {
  if (!year || !/^\d{4}$/.test(year)) {
    return {
      success: false,
      message: "Anno non valido. Inserisci un anno nel formato YYYY",
    }
  }

  try {
    await ensureGalleryDir(year)

    return {
      success: true,
      message: `Galleria per l'anno ${year} creata con successo`,
    }
  } catch (error) {
    console.error(`Errore nella creazione della galleria per l'anno ${year}:`, error)
    return {
      success: false,
      message: `Errore nella creazione della galleria per l'anno ${year}`,
    }
  }
}

