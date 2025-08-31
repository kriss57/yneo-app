import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma" // Assure-toi que c'est le bon chemin
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (user && bcrypt.compareSync(credentials.password, user.password)) {
                    return user
                }

                return null
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
        // optionnel : page de redirection après signOut
        signOut: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user
            return token
        },
        async session({ session, token }) {
            if (token?.user) session.user = token.user
            return session
        },
    },
}

const handler = NextAuth(authOptions)

// App Router : exporter GET et POST
export { handler as GET, handler as POST }
