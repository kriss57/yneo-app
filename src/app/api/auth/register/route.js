import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        const body = await req.json()
        const { name, email, password } = body

        if (!email || !password) {
            return NextResponse.json({ error: "Email et mot de passe requis" }, { status: 400 })
        }

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10)

        // Création du user
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        })

        return NextResponse.json(newUser, { status: 201 })
    } catch (error) {
        console.error("Erreur register:", error)
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
    }
}
