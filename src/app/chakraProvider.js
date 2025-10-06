"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    styles: {
        global: (props) => ({
            "html, body": {
                fontFamily: "'Space Grotesk', sans-serif",
                height: "100%",
                overflowX: "hidden",
                margin: 0,
                position: "relative",
                bg: props.colorMode === "dark" ? "#000" : "#fff",
                color: props.colorMode === "dark" ? "#fff" : "#000",
            },
            "body::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%",
                height: "250px",
                zIndex: 0,
                pointerEvents: "none",
                background:
                    props.colorMode === "dark"
                        ? "radial-gradient(ellipse at top, rgba(180,0,255,0.6) 0%, transparent 70%)"
                        : "radial-gradient(ellipse at top, rgba(180,0,255,0.3) 0%, transparent 70%)",
            },
            a: {
                color: "inherit",
                textDecoration: "none",
            },
            "#btnForm": {
                background:
                    props.colorMode === "dark"
                        ? "rgba(242, 65, 233, 0.8)"
                        : "rgba(242, 65, 233, 0.7)",
                color: props.colorMode === "dark" ? "#fff" : "#000",
            },
        }),
    },
})

export default function ChakraProviderWrapper({ children }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
