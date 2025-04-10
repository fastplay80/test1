"use client"

import type React from "react"

export const dynamic = "force-dynamic"

import { useState, useRef } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { saveImage } from "@/lib/gallery"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Upload, X } from "lucide-react"

export default function UploadImagesPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultYear = searchParams.get("year") || new Date().getFullYear().toString()

  const [year, setYear] = useState(defaultYear)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])

    // Filtra solo i file immagine
    const imageFiles = files.filter((file) => file.type.startsWith("image/"))

    setSelectedFiles((prev) => [...prev, ...imageFiles])

    // Crea URL per le anteprime
    const newPreviews = imageFiles.map((file) => URL.createObjectURL(file))
    setPreviews((prev) => [...prev, ...newPreviews])
  }

  function removeFile(index: number) {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index))

    // Revoca l'URL dell'anteprima per liberare memoria
    URL.revokeObjectURL(previews[index])
    setPreviews((prev) => prev.filter((_, i) => i !== index))
  }

  async function handleUpload() {
    if (selectedFiles.length === 0) {
      setError("Seleziona almeno un'immagine da caricare")
      return
    }

    setLoading(true)
    setError(null)
    setProgress(0)

    try {
      const totalFiles = selectedFiles.length
      let uploadedFiles = 0

      for (const file of selectedFiles) {
        const formData = new FormData()
        formData.append("year", year)
        formData.append("alt", file.name.split(".")[0])
        formData.append("image", file)

        await saveImage(formData)

        uploadedFiles++
        setProgress(Math.round((uploadedFiles / totalFiles) * 100))
      }

      // Revoca tutti gli URL delle anteprime
      previews.forEach((preview) => URL.revokeObjectURL(preview))

      // Reindirizza alla pagina della galleria
      router.push("/admin/gallery")
      router.refresh()
    } catch (err) {
      console.error(err)
      setError("Si è verificato un errore durante il caricamento delle immagini")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/admin/gallery" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla galleria
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Carica Immagini</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <div className="mb-4">
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Anno
            </label>
            <input
              id="year"
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange"
              placeholder="es. 2024"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Immagini</label>

            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                multiple
                className="hidden"
              />

              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Clicca per selezionare le immagini o trascina i file qui</p>
              <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF fino a 10MB</p>
            </div>
          </div>

          {previews.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Anteprime ({previews.length})</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={preview || "/placeholder.svg"}
                        alt={`Anteprima ${index + 1}`}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                      title="Rimuovi"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {loading && (
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Caricamento in corso...</span>
                <span className="text-sm font-medium text-gray-700">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-festival-orange h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleUpload}
              disabled={loading || selectedFiles.length === 0}
              className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center disabled:opacity-70"
            >
              <Upload className="w-4 h-4 mr-2" />
              {loading ? "Caricamento in corso..." : "Carica Immagini"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

