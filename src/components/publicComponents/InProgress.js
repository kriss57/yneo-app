// src/components/publicComponents/InProgress.js
"use client"

import React, { useEffect, useState } from "react"

const InProgress = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // simple animation de gauche à droite
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 0))
        }, 20) // ajuste la vitesse ici
        return () => clearInterval(interval)
    }, [])

    return (
        <div
            style={{
                width: "100%",
                height: "80px",
                backgroundColor: "#000",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "sans-serif",
                fontSize: "20px",
                borderRadius: "8px",
                margin: "20px 0",
                overflow: "hidden",
                marginTop: "40px",
            }}
        >
            <span style={{ marginBottom: "10px" }}>Page en cours…</span>
            <div
                style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "#333",
                    borderRadius: "5px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        backgroundColor: "#00ff00", // vert
                        transition: "width 0.1s linear",
                    }}
                />
            </div>
        </div>
    )
}

export default InProgress