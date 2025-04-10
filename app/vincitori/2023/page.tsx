"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Trophy, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Vincitori2023Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

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

  const winners = [
    {
      name: "Barracca Repubblica",
      prize: "Primo Premio",
      description:
        "Gruppo musicale che ha conquistato la giuria con la loro reinterpretazione innovativa della musica tradizionale cilentana. La loro fusione di sonorità moderne con le radici della musica popolare ha creato un sound unico e coinvolgente.",
      image: "/images/winners/performer-guitar.jpeg",
      imageAlt: "Musicista di Barracca Repubblica suona la chitarra durante l'esibizione",
    },
    {
      name: "Elvira Del Paggio",
      prize: "Premio Miglior Voce Femminile",
      description:
        "Cantante dalla voce straordinaria che ha emozionato il pubblico con la sua interpretazione dei brani della tradizione cilentana. La sua tecnica vocale e la sua intensità interpretativa hanno lasciato il segno durante tutta l'esibizione.",
      image: "/images/winners/female-winner-trophy.jpeg",
      imageAlt: "Elvira Del Paggio con il premio Aniello De Vita e uno strumento musicale",
    },
    {
      name: "Andrea Capass",
      prize: "Premio Giovani Talenti",
      description:
        "Giovane talento che ha impressionato con la sua voce e la sua capacità di interpretare la musica tradizionale con un tocco contemporaneo. La sua freschezza e il suo approccio innovativo hanno conquistato pubblico e giuria.",
      image: "/images/winners/male-winner-trophy.jpeg",
      imageAlt: "Andrea Capass mostra il premio Aniello De Vita",
    },
    {
      name: "Cuntrora",
      prize: "Premio Speciale della Giuria",
      description:
        "Ensemble che ha colpito la giuria con il loro stile unico e la loro interpretazione personale della tradizione musicale. La loro capacità di fondere elementi contemporanei con la tradizione ha creato un'esperienza musicale originale e autentica.",
      image: "/images/winners/cuntrora-performance.jpeg",
      imageAlt: "Esibizione del gruppo Cuntrora sul palco del Premio Aniello De Vita",
    },
  ]

  const galleryImages = [
    {
      src: "/images/winners/group-photo-stage.jpeg",
      alt: "Foto di gruppo con tutti i vincitori sul palco",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/winners-group-photo-2.jpeg",
      alt: "I vincitori e i presentatori dell'edizione 2023 sul palco con il logo del Premio",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/award-ceremony.jpeg",
      alt: "Cerimonia di premiazione con i presentatori e un vincitore",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/award-ceremony-2.jpeg",
      alt: "Cerimonia di premiazione con la consegna del certificato al vincitore",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/award-certificate.jpeg",
      alt: "Vincitore che mostra il certificato del Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/ukulele-presentation.jpeg",
      alt: "Presentazione di una giovane musicista con ukulele sul palco",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/award-presentation-female.jpeg",
      alt: "Consegna del premio a una musicista durante la cerimonia",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/guitarist-nuovo-imaie.jpeg",
      alt: "Musicista che suona la chitarra acustica con il logo NUOVO IMAIE sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/stage-performance.jpeg",
      alt: "Performance musicale sul palco con effetti di luce",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/the-rare-port.jpeg",
      alt: "Esibizione del gruppo The Rare Port durante il Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/band-performance.jpeg",
      alt: "Esibizione di una band con effetti di luce spettacolari",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/theater-view.jpeg",
      alt: "Vista del teatro gremito durante la cerimonia del Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/audience-full.jpeg",
      alt: "Il pubblico numeroso che assiste alla cerimonia del Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/audience.jpeg",
      alt: "Il pubblico durante la cerimonia del Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/annamaria-marino.jpeg",
      alt: "Esibizione di Annamaria Marino durante il Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/stage-setup.jpeg",
      alt: "Allestimento del palco per il Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/handshake-ceremony.jpeg",
      alt: "Stretta di mano durante la cerimonia di premiazione con il logo NUOVO IMAIE sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/award-certificate-closeup.jpeg",
      alt: "Primo piano del certificato Premio Aniello De Vita tenuto da un rappresentante ufficiale",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/presenter-interview.jpeg",
      alt: "La presentatrice in giacca rossa intervista i vincitori sul palco",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/the-rare-port-2.jpeg",
      alt: "Esibizione del gruppo The Rare Port con effetti di luce spettacolari",
      width: 1200,
      height: 800,
    },
  ]

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
          Vincitori Premio Aniello De Vita 2023
        </h1>

        <div className="mb-12">
          <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
            L'edizione 2023 del Premio Aniello De Vita ha visto la partecipazione di numerosi talenti che hanno portato
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
            L'edizione 2023 del Premio Aniello De Vita è stata valutata da una giuria di esperti nel campo della musica
            tradizionale cilentana:
          </p>
          <ul className="list-disc list-inside text-white text-opacity-90 space-y-2">
            <li>Lillo De Marco - Presidente di Giuria</li>
            <li>Cristofaro - Direttore Artistico</li>
            <li>Umberto Elia - Direttore Orchestra</li>
            <li>Rappresentante NUOVO IMAIE</li>
            <li>Rappresentante Parco Nazionale del Cilento</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

