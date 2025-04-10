"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, RefreshCw } from "lucide-react"
import { getGalleryImages } from "@/app/actions/gallery-actions"

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

export default function GalleryFromDirectory() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const loadImages = async () => {
    setLoading(true)
    setError(null)

    try {
      const result = await getGalleryImages()
      if (result.success) {
        setImages(result.images)
      } else {
        setError(result.error || "Errore nel caricamento delle immagini")
      }
    } catch (err) {
      console.error("Errore nel caricamento delle immagini:", err)
      setError("Si è verificato un errore nel caricamento delle immagini")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <div className="mb-12">
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[80vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Immagine ingrandita"
              width={1200}
              height={800}
              className="object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Galleria Immagini</h2>
        <button
          onClick={loadImages}
          className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-3 py-2 rounded-lg transition-all"
          disabled={loading}
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          Aggiorna
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <RefreshCw className="w-8 h-8 text-white animate-spin" />
        </div>
      ) : error ? (
        <div className="bg-red-900 bg-opacity-30 text-red-100 p-4 rounded-lg">{error}</div>
      ) : images.length === 0 ? (
        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 text-center">
          <p className="text-white text-opacity-90">Nessuna immagine trovata nella galleria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt || `Immagine ${index + 1}`}
                width={image.width || 800}
                height={image.height || 600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{image.alt || `Immagine ${index + 1}`}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

