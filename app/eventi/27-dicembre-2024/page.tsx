import Link from "next/link"
import { Calendar, Clock, MapPin, Users, Music, Coffee } from "lucide-react"

export default function EventoDicembre2024Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/eventi" className="text-white hover:underline flex items-center gap-2 mb-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Torna agli eventi
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Premio ANIELLO DE VITA</h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>27 Dicembre 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <MapPin className="w-4 h-4" />
              <span>Sala "Misericordia", Moio Della Civitella</span>
            </div>
          </div>

          <div className="h-1 w-24 bg-white mb-8"></div>
        </div>

        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Programma dell'Evento</h2>

          <div className="space-y-8">
            {/* Sezione Saluti */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-white" />
                <h3 className="text-xl font-bold text-white">Ore 15.00</h3>
              </div>

              <div className="ml-8">
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-5 h-5 text-white mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Saluti Istituzionali</h4>
                    <ul className="mt-2 space-y-2 text-white text-opacity-90">
                      <li>• Enrico Gnarra - Sindaco</li>
                      <li>• Don Ronel</li>
                      <li>• Antonio Bruno - Presidente Consac infrastrutture</li>
                      <li>• Massimo Trotta - Presidente Club per Unesco Elea</li>
                      <li>• Mimi Nicoletti - Campus Mediterraneo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Interventi */}
            <div className="ml-8 space-y-6">
              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Lillo De Marco</h4>
                  <p className="text-white text-opacity-80">La canzone cilentana (IPIC)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Angelo Loia</h4>
                  <p className="text-white text-opacity-80">Aniello De Vita. Premio e valore della sua canzone</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Leopoldo Lombardi</h4>
                  <p className="text-white text-opacity-80">Diritto d'autore e il musicista nell'era digitale</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Michele Pecora</h4>
                  <p className="text-white text-opacity-80">La canzone d'autore</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Peppe Cirillo</h4>
                  <p className="text-white text-opacity-80">
                    La canzone d'autore della scuola romana, genovese, napoletana e menzione alla cilentana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Music className="w-5 h-5 text-white mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Andrea Miccichè</h4>
                  <p className="text-white text-opacity-80">Saluti presidente nuovo IMAIE</p>
                </div>
              </div>
            </div>

            {/* Aperitivo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-white" />
                <h3 className="text-xl font-bold text-white">Ore 18.00</h3>
              </div>

              <div className="ml-8">
                <div className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-white mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Aperitivo</h4>
                    <p className="text-white text-opacity-80">Presso la Tenuta "VIGNANOVA"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Partecipa all'evento</h2>
          <p className="text-white text-opacity-90 mb-6">
            Non perdere questa occasione unica di approfondire la conoscenza della musica cilentana e del Premio Aniello
            De Vita. L'evento è aperto al pubblico e gratuito.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contatti"
              className="bg-white text-festival-orange font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all"
            >
              Contattaci per informazioni
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

