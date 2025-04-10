"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createGalleryYear } from "@/lib/gallery"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function CreateGalleryForm() {
  const [year, setYear] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!year || !/^\d{4}$/.test(year)) {
      toast({
        title: "Errore",
        description: "Inserisci un anno valido nel formato YYYY",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await createGalleryYear(year)

      if (result.success) {
        toast({
          title: "Successo",
          description: result.message,
        })

        // Resetta il form
        setYear("")

        // Aggiorna la pagina
        router.refresh()
      } else {
        toast({
          title: "Errore",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante la creazione della galleria",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="year">Anno della galleria</Label>
        <div className="flex gap-2 mt-1">
          <Input
            id="year"
            type="text"
            placeholder="Es. 2025"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            pattern="\d{4}"
            maxLength={4}
            className="text-black"
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creazione..." : "Crea galleria"}
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-1">Inserisci l'anno nel formato YYYY (es. 2025)</p>
      </div>
    </form>
  )
}

