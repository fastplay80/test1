"use client"

export default function ModuloIscrizionePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Scarica Modulo Iscrizione</h1>

      <div className="content-area mb-8">
        <p className="mb-6">Scarica il modulo di iscrizione per partecipare al Premio Aniello De Vita.</p>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Modulo Iscrizione 2024</h2>
          <p className="mb-4">
            Il modulo di iscrizione deve essere compilato in tutte le sue parti e inviato insieme al materiale richiesto
            nel regolamento entro la data di scadenza.
          </p>

          <a
            href="#"
            className="download-button inline-block"
            onClick={(e) => {
              e.preventDefault()
              alert("Download del modulo di iscrizione iniziato")
            }}
          >
            Scarica Modulo Iscrizione 2024 (PDF)
          </a>
        </div>

        <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded">
          <h3 className="font-bold mb-2">Istruzioni per l'invio</h3>
          <p className="mb-2">
            Dopo aver compilato il modulo, invialo insieme al materiale richiesto all'indirizzo email:
            premioaniellodevita@libero.it
          </p>
          <p>Per qualsiasi chiarimento, contatta la segreteria di produzione: Luisa Rizzo 340-4647802</p>
        </div>
      </div>
    </div>
  )
}

