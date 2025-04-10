import Link from "next/link"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

export default function EventiPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Eventi</h1>
        <div className="h-1 w-24 bg-white mb-8"></div>

        <div className="space-y-8">
          {/* Evento 27 Dicembre 2024 */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Calendar className="w-4 h-4" />
                <span>27 Dicembre 2024</span>
              </div>
              <div className="flex items-center gap-2 bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <MapPin className="w-4 h-4" />
                <span>Sala "Misericordia", Moio Della Civitella</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Premio ANIELLO DE VITA</h2>

            <p className="text-white text-opacity-90 mb-6">
              Un evento dedicato alla canzone cilentana e al valore del Premio Aniello De Vita. Interventi di esperti
              del settore musicale, rappresentanti istituzionali e personalità di spicco nel panorama della musica
              d'autore.
            </p>

            <div className="flex justify-between items-center">
              <Link href="/eventi/27-dicembre-2024" className="text-white flex items-center gap-2 hover:underline">
                Dettagli evento
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/eventi/27-dicembre-2024"
                className="bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all"
              >
                Programma completo
              </Link>
            </div>
          </div>

          {/* Placeholder per eventi futuri */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 opacity-70">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 bg-black bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Calendar className="w-4 h-4" />
                <span>Prossimamente</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Prossimi eventi</h2>

            <p className="text-white text-opacity-90 mb-6">
              Resta aggiornato sui prossimi eventi del Premio Aniello De Vita. Seguici sui social o iscriviti alla
              newsletter per non perdere le novità.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

