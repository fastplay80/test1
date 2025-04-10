"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getContent, deleteContent } from "@/lib/content"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Trash } from "lucide-react"

export const dynamic = "force-dynamic"

export default function DeleteContentPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState<{ id: string; title: string } | null>(null)

  useEffect(() => {
    async function loadContent() {
      try {
        const contentData = await getContent(params.id)
        if (contentData) {
          setContent({
            id: contentData.id,
            title: contentData.title,
          })
        } else {
          setError("Contenuto non trovato")
        }
      } catch (err) {
        console.error(err)
        setError("Si è verificato un errore durante il caricamento del contenuto")
      }
    }

    loadContent()
  }, [params.id])

  async function handleDelete() {
    setLoading(true)
    setError(null)

    try {
      const result = await deleteContent(params.id)

      if (result.success) {
        router.push("/admin/content")
        router.refresh()
      } else {
        setError(result.message)
      }
    } catch (err) {
      console.error(err)
      setError("Si è verificato un errore durante l'eliminazione del contenuto")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/admin/content" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla lista dei contenuti
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Elimina Contenuto</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          {content && (
            <div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Sei sicuro di voler eliminare il contenuto <strong>{content.title}</strong>? Questa azione non può
                      essere annullata.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Link
                  href="/admin/content"
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Annulla
                </Link>

                <button
                  onClick={handleDelete}
                  disabled={loading}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center disabled:opacity-70"
                >
                  <Trash className="w-4 h-4 mr-2" />
                  {loading ? "Eliminazione in corso..." : "Elimina Contenuto"}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

