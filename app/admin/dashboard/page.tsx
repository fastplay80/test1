import Link from "next/link"
import { requireAuth } from "@/lib/auth"
import AdminHeader from "@/components/admin/header"
import { Award, Camera, FileText, Home, Music } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function AdminDashboardPage() {
  // Verifica che l'utente sia autenticato
  await requireAuth()

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard Amministrativa</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/gallery"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            <Camera className="w-12 h-12 text-festival-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Gestione Galleria</h2>
            <p className="text-gray-600">Carica e gestisci le immagini della galleria fotografica</p>
          </Link>

          <Link
            href="/admin/tracks"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            <Music className="w-12 h-12 text-festival-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Gestione Brani</h2>
            <p className="text-gray-600">Carica e gestisci i brani audio del festival</p>
          </Link>

          <Link
            href="/admin/content"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            <FileText className="w-12 h-12 text-festival-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Gestione Contenuti</h2>
            <p className="text-gray-600">Modifica i testi e i contenuti delle pagine del sito</p>
          </Link>

          <Link
            href="/admin/sponsors"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            <Award className="w-12 h-12 text-festival-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Gestione Sponsor</h2>
            <p className="text-gray-600">Gestisci gli sponsor e i partner del festival</p>
          </Link>

          <Link
            href="/"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            target="_blank"
          >
            <Home className="w-12 h-12 text-festival-orange mb-4" />
            <h2 className="text-xl font-bold mb-2">Visita il Sito</h2>
            <p className="text-gray-600">Visualizza il sito web pubblico</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

