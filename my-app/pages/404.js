import { Heading, Flex, Text, Stack, StackDivider, Button, Link } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import Navbar from "../components/navbar"

export default function notFound(){
    
    return (
        <>
        <Navbar />
        <Flex direction="column" minHeight="100vh" width="100%" align="center" justify="center">
            <Stack divider={<StackDivider borderColor='gray.200' />} spacing={5}>
                <Stack>
                    <Heading size="4xl" textAlign="center">
                        404
                    </Heading>
                    <Heading size="lg" textAlign="center">
                        Page Not Found
                    </Heading>
                </Stack>
                <Stack>
                    <Text>
                        Ooooops.... the page you're looking for doesn't exist
                    </Text>
                    <Button leftIcon={<ArrowBackIcon />} padding={0} height="fit-content" bg="white" _hover={{ bg:"white" }}>
                        <Link href='/'>
                            <Heading size='xs' fontWeight="semibold">Back to Home</Heading>
                        </Link>
                    </Button>
                </Stack>
                
            </Stack>
            
        </Flex>
        </>
    )
    
}