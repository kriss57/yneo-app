import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {

    // Récupère le JWT généré par NextAuth
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const url = req.nextUrl.clone()

    // Protéger l'accès au dashboard
    if (url.pathname.startsWith("/dashboard") && !token) {
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

// Définir sur quelles routes le middleware s'applique
export const config = {
    matcher: ["/dashboard/:path*"], // toutes les sous-routes de /dashboard
}
