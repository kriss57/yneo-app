// lib/prisma.js 
// -----------------------------------------------------
// ------------ création du client prisma -------------
import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"

// Choisir l'env selon un paramètre NODE_ENV_BASE
if (process.env.NODE_ENV_BASE === "neon") {
    dotenv.config({ path: ".env.neon" })
} else {
    dotenv.config({ path: ".env.local" })
}

let prisma

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} else {
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma
