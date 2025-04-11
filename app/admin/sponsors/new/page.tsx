
"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { saveSponsor } from "@/lib/sponsors"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Save, Upload, X } from "lucide-react"

export const dynamic = "force-dynamic"

export default function NewSponsorPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Il file è troppo grande. La dimensione massima è 5MB.")
        return
      }

      if (!file.type.startsWith("image/")) {
        setError("Il file deve essere un'immagine (JPG, PNG, GIF, SVG).")
        return
      }

      setLogoFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearLogoSelection = () => {
    setLogoFile(null)
    setLogoPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  async function handleSubmit(formData: FormData) {
    setLoading(true)
    setError(null)

    try {
      let id = ((formData.get("id") as string) || "").trim()
      const name = ((formData.get("name") as string) || "").trim()
      const description = ((formData.get("description") as string) || "").trim()
      const website = ((formData.get("website") as string) || "").trim()
      const category = formData.get("category") as string
      const orderStr = ((formData.get("order") as string) || "").trim()

      if (!id || !name || !category) {
        setError("ID, nome e categoria sono campi obbligatori")
        setLoading(false)
        return
      }

      // Modifica l'ID per renderlo valido (converti in minuscolo e rimuovi caratteri non consentiti)
      const safeId = id.toLowerCase().replace(/[^a-z0-9\-_]/g, '-');

      if (safeId !== id) {
        // Informiamo l'utente che l'ID è stato modificato
        console.log(`ID modificato da "${id}" a "${safeId}" per rispettare il formato richiesto`);
        id = safeId;
      }

      // Verifica che l'ID non sia vuoto dopo la pulizia
      if (!id) {
        setError("L'ID non può essere vuoto dopo la rimozione dei caratteri non consentiti")
        setLoading(false)
        return
      }

      const order = orderStr ? Number.parseInt(orderStr, 10) : undefined

      // Se c'è un file logo, prova a caricarlo
      if (logoFile) {
        try {
          // Prepara i dati per l'upload
          const uploadData = new FormData()
          uploadData.append("file", logoFile)
          uploadData.append("path", `sponsors/${id}`)

          // Upload del logo
          const uploadResponse = await fetch("/api/upload", {
            method: "POST",
            body: uploadData,
          })

          if (!uploadResponse.ok) {
            const errorData = await uploadResponse.json()
            console.error("Errore durante l'upload del logo:", errorData)
            
            // Mostra un avviso ma continua con il salvataggio senza logo
            console.warn("Impossibile caricare il logo. Lo sponsor verrà salvato senza logo.");
            
            // Salva lo sponsor senza logo
            const result = await saveSponsor({
              id,
              name,
              // Non includiamo il logo
              description: description || undefined,
              website: website || undefined,
              category: category as any,
              order,
            })

            if (result.success) {
              router.push("/admin/sponsors")
              router.refresh()
            } else {
              setError(result.message)
            }
            return
          }

          const uploadResult = await uploadResponse.json()

          // Salva lo sponsor con il percorso del logo caricato
          const result = await saveSponsor({
            id,
            name,
            logo: uploadResult.path,
            description: description || undefined,
            website: website || undefined,
            category: category as any,
            order,
          })

          if (result.success) {
            router.push("/admin/sponsors")
            router.refresh()
          } else {
            setError(result.message)
          }
        } catch (uploadError) {
          console.error("Errore durante l'upload:", uploadError)
          
          // Mostra un avviso ma continua con il salvataggio senza logo
          console.warn("Impossibile caricare il logo a causa di un errore. Lo sponsor verrà salvato senza logo.");
          
          // Salva lo sponsor senza logo
          const result = await saveSponsor({
            id,
            name,
            // Non includiamo il logo
            description: description || undefined,
            website: website || undefined,
            category: category as any,
            order,
          })

          if (result.success) {
            router.push("/admin/sponsors")
            router.refresh()
          } else {
            setError(result.message)
          }
        }
      } else {
        // Salva lo sponsor senza logo
        const result = await saveSponsor({
          id,
          name,
          description: description || undefined,
          website: website || undefined,
          category: category as any,
          order,
        })

        if (result.success) {
          router.push("/admin/sponsors")
          router.refresh()
        } else {
          setError(result.message)
        }
      }
    } catch (err) {
      console.error(err)
      setError(
        `Si è verificato un errore durante il salvataggio dello sponsor: ${err instanceof Error ? err.message : "Errore sconosciuto"}`,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/admin/sponsors" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla lista degli sponsor
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Nuovo Sponsor</h1>

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <form action={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
                ID (usato per riferimento, senza spazi)
              </label>
              <input
                id="id"
                name="id"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                placeholder="es. nome-azienda"
              />
              <p className="text-xs text-gray-500 mt-1">
                Usa solo lettere minuscole, numeri, trattini e underscore (es. "comune-vallo" o "bcc_cilento")
              </p>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                placeholder="Nome dello sponsor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
              <div className="mt-1 flex items-center">
                <div
                  className="relative flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-full cursor-pointer hover:bg-gray-50"    
                  onClick={() => fileInputRef.current?.click()}
                >
                  {logoPreview ? (
                    <div className="relative">
                      <Image
                        src={logoPreview || "/placeholder.svg"}
                        alt="Anteprima logo"
                        width={200}
                        height={100}
                        className="object-contain max-h-40"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          clearLogoSelection()
                        }}
                        className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-2 text-sm text-gray-600">
                        <span className="font-medium text-festival-orange hover:text-festival-orange-dark">
                          Carica un file
                        </span>{" "}
                        o trascina e rilascia
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF fino a 5MB</p>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrizione
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                placeholder="Breve descrizione dello sponsor"
              ></textarea>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Sito Web
              </label>
              <input
                id="website"
                name="website"
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                placeholder="https://www.esempio.com"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Categoria
              </label>
              <select
                id="category"
                name="category"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
              >
                <option value="">Seleziona una categoria</option>
                <option value="main">Main Sponsor</option>
                <option value="gold">Gold Sponsor</option>
                <option value="silver">Silver Sponsor</option>
                <option value="partner">Partner</option>
                <option value="media">Media Partner</option>
                <option value="technical">Partner Tecnici</option>
              </select>
            </div>

            <div>
              <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
                Ordine (opzionale)
              </label>
              <input
                id="order"
                name="order"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-festival-orange text-black"
                placeholder="1"
              />
              <p className="text-sm text-gray-500 mt-1">
                Numero per ordinare gli sponsor (i numeri più bassi appaiono prima)
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-festival-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 flex items-center disabled:opacity-70"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Salvataggio in corso..." : "Salva Sponsor"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
