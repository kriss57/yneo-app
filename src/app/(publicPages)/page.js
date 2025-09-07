"use client"

import Image from "next/image"
import styles from "@/app/page.module.css"
import ReactPlayer from "react-player"

import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlaybackRateButton,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaFullscreenButton,
} from "media-chrome/react"

export default function Acceuil() {
    return (

        <div className={styles.hero}>

            <div className="main-container">

                <div className="main-title">


                    <button className="btn" id="btnInfo">
                        <Image
                            src="/ico/iaIco.png"
                            alt="Icône"
                            width={32}
                            height={32}
                        /> Nouvelle IA Avancée</button>
                    <h1>L’outil tout-en-un pour <br /> les créateurs</h1>

                    <p>Transforme tes idées en contenu engageant en quelques minutes.</p>
                    <button className="btn" id="btnForm">Commencer gratuitement</button>
                    <div className="video-container">
                        <MediaController
                            style={{
                                width: "100%",
                                aspectRatio: "16/9",
                            }}
                        >
                            <ReactPlayer
                                slot="media"
                                src='https://9fffavybphimvcsn.public.blob.vercel-storage.com/Cercle%20Violet.mp4'
                                controls={false}
                                loop={true}         // 🔁 répétition infinie
                                playing={true}      // ▶️ auto-play si tu veux
                                muted={true}        // 🔇 nécessaire pour autoplay sans bloquer le navigateur
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "20px",   // arrondi
                                    overflow: "hidden",     // masque le débordement
                                    "--controls": "none",
                                }} />
                            <MediaControlBar autohide>
                                <MediaPlayButton />
                                <MediaSeekBackwardButton seekOffset={10} />
                                <MediaSeekForwardButton seekOffset={10} />
                                <MediaTimeRange />
                                <MediaTimeDisplay showDuration />
                                <MediaMuteButton />
                                <MediaVolumeRange />
                                <MediaPlaybackRateButton />
                                <MediaFullscreenButton />
                            </MediaControlBar>
                        </MediaController>
                    </div>

                </div>

            </div>
        </div>
    )
}


