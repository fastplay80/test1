import { MapPin, Calendar, Ticket, HelpCircle } from "lucide-react"

export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Informazioni</h1>

        <div className="space-y-8">
          {/* Sezione Luogo */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Luogo</h2>
            </div>
            <p className="text-white text-opacity-90 mb-4">
              Il Cilento Festival si svolge nel cuore del Parco Nazionale del Cilento, in un'area appositamente
              allestita che valorizza la bellezza naturale della regione.
            </p>
            <div className="aspect-video bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
              <p className="text-white text-opacity-60">Mappa interattiva</p>
            </div>
            <div className="mt-4 text-white text-opacity-80">
              <p className="mb-2">
                <strong>Indirizzo:</strong> Via del Festival, 84046 Cilento (SA)
              </p>
              <p>
                <strong>Come arrivare:</strong> Indicazioni dettagliate per raggiungere il festival in auto, treno e
                autobus.
              </p>
            </div>
          </div>

          {/* Sezione Date */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Date</h2>
            </div>
            <p className="text-white text-opacity-90 mb-4">
              L'edizione 2024 del Cilento Festival si terrà dal 15 al 17 giugno 2024.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <p className="text-white font-bold">Venerdì 15 Giugno</p>
                <p className="text-white text-opacity-70">Dalle 18:00 alle 02:00</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <p className="text-white font-bold">Sabato 16 Giugno</p>
                <p className="text-white text-opacity-70">Dalle 17:00 alle 02:00</p>
              </div>
              <div className="bg-black bg-opacity-30 p-4 rounded-lg">
                <p className="text-white font-bold">Domenica 17 Giugno</p>
                <p className="text-white text-opacity-70">Dalle 16:00 alle 00:00</p>
              </div>
            </div>
          </div>

          {/* Sezione Biglietti */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Ticket className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Biglietti</h2>
            </div>
            <p className="text-white text-opacity-90 mb-4">
              Sono disponibili diverse tipologie di biglietti per soddisfare tutte le esigenze.
            </p>
            <div className="space-y-4">
              <div className="border border-white border-opacity-20 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white">Abbonamento Completo</h3>
                <p className="text-white text-opacity-80 mb-2">Accesso a tutti i giorni del festival</p>
                <p className="text-white font-bold">€80,00</p>
              </div>
              <div className="border border-white border-opacity-20 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white">Biglietto Giornaliero</h3>
                <p className="text-white text-opacity-80 mb-2">Accesso per un singolo giorno</p>
                <p className="text-white font-bold">€35,00</p>
              </div>
              <div className="border border-white border-opacity-20 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-white">VIP Experience</h3>
                <p className="text-white text-opacity-80 mb-2">
                  Accesso completo con area riservata e servizi esclusivi
                </p>
                <p className="text-white font-bold">€150,00</p>
              </div>
            </div>
            <button className="mt-6 bg-white text-festival-orange font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all">
              Acquista Biglietti
            </button>
          </div>

          {/* Sezione FAQ */}
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-white" />
              <h2 className="text-2xl font-bold text-white">FAQ</h2>
            </div>
            <div className="space-y-4">
              <div className="border-b border-white border-opacity-10 pb-4">
                <h3 className="text-lg font-bold text-white mb-2">Posso portare cibo e bevande?</h3>
                <p className="text-white text-opacity-80">
                  No, all'interno dell'area festival sono presenti numerosi stand gastronomici e bar. Non è consentito
                  introdurre cibo e bevande dall'esterno.
                </p>
              </div>
              <div className="border-b border-white border-opacity-10 pb-4">
                <h3 className="text-lg font-bold text-white mb-2">C'è un parcheggio disponibile?</h3>
                <p className="text-white text-opacity-80">
                  Sì, sono disponibili aree di parcheggio dedicate nelle vicinanze del festival. Il costo è di €10 al
                  giorno.
                </p>
              </div>
              <div className="border-b border-white border-opacity-10 pb-4">
                <h3 className="text-lg font-bold text-white mb-2">È possibile campeggiare?</h3>
                <p className="text-white text-opacity-80">
                  Sì, è disponibile un'area camping a 500 metri dall'ingresso del festival. Il costo è di €15 a notte
                  per tenda.
                </p>
              </div>
              <div className="border-b border-white border-opacity-10 pb-4">
                <h3 className="text-lg font-bold text-white mb-2">I bambini possono partecipare?</h3>
                <p className="text-white text-opacity-80">
                  Sì, i bambini sotto i 12 anni entrano gratuitamente se accompagnati da un adulto con biglietto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

