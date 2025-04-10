"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-festival-orange bg-opacity-95 backdrop-blur-sm border-b border-white border-opacity-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-12 w-32">
              <Image
                src="/images/logo.png"
                alt="Premio Aniello De Vita Logo"
                width={128}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Home
            </Link>
            <Link
              href="/aniello-de-vita"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Aniello De Vita
            </Link>
            <Link
              href="/edizioni"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Edizioni
            </Link>
            <Link
              href="/vincitori"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Vincitori
            </Link>
            <Link
              href="/playlist"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Playlist
            </Link>
            <Link
              href="/gallery"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Gallery
            </Link>
            <Link
              href="/eventi"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Eventi
            </Link>
            <Link
              href="/sponsor"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Sponsor
            </Link>
            <Link
              href="/contatti"
              className="text-white font-medium hover:text-white hover:underline underline-offset-4 transition-all"
            >
              Contatti
            </Link>
            <Link
              href="/download/modulo-iscrizione"
              className="bg-white text-festival-orange font-bold py-2 px-4 rounded-full hover:bg-opacity-90 transition-all"
            >
              Iscrizione
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-md">
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
              href="/eventi"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventi
            </Link>
            <Link
              href="/sponsor"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsor
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
            <Link
              href="/produzione-artistica"
              className="text-white font-medium py-2 hover:bg-white hover:bg-opacity-10 px-4 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Produzione Artistica
            </Link>
            <Link
              href="/download/modulo-iscrizione"
              className="bg-white text-festival-orange font-bold py-3 px-4 rounded-full hover:bg-opacity-90 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Iscrizione
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

