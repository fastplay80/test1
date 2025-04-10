"use server"

import fs from "fs/promises"
import path from "path"
import { z } from "zod"

const contentDir = path.join(process.cwd(), "data", "content")

// Assicurati che la directory esista
async function ensureContentDir() {
  try {
    await fs.access(contentDir)
  } catch (error) {
    await fs.mkdir(contentDir, { recursive: true })
  }
}

// Schema per la validazione dei contenuti
const contentSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  lastUpdated: z.string().optional(),
})

export type Content = z.infer<typeof contentSchema>

// Ottieni tutti i contenuti
export async function getAllContent() {
  await ensureContentDir()

  try {
    const files = await fs.readdir(contentDir)
    const contentFiles = files.filter((file) => file.endsWith(".json"))

    const contents: Content[] = []

    for (const file of contentFiles) {
      const content = await getContent(file.replace(".json", ""))
      if (content) {
        contents.push(content)
      }
    }

    return contents
  } catch (error) {
    console.error("Errore nel recupero dei contenuti:", error)
    return []
  }
}

// Ottieni un contenuto specifico
export async function getContent(id: string): Promise<Content | null> {
  await ensureContentDir()

  try {
    const filePath = path.join(contentDir, `${id}.json`)
    const fileContent = await fs.readFile(filePath, "utf-8")
    const content = JSON.parse(fileContent)

    return contentSchema.parse(content)
  } catch (error) {
    console.error(`Errore nel recupero del contenuto ${id}:`, error)
    return null
  }
}

// Salva un contenuto
export async function saveContent(content: Content) {
  await ensureContentDir()

  try {
    const validatedContent = contentSchema.parse({
      ...content,
      lastUpdated: new Date().toISOString(),
    })

    const filePath = path.join(contentDir, `${validatedContent.id}.json`)
    await fs.writeFile(filePath, JSON.stringify(validatedContent, null, 2), "utf-8")

    return {
      success: true,
      message: "Contenuto salvato con successo",
    }
  } catch (error) {
    console.error("Errore nel salvataggio del contenuto:", error)
    return {
      success: false,
      message: "Errore nel salvataggio del contenuto",
    }
  }
}

// Elimina un contenuto
export async function deleteContent(id: string) {
  await ensureContentDir()

  try {
    const filePath = path.join(contentDir, `${id}.json`)
    await fs.unlink(filePath)

    return {
      success: true,
      message: "Contenuto eliminato con successo",
    }
  } catch (error) {
    console.error(`Errore nell'eliminazione del contenuto ${id}:`, error)
    return {
      success: false,
      message: "Errore nell'eliminazione del contenuto",
    }
  }
}

