import fs from "fs"
import path from "path"

const NEWSLETTER_FILE = path.join(process.cwd(), "data", "newsletter-subscribers.json")

// Assicurati che la directory esista
export function ensureDirectoryExists() {
  const dir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  if (!fs.existsSync(NEWSLETTER_FILE)) {
    fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify([]))
  }
}

// Ottieni tutti gli iscritti
export function getSubscribers() {
  ensureDirectoryExists()
  try {
    const data = fs.readFileSync(NEWSLETTER_FILE, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Errore nella lettura degli iscritti:", error)
    return []
  }
}

// Aggiungi un nuovo iscritto
export function addSubscriber(email: string, privacyConsent = false) {
  ensureDirectoryExists()
  try {
    const subscribers = getSubscribers()

    // Verifica se l'email esiste già
    if (subscribers.some((sub: any) => sub.email === email)) {
      return { success: false, message: "Email già registrata" }
    }

    // Aggiungi il nuovo iscritto
    const newSubscriber = {
      id: Date.now().toString(),
      email,
      date: new Date().toISOString(),
      active: true,
      privacyConsent: privacyConsent,
    }

    subscribers.push(newSubscriber)
    fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify(subscribers, null, 2))

    return { success: true, message: "Iscrizione completata con successo" }
  } catch (error) {
    console.error("Errore nell'aggiunta dell'iscritto:", error)
    return { success: false, message: "Errore durante l'iscrizione" }
  }
}

// Rimuovi un iscritto
export function removeSubscriber(id: string) {
  ensureDirectoryExists()
  try {
    let subscribers = getSubscribers()
    subscribers = subscribers.filter((sub: any) => sub.id !== id)
    fs.writeFileSync(NEWSLETTER_FILE, JSON.stringify(subscribers, null, 2))
    return { success: true, message: "Iscritto rimosso con successo" }
  } catch (error) {
    console.error("Errore nella rimozione dell'iscritto:", error)
    return { success: false, message: "Errore durante la rimozione" }
  }
}

// Esporta gli iscritti in formato CSV
export function exportSubscribersToCSV() {
  const subscribers = getSubscribers()
  let csv = "ID,Email,Data Iscrizione,Stato,Consenso Privacy\n"

  subscribers.forEach((sub: any) => {
    csv += `${sub.id},"${sub.email}","${sub.date}",${sub.active ? "Attivo" : "Inattivo"},${sub.privacyConsent ? "Sì" : "No"}\n`
  })

  return csv
}

// Ottieni gli iscritti attivi
export function getActiveSubscribers() {
  const subscribers = getSubscribers()
  return subscribers.filter((sub: any) => sub.active === true)
}

