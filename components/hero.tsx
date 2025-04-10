import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full text-black text-opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor" />
          <path d="M0,50 C25,30 75,70 100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">CILENTO FESTIVAL 2024</h1>
          <div className="h-1 w-24 bg-white mb-8"></div>
          <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-2xl">
            Un'esperienza musicale unica nel cuore del Parco Nazionale del Cilento. Tre giorni di musica, arte e cultura
            dal 15 al 17 giugno 2024.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-white text-festival-orange font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all text-lg"
            >
              Acquista Biglietti
            </Link>
            <Link
              href="/programma"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all text-lg"
            >
              Scopri il Programma
            </Link>
          </div>

          {/* Date badge */}
          <div className="mt-12 inline-block bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <span className="font-bold">15-17 GIUGNO 2024</span> • <span>CILENTO, ITALIA</span>
          </div>
        </div>
      </div>
    </div>
  )
}

