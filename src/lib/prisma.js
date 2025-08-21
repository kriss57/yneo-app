// lib/prisma.js 
// -----------------------------------------------------
// ------------ création du client prisma -------------
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()  // prend automatiquement le DATABASE_URL du .env actuel

export default prisma