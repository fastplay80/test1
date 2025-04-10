import Link from "next/link"
import { requireAuth } from "@/lib/auth"
import { getAllContent } from "@/lib/content"
import AdminHeader from "@/components/admin/header"
import { FileText, Plus, Edit, Trash } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function ContentManagementPage() {
  // Verifica che l'utente sia autenticato
  await requireAuth()

  // Recupera tutti i contenuti
  const contents = await getAllContent()

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gestione Contenuti</h1>

          <Link
            href="/admin/content/new"
            className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nuovo Contenuto
          </Link>
        </div>

        {contents.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Nessun contenuto trovato</h2>
            <p className="text-gray-600 mb-4">Inizia creando il tuo primo contenuto</p>
            <Link
              href="/admin/content/new"
              className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 inline-flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nuovo Contenuto
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Titolo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ultimo Aggiornamento
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Azioni
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contents.map((content) => (
                  <tr key={content.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{content.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{content.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {content.lastUpdated ? new Date(content.lastUpdated).toLocaleString("it-IT") : "N/A"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link href={`/admin/content/edit/${content.id}`} className="text-blue-600 hover:text-blue-900">
                          <Edit className="w-5 h-5" />
                        </Link>
                        <Link href={`/admin/content/delete/${content.id}`} className="text-red-600 hover:text-red-900">
                          <Trash className="w-5 h-5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}

