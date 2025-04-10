"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getTrack, saveTrack } from "@/lib/tracks"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Save, Music } from "lucide-react"

export const dynamic = "force-dynamic"

export default function EditTrackPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [track, setTrack] = useState({
    id: "",
    title: "",
    artist: "",
    year: "",
    file: "",
    description: "",
    coverImage: "",
    order: undefined as number | undefined,
  })

  useEffect(() => {
    async function loadTrack() {
      try {
        const trackData = await getTrack(params.id)
        if (trackData) {
          setTrack({
            id: trackData.id,
            title: trackData.title,
            artist: trackData.artist,
            year: trackData.year,
            file: trackData.file,
            description: trackData.description || "",
            coverImage: trackData.coverImage || "",
            order: trackData.order,
          })
        } else {
          setError("Brano non trovato")
        }
      } catch (err) {
        console.error(err)
        setError("Si è verificato un errore durante il caricamento del brano")
      }
    }

    loadTrack()
  }, [params.id])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!track.title || !track.artist) {
      setError("Titolo e artista sono campi obbligatori")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const result = await saveTrack({
        id: track.id,
        title: track.title,
        artist: track.artist,
        year: track.year,
        file: track.file,
        description: track.description || undefined,
        coverImage: track.coverImage || undefined,
        order: track.order,
      })

      if (result.success) {
        router.push("/admin/tracks")
        router.refresh()
      } else {
        setError(result.message)
      }
    } catch (err) {
      console.error(err)
      setError("Si è verificato un errore durante il salvataggio del brano")
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
          <h1 className="text-2xl font-bold mb-6">Modifica Brano</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
                ID
              </label>
              <input
                id="id"
                type="text"
                value={track.id}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-black"
              />
              <p className="text-sm text-gray-500 mt-1">L'ID non può essere modificato.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Titolo
                </label>
                <input
                  id="title"
                  type="text"
                  value={track.title}
                  onChange={(e) => setTrack({ ...track, title: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                />
              </div>

              <div>
                <label htmlFor="artist" className="block text-sm font-medium text-gray-700 mb-1">
                  Artista
                </label>
                <input
                  id="artist"
                  type="text"
                  value={track.artist}
                  onChange={(e) => setTrack({ ...track, artist: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Anno
                </label>
                <input
                  id="year"
                  type="text"
                  value={track.year}
                  onChange={(e) => setTrack({ ...track, year: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                />
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                  File
                </label>
                <div className="flex items-center">
                  <input
                    id="file"
                    type="text"
                    value={track.file}
                    onChange={(e) => setTrack({ ...track, file: e.target.value })}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                  />
                  <a
                    href={track.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 bg-gray-200 text-gray-800 p-2 rounded-md hover:bg-gray-300"
                    title="Ascolta"
                  >
                    <Music className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrizione (opzionale)
              </label>
              <textarea
                id="description"
                value={track.description}
                onChange={(e) => setTrack({ ...track, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
              ></textarea>
            </div>

            <div>
              <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">
                URL Immagine di Copertina (opzionale)
              </label>
              <input
                id="coverImage"
                type="text"
                value={track.coverImage}
                onChange={(e) => setTrack({ ...track, coverImage: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
              />
              <p className="text-sm text-gray-500 mt-1">
                Inserisci il percorso dell'immagine (es. /images/covers/nome-immagine.jpg)
              </p>
            </div>

            <div>
              <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
                Ordine (opzionale)
              </label>
              <input
                id="order"
                type="number"
                value={track.order === undefined ? "" : track.order}
                onChange={(e) => {
                  const value = e.target.value === "" ? undefined : Number.parseInt(e.target.value, 10)
                  setTrack({ ...track, order: value })
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
              />
              <p className="text-sm text-gray-500 mt-1">
                Numero per ordinare i brani (i numeri più bassi appaiono prima)
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center disabled:opacity-70"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Salvataggio in corso..." : "Salva Modifiche"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

