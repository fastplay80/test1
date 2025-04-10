import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function ProgramPreview() {
  const events = [
    {
      day: "Venerdì",
      date: "15 Giugno",
      highlights: [
        { time: "18:00", title: "Apertura Festival", location: "Palco Principale" },
        { time: "20:00", title: "DJ Set Elettronica", location: "Area DJ" },
        { time: "22:00", title: "Concerto Headliner", location: "Palco Principale" },
      ],
    },
    {
      day: "Sabato",
      date: "16 Giugno",
      highlights: [
        { time: "17:00", title: "Workshop Musicale", location: "Area Workshop" },
        { time: "19:00", title: "Band Rock", location: "Palco Principale" },
        { time: "21:00", title: "Orchestra Sinfonica", location: "Palco Principale" },
      ],
    },
    {
      day: "Domenica",
      date: "17 Giugno",
      highlights: [
        { time: "16:00", title: "Concorso Giovani Talenti", location: "Palco Secondario" },
        { time: "18:30", title: "Artista Pop", location: "Palco Principale" },
        { time: "22:30", title: "Artista Internazionale", location: "Palco Principale" },
      ],
    },
  ]

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Programma</h2>
          <div className="h-1 w-16 bg-white mt-2"></div>
        </div>
        <Link href="/programma" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
          Programma completo
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">
                {event.day} {event.date}
              </h3>
            </div>

            <div className="space-y-4">
              {event.highlights.map((highlight, hIndex) => (
                <div key={hIndex} className="border-b border-white border-opacity-10 pb-4 last:border-0">
                  <div className="flex items-center gap-2 text-white text-opacity-80 mb-1">
                    <Clock className="w-4 h-4" />
                    <span>{highlight.time}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{highlight.title}</h4>
                  <div className="flex items-center gap-2 text-white text-opacity-70 text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{highlight.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

