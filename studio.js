// studio.js
import { exec } from "child_process"
import dotenv from "dotenv"

// On récupère l'argument pour choisir la base
const base = process.argv[2] || "local" // default: local

// Charger le .env correspondant
if (base === "neon") {
    dotenv.config({ path: ".env" }) // si ton DATABASE_URL Neon est dans .env
} else {
    dotenv.config({ path: ".env.local" })
}

console.log(`💡 Lancement de Prisma Studio sur la base: ${base}`)
console.log(`DATABASE_URL = ${process.env.DATABASE_URL}`)

// Lancer Prisma Studio avec la bonne DATABASE_URL
exec("npx prisma studio", (err, stdout, stderr) => {
    if (err) {
        console.error("Erreur lors du lancement de Prisma Studio:", err)
        return
    }
    if (stderr) console.error(stderr)
    console.log(stdout)
})
