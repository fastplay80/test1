import Link from "next/link"
import Image from "next/image"
import { Music } from "lucide-react"

export default function ArtistiPage() {
  const artisti = [
    {
      id: "aniello-de-vita",
      nome: "Aniello De Vita",
      genere: "Folk Cilentano",
      immagine: "/images/aniello-de-vita.png",
      evidenza: true,
    },
    {
      id: "gruppo-folk-cilento",
      nome: "Gruppo Folk Cilento",
      genere: "Folk Tradizionale",
      immagine: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "orchestra-mediterranea",
      nome: "Orchestra Mediterranea",
      genere: "Classica Contemporanea",
      immagine: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "dj-elettronica",
      nome: "DJ Elettronica",
      genere: "Elettronica",
      immagine: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "jazz-fusion-ensemble",
      nome: "Jazz Fusion Ensemble",
      genere: "Jazz Fusion",
      immagine: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "rock-band-italia",
      nome: "Rock Band Italia",
      genere: "Rock",
      immagine: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "cantante-pop",
      nome: "Cantante Pop",
      genere: "Pop",
      immagine: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "artista-internazionale",
      nome: "Artista Internazionale",
      genere: "World Music",
      immagine: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Artisti</h1>

        {/* Artista in evidenza */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Music className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Artista in Evidenza</h2>
          </div>

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-square md:aspect-auto">
                <Image src="/images/aniello-de-vita.png" alt="Aniello De Vita" fill className="object-cover" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="text-white text-opacity-80 mb-2">Folk Cilentano</span>
                <h3 className="text-3xl font-bold text-white mb-4">Aniello De Vita</h3>
                <p className="text-white text-opacity-90 mb-6">
                  Maestro della tradizione musicale cilentana, Aniello De Vita porta sul palco del Cilento Festival le
                  melodie e i ritmi che hanno definito la cultura musicale della regione.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-sm text-white">Tarantella</span>
                  <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-sm text-white">Folk</span>
                  <span className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-sm text-white">Tradizionale</span>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="/artisti/aniello-de-vita"
                    className="bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all"
                  >
                    Scopri di più
                  </Link>
                  <Link
                    href="/programma"
                    className="bg-transparent border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
                  >
                    Vedi esibizioni
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tutti gli artisti */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Music className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Tutti gli Artisti</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artisti.map((artista) => (
              <Link
                key={artista.id}
                href={`/artisti/${artista.id}`}
                className="group bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={artista.immagine || "/placeholder.svg"}
                    alt={artista.nome}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                <div className="p-4">
                  <span className="text-sm text-white text-opacity-80">{artista.genere}</span>
                  <h3 className="text-xl font-bold text-white">{artista.nome}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

