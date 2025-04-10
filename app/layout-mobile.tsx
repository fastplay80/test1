"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function LayoutMobile({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  // Imposta la tab attiva in base al percorso
  useEffect(() => {
    const path = window.location.pathname
    if (path === "/") setActiveTab("home")
    else if (path.includes("/aniello-de-vita")) setActiveTab("aniello")
    else if (path.includes("/edizioni")) setActiveTab("edizioni")
    else if (path.includes("/vincitori")) setActiveTab("vincitori")
    else if (path.includes("/playlist")) setActiveTab("playlist")
    else if (path.includes("/gallery")) setActiveTab("gallery")
    else if (path.includes("/contatti")) setActiveTab("contatti")
  }, [])

  if (!isMobile) return null

  return (
    <div className="flex flex-col h-screen bg-festival-orange text-white overflow-hidden">
      {/* Header con logo e menu */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black bg-opacity-20 backdrop-blur-sm border-b border-white border-opacity-10">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-24">
            <Image
              src="/images/logo.png"
              alt="Premio Aniello De Vita Logo"
              width={96}
              height={32}
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/download/modulo-iscrizione"
            className="bg-white text-festival-orange text-sm font-bold py-1.5 px-3 rounded-full hover:bg-opacity-90 transition-all"
          >
            Iscrizione
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/aniello-de-vita"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Aniello De Vita
            </Link>
            <Link
              href="/edizioni"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Edizioni
            </Link>
            <Link
              href="/vincitori"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Vincitori
            </Link>
            <Link
              href="/playlist"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Playlist
            </Link>
            <Link
              href="/gallery"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/video"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Video
            </Link>
            <Link
              href="/formazione"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Formazione
            </Link>
            <Link
              href="/contatti"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </Link>
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>

      {/* Aggiungiamo una barra di navigazione rapida in alto sotto l'header */}
      <div className="sticky top-16 z-40 bg-black bg-opacity-30 backdrop-blur-sm overflow-x-auto whitespace-nowrap py-2 px-4 border-b border-white border-opacity-10">
        <div className="flex space-x-4">
          <NavLink href="/" label="Home" isActive={activeTab === "home"} />
          <NavLink href="/aniello-de-vita" label="Aniello" isActive={activeTab === "aniello"} />
          <NavLink href="/edizioni" label="Edizioni" isActive={activeTab === "edizioni"} />
          <NavLink href="/vincitori" label="Vincitori" isActive={activeTab === "vincitori"} />
          <NavLink href="/playlist" label="Playlist" isActive={activeTab === "playlist"} />
          <NavLink href="/gallery" label="Gallery" isActive={activeTab === "gallery"} />
        </div>
      </div>
    </div>
  )
}

function NavLink({ href, label, isActive }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium py-1 px-2 ${
        isActive ? "text-white border-b-2 border-white" : "text-white text-opacity-70 hover:text-opacity-100"
      }`}
    >
      {label}
    </Link>
  )
}

