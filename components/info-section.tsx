import Link from "next/link"
import { MapPin, Ticket, Info } from "lucide-react"

export default function InfoSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Informazioni</h2>
          <div className="h-1 w-16 bg-white mt-2"></div>
        </div>
        <Link href="/info" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
          Tutte le informazioni
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
        {/* Luogo */}
        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-white" />
            <h3 className="text-xl font-bold text-white">Luogo</h3>
          </div>
          <p className="text-white text-opacity-80 mb-4">
            Il Cilento Festival si svolge nel cuore del Parco Nazionale del Cilento, in un'area appositamente allestita.
          </p>
          <Link href="/info" className="text-white flex items-center hover:underline">
            Come arrivare
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

        {/* Biglietti */}
        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Ticket className="w-6 h-6 text-white" />
            <h3 className="text-xl font-bold text-white">Biglietti</h3>
          </div>
          <p className="text-white text-opacity-80 mb-4">
            Sono disponibili diverse tipologie di biglietti: giornalieri, abbonamenti e pacchetti VIP.
          </p>
          <Link href="/info" className="text-white flex items-center hover:underline">
            Prezzi e disponibilità
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

        {/* FAQ */}
        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-white" />
            <h3 className="text-xl font-bold text-white">FAQ</h3>
          </div>
          <p className="text-white text-opacity-80 mb-4">
            Trova risposte alle domande più frequenti sul festival, servizi disponibili e regolamento.
          </p>
          <Link href="/info" className="text-white flex items-center hover:underline">
            Leggi le FAQ
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
      </div>
    </section>
  )
}

