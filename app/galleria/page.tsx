"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Camera, X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  // Immagini in evidenza dell'edizione 2024
  const images2024 = [
    {
      src: "/images/gallery/2024/special-guest-red-jacket-presenters.jpeg",
      alt: "Ospite speciale con presentatori",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/singer-with-choir-red-projection.jpeg",
      alt: "Cantante con coro e proiezione rossa",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/gelbison-award-winners.jpeg",
      alt: "Vincitori premio Gelbison",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/singer-with-choir-red-lighting.jpeg",
      alt: "Esibizione di un gruppo musicale con cantante in abito chiaro circondato da coriste in abiti neri con dettagli gialli sotto luci rosse",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/guitarist-red-pattern-background.jpeg",
      alt: "Musicista in pantaloni rossi che suona la chitarra acustica sul palco con effetti di luce blu e gialla e sfondo decorativo rosso",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/musician-with-blue-projection.jpeg",
      alt: "Musicista con barba grigia in abito scuro che legge un foglio con una proiezione blu di un altro musicista sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/ensemble-yellow-lighting.jpeg",
      alt: "Gruppo musicale con musicisti in camicie bianche che suonano vari strumenti sotto fasci di luce gialla",
      width: 1200,
      height: 800,
    },
    // Nuove immagini aggiunte
    {
      src: "/images/gallery/2024/performance-purple-lighting.jpeg",
      alt: "Esibizione sul palco con luci viola",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/singer-white-outfit-red-lighting.jpeg",
      alt: "Cantante in abito bianco con luci rosse",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/duo-singers-red-lighting.jpeg",
      alt: "Duo di cantanti con luci rosse",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/blonde-guitarist-blue-lighting.jpeg",
      alt: "Chitarrista bionda con luci blu",
      width: 1200,
      height: 800,
    },
  ]

  // Immagini in evidenza dell'edizione 2023
  const images2023 = [
    {
      src: "/images/winners/group-photo-stage.jpeg",
      alt: "Foto di gruppo sul palco con tutti i vincitori e presentatori del Premio Aniello De Vita 2023",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/winners-group-photo-2.jpeg",
      alt: "I vincitori e i presentatori dell'edizione 2023 sul palco con il logo del Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/winners-group-photo.jpeg",
      alt: "I vincitori del Premio Aniello De Vita 2023 sul palco con i presentatori",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/performer-guitar.jpeg",
      alt: "Musicista che suona la chitarra durante l'esibizione al Premio Aniello De Vita 2023",
      width: 1200,
      height: 800,
    },
  ]

  // Funzione per gestire la navigazione tra le immagini nel lightbox
  const handleImageNavigation = (direction: "next" | "prev") => {
    if (!selectedImage) return

    // Combina tutte le immagini in un unico array
    const allImages = [...images2024, ...images2023]

    // Trova l'indice dell'immagine corrente
    const currentIndex = allImages.findIndex((img) => img.src === selectedImage)
    if (currentIndex === -1) return

    let newIndex
    if (direction === "next") {
      newIndex = (currentIndex + 1) % allImages.length
    } else {
      newIndex = (currentIndex - 1 + allImages.length) % allImages.length
    }

    setSelectedImage(allImages[newIndex].src)
    setCurrentImageIndex(newIndex)
  }

  return (
    <div className="relative">
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Chiudi"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigazione a sinistra */}
          <button
            onClick={() => handleImageNavigation("prev")}
            className="absolute left-4 text-white hover:text-gray-300"
            aria-label="Immagine precedente"
          >
            <ArrowLeft className="w-8 h-8" />
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

          {/* Navigazione a destra */}
          <button
            onClick={() => handleImageNavigation("next")}
            className="absolute right-4 text-white hover:text-gray-300"
            aria-label="Immagine successiva"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-white hover:underline flex items-center">
              <ArrowLeft className="w-5 h-5 mr-1" />
              Torna alla home
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Galleria</h1>

          <div className="mb-12">
            <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
              Esplora i momenti più significativi delle edizioni passate del Premio Aniello De Vita attraverso la nostra
              galleria fotografica. Rivivi l'atmosfera unica, le performance musicali e le emozioni che hanno
              caratterizzato ogni edizione.
            </p>

            {/* Edizione 2024 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
                <div className="flex items-center gap-2">
                  <Camera className="w-6 h-6 text-white" />
                  <h2 className="text-2xl font-bold text-white">Premio Aniello De Vita 2024</h2>
                </div>
                <Link href="/galleria/2024" className="text-white mt-2 md:mt-0 flex items-center hover:underline">
                  Vedi tutte le foto 2024
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {images2024.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => {
                      setSelectedImage(image.src)
                      setCurrentImageIndex(index)
                    }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Edizione 2023 */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
                <div className="flex items-center gap-2">
                  <Camera className="w-6 h-6 text-white" />
                  <h2 className="text-2xl font-bold text-white">Premio Aniello De Vita 2023</h2>
                </div>
                <Link href="/galleria/2023" className="text-white mt-2 md:mt-0 flex items-center hover:underline">
                  Vedi tutte le foto 2023
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {images2023.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => {
                      setSelectedImage(image.src)
                      setCurrentImageIndex(images2024.length + index)
                    }}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Premio Aniello De Vita</h3>
              <p className="text-white text-opacity-90 mb-4">
                Il Premio Aniello De Vita è un importante riconoscimento dedicato ai musicisti che contribuiscono a
                mantenere viva la tradizione musicale cilentana, reinterpretandola in chiave contemporanea.
              </p>
              <p className="text-white text-opacity-90">
                Ogni anno, il premio riunisce talenti emergenti e affermati, offrendo al pubblico esibizioni emozionanti
                e momenti di celebrazione della ricca cultura musicale del Cilento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

