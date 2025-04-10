import Image from "next/image"
import Link from "next/link"

export default function FeaturedArtists() {
  const artists = [
    {
      id: "aniello-de-vita",
      name: "Aniello De Vita",
      genre: "Folk Cilentano",
      image: "/images/aniello-de-vita.png",
    },
    {
      id: "gruppo-folk-cilento",
      name: "Gruppo Folk Cilento",
      genre: "Folk Tradizionale",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "orchestra-mediterranea",
      name: "Orchestra Mediterranea",
      genre: "Classica Contemporanea",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "dj-elettronica",
      name: "DJ Elettronica",
      genre: "Elettronica",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Artisti in Evidenza</h2>
          <div className="h-1 w-16 bg-white mt-2"></div>
        </div>
        <Link href="/artisti" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
          Vedi tutti gli artisti
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artists.map((artist, index) => (
          <Link
            href={`/artisti/${artist.id}`}
            key={index}
            className="group relative overflow-hidden rounded-xl aspect-square"
          >
            <Image
              src={artist.image || "/placeholder.svg"}
              alt={artist.name}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-sm text-white text-opacity-80 block mb-1">{artist.genre}</span>
              <h3 className="text-xl font-bold text-white">{artist.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

