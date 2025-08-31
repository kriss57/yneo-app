import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"

dotenv.config() // charge .env, .env.local, .env.production automatiquement selon NODE_ENV

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
