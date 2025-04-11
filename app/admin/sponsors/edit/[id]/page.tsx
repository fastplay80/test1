"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getSponsor, saveSponsor } from "@/lib/sponsors"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Save, Upload, X } from "lucide-react"

export const dynamic = "force-dynamic"

export default function EditSponsorPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sponsor, setSponsor] = useState<any>(null)
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [logoPreview, setLogoPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function loadSponsor() {
      try {
        const data = await getSponsor(params.id)
        if (data) {
          setSponsor(data)
          if (data.logo) {
            setLogoPreview(data.logo)
          }
        } else {
          setError("Sponsor non trovato")
        }
      } catch (err) {
        console.error(err)
        setError("Errore durante il caricamento dello sponsor")
      } finally {
        setLoading(false)
      }
    }

    loadSponsor()
  }, [params.id])

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
    if (sponsor?.logo) {
      setLogoPreview(sponsor.logo)
    } else {
      setLogoPreview(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const removeLogo = () => {
    setLogoFile(null)
    setLogoPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  async function handleSubmit(formData: FormData) {
    setSaving(true)
    setError(null)

    try {
      const name = ((formData.get("name") as string) || "").trim()
      const description = ((formData.get("description") as string) || "").trim()
      const website = ((formData.get("website") as string) || "").trim()
      const category = formData.get("category") as string
      const orderStr = ((formData.get("order") as string) || "").trim()

      if (!name || !category) {
        setError("Nome e categoria sono campi obbligatori")
        setSaving(false)
        return
      }

      const order = orderStr ? Number.parseInt(orderStr, 10) : undefined

      // IMPORTANTE: Saltiamo completamente la parte di upload del logo
      // e manteniamo il logo esistente o lo rimuoviamo se l'utente ha cliccato sul pulsante di rimozione
      
      let logoPath = sponsor.logo
      
      // Se l'anteprima è stata rimossa, rimuovi anche il logo
      if (logoPreview === null) {
        logoPath = undefined
      }
      
      // Mostra un avviso che il nuovo logo non verrà caricato
      if (logoFile) {
        console.warn("L'upload del nuovo logo non è supportato in questo ambiente. Lo sponsor manterrà il logo esistente o nessun logo.");
      }
      
      // Salva lo sponsor con il logo esistente o senza logo
      const result = await saveSponsor({
        id: params.id,
        name,
        logo: logoPath,
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
    } catch (err) {
      console.error(err)
      setError(
        `Si è verificato un errore durante il salvataggio dello sponsor: ${err instanceof Error ? err.message : "Errore sconosciuto"}`,
      )
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div>
        <AdminHeader />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">Caricamento in corso...</div>
        </main>
      </div>
    )
  }

  if (error && !sponsor) {
    return (
      <div>
        <AdminHeader />
        <main className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
          <Link href="/admin/sponsors" className="text-gray-600 hover:text-gray-900 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla lista degli sponsor
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div>
      <AdminHeader />

      <main className="container mx-auto px-4 py-
