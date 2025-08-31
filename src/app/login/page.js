"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("Connexion en cours...")

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        })

        if (res.error) {
            setMessage(res.error)
        } else {
            setMessage("Connecté ✅")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div className="center-container">
            <div className="form-box">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit">Se connecter</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    )
}
