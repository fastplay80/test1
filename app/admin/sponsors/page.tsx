import Link from "next/link"
import Image from "next/image"
import { requireAuth } from "@/lib/auth"
import { getSponsors } from "@/lib/sponsors"
import AdminHeader from "@/components/admin/header"
import { Award, Plus, Edit, Trash } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function SponsorsManagementPage() {
  // Verifica che l'utente sia autenticato
  await requireAuth()

  // Recupera tutti gli sponsor
  let sponsors = []
  try {
    sponsors = await getSponsors()
  } catch (error) {
    console.error("Errore nel recupero degli sponsor:", error)
    // Continua con un array vuoto in caso di errore
  }

  // Raggruppa gli sponsor per categoria
  const sponsorsByCategory = sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.category]) {
        acc[sponsor.category] = []
      }
      acc[sponsor.category].push(sponsor)
      return acc
    },
    {} as Record<string, typeof sponsors>,
  )

  // Ordine delle categorie
  const categoryOrder = ["main", "gold", "silver", "partner", "media", "technical"]

  // Nomi delle categorie
  const categoryNames = {
    main: "Main Sponsor",
    gold: "Gold Sponsor",
    silver: "Silver Sponsor",
    partner: "Partner",
    media: "Media Partner",
    technical: "Partner Tecnici",
  }

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gestione Sponsor</h1>

          <Link
            href="/admin/sponsors/new"
            className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nuovo Sponsor
          </Link>
        </div>

        {sponsors.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Nessuno sponsor trovato</h2>
            <p className="text-gray-600 mb-4">Inizia aggiungendo il tuo primo sponsor</p>
            <Link
              href="/admin/sponsors/new"
              className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 inline-flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nuovo Sponsor
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {categoryOrder.map((category) => {
              if (!sponsorsByCategory[category] || sponsorsByCategory[category].length === 0) {
                return null
              }

              return (
                <div key={category} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold">{categoryNames[category as keyof typeof categoryNames]}</h2>
                  </div>

                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Logo
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Nome
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sito Web
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Azioni
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sponsorsByCategory[category].map((sponsor) => (
                        <tr key={sponsor.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="relative w-16 h-16">
                              <Image
                                src={sponsor.logo || "/placeholder.svg?height=64&width=64"}
                                alt={sponsor.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{sponsor.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {sponsor.website ? (
                              <a
                                href={sponsor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-900"
                              >
                                {sponsor.website}
                              </a>
                            ) : (
                              <span className="text-gray-500">-</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <Link
                                href={`/admin/sponsors/edit/${sponsor.id}`}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                <Edit className="w-5 h-5" />
                              </Link>
                              <Link
                                href={`/admin/sponsors/delete/${sponsor.id}`}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash className="w-5 h-5" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}

