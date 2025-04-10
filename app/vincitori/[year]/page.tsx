import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Trophy, Calendar } from "lucide-react"
import { notFound } from "next/navigation"

// Database simulato dei vincitori per anno
const vincitoriDB = {
  "2024": {
    titolo: "Vincitori Premio Aniello De Vita 2024",
    descrizione:
      "L'edizione 2024 del Premio Aniello De Vita ha visto la partecipazione di numerosi talenti che hanno portato sul palco interpretazioni innovative della musica tradizionale cilentana.",
    vincitori: [
      {
        nome: "Gelbison",
        premio: "Primo Premio",
        descrizione:
          "Gruppo musicale che ha conquistato la giuria con la loro interpretazione innovativa della musica tradizionale cilentana. La loro fusione di sonorità moderne con le radici della musica popolare ha creato un sound unico e coinvolgente.",
        immagine: "/images/gallery/2024/gelbison-award-winners.jpeg",
        immagineAlt: "Gelbison riceve il primo premio sul palco del Premio Aniello De Vita 2024",
      },
      {
        nome: "LED City",
        premio: "Premio Speciale della Giuria",
        descrizione:
          "Ensemble che ha colpito la giuria con il loro stile unico e la loro interpretazione personale della tradizione musicale. La loro capacità di fondere elementi contemporanei con la tradizione ha creato un'esperienza musicale originale e autentica.",
        immagine: "/images/gallery/2024/led-city-award-ceremony.jpeg",
        immagineAlt: "LED City riceve il premio speciale della giuria al Premio Aniello De Vita 2024",
      },
      {
        nome: "Patrimonio Immateriale",
        premio: "Premio Giovani Talenti",
        descrizione:
          "Giovane gruppo che ha impressionato con la loro capacità di interpretare la musica tradizionale con un tocco contemporaneo. La loro freschezza e il loro approccio innovativo hanno conquistato pubblico e giuria.",
        immagine: "/images/gallery/2024/patrimonio-immateriale.jpeg",
        immagineAlt: "Patrimonio Immateriale riceve il premio Giovani Talenti al Premio Aniello De Vita 2024",
      },
      {
        nome: "Trio Folk",
        premio: "Premio Miglior Arrangiamento",
        descrizione:
          "Trio che ha emozionato il pubblico con i loro arrangiamenti innovativi dei brani della tradizione cilentana. La loro tecnica e la loro intensità interpretativa hanno lasciato il segno durante tutta l'esibizione.",
        immagine: "/images/gallery/2024/trio-performance-blue.jpeg",
        immagineAlt: "Trio Folk durante la loro esibizione al Premio Aniello De Vita 2024",
      },
    ],
    giuria: [
      "Lillo De Marco - Presidente di Giuria",
      "Cristofaro - Direttore Artistico",
      "Umberto Elia - Direttore Orchestra",
      "Rappresentante NUOVO IMAIE",
      "Rappresentante Parco Nazionale del Cilento",
      "Rappresentante CasaSanremo",
    ],
    galleryImages: [
      {
        src: "/images/gallery/2024/winners-group-photo-2024.jpeg",
        alt: "Foto di gruppo con tutti i vincitori sul palco",
      },
      {
        src: "/images/gallery/2024/gelbison-group-photo.jpeg",
        alt: "Il gruppo Gelbison sul palco con il premio",
      },
      {
        src: "/images/gallery/2024/casasanremo-award-blue.jpeg",
        alt: "Cerimonia di premiazione con il logo CasaSanremo",
      },
      {
        src: "/images/gallery/2024/nuovo-imaie-ceremony.jpeg",
        alt: "Cerimonia con il logo NUOVO IMAIE",
      },
    ],
  },
  "2023": {
    titolo: "Vincitori Premio Aniello De Vita 2023",
    descrizione:
      "L'edizione 2023 del Premio Aniello De Vita ha visto la partecipazione di numerosi talenti che hanno portato sul palco interpretazioni innovative della musica tradizionale cilentana.",
    vincitori: [
      {
        nome: "Barracca Repubblica",
        premio: "Primo Premio",
        descrizione:
          "Gruppo musicale che ha conquistato la giuria con la loro reinterpretazione innovativa della musica tradizionale cilentana. La loro fusione di sonorità moderne con le radici della musica popolare ha creato un sound unico e coinvolgente.",
        immagine: "/images/gallery/2023-3.png",
        immagineAlt: "Barracca Repubblica in concerto al Premio Aniello De Vita 2023",
      },
      {
        nome: "Leo In",
        premio: "Premio Speciale della Giuria",
        descrizione:
          "Artista che ha colpito la giuria con il suo stile unico e la sua interpretazione personale della tradizione musicale. La sua capacità di fondere elementi contemporanei con la tradizione ha creato un'esperienza musicale originale e autentica.",
        immagine: "/images/gallery/2023-11.png",
        immagineAlt: "Leo In durante la sua performance al Premio Aniello De Vita",
      },
      {
        nome: "Andrea Capass",
        premio: "Premio Giovani Talenti",
        descrizione:
          "Giovane talento che ha impressionato con la sua voce e la sua capacità di interpretare la musica tradizionale con un tocco contemporaneo. La sua freschezza e il suo approccio innovativo hanno conquistato pubblico e giuria.",
        immagine: "/images/gallery/2023-13.png",
        immagineAlt: "Andrea Capass in esibizione al Premio Aniello De Vita 2023",
      },
      {
        nome: "Elvira Del Paggio",
        premio: "Premio Miglior Voce Femminile",
        descrizione:
          "Cantante dalla voce straordinaria che ha emozionato il pubblico con la sua interpretazione dei brani della tradizione cilentana. La sua tecnica vocale e la sua intensità interpretativa hanno lasciato il segno durante tutta l'esibizione.",
        immagine: "/images/gallery/2023-7.png",
        immagineAlt: "Elvira Del Paggio in esibizione al Premio Aniello De Vita 2023",
      },
    ],
    giuria: [
      "Lillo De Marco - Presidente di Giuria",
      "Cristofaro - Direttore Artistico",
      "Umberto Elia - Direttore Orchestra",
      "Rappresentante NUOVO IMAIE",
      "Rappresentante Parco Nazionale del Cilento",
    ],
    galleryImages: [
      {
        src: "/images/gallery/2023-6.png",
        alt: "Momento della premiazione",
      },
      {
        src: "/images/gallery/2023-8.png",
        alt: "Consegna del premio",
      },
      {
        src: "/images/gallery/2023-10.png",
        alt: "Vincitore con il certificato",
      },
      {
        src: "/images/gallery/2023-12.png",
        alt: "Presentatori dell'evento",
      },
    ],
  },
  "2022": {
    titolo: "Vincitori Premio Aniello De Vita 2022",
    descrizione:
      "L'edizione 2022 del Premio Aniello De Vita ha visto la partecipazione di numerosi talenti che hanno portato sul palco interpretazioni innovative della musica tradizionale cilentana.",
    vincitori: [
      {
        nome: "Vincitore Primo Premio 2022",
        premio: "Primo Premio",
        descrizione: "Informazioni sul vincitore del primo premio dell'edizione 2022.",
        immagine: "/placeholder.svg?height=400&width=400",
        immagineAlt: "Vincitore Primo Premio 2022",
      },
      {
        nome: "Vincitore Premio Speciale 2022",
        premio: "Premio Speciale della Giuria",
        descrizione: "Informazioni sul vincitore del premio speciale della giuria dell'edizione 2022.",
        immagine: "/placeholder.svg?height=400&width=400",
        immagineAlt: "Vincitore Premio Speciale 2022",
      },
      {
        nome: "Vincitore Premio Giovani 2022",
        premio: "Premio Giovani Talenti",
        descrizione: "Informazioni sul vincitore del premio giovani talenti dell'edizione 2022.",
        immagine: "/placeholder.svg?height=400&width=400",
        immagineAlt: "Vincitore Premio Giovani 2022",
      },
    ],
    giuria: [
      "Lillo De Marco - Presidente di Giuria",
      "Cristofaro - Direttore Artistico",
      "Umberto Elia - Direttore Orchestra",
    ],
    galleryImages: [],
  },
}

