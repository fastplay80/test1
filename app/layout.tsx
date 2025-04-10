import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import LayoutMobile from "./layout-mobile"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Premio Aniello De Vita",
  description: "Premio Aniello De Vita - Ideato da Lillo De Marco e prodotto da Cilento Music Festival",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${inter.className} bg-festival-orange min-h-screen flex flex-col`}>
        <LayoutMobile>{children}</LayoutMobile>
        <div className="md:block hidden min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'