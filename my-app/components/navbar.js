import { Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack,StackDivider, Text  } from "@chakra-ui/react"
import { useRouter } from 'next/router'

export default function Navbar(){

    const router = useRouter()

    return (
        <Flex align="center" py={3} px={4} position="absolute" width="100%">
            <Stack direction="row" divider={<StackDivider borderColor='gray.200' />} spacing={5} align="center">
                <Text fontSize="2xl">delman.io</Text>
                {
                    router.pathname == '/' ? 
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Internship Program</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                        
                    : router.pathname == '/change-title' ?
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>Internship Program</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/change-title'>Title Transformer</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    :
                        <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Internship Program</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/fetching'>User Fetcher</BreadcrumbLink>
                        </BreadcrumbItem>
                        </Breadcrumb>
                }
            </Stack>
        </Flex>
    );
}