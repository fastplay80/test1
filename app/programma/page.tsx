import { Calendar } from "lucide-react"

export default function ProgrammaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Programma Completo</h1>

        <div className="space-y-12">
          {/* Giorno 1 */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">15 Giugno 2024</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  time: "18:00",
                  artist: "DJ Elettronica",
                  venue: "Palco Principale",
                  description: "Apertura festival con musica elettronica",
                },
                {
                  time: "20:00",
                  artist: "Gruppo Jazz Fusion",
                  venue: "Palco Secondario",
                  description: "Esibizione di jazz fusion contemporaneo",
                },
                {
                  time: "22:00",
                  artist: "Artista Headliner",
                  venue: "Palco Principale",
                  description: "Performance principale della serata",
                },
                { time: "00:00", artist: "After Party", venue: "Area DJ", description: "Musica fino a tarda notte" },
              ].map((event, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-white border-opacity-10 pb-4"
                >
                  <div className="text-xl font-bold text-white">{event.time}</div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-white">{event.artist}</h3>
                    <p className="text-white text-opacity-80">{event.venue}</p>
                    <p className="text-white text-opacity-60 text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Giorno 2 */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">16 Giugno 2024</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  time: "17:00",
                  artist: "Workshop Musicale",
                  venue: "Area Workshop",
                  description: "Workshop interattivo per tutti",
                },
                {
                  time: "19:00",
                  artist: "Band Rock",
                  venue: "Palco Principale",
                  description: "Rock italiano e internazionale",
                },
                {
                  time: "21:00",
                  artist: "Orchestra Sinfonica",
                  venue: "Palco Principale",
                  description: "Classici rivisitati in chiave moderna",
                },
                { time: "23:00", artist: "DJ Set", venue: "Area DJ", description: "Musica elettronica e dance" },
              ].map((event, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-white border-opacity-10 pb-4"
                >
                  <div className="text-xl font-bold text-white">{event.time}</div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-white">{event.artist}</h3>
                    <p className="text-white text-opacity-80">{event.venue}</p>
                    <p className="text-white text-opacity-60 text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Giorno 3 */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">17 Giugno 2024</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  time: "16:00",
                  artist: "Concorso Giovani Talenti",
                  venue: "Palco Secondario",
                  description: "Esibizione dei finalisti del concorso",
                },
                {
                  time: "18:30",
                  artist: "Artista Pop",
                  venue: "Palco Principale",
                  description: "Hit del momento e classici pop",
                },
                {
                  time: "20:30",
                  artist: "Gruppo Folk",
                  venue: "Palco Secondario",
                  description: "Musica tradizionale del Cilento",
                },
                {
                  time: "22:30",
                  artist: "Artista Internazionale",
                  venue: "Palco Principale",
                  description: "Special guest internazionale",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-white border-opacity-10 pb-4"
                >
                  <div className="text-xl font-bold text-white">{event.time}</div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-white">{event.artist}</h3>
                    <p className="text-white text-opacity-80">{event.venue}</p>
                    <p className="text-white text-opacity-60 text-sm mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

