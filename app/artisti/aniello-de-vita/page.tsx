import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Music, Calendar, Clock, MapPin } from "lucide-react"

export default function AnielloDeVitaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <Link href="/artisti" className="inline-flex items-center text-white mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna agli artisti
        </Link>

        {/* Header biografia */}
        <div className="relative mb-12">
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <Image
              src="/images/aniello-de-vita.png"
              alt="Aniello De Vita"
              fill
              className="object-cover blur-sm opacity-30"
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="md:col-span-1">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/aniello-de-vita.png"
                  alt="Aniello De Vita"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <span className="text-white text-opacity-80 mb-2 block">Maestro della Musica Tradizionale</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">Aniello De Vita</h1>

              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white text-opacity-90 mb-4">
                  Aniello De Vita è una figura emblematica della musica tradizionale cilentana. Nato e cresciuto nel
                  cuore del Cilento, ha dedicato la sua vita alla preservazione e alla diffusione del patrimonio
                  musicale della sua terra.
                </p>

                <p className="text-white text-opacity-90 mb-4">
                  Cantautore, musicista e ricercatore, Aniello ha raccolto e interpretato numerosi canti popolari del
                  Cilento, contribuendo in modo significativo alla conservazione di melodie e testi che rischiavano di
                  andare perduti. La sua voce autentica e la sua maestria con la chitarra hanno dato nuova vita a
                  tradizioni musicali secolari.
                </p>

                <p className="text-white text-opacity-90 mb-4">
                  Nel corso della sua carriera, ha collaborato con numerosi artisti e gruppi folk, portando la musica
                  cilentana sui palcoscenici di tutta Italia e all'estero. Il suo approccio rispettoso ma innovativo
                  alle tradizioni musicali gli ha permesso di avvicinare anche le nuove generazioni a questo prezioso
                  patrimonio culturale.
                </p>

                <p className="text-white text-opacity-90 mb-4">
                  Oltre all'attività di musicista, Aniello De Vita è noto per il suo impegno nella ricerca
                  etnomusicologica. Ha documentato canti, storie e tradizioni orali del Cilento, creando un archivio di
                  inestimabile valore per studiosi e appassionati. I suoi studi hanno contribuito a far conoscere e
                  apprezzare la ricchezza culturale di questa regione.
                </p>

                <p className="text-white text-opacity-90">
                  Il Premio Aniello De Vita, istituito in suo onore, rappresenta oggi un importante riconoscimento per i
                  giovani musicisti che si dedicano alla valorizzazione della musica tradizionale cilentana, continuando
                  così il percorso tracciato dal maestro.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#discografia"
                  className="bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all"
                >
                  Scopri la musica
                </a>
                <a
                  href="#esibizioni"
                  className="bg-transparent border border-white text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition-all"
                >
                  Vedi esibizioni
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Galleria fotografica */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Music className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Galleria</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/aniello-de-vita.png"
                alt="Aniello De Vita in concerto"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Aniello De Vita con la tammorra"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Aniello De Vita durante un workshop"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Aniello De Vita con il suo gruppo"
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Discografia */}
        <div id="discografia" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Music className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Discografia</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Album Canti del Cilento"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Canti del Cilento</h3>
                <p className="text-white text-opacity-80 mb-2">2005</p>
                <ul className="text-white text-opacity-90 text-sm space-y-1">
                  <li>1. Tarantella Cilentana</li>
                  <li>2. Lu Brigante</li>
                  <li>3. Canto dei Pescatori</li>
                  <li>4. Ninna Nanna Antica</li>
                  <li>5. Ballata della Luna</li>
                </ul>
              </div>
            </div>

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Album Radici"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Radici</h3>
                <p className="text-white text-opacity-80 mb-2">2010</p>
                <ul className="text-white text-opacity-90 text-sm space-y-1">
                  <li>1. Terra Mia</li>
                  <li>2. Tammurriata</li>
                  <li>3. Canto dei Contadini</li>
                  <li>4. Danza del Villaggio</li>
                  <li>5. Serenata alla Luna</li>
                </ul>
              </div>
            </div>

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Album Memorie"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white">Memorie</h3>
                <p className="text-white text-opacity-80 mb-2">2018</p>
                <ul className="text-white text-opacity-90 text-sm space-y-1">
                  <li>1. Storie Antiche</li>
                  <li>2. Canto dell'Emigrante</li>
                  <li>3. Ballata del Pescatore</li>
                  <li>4. Danza della Festa</li>
                  <li>5. Ritorno a Casa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Esibizioni al festival */}
        <div id="esibizioni">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Esibizioni al Festival</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-2 text-white mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">15 Giugno 2024</span>
                <Clock className="w-5 h-5 ml-4" />
                <span>20:30</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Concerto Omaggio</h3>
              <div className="flex items-center gap-2 text-white text-opacity-80 mb-4">
                <MapPin className="w-4 h-4" />
                <span>Palco Principale</span>
              </div>
              <p className="text-white text-opacity-90">
                Un concerto speciale dedicato alla memoria di Aniello De Vita, con la partecipazione di musicisti che
                hanno collaborato con lui nel corso degli anni. Un'occasione per rivivere le melodie e i canti che hanno
                reso celebre il maestro della musica cilentana.
              </p>
            </div>

            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center gap-2 text-white mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">16 Giugno 2024</span>
                <Clock className="w-5 h-5 ml-4" />
                <span>17:00</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premio Aniello De Vita</h3>
              <div className="flex items-center gap-2 text-white text-opacity-80 mb-4">
                <MapPin className="w-4 h-4" />
                <span>Area Workshop</span>
              </div>
              <p className="text-white text-opacity-90">
                Cerimonia di premiazione dei giovani talenti che si sono distinti nella valorizzazione della musica
                tradizionale cilentana. Il premio, intitolato ad Aniello De Vita, rappresenta un importante
                riconoscimento per chi continua il percorso tracciato dal maestro.
              </p>
            </div>
          </div>
        </div>

        {/* Eredità culturale */}
        <div className="mt-16 bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-6">L'Eredità di Aniello De Vita</h2>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white text-opacity-90 mb-4">
              L'eredità di Aniello De Vita va ben oltre la sua musica. Il suo lavoro di ricerca e documentazione ha
              permesso di preservare un patrimonio culturale che rischiava di scomparire, mentre il suo impegno nella
              diffusione della musica tradizionale ha ispirato numerosi giovani musicisti.
            </p>

            <p className="text-white text-opacity-90 mb-4">
              La Fondazione Aniello De Vita, creata dopo la sua scomparsa, continua il suo lavoro attraverso iniziative
              di formazione, ricerca e promozione della musica tradizionale cilentana. L'archivio sonoro e documentale
              raccolto dal maestro è oggi una risorsa preziosa per studiosi e appassionati.
            </p>

            <p className="text-white text-opacity-90">
              Il Cilento Festival dedica ogni anno uno spazio speciale alla memoria di Aniello De Vita, celebrando il
              suo contributo alla cultura musicale della regione e mantenendo vivo il suo insegnamento: la musica
              tradizionale non è solo un ricordo del passato, ma una forza viva che continua a evolversi e a raccontare
              l'identità di un popolo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

