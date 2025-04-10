"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Camera, X } from "lucide-react"

export default function Gallery2023Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  // Immagini dell'edizione 2023
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
    {
      src: "/images/winners/female-winner-trophy.jpeg",
      alt: "Vincitrice con il premio Aniello De Vita e uno strumento musicale",
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
      src: "/images/gallery/award-ceremony-2.jpeg",
      alt: "Cerimonia di premiazione con la consegna del certificato al vincitore",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/award-ceremony.jpeg",
      alt: "Momento della premiazione sul palco del Premio Aniello De Vita",
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
      src: "/images/winners/cuntrora-performance.jpeg",
      alt: "Esibizione del gruppo Cuntrora sul palco del Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/winners/male-winner-trophy.jpeg",
      alt: "Vincitore che mostra il premio Aniello De Vita",
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
      src: "/images/gallery/guitarist-nuovo-imaie.jpeg",
      alt: "Musicista che suona la chitarra acustica con il logo NUOVO IMAIE sullo sfondo",
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
      src: "/images/winners/stage-setup.jpeg",
      alt: "Allestimento del palco per il Premio Aniello De Vita",
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
      src: "/images/gallery/2023-1.png",
      alt: "Premiazione durante l'edizione 2023 del Premio Aniello De Vita",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2023-2.png",
      alt: "Esibizione musicale durante il Premio Aniello De Vita 2023",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2023-3.png",
      alt: "Barracca Repubblica in concerto al Premio Aniello De Vita 2023",
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

  // Funzione per gestire la navigazione tra le immagini nel lightbox
  const handleImageNavigation = (direction: "next" | "prev") => {
    if (!selectedImage) return

    // Trova l'indice dell'immagine corrente
    const currentIndex = images2023.findIndex((img) => img.src === selectedImage)
    if (currentIndex === -1) return

    let newIndex
    if (direction === "next") {
      newIndex = (currentIndex + 1) % images2023.length
    } else {
      newIndex = (currentIndex - 1 + images2023.length) % images2023.length
    }

    setSelectedImage(images2023[newIndex].src)
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
            <Link href="/galleria" className="text-white hover:underline flex items-center">
              <ArrowLeft className="w-5 h-5 mr-1" />
              Torna alla galleria
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">
            Galleria Premio Aniello De Vita 2023
          </h1>

          <div className="mb-12">
            <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
              Esplora i momenti più significativi dell'edizione 2023 del Premio Aniello De Vita attraverso la nostra
              galleria fotografica. Rivivi l'atmosfera unica, le performance musicali e le emozioni che hanno
              caratterizzato questa edizione.
            </p>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Camera className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">Momenti dell'Edizione 2023</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images2023.map((image, index) => (
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

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Premio Aniello De Vita 2023</h3>
              <p className="text-white text-opacity-90 mb-4">
                L'edizione 2023 del Premio Aniello De Vita ha visto la partecipazione di numerosi giovani talenti
                musicali che hanno portato sul palco la tradizione musicale cilentana reinterpretata in chiave
                contemporanea.
              </p>
              <p className="text-white text-opacity-90">
                Il premio, dedicato al maestro della musica tradizionale cilentana, rappresenta un importante
                riconoscimento per i musicisti under 35 che contribuiscono a mantenere viva la cultura musicale della
                regione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

