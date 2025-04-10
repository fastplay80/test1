import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function Edizione2024() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-white">Edizione 2024</h1>

      <div className="bg-white rounded-lg p-6 mb-8">
        <p className="text-lg mb-4">
          L&apos;edizione 2024 del Premio Aniello De Vita ha rappresentato un importante traguardo per la
          manifestazione, con una partecipazione record di artisti e pubblico. Quest&apos;anno l&apos;evento ha visto
          collaborazioni speciali con Casa Sanremo e Nuovo IMAIE, ampliando ulteriormente la visibilità e il prestigio
          del premio dedicato alla memoria del grande maestro cilentano.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-white">I Vincitori</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/gallery/2024/female-winner-nuovo-imaie.jpeg"
              alt="Vincitrice Nuovo IMAIE"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Vincitrice Premio Nuovo IMAIE</h3>
            <p>La vincitrice del prestigioso premio Nuovo IMAIE durante la cerimonia di premiazione.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/gallery/2024/winner-pattern-shirt-award.jpeg"
              alt="Vincitore con premio"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Vincitore Categoria Principale</h3>
            <p>Il vincitore della categoria principale riceve il premio sul palco durante la serata finale.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/gallery/2024/winners-group-photo-2024.jpeg"
              alt="Foto di gruppo dei vincitori 2024"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Foto di Gruppo dei Vincitori</h3>
            <p>I vincitori delle diverse categorie dell&apos;edizione 2024 riuniti per la foto ufficiale.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-white">Momenti dell&apos;Evento</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image
              src="/images/gallery/2024/casasanremo-award-blue.jpeg"
              alt="Premio Casa Sanremo"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Collaborazione con Casa Sanremo</h3>
            <p>
              Momento della premiazione speciale in collaborazione con Casa Sanremo, novità dell&apos;edizione 2024.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image
              src="/images/gallery/2024/stage-performance-red.jpeg"
              alt="Performance sul palco"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Performance Principale</h3>
            <p>Una delle emozionanti esibizioni sul palco principale durante la serata di gala.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image
              src="/images/gallery/2024/parco-cilento-ceremony.jpeg"
              alt="Cerimonia Parco del Cilento"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Collaborazione con il Parco del Cilento</h3>
            <p>
              Momento della premiazione in collaborazione con il Parco Nazionale del Cilento, Vallo di Diano e Alburni.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image
              src="/images/gallery/2024/audience-red-seats.jpeg"
              alt="Pubblico in sala"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Il Pubblico</h3>
            <p>La sala gremita di spettatori durante una delle serate dell&apos;edizione 2024 del Premio.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/galleria/2024"
          className="bg-white text-festival-orange font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Visualizza la Galleria Completa 2024
        </Link>
      </div>
    </div>
  )
}

