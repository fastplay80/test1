import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Music, Calendar, Clock, MapPin } from "lucide-react"
import { notFound } from "next/navigation"

// Database simulato degli artisti
const artistiDB = {
  "aniello-de-vita": {
    nome: "Aniello De Vita",
    genere: "Folk Cilentano",
    immagine: "/images/aniello-de-vita.png",
    bio: "Aniello De Vita è un maestro della musica tradizionale cilentana, con oltre 30 anni di carriera dedicati alla preservazione e innovazione delle melodie folkloristiche della regione. La sua padronanza della tammorra e della chitarra battente lo ha reso uno dei più importanti esponenti della musica popolare del Sud Italia.",
    canzoni: [
      { titolo: "Tarantella del Cilento", durata: "4:32", album: "Radici" },
      { titolo: "Pizzica di Mare", durata: "5:17", album: "Tradizioni" },
      { titolo: "Canto Antico", durata: "3:45", album: "Radici" },
      { titolo: "Ballata del Pescatore", durata: "6:03", album: "Storie del Sud" },
      { titolo: "Tammurriata", durata: "4:58", album: "Tradizioni" },
      { titolo: "Serenata Cilentana", durata: "3:21", album: "Storie del Sud" },
      { titolo: "Danza della Terra", durata: "5:42", album: "Radici" },
      { titolo: "Canto dei Contadini", durata: "4:11", album: "Tradizioni" },
    ],
    album: [
      { titolo: "Radici", anno: "2018", copertina: "/placeholder.svg?height=300&width=300" },
      { titolo: "Tradizioni", anno: "2015", copertina: "/placeholder.svg?height=300&width=300" },
      { titolo: "Storie del Sud", anno: "2020", copertina: "/placeholder.svg?height=300&width=300" },
    ],
    esibizioni: [
      {
        data: "15 Giugno",
        ora: "20:30",
        luogo: "Palco Principale",
        descrizione: "Concerto di apertura con l'ensemble completo",
      },
      {
        data: "16 Giugno",
        ora: "17:00",
        luogo: "Area Workshop",
        descrizione: "Workshop sulla musica tradizionale cilentana",
      },
    ],
    social: {
      spotify: "#",
      youtube: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  "gruppo-folk-cilento": {
    nome: "Gruppo Folk Cilento",
    genere: "Folk Tradizionale",
    immagine: "/placeholder.svg?height=600&width=600",
    bio: "Il Gruppo Folk Cilento è un ensemble di musicisti dedicati alla preservazione delle tradizioni musicali della regione. Con strumenti tradizionali e arrangiamenti autentici, il gruppo porta sul palco l'essenza della cultura cilentana.",
    canzoni: [
      { titolo: "Danza del Villaggio", durata: "4:12", album: "Tradizioni Popolari" },
      { titolo: "Canto della Vendemmia", durata: "3:45", album: "Tradizioni Popolari" },
      { titolo: "Tarantella Antica", durata: "5:20", album: "Ritmi del Cilento" },
      { titolo: "Serenata Notturna", durata: "4:05", album: "Ritmi del Cilento" },
    ],
    album: [
      { titolo: "Tradizioni Popolari", anno: "2019", copertina: "/placeholder.svg?height=300&width=300" },
      { titolo: "Ritmi del Cilento", anno: "2021", copertina: "/placeholder.svg?height=300&width=300" },
    ],
    esibizioni: [
      { data: "15 Giugno", ora: "18:00", luogo: "Palco Secondario", descrizione: "Esibizione di danze tradizionali" },
    ],
    social: {
      spotify: "#",
      youtube: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  "orchestra-mediterranea": {
    nome: "Orchestra Mediterranea",
    genere: "Classica Contemporanea",
    immagine: "/placeholder.svg?height=600&width=600",
    bio: "L'Orchestra Mediterranea fonde elementi di musica classica con influenze mediterranee, creando un suono unico che attraversa culture e tradizioni. Composta da 25 musicisti provenienti da diversi paesi del Mediterraneo, l'orchestra è nota per le sue interpretazioni innovative.",
    canzoni: [
      { titolo: "Sinfonia del Mare", durata: "8:32", album: "Mediterraneo" },
      { titolo: "Alba sul Golfo", durata: "6:17", album: "Mediterraneo" },
      { titolo: "Danza delle Onde", durata: "5:45", album: "Armonie" },
      { titolo: "Viaggio a Sud", durata: "7:23", album: "Armonie" },
    ],
    album: [
      { titolo: "Mediterraneo", anno: "2020", copertina: "/placeholder.svg?height=300&width=300" },
      { titolo: "Armonie", anno: "2022", copertina: "/placeholder.svg?height=300&width=300" },
    ],
    esibizioni: [
      {
        data: "16 Giugno",
        ora: "21:00",
        luogo: "Palco Principale",
        descrizione: "Concerto sinfonico con arrangiamenti speciali",
      },
    ],
    social: {
      spotify: "#",
      youtube: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  "dj-elettronica": {
    nome: "DJ Elettronica",
    genere: "Elettronica",
    immagine: "/placeholder.svg?height=600&width=600",
    bio: "DJ Elettronica è all'avanguardia della scena elettronica italiana, mescolando beat contemporanei con influenze mediterranee. I suoi set energici e innovativi hanno conquistato club e festival in tutta Europa.",
    canzoni: [
      { titolo: "Digital Waves", durata: "6:32", album: "Electronica" },
      { titolo: "Mediterranean Beats", durata: "5:47", album: "Electronica" },
      { titolo: "Night Pulse", durata: "7:15", album: "Techno Fusion" },
      { titolo: "Sunrise Rhythm", durata: "8:03", album: "Techno Fusion" },
    ],
    album: [
      { titolo: "Electronica", anno: "2021", copertina: "/placeholder.svg?height=300&width=300" },
      { titolo: "Techno Fusion", anno: "2023", copertina: "/placeholder.svg?height=300&width=300" },
    ],
    esibizioni: [
      { data: "15 Giugno", ora: "22:00", luogo: "Area DJ", descrizione: "Set elettronico con visual show" },
      { data: "17 Giugno", ora: "23:00", luogo: "Area DJ", descrizione: "Closing party" },
    ],
    social: {
      spotify: "#",
      youtube: "#",
      instagram: "#",
      facebook: "#",
    },
  },
}

export default function Artista({ params }: { params: { id: string } }) {
  const artista = artistiDB[params.id]

  if (!artista) {
    return notFound()
  }

  const { nome, genere, immagine, bio, canzoni, album, esibizioni, social } = artista

  return (
    <div className="container py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Torna indietro
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Colonna Immagine e Informazioni */}
        <div>
          <Image
            src={immagine || "/placeholder.svg"}
            alt={nome}
            width={600}
            height={600}
            className="rounded-lg shadow-md aspect-square object-cover"
          />
          <h1 className="text-3xl font-bold mt-4">{nome}</h1>
          <p className="text-gray-600">{genere}</p>
          <p className="mt-4">{bio}</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Link href={social.spotify} target="_blank" rel="noopener noreferrer">
              Spotify
            </Link>
            <Link href={social.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </Link>
            <Link href={social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
            <Link href={social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </Link>
          </div>
        </div>

        {/* Colonna Canzoni, Album, Esibizioni */}
        <div>
          {/* Canzoni */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Canzoni Popolari</h2>
            <ul>
              {canzoni.map((canzone, index) => (
                <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Music className="w-5 h-5 text-gray-500" />
                    <span>{canzone.titolo}</span>
                  </div>
                  <span className="text-gray-500">{canzone.durata}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Album */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Album</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {album.map((album, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <Image
                    src={album.copertina || "/placeholder.svg"}
                    alt={album.titolo}
                    width={300}
                    height={300}
                    className="aspect-square object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold">{album.titolo}</h3>
                    <p className="text-gray-500">Anno: {album.anno}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Esibizioni */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Prossime Esibizioni</h2>
            <ul>
              {esibizioni.map((esibizione, index) => (
                <li key={index} className="py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{esibizione.data}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{esibizione.ora}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{esibizione.luogo}</span>
                  </div>
                  <p className="mt-1 text-gray-700">{esibizione.descrizione}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

