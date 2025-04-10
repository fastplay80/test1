"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function BypassPage() {
  const router = useRouter()
  const [status, setStatus] = useState("Impostazione cookie di autenticazione...")

  useEffect(() => {
    try {
      // Imposta il cookie di autenticazione direttamente nel browser
      document.cookie = "admin-session=authenticated; path=/; max-age=86400"
      setStatus("Cookie impostato. Reindirizzamento in corso...")

      // Reindirizza alla dashboard
      setTimeout(() => {
        router.push("/admin/dashboard")
      }, 1500)
    } catch (error) {
      console.error("Errore durante il bypass:", error)
      setStatus("Errore durante l'autenticazione. Riprova.")
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-festival-orange">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Accesso Bypass</h1>
        <p className="mb-4">{status}</p>
        <div className="animate-pulse bg-festival-orange h-2 w-full rounded-full"></div>
      </div>
    </div>
  )
}

