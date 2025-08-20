import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

// GET all users
export async function GET() {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

// POST create a user
export async function POST(req) {
    const data = await req.json()
    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
        },
    })
    return NextResponse.json(user)
}
