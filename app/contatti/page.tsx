"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContattiPage() {
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!privacyAccepted) {
      toast({
        title: "Errore",
        description: "Devi accettare la privacy policy per inviare il messaggio",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          to: "premioaniellodevita@libero.it", // Email di destinazione
        }),
      })

      if (response.ok) {
        toast({
          title: "Messaggio inviato",
          description: "Grazie per averci contattato. Ti risponderemo al più presto.",
        })
        setName("")
        setEmail("")
        setMessage("")
        setPrivacyAccepted(false)
      } else {
        toast({
          title: "Errore",
          description: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contatti</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Contatti Generali</h2>
          <p className="mb-2">Email: premioaniellodevita@libero.it</p>
          <p className="mb-2">Email: statale_18@libero.it</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Sede</h2>
          <p className="mb-2">STATALE 18 ETS</p>
          <p className="mb-2">VIA MUNICIPIO 47 - 84060</p>
          <p className="mb-2">MOIO DELLA CIVITELLA (SA)</p>
          <p className="mb-2">P.IVA N. 05855000658, C.F 95018510653</p>
          <p>MAIL: statale_18@libero.it</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Produttore Artistico</h3>
            <p>Lillo De Marco 333-8267216</p>
          </div>
          <div>
            <h3 className="font-bold">Direttore Artistico</h3>
            <p>Cristofaro 349-0103126</p>
          </div>
          <div>
            <h3 className="font-bold">Direttore Orchestra e Arrangiamenti</h3>
            <p>Umberto Elia 339-1087811</p>
          </div>
          <div>
            <h3 className="font-bold">Segreteria di Produzione</h3>
            <p>Luisa Rizzo 340-4647802</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Modulo di Contatto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
              placeholder="Il tuo nome"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
              placeholder="La tua email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              Messaggio
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-gray-800"
              placeholder="Il tuo messaggio"
              required
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
            />
            <label
              htmlFor="privacy"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
            >
              Accetto la{" "}
              <a href="/privacy-policy" className="text-green-700 underline">
                Privacy Policy
              </a>{" "}
              e il trattamento dei miei dati personali
            </label>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
          </button>
        </form>
      </div>
    </div>
  )
}

