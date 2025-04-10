"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Image, FileText, Music, Users, Mail } from "lucide-react"

export default function AdminHeader() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-xl font-bold">Cilento Festival - Admin</h1>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link
                  href="/admin/dashboard"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    isActive("/admin/dashboard") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/content"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    pathname.startsWith("/admin/content") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span>Contenuti</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/gallery"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    pathname.startsWith("/admin/gallery") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                  }`}
                >
                  <Image className="w-4 h-4" />
                  <span>Galleria</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/tracks"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    pathname.startsWith("/admin/tracks") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                  }`}
                >
                  <Music className="w-4 h-4" />
                  <span>Tracce</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/sponsors"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    pathname.startsWith("/admin/sponsors") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Sponsor</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/newsletter"
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                    pathname.startsWith("/admin/newsletter") ? "bg-blue-600 text-white" : "hover:bg-gray-800"
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Newsletter</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  target="_blank"
                >
                  <span>Vai al sito</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

