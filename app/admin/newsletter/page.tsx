"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash, Mail } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export const dynamic = "force-dynamic"

interface Subscriber {
  id: string
  email: string
  date: string
  active: boolean
  privacyConsent?: boolean
}

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [emailSubject, setEmailSubject] = useState("")
  const [emailContent, setEmailContent] = useState("")
  const [isSending, setIsSending] = useState(false)

  const fetchSubscribers = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/newsletter/subscribers")

      if (!response.ok) {
        throw new Error("Errore nel caricamento degli iscritti")
      }

      const data = await response.json()

      if (data.success) {
        setSubscribers(data.subscribers)
      } else {
        toast({
          title: "Errore",
          description: data.message || "Impossibile caricare gli iscritti",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante il caricamento degli iscritti",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Sei sicuro di voler rimuovere questo iscritto?")) {
      return
    }

    try {
      const response = await fetch("/api/newsletter/subscribers", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Successo",
          description: "Iscritto rimosso con successo",
        })
        fetchSubscribers()
      } else {
        toast({
          title: "Errore",
          description: data.message || "Impossibile rimuovere l'iscritto",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante la rimozione dell'iscritto",
        variant: "destructive",
      })
    }
  }

  const handleExport = () => {
    window.open("/api/newsletter/subscribers?format=csv", "_blank")
  }

  const handleSendNewsletter = async () => {
    if (!emailSubject.trim()) {
      toast({
        title: "Errore",
        description: "Inserisci un oggetto per l'email",
        variant: "destructive",
      })
      return
    }

    if (!emailContent.trim()) {
      toast({
        title: "Errore",
        description: "Inserisci il contenuto dell'email",
        variant: "destructive",
      })
      return
    }

    if (
      !confirm(`Sei sicuro di voler inviare questa email a ${subscribers.filter((s) => s.active).length} iscritti?`)
    ) {
      return
    }

    setIsSending(true)

    try {
      const response = await fetch("/api/newsletter/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: emailSubject,
          content: emailContent,
        }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Successo",
          description: `Email inviata con successo a ${data.sentCount} iscritti`,
        })
        setEmailSubject("")
        setEmailContent("")
      } else {
        toast({
          title: "Errore",
          description: data.message || "Impossibile inviare l'email",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un errore durante l'invio dell'email",
        variant: "destructive",
      })
    } finally {
      setIsSending(false)
    }
  }

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="container mx-auto py-8">
      <Toaster />

      <Tabs defaultValue="subscribers">
        <TabsList className="mb-6">
          <TabsTrigger value="subscribers">Iscritti</TabsTrigger>
          <TabsTrigger value="send">Invia Newsletter</TabsTrigger>
        </TabsList>

        <TabsContent value="subscribers">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Gestione Iscritti Newsletter</CardTitle>
                <Button onClick={handleExport}>Esporta CSV</Button>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8">Caricamento iscritti...</div>
              ) : subscribers.length === 0 ? (
                <div className="text-center py-8">Nessun iscritto alla newsletter</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Email</TableHead>
                      <TableHead>Data Iscrizione</TableHead>
                      <TableHead>Stato</TableHead>
                      <TableHead>Consenso Privacy</TableHead>
                      <TableHead className="w-[100px]">Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscribers.map((subscriber) => (
                      <TableRow key={subscriber.id}>
                        <TableCell>{subscriber.email}</TableCell>
                        <TableCell>{formatDate(subscriber.date)}</TableCell>
                        <TableCell>{subscriber.active ? "Attivo" : "Inattivo"}</TableCell>
                        <TableCell>{subscriber.privacyConsent ? "Sì" : "No"}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(subscriber.id)}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="send">
          <Card>
            <CardHeader>
              <CardTitle>Invia Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email-subject" className="block text-sm font-medium mb-1">
                    Oggetto dell'email
                  </label>
                  <Input
                    id="email-subject"
                    placeholder="Inserisci l'oggetto dell'email"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    disabled={isSending}
                  />
                </div>

                <div>
                  <label htmlFor="email-content" className="block text-sm font-medium mb-1">
                    Contenuto dell'email
                  </label>
                  <Textarea
                    id="email-content"
                    placeholder="Inserisci il contenuto dell'email"
                    rows={10}
                    value={emailContent}
                    onChange={(e) => setEmailContent(e.target.value)}
                    disabled={isSending}
                    className="min-h-[200px]"
                  />
                  <p className="text-sm text-gray-500 mt-1">Puoi usare HTML per formattare il contenuto.</p>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handleSendNewsletter}
                    disabled={isSending || subscribers.filter((s) => s.active).length === 0}
                    className="w-full sm:w-auto"
                  >
                    {isSending ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Invia a {subscribers.filter((s) => s.active).length} iscritti
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

