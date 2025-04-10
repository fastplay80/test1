import Link from "next/link"
import Image from "next/image"
import { requireAuth } from "@/lib/auth"
import { getAllImages, getAvailableYears } from "@/lib/gallery"
import AdminHeader from "@/components/admin/header"
import { Camera, Plus } from "lucide-react"
import DeleteImageButton from "@/components/admin/delete-image-button"
import CreateGalleryForm from "@/components/admin/create-gallery-form"

export const dynamic = "force-dynamic"

export default async function GalleryManagementPage() {
  // Verifica che l'utente sia autenticato
  await requireAuth()

  // Recupera tutte le immagini
  const images = await getAllImages()

  // Recupera gli anni disponibili
  const availableYears = await getAvailableYears()

  // Raggruppa le immagini per anno
  const imagesByYear = images.reduce(
    (acc, image) => {
      if (!acc[image.year]) {
        acc[image.year] = []
      }
      acc[image.year].push(image)
      return acc
    },
    {} as Record<string, typeof images>,
  )

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Gestione Galleria</h1>

          <div className="flex gap-4">
            <Link
              href="/admin/gallery/upload"
              className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Carica Immagini
            </Link>
          </div>
        </div>

        {/* Form per creare una nuova galleria */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Crea una nuova galleria</h2>
          <CreateGalleryForm />
        </div>

        {availableYears.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Nessuna galleria trovata</h2>
            <p className="text-gray-600 mb-4">Inizia creando la tua prima galleria</p>
          </div>
        ) : (
          <div className="space-y-12">
            {availableYears.map((year) => (
              <div key={year}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Galleria {year}</h2>
                  <Link
                    href={`/admin/gallery/upload?year=${year}`}
                    className="text-festival-orange hover:underline flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Aggiungi a {year}
                  </Link>
                </div>

                {imagesByYear[year] && imagesByYear[year].length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {imagesByYear[year].map((image) => (
                      <div key={image.src} className="relative group">
                        <div className="aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={300}
                            height={200}
                            className="object-cover w-full h-full"
                          />
                        </div>

                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <DeleteImageButton src={image.src} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-100 p-6 rounded-lg text-center">
                    <p className="text-gray-600">Nessuna immagine in questa galleria</p>
                    <Link
                      href={`/admin/gallery/upload?year=${year}`}
                      className="text-festival-orange hover:underline inline-flex items-center mt-2"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Aggiungi immagini
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

