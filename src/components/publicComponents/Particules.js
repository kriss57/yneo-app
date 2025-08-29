
"use client"
import { useEffect, useRef } from "react"

const Particules = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d", { alpha: false })
        if (!ctx) return

        let W = (canvas.width = window.innerWidth)
        let H = (canvas.height = window.innerHeight)

        const particles = []
        const particleCount = 1000
        const mouse = { x: -9999, y: -9999 }

        class P {
            constructor(x, y) {
                this.homeX = x
                this.homeY = y
                this.x = x
                this.y = y
                this.vx = 0
                this.vy = 0
                this.size = 0.5 + Math.random() * 1 // regle la taille des particules
                this.mass = 0.6 + Math.random() * 0.8
            }
            applyForce(fx, fy) {
                this.vx += fx / this.mass
                this.vy += fy / this.mass
            }
            update() {
                const dx = this.x - mouse.x
                const dy = this.y - mouse.y
                const dist = Math.sqrt(dx * dx + dy * dy) || 0.0001
                const influence = 120

                if (dist < influence) {
                    const strength = (1 - dist / influence) * 6
                    this.applyForce((dx / dist) * strength, (dy / dist) * strength)
                }

                // rappel vers la position d'origine
                const k = 0.02
                this.applyForce(
                    (this.homeX - this.x) * k,
                    (this.homeY - this.y) * k
                )

                // friction
                this.vx *= 0.92
                this.vy *= 0.92

                this.x += this.vx
                this.y += this.vy
            }
            draw(ctx) {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        function initParticles() {
            particles.length = 0
            const cx = W / 2
            const cy = H / 2
            const radius = Math.min(W, H) * 0.25
            for (let i = 0;i < particleCount;i++) {
                const r = Math.sqrt(Math.random()) * radius
                const angle = Math.random() * Math.PI * 2
                const x = cx + Math.cos(angle) * r
                const y = cy + Math.sin(angle) * r
                particles.push(new P(x, y))
            }
        }

        function render() {
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, W, H)

            ctx.save()
            ctx.globalCompositeOperation = "lighter"
            ctx.fillStyle = "rgba(160,200,255,0.9)"

            for (const p of particles) {
                p.update()
                p.draw(ctx)
            }
            ctx.restore()

            requestAnimationFrame(render)
        }

        // events
        const onMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }
        const onLeave = () => {
            mouse.x = -9999
            mouse.y = -9999
        }
        const onResize = () => {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
            initParticles()
        }

        window.addEventListener("mousemove", onMove)
        window.addEventListener("mouseleave", onLeave)
        window.addEventListener("resize", onResize)

        initParticles()
        render()

        return () => {
            window.removeEventListener("mousemove", onMove)
            window.removeEventListener("mouseleave", onLeave)
            window.removeEventListener("resize", onResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full fixed top-0 left-0 -z-10 "

        />


    )
}


export default Particules