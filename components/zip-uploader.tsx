"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Loader2 } from "lucide-react"
import { uploadZipFile } from "@/app/actions/upload-actions"

interface ZipUploaderProps {
  onUploadComplete?: () => void
}

export default function ZipUploader({ onUploadComplete }: ZipUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null)
  const [progress, setProgress] = useState(0)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Verifica che sia un file ZIP
    if (file.type !== "application/zip" && !file.name.endsWith(".zip")) {
      setMessage({ type: "error", text: "Per favore carica un file ZIP" })
      return
    }

    setIsUploading(true)
    setMessage({ type: "info", text: "Caricamento in corso..." })
    setProgress(10)

    try {
      // Crea un FormData per inviare il file
      const formData = new FormData()
      formData.append("zipFile", file)

      setProgress(30)

      // Chiama l'action per caricare e processare il file
      const result = await uploadZipFile(formData)

      setProgress(100)

      if (result.success) {
        setMessage({
          type: "success",
          text: `File caricato con successo! Sono state estratte ${result.extractedFiles} immagini.`,
        })

        // Notifica il completamento dell'upload
        if (onUploadComplete) {
          onUploadComplete()
        }
      } else {
        setMessage({ type: "error", text: result.error || "Si è verificato un errore durante il caricamento" })
      }
    } catch (error) {
      console.error("Errore durante il caricamento:", error)
      setMessage({ type: "error", text: "Si è verificato un errore durante il caricamento" })
    } finally {
      setIsUploading(false)
      // Reset del campo file
      e.target.value = ""
    }
  }

  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-sm rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Carica Archivio Immagini</h2>

      <div className="mb-4">
        <p className="text-white text-opacity-90 mb-4">
          Carica un file ZIP contenente le immagini che vuoi aggiungere alla galleria. Le immagini verranno
          automaticamente estratte e aggiunte.
        </p>

        <label
          htmlFor="zip-upload"
          className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer 
            ${isUploading ? "border-gray-400 bg-gray-800 bg-opacity-50" : "border-white border-opacity-30 hover:bg-white hover:bg-opacity-5"}`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {isUploading ? (
              <>
                <Loader2 className="w-8 h-8 text-white mb-2 animate-spin" />
                <p className="text-sm text-white text-opacity-80">Caricamento in corso...</p>
              </>
            ) : (
              <>
                <Upload className="w-8 h-8 text-white mb-2" />
                <p className="text-sm text-white text-opacity-80">Clicca o trascina qui il tuo file ZIP</p>
              </>
            )}
          </div>
          <input
            id="zip-upload"
            type="file"
            accept=".zip"
            className="hidden"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </label>
      </div>

      {isUploading && (
        <div className="w-full bg-gray-700 bg-opacity-50 rounded-full h-2.5 mb-4">
          <div
            className="bg-white h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-900 bg-opacity-30 text-green-100"
              : message.type === "error"
                ? "bg-red-900 bg-opacity-30 text-red-100"
                : "bg-blue-900 bg-opacity-30 text-blue-100"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  )
}

