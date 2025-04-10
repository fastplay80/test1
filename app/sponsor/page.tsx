import Image from "next/image"
import Link from "next/link"
import { getSponsors } from "@/lib/sponsors"

export default async function SponsorPage() {
  const sponsors = await getSponsors()

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">I Nostri Sponsor</h1>

      <div className="mb-12">
        <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
          Il Cilento Festival è reso possibile grazie al supporto dei nostri preziosi sponsor e partner. Ringraziamo
          tutte le aziende e le organizzazioni che credono nel nostro progetto e contribuiscono alla promozione della
          cultura e della musica nel territorio del Cilento.
        </p>
      </div>

      <div className="space-y-16">
        {categoryOrder.map((category) => {
          if (!sponsorsByCategory[category] || sponsorsByCategory[category].length === 0) {
            return null
          }

          return (
            <div key={category}>
              <h2 className="text-2xl font-bold text-white mb-6">
                {categoryNames[category as keyof typeof categoryNames]}
              </h2>

              <div
                className={`grid gap-8 ${
                  category === "main"
                    ? "grid-cols-1 md:grid-cols-2"
                    : category === "gold"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                }`}
              >
                {sponsorsByCategory[category].map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center"
                  >
                    <div className="relative w-full h-40 mb-4">
                      <Image
                        src={sponsor.logo || "/placeholder.svg?height=160&width=320"}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>

                    {sponsor.description && <p className="text-white text-opacity-80 mb-4">{sponsor.description}</p>}

                    {sponsor.website && (
                      <Link
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto bg-white text-festival-orange px-4 py-2 rounded-full hover:bg-opacity-90 transition-all"
                      >
                        Visita il sito
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-16 bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Diventa uno Sponsor</h2>
        <p className="text-white text-opacity-90 mb-6">
          Sei interessato a diventare uno sponsor del Cilento Festival? Contattaci per scoprire le opportunità di
          partnership e i vantaggi che offriamo ai nostri sponsor.
        </p>
        <Link
          href="/contatti"
          className="bg-white text-festival-orange px-6 py-3 rounded-full hover:bg-opacity-90 transition-all inline-block"
        >
          Contattaci
        </Link>
      </div>
    </div>
  )
}

