// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"

// Fonction pour vérifier l'utilisateur avec Prisma
async function authorizeUser(credentials) {
    const user = await prisma.user.findUnique({
        where: { email: credentials.email },
    })

    if (user && user.password === credentials.password) {
        // Pour plus de sécurité, tu peux hasher le mot de passe avant la comparaison
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
        strategy: "jwt", // JWT côté client
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login", // Page de connexion personnalisée
    },
})

export { handler as GET, handler as POST }
