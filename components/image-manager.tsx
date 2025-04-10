"use client"

import { useState } from "react"
import Image from "next/image"
import { Trash2, Eye, AlertCircle } from "lucide-react"
import { deleteImage } from "@/app/actions/gallery-actions"

interface ImageManagerProps {
  images: Array<{
    src: string
    alt: string
    width: number
    height: number
  }>
  onRefresh: () => void
}

export default function ImageManager({ images, onRefresh }: ImageManagerProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleDelete = async (imagePath: string) => {
    if (confirm("Sei sicuro di voler eliminare questa immagine? Questa azione non può essere annullata.")) {
      setIsDeleting(imagePath)
      setError(null)

      try {
        const result = await deleteImage(imagePath)
        if (result.success) {
          onRefresh()
        } else {
          setError(result.error || "Errore durante l'eliminazione dell'immagine")
        }
      } catch (err) {
        console.error("Errore durante l'eliminazione:", err)
        setError("Si è verificato un errore durante l'eliminazione dell'immagine")
      } finally {
        setIsDeleting(null)
      }
    }
  }

  return (
    <div>
      {error && (
        <div className="bg-red-900 bg-opacity-30 text-red-100 p-4 rounded-lg mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group bg-black bg-opacity-20 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="aspect-square relative">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedImage(image.src)}
                  className="bg-white text-black p-2 rounded-full hover:bg-opacity-90"
                  aria-label="Visualizza immagine"
                >
                  <Eye className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(image.src)}
                  disabled={isDeleting === image.src}
                  className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 disabled:bg-red-800 disabled:opacity-70"
                  aria-label="Elimina immagine"
                >
                  {isDeleting === image.src ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    <Trash2 className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-2 text-sm text-white truncate">
              {image.alt.substring(0, 30)}
              {image.alt.length > 30 ? "..." : ""}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox per visualizzare l'immagine */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Immagine ingrandita"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

