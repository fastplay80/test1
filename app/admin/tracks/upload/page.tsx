"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { uploadTrackFile, saveTrack } from "@/lib/tracks"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Upload, Music, Save } from "lucide-react"

export const dynamic = "force-dynamic"

export default function UploadTrackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultYear = searchParams.get("year") || new Date().getFullYear().toString()

  const [year, setYear] = useState(defaultYear)
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [description, setDescription] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [filePath, setFilePath] = useState("")
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Verifica lo stato di autenticazione all'avvio
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/check")
        const data = await response.json()

        if (!data.authenticated) {
          console.log("Utente non autenticato, reindirizzamento a login")
          router.push("/admin/login")
        }
      } catch (error) {
        console.error("Errore durante la verifica dell'autenticazione:", error)
      }
    }

    checkAuth()
  }, [router])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files || files.length === 0) return

    const file = files[0]

    // Verifica che sia un file audio
    if (!file.type.includes("audio/")) {
      setError("Per favore seleziona un file audio (MP3, WAV, etc.)")
      return
    }

    setSelectedFile(file)
    setDebugInfo(`File selezionato: ${file.name}, dimensione: ${file.size} bytes, tipo: ${file.type}`)

    // Estrai il titolo dal nome del file se non è già impostato
    if (!title) {
      const fileName = file.name.split(".")[0]
      // Rimuovi eventuali numeri all'inizio (es. "8. ")
      const cleanTitle = fileName.replace(/^\d+\.\s*/, "").replace(/_/g, " ")
      setTitle(cleanTitle)
    }
  }

  async function handleUpload() {
    if (!selectedFile) {
      setError("Seleziona un file da caricare")
      return
    }

    if (!year) {
      setError("Seleziona un anno per il brano")
      return
    }

    setLoading(true)
    setError(null)
    setDebugInfo(null)
    setUploadProgress(10)

    try {
      // Carica il file
      const formData = new FormData()
      formData.append("year", year)
      formData.append("file", selectedFile)

      setDebugInfo(`Inizio caricamento: ${selectedFile.name}`)
      setUploadProgress(30)

      const result = await uploadTrackFile(formData)

      setUploadProgress(70)
      setDebugInfo(`Risposta server: ${JSON.stringify(result)}`)

      if (result.success) {
        setFilePath(result.filePath)
        // Assicuriamoci che l'anno sia corretto
        if (result.year) {
          setYear(result.year)
        }
        // Se abbiamo il nome originale, usiamolo per il titolo
        if (result.originalName && !title) {
          // Rimuovi l'estensione e pulisci il nome
          let cleanTitle = result.originalName.substring(0, result.originalName.lastIndexOf("."))
          // Rimuovi eventuali numeri all'inizio (es. "8. ")
          cleanTitle = cleanTitle.replace(/^\d+\.\s*/, "")
          setTitle(cleanTitle)
        }
        setUploadProgress(100)
        setDebugInfo(`File caricato con successo: ${result.filePath}`)
      } else {
        console.error("Errore durante il caricamento:", result.message)
        setError(result.message)
        setDebugInfo(`Errore: ${result.message}`)
        setLoading(false)
        return
      }
    } catch (err) {
      console.error("Errore durante il caricamento:", err)
      setError(err instanceof Error ? err.message : "Si è verificato un errore durante il caricamento del file")
      setDebugInfo(`Eccezione: ${err instanceof Error ? err.message : "Errore sconosciuto"}`)
      setLoading(false)
      return
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!filePath) {
      // Se il file non è ancora stato caricato, caricalo prima
      await handleUpload()
      if (!filePath) return // Se c'è stato un errore nell'upload, esci
    }

    if (!title || !artist || !year) {
      setError("Titolo, artista e anno sono campi obbligatori")
      return
    }

    setLoading(true)
    setError(null)
    setDebugInfo(null)

    try {
      // Genera un ID dal titolo e dall'anno
      const id = `${year}-${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`
      setDebugInfo(`Salvataggio brano con ID: ${id}`)

      const result = await saveTrack({
        id,
        title,
        artist,
        year,
        file: filePath,
        description: description || undefined,
        coverImage: coverImage || undefined,
      })

      if (result.success) {
        setDebugInfo(`Brano salvato con successo: ${id}`)
        router.push("/admin/tracks")
        router.refresh()
      } else {
        setError(result.message)
        setDebugInfo(`Errore nel salvataggio: ${result.message}`)
      }
    } catch (err) {
      console.error(err)
      setError("Si è verificato un errore durante il salvataggio del brano")
      setDebugInfo(`Eccezione nel salvataggio: ${err instanceof Error ? err.message : "Errore sconosciuto"}`)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/admin/tracks" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla lista dei brani
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Carica Nuovo Brano</h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p className="font-bold">Errore</p>
              <p>{error}</p>
            </div>
          )}

          {debugInfo && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-4 text-sm font-mono">
              <p className="font-bold">Debug Info</p>
              <p className="whitespace-pre-wrap">{debugInfo}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Anno
                </label>
                <select
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                >
                  <option value="">Seleziona un anno</option>
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((y) => (
                    <option key={y} value={y.toString()}>
                      {y}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-1">Seleziona l'anno a cui appartiene questo brano</p>
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                  File Audio (MP3, WAV, etc.)
                </label>
                <div className="flex">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="audio/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 flex items-center"
                  >
                    <Music className="w-4 h-4 mr-2" />
                    Seleziona File
                  </button>
                  {selectedFile && (
                    <span className="ml-3 text-sm text-gray-600 flex items-center overflow-hidden">
                      {selectedFile.name.length > 30 ? selectedFile.name.substring(0, 27) + "..." : selectedFile.name}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {selectedFile && !filePath && (
              <div>
                <button
                  type="button"
                  onClick={handleUpload}
                  disabled={loading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center disabled:opacity-70"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {loading ? "Caricamento in corso..." : "Carica File"}
                </button>

                {loading && (
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Caricamento in corso...</span>
                      <span className="text-sm font-medium text-gray-700">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-festival-orange h-2.5 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {filePath && (
              <>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Titolo
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                    placeholder="Titolo del brano"
                  />
                </div>

                <div>
                  <label htmlFor="artist" className="block text-sm font-medium text-gray-700 mb-1">
                    Artista
                  </label>
                  <input
                    id="artist"
                    type="text"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                    placeholder="Nome dell'artista"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrizione (opzionale)
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                    placeholder="Breve descrizione del brano"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">
                    URL Immagine di Copertina (opzionale)
                  </label>
                  <input
                    id="coverImage"
                    type="text"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                    placeholder="/images/covers/nome-immagine.jpg"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Inserisci il percorso dell'immagine (es. /images/covers/nome-immagine.jpg)
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center disabled:opacity-70"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Salvataggio in corso..." : "Salva Brano"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </main>
    </div>
  )
}

