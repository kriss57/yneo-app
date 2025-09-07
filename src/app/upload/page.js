"use client"

import { useState } from "react"


export default function UploadPage() {
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)

    const handleUpload = async (e) => {
        e.preventDefault()
        if (!file) return

        const formData = new FormData()
        formData.append("file", file)

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        })

        const data = await res.json()
        setUrl(data.url) // URL publique de la vidéo
    }

    return (
        <div className="upload-container" style={{ color: "white", padding: "20px", zIndex: 10 }}>
            <h2>Uploader une vidéo</h2>
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit">Envoyer</button>
            </form>

            {url && (
                <div>
                    <p>Vidéo disponible :</p>
                    <video src={url} controls width="400" />
                </div>
            )}
        </div>
    )
}
