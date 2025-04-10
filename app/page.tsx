"use client"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Music, Camera, Video, GraduationCap, Mail } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function HomePage() {
  const isMobile = useMobile()

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full text-black text-opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor" />
            <path d="M0,50 C25,30 75,70 100,50 L100,100 L0,100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">PREMIO ANIELLO DE VITA</h1>
            <div className="h-1 w-24 bg-white mb-8"></div>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-2xl">
              Ideato da Lillo De Marco e prodotto da Cilento Music Festival. Un riconoscimento dedicato alla memoria del
              maestro della musica tradizionale cilentana.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/download/modulo-iscrizione"
                className="bg-white text-festival-orange font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all text-lg"
              >
                Iscrizione
              </Link>
              <Link
                href="/vincitori"
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all text-lg"
              >
                Vincitori
              </Link>
            </div>

            {/* Date badge */}
            <div className="mt-12 inline-block bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <span className="font-bold">EDIZIONE 2024</span> • <span>CILENTO, ITALIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Aniello De Vita Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Aniello De Vita</h2>
            <div className="h-1 w-16 bg-white mt-2"></div>
          </div>
          <Link href="/aniello-de-vita" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
            Biografia completa
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

        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/aniello-de-vita.png"
                  alt="Aniello De Vita"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-white text-opacity-90 mb-4">
                Aniello De Vita è stato un maestro della musica tradizionale cilentana, con oltre 30 anni di carriera
                dedicati alla preservazione e innovazione delle melodie folkloristiche della regione. La sua padronanza
                della tammorra e della chitarra battente lo ha reso uno dei più importanti esponenti della musica
                popolare del Sud Italia.
              </p>

              <p className="text-white text-opacity-90 mb-4">
                Nato e cresciuto nel cuore del Cilento, ha dedicato la sua vita alla preservazione e alla diffusione del
                patrimonio musicale della sua terra. Cantautore, musicista e ricercatore, Aniello ha raccolto e
                interpretato numerosi canti popolari del Cilento, contribuendo in modo significativo alla conservazione
                di melodie e testi che rischiavano di andare perduti.
              </p>

              <Link
                href="/aniello-de-vita"
                className="bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all inline-block mt-4"
              >
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Edizioni Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Edizioni</h2>
            <div className="h-1 w-16 bg-white mt-2"></div>
          </div>
          <Link href="/edizioni" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
            Tutte le edizioni
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">Edizione 2023</h3>
            </div>
            <p className="text-white text-opacity-80 mb-4">
              Informazioni sull'edizione 2023 del Premio Aniello De Vita, vincitori, eventi e momenti salienti.
            </p>
            <Link href="/edizioni/2023" className="text-white flex items-center hover:underline">
              Dettagli edizione 2023
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

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">Edizione 2024</h3>
            </div>
            <p className="text-white text-opacity-80 mb-4">
              Informazioni sull'edizione 2024 del Premio Aniello De Vita, regolamento, iscrizioni e programma.
            </p>
            <Link href="/edizioni/2024" className="text-white flex items-center hover:underline">
              Dettagli edizione 2024
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
        </div>
      </section>

      {/* Vincitori Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Vincitori</h2>
            <div className="h-1 w-16 bg-white mt-2"></div>
          </div>
          <Link href="/vincitori" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
            Tutti i vincitori
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">Vincitori 2023</h3>
            </div>
            <p className="text-white text-opacity-80 mb-4">
              Esplora la galleria fotografica e scopri i vincitori dell'edizione 2023 del Premio Aniello De Vita, con
              immagini delle premiazioni e delle esibizioni.
            </p>
            <Link href="/vincitori/2023" className="text-white flex items-center hover:underline">
              Scopri i vincitori 2023
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

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-white" />
              <h3 className="text-xl font-bold text-white">Vincitori 2024</h3>
            </div>
            <p className="text-white text-opacity-80 mb-4">
              Elenco dei vincitori dell'edizione 2024 del Premio Aniello De Vita.
            </p>
            <Link href="/vincitori/2024" className="text-white flex items-center hover:underline">
              Scopri i vincitori 2024
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
        </div>
      </section>

      {/* Eventi Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Eventi</h2>
            <div className="h-1 w-16 bg-white mt-2"></div>
          </div>
          <Link href="/eventi" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
            Tutti gli eventi
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

        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-white" />
            <h3 className="text-xl font-bold text-white">27 Dicembre 2024</h3>
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">Premio ANIELLO DE VITA</h4>
          <p className="text-white text-opacity-80 mb-4">
            Evento dedicato alla canzone cilentana presso la Sala "Misericordia" del Comune di Moio Della Civitella.
            Interventi di esperti e personalità del settore musicale.
          </p>
          <Link href="/eventi/27-dicembre-2024" className="text-white flex items-center hover:underline">
            Dettagli evento
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
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Download</h2>
            <div className="h-1 w-16 bg-white mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Regolamento</h3>
            <p className="text-white text-opacity-80 mb-6">
              Scarica il regolamento ufficiale del Premio Aniello De Vita per l'edizione 2024.
            </p>
            <Link
              href="/download/regolamento"
              className="bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all inline-block"
            >
              Scarica Regolamento
            </Link>
          </div>

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Modulo Iscrizione</h3>
            <p className="text-white text-opacity-80 mb-6">
              Scarica il modulo di iscrizione per partecipare al Premio Aniello De Vita 2024.
            </p>
            <Link
              href="/download/modulo-iscrizione"
              className="bg-white text-festival-orange font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all inline-block"
            >
              Scarica Modulo
            </Link>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Playlist */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white">Playlist</h2>
            </div>
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 h-64 flex flex-col justify-between">
              <p className="text-white text-opacity-80">
                Ascolta le playlist delle edizioni del Premio Aniello De Vita.
              </p>
              <Link href="/playlist" className="text-white flex items-center hover:underline self-start mt-4">
                Vai alle playlist
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
          </div>

          {/* Gallery */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white">Gallery</h2>
            </div>
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 h-64 flex flex-col justify-between">
              <p className="text-white text-opacity-80">Sfoglia la galleria fotografica delle edizioni del Premio.</p>
              <Link href="/gallery" className="text-white flex items-center hover:underline self-start mt-4">
                Vai alla galleria
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
          </div>

          {/* Video */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white">Video</h2>
            </div>
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 h-64 flex flex-col justify-between">
              <p className="text-white text-opacity-80">Guarda i video delle dirette TV delle edizioni precedenti.</p>
              <Link href="/video" className="text-white flex items-center hover:underline self-start mt-4">
                Vai ai video
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
          </div>
        </div>
      </section>

      {/* Formazione e Contatti */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formazione */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white">Formazione</h2>
            </div>
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <p className="text-white text-opacity-80 mb-4">
                Informazioni sui corsi di formazione e workshop organizzati nell'ambito del Premio Aniello De Vita.
              </p>
              <Link href="/formazione" className="text-white flex items-center hover:underline">
                Scopri le attività formative
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
          </div>

          {/* Contatti */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-white" />
              <h2 className="text-xl font-bold text-white">Contatti</h2>
            </div>
            <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <div className="space-y-2 mb-4">
                <p className="text-white text-opacity-80">Email: premioaniellodevita@libero.it</p>
                <p className="text-white text-opacity-80">Email: statale_18@libero.it</p>
                <p className="text-white text-opacity-80">Tel: 333 8267216</p>
              </div>
              <Link href="/contatti" className="text-white flex items-center hover:underline">
                Pagina contatti completa
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
          </div>
        </div>
      </section>

      {/* Produzione Artistica */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Produzione Artistica</h2>
            <div className="h-1 w-16 bg-white mt-2"></div>
          </div>
          <Link href="/produzione-artistica" className="text-white mt-4 md:mt-0 flex items-center hover:underline">
            Dettagli completi
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

        <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
          <p className="text-white text-opacity-90 mb-6">
            Il Premio Aniello De Vita è prodotto da Cilento Music Festival in collaborazione con Statale 18 ETS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Staff</h3>
              <ul className="space-y-2 text-white text-opacity-80">
                <li>
                  <span className="font-semibold">Produttore Artistico:</span> Lillo De Marco 333-8267216
                </li>
                <li>
                  <span className="font-semibold">Direttore Artistico:</span> Cristofaro 349-0103126
                </li>
                <li>
                  <span className="font-semibold">Direttore Orchestra:</span> Umberto Elia 339-1087811
                </li>
                <li>
                  <span className="font-semibold">Segreteria:</span> Luisa Rizzo 340-4647802
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Partnership e Sponsor</h3>
              <p className="text-white text-opacity-80 mb-2">
                Il Premio Aniello De Vita è realizzato grazie al supporto di numerosi partner e sponsor istituzionali,
                tra cui NUOVO IMAIE, CASA SANREMO, REGIONE CAMPANIA, e altri.
              </p>
              <Link href="/produzione-artistica" className="text-white flex items-center hover:underline">
                Vedi tutti i partner e sponsor
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
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">Social</h2>
            <div className="h-1 w-16 bg-white mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Facebook</h3>
            <p className="text-white text-opacity-80 mb-4">
              Seguici sulla nostra pagina Facebook per rimanere aggiornato su tutte le novità.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=100057712250079"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center hover:underline"
            >
              Visita la pagina Facebook
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Instagram</h3>
            <p className="text-white text-opacity-80 mb-4">
              Segui il nostro profilo Instagram per foto e aggiornamenti esclusivi.
            </p>
            <a href="#" className="text-white flex items-center hover:underline">
              Visita il profilo Instagram
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">WhatsApp</h3>
            <p className="text-white text-opacity-80 mb-4">Contattaci su WhatsApp per informazioni e assistenza.</p>
            <p className="text-white text-opacity-80 mb-4">Numero: 333 8267216</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="container mx-auto px-4">
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">Resta Aggiornato</h2>
            <p className="text-white text-opacity-80 mb-8 text-lg">
              Iscriviti alla nostra newsletter per ricevere aggiornamenti sul Premio Aniello De Vita, eventi e novità.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                required
              />
              <button
                type="submit"
                className="bg-white text-festival-orange font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Iscriviti
              </button>
            </form>

            <p className="text-white text-opacity-60 text-sm mt-4">
              Iscrivendoti accetti la nostra politica sulla privacy. Non condivideremo mai i tuoi dati.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

