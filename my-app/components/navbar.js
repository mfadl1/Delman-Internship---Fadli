import { Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Stack,StackDivider, Text  } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import Head from "next/head";

export default function Navbar(){

    const router = useRouter()

    return (
        <Flex align="center" py={3} px={4} position="absolute" width="100%">
            <Stack direction="row" divider={<StackDivider borderColor='gray.200' />} spacing={5} align="center">
                <Text fontSize="2xl">delman.io</Text>
                {
                    router.pathname == '/' ? 
                    <>
                    <Head>
                        <title>Internship Program</title>
                    </Head>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Internship Program</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    </>
                        
                    : router.pathname == '/change-title' ?
                    <>
                    <Head>
                        <title>Internship Program | Title Transformer</title>
                    </Head>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Internship Program</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/change-title'>Title Transformer</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    </>
                    : router.pathname == '/fetching' ?
                    <>
                    <Head>
                        <title>Internship Program | User Fetcher</title>
                    </Head>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/'>Internship Program</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/fetching'>User Fetcher</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    </>
                    : 
                    <Head>
                        <title>Internship Program</title>
                    </Head>
                }
            </Stack>
        </Flex>
    );
}