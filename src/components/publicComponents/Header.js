"use client"

import Link from "next/link"
import Image from "next/image"
import { Flex, HStack, Box, Spacer, IconButton, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const links = [
        { name: "Fonctions", href: "/fonctions" },
        { name: "Boutiques", href: "/boutiques" },
        { name: "Tarifs", href: "/tarifs" },
        { name: "À propos", href: "/propos" },
    ]

    return (
        <Flex
            as="header"
            w="100%"
            px={8}
            py={4}
            align="center"
            position="relative"
            zIndex={10}
            bg="transparent"
        >
            {/* Logo à gauche */}
            <Box>
                <Link href="/" passHref>
                    <Flex align="center" cursor="pointer">
                        <Image src="/ico/sphere.webp" alt="Icône" width={30} height={30} />
                        <Box ml={2} fontWeight="bold" color="#D451E0">
                            Néo-Prod
                        </Box>
                    </Flex>
                </Link>
            </Box>

            <Spacer />

            {/* Liens centrés */}
            <HStack spacing={8}>
                {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                        <Box cursor="pointer">{link.name}</Box>
                    </Link>
                ))}
            </HStack>

            <Spacer />

            {/* Switch dark/light à droite */}
            <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
            />
        </Flex>
    )
}

export default Header
