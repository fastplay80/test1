import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the path starts with /admin and is not the login page or bypass page
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login") && !pathname.startsWith("/admin/bypass")) {
    // Check if the user is authenticated
    const adminSession = request.cookies.get("admin-session")?.value

    // If not authenticated, redirect to login
    if (adminSession !== "authenticated") {
      console.log("Middleware: Utente non autenticato, reindirizzamento a login")
      const url = new URL("/admin/login", request.url)
      return NextResponse.redirect(url)
    }

    console.log("Middleware: Utente autenticato, accesso consentito")
  }

  return NextResponse.next()
}

// Configure the paths that should be checked by the middleware
export const config = {
  matcher: ["/admin/:path*"],
}

