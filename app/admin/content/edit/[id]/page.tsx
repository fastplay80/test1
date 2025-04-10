"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getContent, saveContent } from "@/lib/content"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Save } from "lucide-react"

export const dynamic = "force-dynamic"

export default function EditContentPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [content, setContent] = useState({
    id: "",
    title: "",
    content: "",
  })

  useEffect(() => {
    async function loadContent() {
      try {
        const contentData = await getContent(params.id)
        if (contentData) {
          setContent({
            id: contentData.id,
            title: contentData.title,
            content: contentData.content,
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

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)

    try {
      const title = (formData.get("title") as string).trim()
      const contentText = (formData.get("content") as string).trim()

      if (!title || !contentText) {
        setError("Tutti i campi sono obbligatori")
        return
      }

      const result = await saveContent({
        id: params.id,
        title,
        content: contentText,
      })

      if (result.success) {
        router.push("/admin/content")
        router.refresh()
      } else {
        setError(result.message)
      }
    } catch (err) {
      console.error(err)
      setError("Si è verificato un errore durante il salvataggio del contenuto")
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
          <h1 className="text-2xl font-bold mb-6">Modifica Contenuto</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <form action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
                ID
              </label>
              <input
                id="id"
                type="text"
                value={content.id}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
              <p className="text-sm text-gray-500 mt-1">L'ID non può essere modificato.</p>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Titolo
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={content.title}
                onChange={(e) => setContent({ ...content, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange"
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Contenuto
              </label>
              <textarea
                id="content"
                name="content"
                rows={10}
                required
                value={content.content}
                onChange={(e) => setContent({ ...content, content: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange"
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Puoi usare il formato Markdown per formattare il testo.</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center disabled:opacity-70"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Salvataggio in corso..." : "Salva Modifiche"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

