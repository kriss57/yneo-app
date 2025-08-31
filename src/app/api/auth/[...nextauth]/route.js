import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: { email: {}, password: {} },
            async authorize(credentials) {
                // test simple
                if (credentials.email === "test@test.com" && credentials.password === "123") {
                    return { id: 1, name: "Test User", email: "test@test.com" }
                }
                return null
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
