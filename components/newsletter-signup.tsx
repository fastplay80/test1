"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [privacyConsent, setPrivacyConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Errore",
        description: "Inserisci un indirizzo email valido",
        variant: "destructive",
      })
      return
    }

    if (!privacyConsent) {
      toast({
        title: "Errore",
        description: "Devi accettare la privacy policy per iscriverti",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, privacyConsent }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Iscrizione completata",
          description: "Grazie per esserti iscritto alla nostra newsletter!",
        })
        setEmail("")
        setPrivacyConsent(false)
      } else {
        toast({
          title: "Errore",
          description: data.message || "Si è verificato un errore durante l'iscrizione",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante l'iscrizione",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="container mx-auto px-4">
      <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">Resta Aggiornato</h2>
          <p className="text-white text-opacity-80 mb-8 text-lg">
            Iscriviti alla nostra newsletter per ricevere aggiornamenti sul programma, gli artisti e le offerte speciali
            per il Cilento Festival.
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="bg-white text-festival-orange font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Iscrizione..." : "Iscriviti"}
              </button>
            </div>

            <div className="flex items-center space-x-2 justify-center mt-2">
              <Checkbox
                id="privacy-consent"
                checked={privacyConsent}
                onCheckedChange={(checked) => setPrivacyConsent(checked === true)}
                className="bg-white bg-opacity-10 border-white border-opacity-20 data-[state=checked]:bg-white data-[state=checked]:text-festival-orange"
              />
              <Label htmlFor="privacy-consent" className="text-white text-opacity-80 text-sm cursor-pointer">
                Accetto la{" "}
                <Link href="/privacy-policy" className="underline hover:text-white">
                  Privacy Policy
                </Link>{" "}
                e acconsento al trattamento dei miei dati
              </Label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

