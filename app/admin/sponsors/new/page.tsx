// Modifica l'ID per renderlo valido (converti in minuscolo e rimuovi caratteri non consentiti)
const safeId = id.toLowerCase().replace(/[^a-z0-9\-_]/g, '-');

if (safeId !== id) {
  // Informiamo l'utente che l'ID è stato modificato
  console.log(`ID modificato da "${id}" a "${safeId}" per rispettare il formato richiesto`);
  id = safeId;
}

// Verifica che l'ID non sia vuoto dopo la pulizia
if (!id) {
  setError("L'ID non può essere vuoto dopo la rimozione dei caratteri non consentiti")
  setLoading(false)
  return
}
