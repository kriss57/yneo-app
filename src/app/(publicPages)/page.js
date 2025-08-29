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
                    <h1><Image
                        src="/ico/sphere.webp"
                        alt="Icône"
                        width={32}
                        height={32}
                    /> L’outil tout-en-un pour les créateurs</h1>

                    <p>Transforme tes idées en contenu engageant en quelques minutes.</p>
                    <button className="btn" id="btnForm">Commencer gratuitement</button>

                    <MediaController
                        style={{
                            width: "100%",
                            aspectRatio: "16/9",
                        }}
                    >
                        <ReactPlayer
                            slot="media"
                            src='https://www.youtube.com/shorts/AD62VSb-gqs'
                            controls={false}
                            style={{
                                width: "100%",
                                height: "100%",
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
    )
}


