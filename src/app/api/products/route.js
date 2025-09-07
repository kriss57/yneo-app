import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import { put } from "@vercel/blob"

const prisma = new PrismaClient()

// GET = liste des produits
export async function GET() {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(products)
}

// POST = ajout produit (vendeur)
export async function POST(request) {
    const data = await request.formData()

    const title = data.get("title")
    const description = data.get("description")
    const price = parseFloat(data.get("price"))
    const file = data.get("file")

    if (!file || !title || !price) {
        return NextResponse.json({ error: "Champs manquants" }, { status: 400 })
    }

    // Upload image → Vercel Blob
    const blob = await put(file.name, file, { access: "public" })

    // Enregistre en BDD
    const product = await prisma.product.create({
        data: {
            title,
            description,
            price,
            imageUrl: blob.url,
        },
    })

    return NextResponse.json(product)
}
