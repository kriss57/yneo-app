// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                // Cherche l'utilisateur par email
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                // Vérifie le mot de passe
                if (user && bcrypt.compareSync(credentials.password, user.password)) {
                    return { id: user.id, email: user.email }
                }

                return null
            },
        }),
    ],
    session: { strategy: "jwt" }, // JWT pour App Router
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login", // Redirige vers /login si non connecté
    },
}

const handler = NextAuth(authOptions)

// Export pour App Router : GET et POST
export { handler as GET, handler as POST }
