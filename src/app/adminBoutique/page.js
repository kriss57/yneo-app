"use client"

import { useState } from "react"

export default function AddProductPage() {
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target)

        const res = await fetch("/api/products", {
            method: "POST",
            body: formData,
        })

        const data = await res.json()
        console.log("Produit ajouté :", data)

        setLoading(false)
        e.target.reset()
    }

    return (
        <section className="add-product-section">
            <div className="add-product-container">
                <h1 className="text-2xl font-bold mb-4">Ajouter un produit</h1>

                <form onSubmit={handleSubmit} className="add-product-form">
                    <input
                        type="text"
                        name="title"
                        placeholder="Titre"
                        required
                        className="p-2 rounded bg-gray-800"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        className="p-2 rounded bg-gray-800"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Prix (€)"
                        step="0.01"
                        required
                        className="p-2 rounded bg-gray-800"
                    />
                    <input type="file" name="file" accept="image/*" required />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-500 hover:bg-green-600 p-2 rounded font-bold"
                    >
                        {loading ? "Ajout en cours..." : "Ajouter"}
                    </button>
                </form>
            </div>
        </section>


    )
}
