export default function AnielloDeVitaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Aniello De Vita</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/3">
          <img src="/images/aniello-de-vita.png" alt="Aniello De Vita" className="w-full rounded-lg shadow-md" />
        </div>

        <div className="md:w-2/3">
          <p className="mb-4">
            Aniello De Vita è stato un maestro della musica tradizionale cilentana, con oltre 30 anni di carriera
            dedicati alla preservazione e innovazione delle melodie folkloristiche della regione. La sua padronanza
            della tammorra e della chitarra battente lo ha reso uno dei più importanti esponenti della musica popolare
            del Sud Italia.
          </p>
          <p className="mb-4">
            Nato e cresciuto nel cuore del Cilento, ha dedicato la sua vita alla preservazione e alla diffusione del
            patrimonio musicale della sua terra. Cantautore, musicista e ricercatore, Aniello ha raccolto e interpretato
            numerosi canti popolari del Cilento, contribuendo in modo significativo alla conservazione di melodie e
            testi che rischiavano di andare perduti.
          </p>
          <p className="mb-4">
            La sua voce autentica e la sua maestria con la chitarra hanno dato nuova vita a tradizioni musicali
            secolari. Nel corso della sua carriera, ha collaborato con numerosi artisti e gruppi folk, portando la
            musica cilentana sui palcoscenici di tutta Italia e all'estero.
          </p>
          <p>
            Il Premio Aniello De Vita, istituito in suo onore, rappresenta oggi un importante riconoscimento per i
            giovani musicisti che si dedicano alla valorizzazione della musica tradizionale cilentana, continuando così
            il percorso tracciato dal maestro.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Eredità musicale</h2>
        <p className="mb-4">
          L'eredità musicale di Aniello De Vita continua a vivere attraverso il premio che porta il suo nome e
          attraverso i numerosi musicisti che si ispirano al suo lavoro. La sua ricerca e il suo impegno nella
          preservazione delle tradizioni musicali del Cilento hanno lasciato un segno indelebile nel panorama culturale
          della regione.
        </p>
        <p>
          Ogni anno, il Premio Aniello De Vita celebra nuovi talenti che, come lui, si dedicano alla valorizzazione e
          all'innovazione della musica tradizionale cilentana, mantenendo vivo il suo spirito e la sua passione.
        </p>
      </div>
    </div>
  )
}