export default function VincitoriYearPage({ params }: { params: { year: string } }) {
  const year = params.year

  // Verifica se l'anno esiste nel database
  if (!vincitoriDB[year]) {
    return notFound()
  }

  const { titolo, descrizione, vincitori, giuria, galleryImages } = vincitoriDB[year]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/vincitori" className="text-white hover:underline flex items-center">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Torna a tutti i vincitori
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">{titolo}</h1>

      <div className="mb-12">
        <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">{descrizione}</p>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-6 h-6 text-white" />
          <h2 className="text-2xl font-bold text-white">I Vincitori</h2>
        </div>

        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-white" />
              <p className="text-white text-opacity-80">Edizione {year}</p>
            </div>

            <div className="space-y-12">
              {vincitori.map((vincitore, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-1">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={vincitore.immagine || "/placeholder.svg"}
                        alt={vincitore.immagineAlt}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white">{vincitore.nome}</h3>
                    <p className="text-white text-opacity-80 mb-4 text-lg">{vincitore.premio}</p>
                    <p className="text-white text-opacity-90 text-lg">{vincitore.descrizione}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {galleryImages.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Momenti della Premiazione</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">La Giuria</h2>
        <p className="text-white text-opacity-90 mb-6">
          L'edizione {year} del Premio Aniello De Vita è stata valutata da una giuria di esperti nel campo della musica
          tradizionale cilentana:
        </p>
        <ul className="list-disc list-inside text-white text-opacity-90 space-y-2">
          {giuria.map((membro, index) => (
            <li key={index}>{membro}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

