"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { deleteImage } from "@/lib/gallery"
import { Trash } from "lucide-react"

export default function DeleteImageButton({ src }: { src: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm("Sei sicuro di voler eliminare questa immagine? Questa azione non può essere annullata.")) {
      return
    }

    setLoading(true)

    try {
      const result = await deleteImage(src)

      if (result.success) {
        router.refresh()
      } else {
        alert(result.message)
      }
    } catch (err) {
      console.error(err)
      alert("Si è verificato un errore durante l'eliminazione dell'immagine")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 disabled:opacity-70"
      title="Elimina immagine"
    >
      <Trash className="w-5 h-5" />
    </button>
  )
}

