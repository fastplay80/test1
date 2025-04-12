import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Music } from "lucide-react"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src="/images/hero-bg.jpg"
            alt="Premio Aniello De Vita"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tighter">
            Premio Aniello De Vita
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
            Concorso musicale per giovani talenti
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-festival-orange hover:bg-festival-orange/90">
              <Link href="/info">Scopri di più</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              <Link href="/contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter">
              Il Premio Aniello De Vita
            </h2>
            <div className="text-white/80 space-y-4 text-lg">
              <p>
                Il Cilento Music Festival è una rassegna annuale che si svolge nel Cilento con il patrocinio di istituzioni come il Ministero della Cultura, la Regione Campania, la Provincia di Salerno e il Parco Nazionale del Cilento Vallo Di Diano e Alburni e il supporto di numerosi comuni.
              </p>
              <p>
                All'interno di questa cornice artistica si inserisce il Premio Aniello De Vita, ideato da Lillo De Marco con la direzione artistica del maestro Angelo Loia.
              </p>
              <p>
                Il Premio ha l'obiettivo di scoprire e valorizzare nuovi talenti ispirati da una creatività autentica e indipendente dalle mode del momento, incentivando la produzione di brani originali e promuovendo freschezza espressiva e ricambio generazionale.
              </p>
              <p>
                Si tratta di un concorso dedicato esclusivamente agli artisti under 35, rivolto a giovani autori, compositori ed esecutori di musica italiana che non abbiano ancora avuto una piena visibilità nel panorama musicale nazionale.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-festival-orange hover:bg-festival-orange/90">
                <Link href="/aniello-de-vita" className="flex items-center">
                  Chi era Aniello De Vita <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl">
              <Calendar className="h-12 w-12 text-festival-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Edizione 2024</h3>
              <p className="text-white/70">
                La nuova edizione del Premio Aniello De Vita è in arrivo. Scopri le date e come partecipare.
              </p>
              <Link
                href="/edizioni"
                className="inline-flex items-center text-festival-orange hover:text-festival-orange/80 mt-4"
              >
                Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl">
              <Music className="h-12 w-12 text-festival-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Artisti</h3>
              <p className="text-white/70">
                Esplora i talenti che hanno partecipato alle precedenti edizioni del Premio Aniello De Vita.
              </p>
              <Link
                href="/artisti"
                className="inline-flex items-center text-festival-orange hover:text-festival-orange/80 mt-4"
              >
                Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl">
              <MapPin className="h-12 w-12 text-festival-orange mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-white/70">
                Il Premio si svolge in diverse location nel cuore del Cilento, tra paesaggi mozzafiato e borghi storici.
              </p>
              <Link
                href="/info"
                className="inline-flex items-center text-festival-orange hover:text-festival-orange/80 mt-4"
              >
                Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-festival-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter">
            Partecipa al Premio Aniello De Vita
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            Sei un giovane artista under 35? Hai un progetto musicale originale? Partecipa al Premio Aniello De Vita e
            fai conoscere la tua musica!
          </p>
          <Button asChild size="lg" className="bg-white text-festival-orange hover:bg-white/90">
            <Link href="/contatti">Contattaci per informazioni</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
