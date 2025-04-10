"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Vincitori2024Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  const winners = [
    {
      name: "Gelbison",
      prize: "Primo Premio",
      description:
        "Gruppo musicale che ha conquistato la giuria con la loro interpretazione innovativa della musica tradizionale cilentana. La loro fusione di sonorità moderne con le radici della musica popolare ha creato un sound unico e coinvolgente.",
      image: "/images/gallery/2024/gelbison-award-winners.jpeg",
      imageAlt: "Gelbison riceve il primo premio sul palco del Premio Aniello De Vita 2024",
    },
    {
      name: "LED City",
      prize: "Premio Speciale della Giuria",
      description:
        "Ensemble che ha colpito la giuria con il loro stile unico e la loro interpretazione personale della tradizione musicale. La loro capacità di fondere elementi contemporanei con la tradizione ha creato un'esperienza musicale originale e autentica.",
      image: "/images/gallery/2024/led-city-award-ceremony.jpeg",
      imageAlt: "LED City riceve il premio speciale della giuria al Premio Aniello De Vita 2024",
    },
    {
      name: "Patrimonio Immateriale",
      prize: "Premio Giovani Talenti",
      description:
        "Giovane gruppo che ha impressionato con la loro capacità di interpretare la musica tradizionale con un tocco contemporaneo. La loro freschezza e il loro approccio innovativo hanno conquistato pubblico e giuria.",
      image: "/images/gallery/2024/patrimonio-immateriale.jpeg",
      imageAlt: "Patrimonio Immateriale riceve il premio Giovani Talenti al Premio Aniello De Vita 2024",
    },
    {
      name: "Trio Folk",
      prize: "Premio Miglior Arrangiamento",
      description:
        "Trio che ha emozionato il pubblico con i loro arrangiamenti innovativi dei brani della tradizione cilentana. La loro tecnica e la loro intensità interpretativa hanno lasciato il segno durante tutta l'esibizione.",
      image: "/images/gallery/2024/trio-performance-blue.jpeg",
      imageAlt: "Trio Folk durante la loro esibizione al Premio Aniello De Vita 2024",
    },
  ]

  const galleryImages = [
    {
      src: "/images/gallery/2024/winners-group-photo-2024.jpeg",
      alt: "Foto di gruppo con tutti i vincitori sul palco dell'edizione 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/gelbison-group-photo.jpeg",
      alt: "Il gruppo Gelbison sul palco con il premio",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/casasanremo-award-blue.jpeg",
      alt: "Cerimonia di premiazione con il logo CasaSanremo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/casasanremo-blue-background.jpeg",
      alt: "Premiazione con sfondo blu e logo CasaSanremo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/casasanremo-presenters.jpeg",
      alt: "I presentatori sul palco con il logo CasaSanremo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/nuovo-imaie-ceremony.jpeg",
      alt: "Cerimonia con il logo NUOVO IMAIE",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/nuovo-imaie-ceremony-2.jpeg",
      alt: "Premiazione con il logo NUOVO IMAIE",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/female-winner-nuovo-imaie.jpeg",
      alt: "Vincitrice femminile con il logo NUOVO IMAIE",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/parco-cilento-ceremony.jpeg",
      alt: "Cerimonia con il logo del Parco Nazionale del Cilento",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/parco-cilento-ceremony-closeup.jpeg",
      alt: "Primo piano della premiazione con il logo del Parco Nazionale del Cilento",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/parco-cilento-ceremony-wide.jpeg",
      alt: "Vista ampia della premiazione con il logo del Parco Nazionale del Cilento",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/stage-performance-red.jpeg",
      alt: "Esibizione sul palco con illuminazione rossa",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/stage-performance-red-2.jpeg",
      alt: "Altra esibizione sul palco con illuminazione rossa",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/stage-performance-red-3.jpeg",
      alt: "Terza esibizione sul palco con illuminazione rossa",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/duo-folk-performance.jpeg",
      alt: "Esibizione di un duo folk sul palco",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/duo-singers-red-lighting.jpeg",
      alt: "Duo di cantanti con illuminazione rossa",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/performance-purple-lighting.jpeg",
      alt: "Esibizione con illuminazione viola",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/singer-purple-smoke-cameraman.jpeg",
      alt: "Cantante con fumo viola e cameraman",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-red-jacket.jpeg",
      alt: "Ospite speciale con giacca rossa",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-red-jacket-presenters.jpeg",
      alt: "Ospite speciale con giacca rossa e presentatori",
      width: 1200,
      height: 800,
    },
  ]

  // Handle navigation in the lightbox
  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIndex = galleryImages.findIndex((img) => img.src === selectedImage)
    if (currentIndex === -1) return

    let newIndex
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    }

    setSelectedImage(galleryImages[newIndex].src)
    setCurrentImageIndex(newIndex)
  }

  // Set the current image index when selecting an image
  const openLightbox = (src: string) => {
    const index = galleryImages.findIndex((img) => img.src === src)
    if (index !== -1) {
      setCurrentImageIndex(index)
      setSelectedImage(src)
    }
  }

  return (
    <div className="relative">
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            aria-label="Immagine precedente"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            aria-label="Immagine successiva"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="relative max-w-5xl max-h-[80vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={galleryImages[currentImageIndex]?.alt || "Immagine ingrandita"}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh]"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              {galleryImages[currentImageIndex]?.alt}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
          <Link href="/vincitori" className="text-white hover:underline flex items-center">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Torna a tutti i vincitori
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">
          Vincitori Premio Aniello De Vita 2024
        </h1>

        <div className="mb-12">
          <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
            L'edizione 2024 del Premio Aniello De Vita ha visto la partecipazione di numerosi talenti che hanno portato
            sul palco interpretazioni innovative della musica tradizionale cilentana. Ecco i vincitori che hanno
            conquistato il pubblico e la giuria con le loro straordinarie performance.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">I Vincitori</h2>
          </div>

          <div className="space-y-12">
            {winners.map((winner, index) => (
              <div key={index} className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <div
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(winner.image)}
                    >
                      <Image
                        src={winner.image || "/placeholder.svg"}
                        alt={winner.imageAlt}
                        fill
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white">{winner.name}</h3>
                    <p className="text-white text-opacity-80 mb-4 text-lg">{winner.prize}</p>
                    <p className="text-white text-opacity-90">{winner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Momenti della Premiazione</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(image.src)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">La Giuria</h2>
          <p className="text-white text-opacity-90 mb-6">
            L'edizione 2024 del Premio Aniello De Vita è stata valutata da una giuria di esperti nel campo della musica
            tradizionale cilentana:
          </p>
          <ul className="list-disc list-inside text-white text-opacity-90 space-y-2">
            <li>Lillo De Marco - Presidente di Giuria</li>
            <li>Cristofaro - Direttore Artistico</li>
            <li>Umberto Elia - Direttore Orchestra</li>
            <li>Rappresentante NUOVO IMAIE</li>
            <li>Rappresentante Parco Nazionale del Cilento</li>
            <li>Rappresentante CasaSanremo</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

