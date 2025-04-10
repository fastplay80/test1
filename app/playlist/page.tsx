import Link from "next/link"
import Image from "next/image"
import { Music, ArrowRight } from "lucide-react"
import { getAllTracks } from "@/lib/tracks"

export default async function PlaylistPage() {
  const tracks = await getAllTracks()

  // Ottieni gli anni disponibili
  const years = [...new Set(tracks.map((track) => track.year))].sort((a, b) => b.localeCompare(a))

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Playlist</h1>

      <div className="mb-12">
        <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
          Ascolta i brani delle diverse edizioni del Premio Aniello De Vita. Una selezione delle migliori performance e
          dei vincitori del premio.
        </p>

        {years.length === 0 ? (
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-8 text-center">
            <Music className="w-16 h-16 text-white text-opacity-50 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Nessuna playlist disponibile</h2>
            <p className="text-white text-opacity-80">Le playlist saranno disponibili a breve.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {years.map((year) => {
              const yearTracks = tracks.filter((track) => track.year === year)
              const coverImage = yearTracks[0]?.coverImage || "/placeholder.svg?height=400&width=400"

              return (
                <Link
                  key={year}
                  href={`/playlist/${year}`}
                  className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={coverImage || "/placeholder.svg"}
                      alt={`Playlist ${year}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">Playlist {year}</h2>
                      <p className="text-white text-opacity-80 mb-4">{yearTracks.length} brani</p>
                      <div className="flex items-center text-white">
                        Ascolta
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

