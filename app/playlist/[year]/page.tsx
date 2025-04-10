import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Music } from "lucide-react"
import { getTracksByYear } from "@/lib/tracks"
import AudioPlayer from "@/components/audio-player"

export default async function PlaylistYearPage({ params }: { params: { year: string } }) {
  const tracks = await getTracksByYear(params.year)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/playlist" className="text-white hover:underline flex items-center">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Torna alle playlist
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Playlist {params.year}</h1>

      <div className="mb-12">
        <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
          Ascolta i brani dell'edizione {params.year} del Premio Aniello De Vita. Una selezione delle migliori
          performance e dei vincitori del premio.
        </p>

        {tracks.length === 0 ? (
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-8 text-center">
            <Music className="w-16 h-16 text-white text-opacity-50 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-2">Nessun brano disponibile</h2>
            <p className="text-white text-opacity-80">
              I brani dell'edizione {params.year} saranno disponibili a breve.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {tracks.map((track) => (
              <div key={track.id} className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 flex-shrink-0">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={track.coverImage || "/placeholder.svg?height=200&width=200"}
                        alt={track.title}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-1">{track.title}</h2>
                    <p className="text-white text-opacity-80 mb-4">{track.artist}</p>

                    {track.description && <p className="text-white text-opacity-90 mb-4">{track.description}</p>}

                    <AudioPlayer src={track.file} title={track.title} artist={track.artist} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

