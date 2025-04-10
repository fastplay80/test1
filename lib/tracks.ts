"use server"

import fs from "fs/promises"
import path from "path"
import { existsSync, mkdirSync } from "fs"
import { z } from "zod"

const tracksDir = path.join(process.cwd(), "public", "tracks")

// Assicurati che la directory esista
async function ensureTracksDir(year?: string) {
  console.log(`Verifica directory: ${tracksDir}`)

  try {
    if (!existsSync(tracksDir)) {
      console.log(`Creazione directory principale: ${tracksDir}`)
      // Usa mkdirSync per assicurarsi che la directory esista prima di procedere
      mkdirSync(tracksDir, { recursive: true })
    }
  } catch (error) {
    console.error("Errore nella creazione della directory tracks:", error)
    throw new Error(
      `Impossibile creare la directory tracks: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
    )
  }

  if (year) {
    const yearDir = path.join(tracksDir, year)
    console.log(`Verifica directory anno ${year}: ${yearDir}`)

    try {
      if (!existsSync(yearDir)) {
        console.log(`Creazione directory anno ${year}: ${yearDir}`)
        mkdirSync(yearDir, { recursive: true })
      }
    } catch (error) {
      console.error(`Errore nella creazione della directory tracks/${year}:`, error)
      throw new Error(
        `Impossibile creare la directory tracks/${year}: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
      )
    }
  }
}

// Schema per la validazione dei brani
const trackSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string(),
  year: z.string(),
  file: z.string(),
  duration: z.string().optional(),
  description: z.string().optional(),
  coverImage: z.string().optional(),
  order: z.number().optional(),
})

export type Track = z.infer<typeof trackSchema>

// Ottieni tutti i brani
export async function getAllTracks() {
  await ensureTracksDir()

  try {
    const metadataPath = path.join(tracksDir, "metadata.json")
    console.log(`Lettura metadata da: ${metadataPath}`)

    if (!existsSync(metadataPath)) {
      console.log("File metadata.json non trovato, creazione nuovo file")
      await fs.writeFile(metadataPath, JSON.stringify([], null, 2), "utf-8")
      return []
    }

    const data = await fs.readFile(metadataPath, "utf-8")
    const tracks = JSON.parse(data)
    console.log(`Letti ${tracks.length} brani dal file metadata.json`)

    // Ordina i brani per anno (decrescente) e poi per ordine
    return tracks.sort((a: Track, b: Track) => {
      if (a.year !== b.year) {
        return b.year.localeCompare(a.year)
      }

      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order
      }

      if (a.order !== undefined) {
        return -1
      }

      if (b.order !== undefined) {
        return 1
      }

      return a.title.localeCompare(b.title)
    })
  } catch (error) {
    console.error("Errore nel recupero dei brani:", error)
    return []
  }
}

// Ottieni i brani per anno
export async function getTracksByYear(year: string) {
  const tracks = await getAllTracks()
  return tracks.filter((track: Track) => track.year === year)
}

// Ottieni un brano specifico
export async function getTrack(id: string) {
  const tracks = await getAllTracks()
  return tracks.find((track: Track) => track.id === id) || null
}

