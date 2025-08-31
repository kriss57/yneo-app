import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })

                if (!user) return null

                const isValid = await bcrypt.compare(credentials.password, user.password)
                if (!isValid) return null

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            },
        }),
    ],
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
