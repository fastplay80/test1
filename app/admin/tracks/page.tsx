import Link from "next/link"
import Image from "next/image"
import { getAllTracks } from "@/lib/tracks"
import AdminHeader from "@/components/admin/header"
import { Music, Plus, Edit, Trash, Play } from "lucide-react"

// Prevent static prerendering of this admin page
export const dynamic = "force-dynamic"

export default async function TracksManagementPage() {
  // Recupera tutti i brani
  const tracks = await getAllTracks()

  // Raggruppa i brani per anno
  const tracksByYear = tracks.reduce(
    (acc, track) => {
      if (!acc[track.year]) {
        acc[track.year] = []
      }
      acc[track.year].push(track)
      return acc
    },
    {} as Record<string, typeof tracks>,
  )

  // Ordina gli anni in ordine decrescente
  const years = Object.keys(tracksByYear).sort((a, b) => b.localeCompare(a))

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gestione Brani</h1>

          <Link
            href="/admin/tracks/upload"
            className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Carica Nuovo Brano
          </Link>
        </div>

        {tracks.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <Music className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Nessun brano trovato</h2>
            <p className="text-gray-600 mb-4">Inizia caricando il tuo primo brano</p>
            <Link
              href="/admin/tracks/upload"
              className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 inline-flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Carica Nuovo Brano
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {years.map((year) => (
              <div key={year} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Brani {year}</h2>
                  <Link
                    href={`/admin/tracks/upload?year=${year}`}
                    className="text-festival-orange hover:underline flex items-center text-sm"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Aggiungi a {year}
                  </Link>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cover
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Titolo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Artista
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        File
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Azioni
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tracksByYear[year].map((track) => (
                      <tr key={track.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="relative w-12 h-12">
                            <Image
                              src={track.coverImage || "/placeholder.svg?height=48&width=48"}
                              alt={track.title}
                              width={48}
                              height={48}
                              className="object-cover rounded"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{track.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{track.artist}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            <a
                              href={track.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-900 flex items-center"
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Ascolta
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <Link href={`/admin/tracks/edit/${track.id}`} className="text-blue-600 hover:text-blue-900">
                              <Edit className="w-5 h-5" />
                            </Link>
                            <Link href={`/admin/tracks/delete/${track.id}`} className="text-red-600 hover:text-red-900">
                              <Trash className="w-5 h-5" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

