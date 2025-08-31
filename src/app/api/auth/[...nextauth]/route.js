// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma" // ton client Prisma

// Fonction pour vérifier l'utilisateur avec Prisma
async function authorizeUser(credentials) {
    const user = await prisma.user.findUnique({
        where: { email: credentials.email },
    })

    if (user && user.password === credentials.password) {
        // Ici tu peux hasher le mot de passe pour plus de sécurité
        return { id: user.id, email: user.email, name: user.name }
    }
    return null
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                return await authorizeUser(credentials)
            },
        }),
    ],
    session: {
        strategy: "jwt", // session côté client via JWT
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login", // page de connexion
    },
})

export { handler as GET, handler as POST }
