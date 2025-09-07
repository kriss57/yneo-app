// src/app/api/upload/route.js
import { put } from "@vercel/blob"
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

// Initialiser Prisma
const prisma = new PrismaClient()

// Endpoint POST => /api/upload
export async function POST(request) {
    try {
        // Récupérer le fichier depuis le formulaire
        const data = await request.formData()
        const file = data.get("file")

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
        }

        // Upload vers Vercel Blob
        const blob = await put(file.name, file, {
            access: "public", // fichier accessible publiquement
            token: process.env.BLOB_READ_WRITE_TOKEN,
        })

        // Sauvegarde des métadonnées dans Neon via Prisma
        const video = await prisma.video.create({
            data: {
                title: file.name,
                url: blob.url,
            },
        })

        // Réponse JSON avec l’info en base
        return NextResponse.json(video)
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json(
            { error: "Upload failed" },
            { status: 500 }
        )
    }
}
