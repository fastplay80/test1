import Link from "next/link"
import Image from "next/image"

export default function EdizioniPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edizioni</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 w-full">
            <Image src="/images/gallery/award-ceremony-2.jpeg" alt="Edizione 2023" fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="text-xl font-bold mb-2">Edizione 2023</div>
            <p className="mb-4">Informazioni sull'edizione 2023 del Premio Aniello De Vita.</p>
            <Link href="/edizioni/2023" className="text-blue-600 hover:underline">
              Dettagli edizione 2023
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src="/images/gallery/2024/winners-group-photo-2024.jpeg"
              alt="Edizione 2024"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="text-xl font-bold mb-2">Edizione 2024</div>
            <p className="mb-4">Informazioni sull'edizione 2024 del Premio Aniello De Vita.</p>
            <Link href="/edizioni/2024" className="text-blue-600 hover:underline">
              Dettagli edizione 2024
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

