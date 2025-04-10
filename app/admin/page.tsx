import Link from "next/link"
import { ArrowLeft, Image, Settings } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-white hover:underline flex items-center">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Torna al sito
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Amministrazione</h1>

      <div className="mb-12">
        <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
          Pannello di amministrazione del Premio Aniello De Vita. Da qui puoi gestire i contenuti del sito.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/admin/gallery"
          className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <Image className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Gestione Galleria</h2>
          </div>
          <p className="text-white text-opacity-80">Carica e gestisci le immagini della galleria fotografica.</p>
        </Link>

        <Link
          href="/admin/settings"
          className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all"
        >
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Impostazioni</h2>
          </div>
          <p className="text-white text-opacity-80">Configura le impostazioni generali del sito.</p>
        </Link>
      </div>
    </div>
  )
}

