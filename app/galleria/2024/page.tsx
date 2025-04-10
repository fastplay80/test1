"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Camera, X } from "lucide-react"

export default function Gallery2024Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  // Immagini dell'edizione 2024
  const images2024 = [
    // Nuove immagini aggiunte
    {
      src: "/images/gallery/2024/special-guest-red-jacket-presenters.jpeg",
      alt: "Ospite speciale con presentatori",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/female-presenter-red-background.jpeg",
      alt: "Presentatrice con sfondo rosso",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/led-city-award-ceremony.jpeg",
      alt: "Cerimonia di premiazione LED City",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/parco-cilento-ceremony-closeup.jpeg",
      alt: "Cerimonia Parco Cilento primo piano",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/parco-cilento-ceremony-wide.jpeg",
      alt: "Cerimonia Parco Cilento vista ampia",
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
    {
      src: "/images/gallery/2024/presenters-red-background.jpeg",
      alt: "Presentatori con sfondo rosso",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/singer-purple-smoke-cameraman.jpeg",
      alt: "Cantante con fumo viola e cameraman",
      width: 1200,
      height: 800,
    },

    // Foto di gruppo e panoramiche
    {
      src: "/images/gallery/2024/winners-group-photo-2024.jpeg",
      alt: "Foto di gruppo dei vincitori e organizzatori sul palco del Premio Aniello De Vita 2024 con sfondo rosso",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/winners-group-photo-stage.jpeg",
      alt: "Foto di gruppo sul palco con vincitori e organizzatori del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/four-presenters-group.jpeg",
      alt: "Quattro presentatori sul palco con il vincitore che mostra il premio e il logo del Parco Nazionale del Cilento sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/gelbison-group-photo.jpeg",
      alt: "Foto di gruppo con il logo GELBISON sullo sfondo durante la premiazione",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/stage-audience-view.jpeg",
      alt: "Vista panoramica del palco e del pubblico durante la cerimonia del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/award-winners-group.jpeg",
      alt: "Foto di gruppo dei vincitori sul palco con lo sfondo rosso del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },

    // Premiazioni e cerimonie
    {
      src: "/images/gallery/2024/casasanremo-award-blue.jpeg",
      alt: "Cerimonia di premiazione con il vincitore che riceve il premio CASASANREMO su sfondo blu",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/casasanremo-blue-background.jpeg",
      alt: "Il vincitore mostra il premio CASASANREMO con sfondo blu e i presentatori al suo fianco",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/casasanremo-presenters.jpeg",
      alt: "Presentatori sul palco con il logo CASASANREMO sullo sfondo blu",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/winner-pattern-shirt-award.jpeg",
      alt: "Il vincitore in camicia fantasia mostra il premio ricevuto con il logo del Parco Nazionale del Cilento sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/parco-cilento-ceremony.jpeg",
      alt: "Cerimonia di premiazione con il logo del Parco Nazionale del Cilento sullo sfondo e il vincitore che riceve il premio",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/led-city-presentation.jpeg",
      alt: "Presentazione sul palco con il logo LED City sullo sfondo durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/female-winner-nuovo-imaie.jpeg",
      alt: "Vincitrice in abito nero a quadretti riceve il premio con il logo NUOVO IMAIE sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/nuovo-imaie-ceremony.jpeg",
      alt: "Cerimonia con il logo NUOVO IMAIE sullo sfondo durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/nuovo-imaie-ceremony-2.jpeg",
      alt: "Altra inquadratura della cerimonia di premiazione con il logo NUOVO IMAIE sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/gelbison-award-ceremony.jpeg",
      alt: "Cerimonia di premiazione con il logo GELBISON sullo sfondo durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/football-team-presentation.jpeg",
      alt: "Presentazione sul palco con uno schermo che mostra una squadra di calcio in divisa verde",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/patrimonio-immateriale.jpeg",
      alt: "Presentazione del premio 'Il Patrimonio Immateriale' durante la cerimonia del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-red-jacket.jpeg",
      alt: "Ospite speciale in giacca rossa e maglione a righe gialle e nere parla al microfono durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-presenters.jpeg",
      alt: "Ospite speciale in giacca rossa affiancato dai presentatori sul palco del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-red-background.jpeg",
      alt: "Ospite speciale intervistato sul palco con il logo del Premio Aniello De Vita sullo sfondo rosso",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/full-stage-red-background.jpeg",
      alt: "Vista completa del palco con l'ospite speciale, i presentatori e i musicisti con il logo del Premio Aniello De Vita sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-closeup.jpeg",
      alt: "Primo piano dell'ospite speciale in giacca rossa mentre viene intervistato dai presentatori sul palco",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-full-stage-view.jpeg",
      alt: "Vista completa del palco con l'ospite speciale e i presentatori con il logo del Premio Aniello De Vita sullo sfondo rosso",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-wide-angle.jpeg",
      alt: "Inquadratura ampia dell'ospite speciale sul palco con i presentatori e i musicisti sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/special-guest-full-stage-lighting.jpeg",
      alt: "Vista del palco con effetti di luce blu e l'ospite speciale in giacca rossa al centro",
      width: 1200,
      height: 800,
    },

    // Presentatori ed esibizioni
    {
      src: "/images/gallery/2024/presenters-red-background.jpeg",
      alt: "I presentatori sul palco con sfondo rosso del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/presenters-red-lighting.jpeg",
      alt: "Tre presentatori sul palco con illuminazione rossa e blu durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/presenters-blue-background.jpeg",
      alt: "Tre presentatori sul palco con sfondo blu durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/presenters-discussion.jpeg",
      alt: "Discussione sul palco tra i presentatori e un musicista con chitarra durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/presenters-discussion-2.jpeg",
      alt: "Momento di dialogo tra i presentatori durante la cerimonia del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/musical-performance-red-background.jpeg",
      alt: "Esibizione musicale con cantante barbuto e due cantanti donne su sfondo rosso con effetti di luce",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/duo-folk-performance.jpeg",
      alt: "Duo di musicisti folk che si esibiscono sul palco del Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/stage-performance-red.jpeg",
      alt: "Esibizione musicale con suggestivi effetti di luce rossa al Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/stage-performance-red-2.jpeg",
      alt: "Musicisti tradizionali cilentani si esibiscono con effetti di luce scenografici al Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/stage-performance-red-3.jpeg",
      alt: "Esibizione completa della band sul palco con illuminazione rossa e logo del Premio Aniello De Vita sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/trio-performance-blue.jpeg",
      alt: "Esibizione di un trio musicale con cantante barbuto e due cantanti donne su sfondo blu",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/trio-performance-screen.jpeg",
      alt: "Esibizione del trio musicale con uno schermo che mostra il primo piano di una delle cantanti",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/trio-performance-red-pattern.jpeg",
      alt: "Esibizione del trio musicale con sfondo rosso decorato durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/performer-black-suit-yellow-lights.jpeg",
      alt: "Cantante in abito nero che si esibisce sotto fasci di luce gialla durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/performer-floral-shirt-gesture.jpeg",
      alt: "Cantante con camicia fantasia che gesticola durante la sua esibizione con effetti di luce blu",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/performer-patterned-shirt-purple-lights.jpeg",
      alt: "Cantante con camicia fantasia bianca e viola che si esibisce sotto intense luci viola",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/performer-with-cameraman.jpeg",
      alt: "Esibizione musicale con cantante in giacca nera e camicia fantasia, con un cameraman che riprende l'evento",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/performer-patterned-shirt-spotlight.jpeg",
      alt: "Primo piano di un cantante con camicia fantasia bianca e nera che si esibisce sotto un fascio di luce bianca",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/guitarist-light-shirt-green-background.jpeg",
      alt: "Musicista con camicia chiara che suona la chitarra acustica sul palco con sfondo verde",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/full-stage-yellow-lights-audience.jpeg",
      alt: "Vista completa del palco con musicista e band sotto fasci di luce gialla, con pubblico visibile in sala",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/guitarist-with-cameraman.jpeg",
      alt: "Musicista che suona la chitarra acustica sul palco con un cameraman che riprende l'esibizione",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/audience-red-seats.jpeg",
      alt: "Il pubblico seduto su poltrone rosse da teatro durante il Premio Aniello De Vita 2024",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/young-guitarist-red-pants.jpeg",
      alt: "Giovane musicista in abito nero e pantaloni rossi che suona una chitarra acustica sul palco",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/musician-reading-sheet-music.jpeg",
      alt: "Musicista con barba grigia in abito scuro che legge un foglio mentre suona la chitarra acustica con tracolla decorata",
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
      src: "/images/gallery/2024/presenter-with-microphone.jpeg",
      alt: "Presentatore in giacca scura sul palco con le braccia aperte e il logo del Premio Aniello De Vita sullo sfondo",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/empty-stage-setup.jpeg",
      alt: "Vista del palco vuoto con schermi digitali che mostrano il logo del Premio Aniello De Vita su sfondo rosso",
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
      src: "/images/gallery/2024/ensemble-yellow-lighting.jpeg",
      alt: "Gruppo musicale con musicisti in camicie bianche che suonano vari strumenti sotto fasci di luce gialla",
      width: 1200,
      height: 800,
    },
    {
      src: "/images/gallery/2024/musician-with-blue-projection.jpeg",
      alt: "Musicista con barba grigia in abito scuro che legge un foglio con una proiezione blu di un altro musicista sullo sfondo",
      width: 1200,
      height: 800,
    },
  ]

  // Funzione per gestire la navigazione tra le immagini nel lightbox
  const handleImageNavigation = (direction: "next" | "prev") => {
    if (!selectedImage) return

    // Trova l'indice dell'immagine corrente
    const currentIndex = images2024.findIndex((img) => img.src === selectedImage)
    if (currentIndex === -1) return

    let newIndex
    if (direction === "next") {
      newIndex = (currentIndex + 1) % images2024.length
    } else {
      newIndex = (currentIndex - 1 + images2024.length) % images2024.length
    }

    setSelectedImage(images2024[newIndex].src)
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
            Galleria Premio Aniello De Vita 2024
          </h1>

          <div className="mb-12">
            <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
              Esplora i momenti più significativi dell'edizione 2024 del Premio Aniello De Vita attraverso la nostra
              galleria fotografica. Rivivi l'atmosfera unica, le performance musicali e le emozioni che hanno
              caratterizzato questa edizione.
            </p>

            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Camera className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">Momenti dell'Edizione 2024</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Premio Aniello De Vita 2024</h3>
              <p className="text-white text-opacity-90 mb-4">
                L'edizione 2024 del Premio Aniello De Vita ha visto la partecipazione di numerosi talenti musicali che
                hanno portato sul palco la tradizione musicale cilentana reinterpretata in chiave contemporanea.
              </p>
              <p className="text-white text-opacity-90">
                Il premio, dedicato al maestro della musica tradizionale cilentana, rappresenta un importante
                riconoscimento per i musicisti che contribuiscono a mantenere viva la cultura musicale della regione.
                Questa edizione ha visto la partecipazione di artisti di grande talento e la presenza di importanti
                partner istituzionali come NUOVO IMAIE, CASASANREMO, LED City, GELBISON e il Parco Nazionale del
                Cilento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

