// src/middleware.js
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    const { pathname } = req.nextUrl

    // Pages publiques autorisées
    const publicPaths = ["/login", "/register", "/"]

    if (!token && !publicPaths.includes(pathname)) {
        const url = req.nextUrl.clone()
        url.pathname = "/login"
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"], // toutes les pages protégées
}