// lib/prisma.js 
// -----------------------------------------------------
// ------------ création du client prisma -------------
import { PrismaClient } from '@prisma/client'

let prisma

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient()
} else {
    // Evite de recréer un client à chaque hot reload en dev
    if (!global.prisma) {
        global.prisma = new PrismaClient()
    }
    prisma = global.prisma
}

export default prisma
