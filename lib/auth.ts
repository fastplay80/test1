"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

// Credenziali di accesso (in un'app reale, queste sarebbero in un database o in variabili d'ambiente)
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "cilentofestival2024"

// Schema di validazione per il login
const loginSchema = z.object({
  username: z.string().min(1, "Username è obbligatorio"),
  password: z.string().min(1, "Password è obbligatoria"),
})

export async function login(formData: FormData) {
  const validatedFields = loginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Credenziali non valide",
    }
  }

  const { username, password } = validatedFields.data

  // Verifica delle credenziali
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return {
      success: false,
      message: "Username o password non corretti",
    }
  }

  // Imposta un cookie di sessione
  cookies().set("admin-session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 giorno
    path: "/",
  })

  return {
    success: true,
    message: "Login effettuato con successo",
  }
}

export async function logout() {
  cookies().delete("admin-session")
  redirect("/admin/login")
}

export async function isAuthenticated() {
  const session = cookies().get("admin-session")
  return session?.value === "authenticated"
}

export async function requireAuth() {
  const authenticated = await isAuthenticated()
  if (!authenticated) {
    redirect("/admin/login")
  }
}

