"use client"

import { useSession } from "next-auth/react"

export default function DashboardPage() {
    const { data: session } = useSession()

    if (!session) {
        return (
            <div className="center-container">
                <div className="form-box">
                    <h1><p>Vous n{"'"}êtes pas connecté</p></h1>
                </div>
            </div>
        )
    }

    return (
        <div className="center-container">
            <div className="form-box">
                <h1>Bienvenue, {session.user.email}</h1>
                <p>Tableau de bord</p>
            </div>
        </div>
    )
}
