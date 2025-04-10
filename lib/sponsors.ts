"use server"

import fs from "fs/promises"
import path from "path"
import { z } from "zod"

const sponsorsDir = path.join(process.cwd(), "data", "sponsors")
const sponsorsFile = path.join(sponsorsDir, "sponsors.json")

// Assicurati che la directory esista
async function ensureSponsorsDir() {
  try {
    await fs.access(sponsorsDir)
  } catch (error) {
    await fs.mkdir(sponsorsDir, { recursive: true })
    // Crea un file vuoto con un array vuoto se non esiste
    await fs.writeFile(sponsorsFile, JSON.stringify([]), "utf-8")
  }
}

// Schema per la validazione degli sponsor
const sponsorSchema = z.object({
  id: z.string(),
  name: z.string(),
  logo: z.string().optional(),
  description: z.string().optional(),
  website: z.string().optional(), // Rimosso .url() per evitare errori di validazione
  category: z.enum(["main", "gold", "silver", "partner", "media", "technical"]),
  order: z.number().optional(),
})

export type Sponsor = z.infer<typeof sponsorSchema>

// Ottieni tutti gli sponsor
export async function getSponsors() {
  await ensureSponsorsDir()

  try {
    const data = await fs.readFile(sponsorsFile, "utf-8")
    const sponsors = JSON.parse(data)

    // Ordina gli sponsor per ordine e poi per nome
    return sponsors.sort((a: Sponsor, b: Sponsor) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order
      }
      if (a.order !== undefined) {
        return -1
      }
      if (b.order !== undefined) {
        return 1
      }
      return a.name.localeCompare(b.name)
    })
  } catch (error) {
    console.error("Errore nella lettura degli sponsor:", error)
    // Se il file non esiste o c'è un errore, restituisci un array vuoto
    return []
  }
}

// Ottieni uno sponsor specifico
export async function getSponsor(id: string) {
  try {
    const sponsors = await getSponsors()
    return sponsors.find((sponsor: Sponsor) => sponsor.id === id) || null
  } catch (error) {
    console.error("Errore nel recupero dello sponsor:", error)
    return null
  }
}

// Salva uno sponsor
export async function saveSponsor(sponsorData: any) {
  await ensureSponsorsDir()

  try {
    // Sanitizza i dati prima della validazione
    const sanitizedData = {
      ...sponsorData,
      // Assicurati che website sia una stringa valida o undefined
      website: sponsorData.website && sponsorData.website.trim() !== "" ? sponsorData.website : undefined,
      // Converti order in numero se è una stringa
      order: sponsorData.order !== undefined && sponsorData.order !== "" ? Number(sponsorData.order) : undefined,
    }

    // Validazione più permissiva
    const validatedSponsor = sponsorSchema.parse(sanitizedData)

    // Ottieni tutti gli sponsor esistenti
    const sponsors = await getSponsors()

    // Trova l'indice dello sponsor se esiste già
    const index = sponsors.findIndex((s: Sponsor) => s.id === validatedSponsor.id)

    if (index !== -1) {
      // Aggiorna lo sponsor esistente
      sponsors[index] = validatedSponsor
    } else {
      // Aggiungi il nuovo sponsor
      sponsors.push(validatedSponsor)
    }

    // Salva tutti gli sponsor
    await fs.writeFile(sponsorsFile, JSON.stringify(sponsors, null, 2), "utf-8")

    return {
      success: true,
      message: "Sponsor salvato con successo",
    }
  } catch (error) {
    console.error("Errore nel salvataggio dello sponsor:", error)
    return {
      success: false,
      message: `Errore nel salvataggio dello sponsor: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
    }
  }
}

// Elimina uno sponsor
export async function deleteSponsor(id: string) {
  await ensureSponsorsDir()

  try {
    // Ottieni tutti gli sponsor esistenti
    const sponsors = await getSponsors()

    // Filtra lo sponsor da eliminare
    const updatedSponsors = sponsors.filter((sponsor: Sponsor) => sponsor.id !== id)

    // Salva gli sponsor aggiornati
    await fs.writeFile(sponsorsFile, JSON.stringify(updatedSponsors, null, 2), "utf-8")

    return {
      success: true,
      message: "Sponsor eliminato con successo",
    }
  } catch (error) {
    console.error("Errore nell'eliminazione dello sponsor:", error)
    return {
      success: false,
      message: `Errore nell'eliminazione dello sponsor: ${error instanceof Error ? error.message : "Errore sconosciuto"}`,
    }
  }
}