// Salva un brano
export async function saveTrack(track: Track) {
  await ensureTracksDir(track.year)

  try {
    const validatedTrack = trackSchema.parse(track)
    console.log(`Salvataggio brano: ${validatedTrack.title} (${validatedTrack.id})`)

    // Ottieni tutti i brani esistenti
    const tracks = await getAllTracks()

    // Trova l'indice del brano se esiste già
    const index = tracks.findIndex((t: Track) => t.id === validatedTrack.id)

    if (index !== -1) {
      console.log(`Aggiornamento brano esistente: ${validatedTrack.id}`)
      // Aggiorna il brano esistente
      tracks[index] = validatedTrack
    } else {
      console.log(`Aggiunta nuovo brano: ${validatedTrack.id}`)
      // Aggiungi il nuovo brano
      tracks.push(validatedTrack)
    }

    // Salva tutti i brani
    const metadataPath = path.join(tracksDir, "metadata.json")
    await fs.writeFile(metadataPath, JSON.stringify(tracks, null, 2), "utf-8")
    console.log(`Metadata salvati con successo: ${tracks.length} brani totali`)

    return {
      success: true,
      message: "Brano salvato con successo",
      track: validatedTrack,
    }
  } catch (error) {
    console.error("Errore nel salvataggio del brano:", error)
    return {
      success: false,
      message: `Errore nel salvataggio del brano: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
    }
  }
}

// Elimina un brano
export async function deleteTrack(id: string) {
  try {
    console.log(`Eliminazione brano: ${id}`)

    // Ottieni tutti i brani esistenti
    const tracks = await getAllTracks()

    // Trova il brano da eliminare
    const track = tracks.find((t: Track) => t.id === id)

    if (!track) {
      console.log(`Brano non trovato: ${id}`)
      return {
        success: false,
        message: "Brano non trovato",
      }
    }

    // Elimina il file MP3
    const filePath = path.join(process.cwd(), "public", track.file)
    console.log(`Tentativo di eliminazione file: ${filePath}`)

    if (existsSync(filePath)) {
      await fs.unlink(filePath)
      console.log(`File eliminato: ${filePath}`)
    } else {
      console.log(`File non trovato: ${filePath}`)
    }

    // Filtra il brano da eliminare dai metadati
    const updatedTracks = tracks.filter((t: Track) => t.id !== id)

    // Salva i metadati aggiornati
    const metadataPath = path.join(tracksDir, "metadata.json")
    await fs.writeFile(metadataPath, JSON.stringify(updatedTracks, null, 2), "utf-8")
    console.log(`Metadata aggiornati: ${updatedTracks.length} brani rimanenti`)

    return {
      success: true,
      message: "Brano eliminato con successo",
    }
  } catch (error) {
    console.error("Errore nell'eliminazione del brano:", error)
    return {
      success: false,
      message: `Errore nell'eliminazione del brano: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
    }
  }
}

// Carica un file MP3
export async function uploadTrackFile(formData: FormData) {
  console.log("Inizio caricamento file audio")

  try {
    const year = formData.get("year") as string
    const file = formData.get("file") as File

    if (!year || !file) {
      console.log("Anno o file mancanti")
      return {
        success: false,
        message: "Anno e file sono obbligatori",
      }
    }

    console.log(`Caricamento file: ${file.name}, dimensione: ${file.size} bytes, tipo: ${file.type}`)

    // Verifica che la directory esista prima di procedere
    await ensureTracksDir(year)

    // Genera un nome file più sicuro
    const originalName = file.name
    const fileExt = originalName.substring(originalName.lastIndexOf(".")).toLowerCase()
    const safeFileName = `track_${Date.now()}${fileExt}`
    const filePath = path.join(tracksDir, year, safeFileName)
    const publicPath = `/tracks/${year}/${safeFileName}`

    console.log(`Nome file originale: ${originalName}`)
    console.log(`Nome file sicuro: ${safeFileName}`)
    console.log(`Percorso file: ${filePath}`)
    console.log(`Percorso pubblico: ${publicPath}`)

    // Converti il file in un buffer
    console.log("Conversione file in buffer...")
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    console.log(`Buffer creato, dimensione: ${buffer.length} bytes`)

    // Salva il file
    console.log(`Scrittura file su disco: ${filePath}`)
    await fs.writeFile(filePath, buffer)
    console.log("File scritto con successo")

    return {
      success: true,
      message: "File caricato con successo",
      filePath: publicPath,
      year: year,
      originalName: originalName,
    }
  } catch (error) {
    console.error("Errore nel caricamento del file:", error)
    return {
      success: false,
      message: `Errore nel caricamento del file: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
    }
  }
}

