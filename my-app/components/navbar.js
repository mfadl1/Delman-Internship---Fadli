import { Flex, Box, Divider, Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, Stack,StackDivider, Heading, Text  } from "@chakra-ui/react"

export default function Navbar(){
    return (
        <Flex align="center" py={3} px={4} position="absolute" width="100%">
            <Stack direction="row" divider={<StackDivider borderColor='gray.200' />} spacing={5} align="center">
                <Text fontSize="2xl">delman.io</Text>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Internship Program</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Stack>
        </Flex>
    );
}