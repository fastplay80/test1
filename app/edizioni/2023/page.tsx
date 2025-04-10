import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function Edizione2023() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-6 text-white">Edizione 2023</h1>

      <div className="bg-white rounded-lg p-6 mb-8">
        <p className="text-lg mb-4">
          L&apos;edizione 2023 del Premio Aniello De Vita ha visto la partecipazione di numerosi artisti talentuosi che
          hanno reso omaggio alla tradizione musicale cilentana. La manifestazione si è svolta con grande successo,
          celebrando l&apos;eredità culturale di Aniello De Vita attraverso performance memorabili e momenti di
          condivisione artistica.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-white">I Vincitori</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/winners/female-winner-trophy.jpeg"
              alt="Vincitrice con trofeo"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Vincitrice Categoria Femminile</h3>
            <p>Premiazione della vincitrice della categoria femminile durante la cerimonia di premiazione.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/winners/male-winner-trophy.jpeg"
              alt="Vincitore con trofeo"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Vincitore Categoria Maschile</h3>
            <p>Momento della premiazione del vincitore della categoria maschile sul palco principale.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/winners/winners-group-photo.jpeg"
              alt="Foto di gruppo dei vincitori"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Foto di Gruppo dei Vincitori</h3>
            <p>I vincitori delle diverse categorie riuniti per la foto ufficiale dell&apos;edizione 2023.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-white">Momenti dell&apos;Evento</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image src="/images/gallery/2023-1.png" alt="Esibizione sul palco" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Esibizione Principale</h3>
            <p>Uno dei momenti più emozionanti dell&apos;esibizione sul palco principale durante la serata finale.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image src="/images/gallery/2023-5.png" alt="Performance musicale" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Performance Musicale</h3>
            <p>
              Artisti che si esibiscono con strumenti tradizionali, mantenendo viva la tradizione musicale cilentana.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image src="/images/gallery/2023-8.png" alt="Pubblico durante l'evento" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Il Pubblico</h3>
            <p>Il caloroso pubblico che ha partecipato numeroso all&apos;edizione 2023 del Premio Aniello De Vita.</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="relative h-72">
            <Image src="/images/gallery/2023-12.png" alt="Cerimonia di premiazione" fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">Cerimonia di Premiazione</h3>
            <p>Momento della cerimonia ufficiale di premiazione con la consegna dei riconoscimenti ai vincitori.</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/galleria/2023"
          className="bg-white text-festival-orange font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Visualizza la Galleria Completa 2023
        </Link>
      </div>
    </div>
  )
}

