"use client"

export default function RegolamentoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Scarica Regolamento</h1>

      <div className="content-area mb-8">
        <p className="mb-6">Scarica il regolamento ufficiale del Premio Aniello De Vita.</p>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Regolamento 2024</h2>
          <p className="mb-4">
            Il regolamento contiene tutte le informazioni necessarie per partecipare al Premio Aniello De Vita, inclusi
            i requisiti di ammissione, le categorie, le scadenze e le modalità di valutazione.
          </p>

          <a
            href="#"
            className="download-button inline-block"
            onClick={(e) => {
              e.preventDefault()
              alert("Download del regolamento iniziato")
            }}
          >
            Scarica Regolamento 2024 (PDF)
          </a>
        </div>

        <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
          <h3 className="font-bold mb-2">Nota importante</h3>
          <p>
            Assicurati di leggere attentamente il regolamento prima di procedere con l'iscrizione. Per qualsiasi
            chiarimento, contatta la segreteria all'indirizzo email: premioaniellodevita@libero.it
          </p>
        </div>
      </div>
    </div>
  )
}

