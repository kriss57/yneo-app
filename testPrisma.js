//---------------------------------------------------------------------//
// ----- Code prisma pour communiquer avec l API (premier teste) ---- //

// Import de Prisma Client
// Prisma Client est généré automatiquement après `npx prisma migrate dev`
// testPrisma.js
// testPrisma.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Création d’un user
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@example.com',
        },
    })
    console.log('Utilisateur créé:', user)

    // Récupération des users
    const allUsers = await prisma.user.findMany()
    console.log('Tous les utilisateurs:', allUsers)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
