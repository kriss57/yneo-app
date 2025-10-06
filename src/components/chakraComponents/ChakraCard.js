"use client"

import { Card, CardBody, CardFooter, Image, Text, Button, Heading } from "@chakra-ui/react"

const ChakraCard = ({ imageUrl, title, description, price }) => {
    return (
        <Card maxW="sm" overflow="hidden" borderRadius="lg" boxShadow="md">
            <Image
                src={imageUrl}
                alt={title}
                objectFit="cover"
                w="100%"
                h="200px"
            />
            <CardBody>
                <Heading size="md">{title}</Heading>
                <Text mt="2" color="gray.500">{description}</Text>
                <Text fontWeight="bold" fontSize="xl" mt="2">
                    ${price}
                </Text>
            </CardBody>
            <CardFooter gap="2">
                <Button colorScheme="purple" variant="solid">Acheter</Button>
                <Button variant="ghost">Ajouter au panier</Button>
            </CardFooter>
        </Card>
    )
}

export default ChakraCard
