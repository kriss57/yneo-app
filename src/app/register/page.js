"use client"

import { useState } from "react"

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("Inscription en cours...")

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        })

        const data = await res.json()

        if (res.ok) {
            setMessage("Inscription réussie ✅")
            setName("")
            setEmail("")
            setPassword("")
        } else {
            setMessage(data.error)
        }
    }

    return (
        <div className="center-container">
            <div className="form-box">
                <h1>Inscription</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nom"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">S'inscrire</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    )
}
