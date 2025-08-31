// test-creds.mjs
console.log("=== Test CredentialsProvider import ===")

try {
    const moduleProviders = await import("next-auth/providers")
    console.log("Import nommé ->", typeof moduleProviders.CredentialsProvider)
} catch (err) {
    console.error("Erreur import nommé:", err.message)
}

try {
    const moduleCreds = await import("next-auth/providers/credentials")
    console.log("Import par défaut ->", typeof moduleCreds.default)
} catch (err) {
    console.error("Erreur import par défaut:", err.message)
}
