import Link from "next/link"
import Image from "next/image"
import { Trophy, Calendar, ArrowLeft } from "lucide-react"

export default function VincitoriPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-white hover:underline flex items-center">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Torna alla home
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-white">Vincitori</h1>

      <div className="mb-12">
        <p className="text-white text-opacity-90 text-lg max-w-3xl mb-8">
          Scopri i vincitori delle passate edizioni del Premio Aniello De Vita, giovani talenti che hanno contribuito a
          mantenere viva la tradizione musicale cilentana.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Vincitori 2024 */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Vincitori 2024</h2>
          </div>

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-white" />
                <p className="text-white text-opacity-80">Edizione 2024</p>
              </div>

              <div className="mb-6">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/images/gallery/2024/winners-group-photo-2024.jpeg"
                    alt="Foto di gruppo dei vincitori del Premio Aniello De Vita 2024"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-white text-opacity-80 mt-2 text-sm">
                  I vincitori e i presentatori dell'edizione 2024 sul palco
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-1">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/images/gallery/2024/blonde-guitarist-blue-lighting.jpeg"
                        alt="Vincitore Primo Premio 2024"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white">Gelbison</h3>
                    <p className="text-white text-opacity-80 mb-2">Primo Premio</p>
                    <p className="text-white text-opacity-90">
                      Gruppo musicale che ha conquistato la giuria con la loro reinterpretazione innovativa della musica
                      tradizionale cilentana.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-1">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/images/gallery/2024/singer-white-outfit-red-lighting.jpeg"
                        alt="Vincitore Premio Speciale 2024"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white">LED City</h3>
                    <p className="text-white text-opacity-80 mb-2">Premio Speciale della Giuria</p>
                    <p className="text-white text-opacity-90">
                      Ensemble che ha colpito la giuria con il loro stile unico e la loro interpretazione personale
                      della tradizione musicale.
                    </p>
                  </div>
                </div>

                <Link
                  href="/vincitori/2024"
                  className="inline-block bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all mt-4"
                >
                  Scopri tutti i vincitori 2024
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Vincitori 2023 */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Vincitori 2023</h2>
          </div>

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-white" />
                <p className="text-white text-opacity-80">Edizione 2023</p>
              </div>

              <div className="mb-6">
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src="/images/winners/group-photo-stage.jpeg"
                    alt="Foto di gruppo dei vincitori del Premio Aniello De Vita 2023"
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-white text-opacity-80 mt-2 text-sm">
                  I vincitori e i presentatori dell'edizione 2023 sul palco
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-1">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/images/winners/performer-guitar.jpeg"
                        alt="Barracca Repubblica - Vincitore Premio Aniello De Vita 2023"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white">Barracca Repubblica</h3>
                    <p className="text-white text-opacity-80 mb-2">Primo Premio</p>
                    <p className="text-white text-opacity-90">
                      Gruppo musicale che ha conquistato la giuria con la loro reinterpretazione innovativa della musica
                      tradizionale cilentana.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="md:col-span-1">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/images/winners/cuntrora-performance.jpeg"
                        alt="Cuntrora - Vincitore Premio Aniello De Vita 2023"
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-white">Cuntrora</h3>
                    <p className="text-white text-opacity-80 mb-2">Premio Speciale della Giuria</p>
                    <p className="text-white text-opacity-90">
                      Ensemble che ha colpito la giuria con il loro stile unico e la loro interpretazione personale
                      della tradizione musicale.
                    </p>
                  </div>
                </div>

                <Link
                  href="/vincitori/2023"
                  className="inline-block bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all mt-4"
                >
                  Scopri tutti i vincitori 2023
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Il Premio Aniello De Vita</h2>
        <p className="text-white text-opacity-90 mb-4">
          Il Premio Aniello De Vita è un importante riconoscimento dedicato ai giovani musicisti che si distinguono
          nella valorizzazione e reinterpretazione della musica tradizionale cilentana.
        </p>
        <p className="text-white text-opacity-90">
          Istituito in memoria del maestro Aniello De Vita, figura emblematica della musica popolare del Cilento, il
          premio rappresenta un'opportunità per i giovani talenti di farsi conoscere e di contribuire alla preservazione
          e all'innovazione del patrimonio musicale della regione.
        </p>
      </div>
    </div>
  )
}

