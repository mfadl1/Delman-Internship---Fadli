import { Box, Flex, Heading, Stack, Text,StackDivider,Link, Button, textDecoration } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Home(){
    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" width="100%">
                <Stack direction="column" divider={<StackDivider borderColor='gray.200' />} spacing={8} align="center">
                    <Heading>Internship Program</Heading>
                    <Stack direction="row" spacing={8}>
                        <Box p='5' boxShadow="md" borderWidth={1} maxWidth={270}>
                            <Button rightIcon={<ArrowForwardIcon />} padding={0} height="fit-content" bg="white" _hover={{ bg:"white" }}>
                                <Link>
                                    <Heading size='md'>Title Transformer</Heading>
                                </Link>
                            </Button>
                            <Text marginTop={4}>
                                A simple title transformation panel
                            </Text>
                        </Box>
                        <Box p='5' boxShadow="md" borderWidth={1} maxWidth={270}>
                            <Button rightIcon={<ArrowForwardIcon />} padding={0} height="fit-content" bg="white" _hover={{ bg:"white" }}>
                                <Link>
                                    <Heading size='md'>User Fetcher</Heading>
                                </Link>
                            </Button>
                            <Text marginTop={4}>
                                A simple API fetching and rendering process
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
    )
}