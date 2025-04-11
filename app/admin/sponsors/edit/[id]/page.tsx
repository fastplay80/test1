"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getSponsor, saveSponsor } from "@/lib/sponsors"
import AdminHeader from "@/components/admin/header"
import { ArrowLeft, Save } from "lucide-react"

export const dynamic = "force-dynamic"

export default function EditSponsorPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sponsor, setSponsor] = useState<any>(null)

  useEffect(() => {
    async function loadSponsor() {
      try {
        const data = await getSponsor(params.id)
        if (data) {
          setSponsor(data)
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

  async function handleSubmit(formData: FormData) {
    setSaving(true)
    setError(null)

    try {
      const name = ((formData.get("name") as string) || "").trim()
      const description = ((formData.get("description") as string) || "").trim()
      const website = ((formData.get("website") as string) || "").trim()
      const logoUrl = ((formData.get("logoUrl") as string) || "").trim()
      const category = formData.get("category") as string
      const orderStr = ((formData.get("order") as string) || "").trim()

      if (!name || !category) {
        setError("Nome e categoria sono campi obbligatori")
        setSaving(false)
        return
      }

      const order = orderStr ? Number.parseInt(orderStr, 10) : undefined

      // Salva lo sponsor con l'URL del logo
      const result = await saveSponsor({
        id: params.id,
        name,
        logo: logoUrl || undefined, // Usa l'URL del logo
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
