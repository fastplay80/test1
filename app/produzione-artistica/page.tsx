export default function ProduzioneArtisticaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Produzione Artistica</h1>

      <div className="content-area mb-8">
        <p className="mb-6">
          Il Premio Aniello De Vita è prodotto da Cilento Music Festival in collaborazione con Statale 18 ETS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Staff</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Produttore Artistico</h3>
                <p>Lillo De Marco 333-8267216</p>
              </div>
              <div>
                <h3 className="font-bold">Direttore Artistico</h3>
                <p>Cristofaro 349-0103126</p>
              </div>
              <div>
                <h3 className="font-bold">Direttore Orchestra e Arrangiamenti</h3>
                <p>Umberto Elia 339-1087811</p>
              </div>
              <div>
                <h3 className="font-bold">Segreteria di Produzione</h3>
                <p>Luisa Rizzo 340-4647802</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Sede</h2>
            <p className="mb-2">STATALE 18 ETS</p>
            <p className="mb-2">VIA MUNICIPIO 47 - 84060</p>
            <p className="mb-2">MOIO DELLA CIVITELLA (SA)</p>
            <p className="mb-2">P.IVA N. 05855000658, C.F 95018510653</p>
            <p>MAIL: statale_18@libero.it</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="section-header">PARTNERSHIP ARTISTICI</div>
          <div className="content-area">
            <ul className="list-disc pl-5 space-y-2">
              <li>NUOVO IMAIE (coll. Al sito e LOGO)</li>
              <li>CASA SANREMO (coll. Al sito e LOGO)</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="section-header">PATROCINI (istituzionali - Loghi)</div>
          <div className="content-area">
            <ul className="list-disc pl-5 space-y-2">
              <li>REGIONE CAMPANIA (inserire logo)</li>
              <li>PROVINCIA DI SALERNO (inserire logo)</li>
              <li>PARCO NAZIONALE DEL CILENTO (inserire logo)</li>
              <li>COMUNE DI VALLO DI (inserire logo)</li>
              <li>COMUNE DI MOIO DI (inserire logo)</li>
              <li>CONSAC RS infrastrutture</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="section-header">SPONSOR (loghi)</div>
        <div className="content-area">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-300 rounded-md text-center">
              <p>365 SUPERMERCATI</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-md text-center">
              <p>TENUTA VIGNANOVA</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-md text-center">
              <p>LED CITY srl (logo)</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-md text-center">
              <p>GELBISON CITTA' TERRITORIO</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-md text-center">
              <p>BCC MAGNA GRECIA</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-md text-center">
              <p>CAMPUS MEDITERRANEO</p>
            </div>
            <div className="p-4 border border-gray-300 rounded-md text-center">
              <p>CLUB ELSA UNESCO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

