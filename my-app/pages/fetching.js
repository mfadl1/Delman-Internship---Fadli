import { Flex, Stack, Heading, Text, Box, Button, Divider, Avatar, SkeletonText } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import axios from "axios"
import { useState } from "react";

export default function userFetcher(){

    const [userData, setUserData] = useState([])
    const [gender, setGender] = useState("")
    const [buttonText, setButtonText] = useState("Fetch User")
    const [fetched, setfetched] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchRandomData = async () => {
        setfetched(true)
        setLoading(true)
        setButtonText("Refetch User")
        await axios.get("https://randomuser.me/api")
        .then(result => {
            console.log(result.data.results)
            console.log(loading)
            setUserData(result.data.results)
            setGender(result.data.results[0].gender)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <>
        <Navbar />
        <Flex align="center" justify="center" minHeight="100vh" width="100%">
            <Flex direction="column" >
                <Heading textAlign="center" mb={8}>User Fetcher</Heading>
                <Divider />
                <Box my={14} borderRadius="md" boxShadow="2xl" maxW={270} height={300} borderColor={gender == "male" ? "blue.600" : "pink.400"} borderWidth={fetched ? 1 : 0}>
                    <Flex direction="column" p={8} align="center" justify="center">
                        {!fetched 
                            ? <Avatar src="https://bit.ly/broken-link" size="xl" /> 
                            : userData.map((item, index) => {
                                return (
                                    <Avatar key={index} src={item.picture.large} size="xl" />
                                )
                            })}
                        <SkeletonText isLoaded={fetched} noOfLines={8} spacing={2} mt={5} height={120} width={206}>
                            <Flex direction="column" align="center" justify="center">
                                {userData.map((item, index) => {
                                    return (
                                        <><Heading size='md' fontWeight={500} textAlign="center" >{item.name.first} {item.name.last}</Heading>
                                        <Text mt={2} mb={5} textAlign="center" color="gray.500">{item.email}</Text><Stack direction="row" alignItems="center" spacing={6}>
                                            <Stack direction="column" alignItems="center" spacing={0} width={85}>
                                                <Text fontWeight={600} >{item.nat}</Text>
                                                <Text size="sm" color="gray.500" key={index}>Nationality</Text>
                                            </Stack>
                                            <Stack direction="column" alignItems="center" spacing={0} width={85}>
                                                <Text fontWeight={600}>{item.dob.age}</Text>
                                                <Text size="sm" color="gray.500">Age</Text>
                                            </Stack>
                                        </Stack></>
                                    )
                                })}
                                
                            </Flex>
                        </SkeletonText>
                    </Flex>
                </Box>
                <Divider />
                <Button isLoading={loading} mt={8} onClick={fetchRandomData}>
                    {buttonText}
                </Button>
            </Flex>
        </Flex>
        </>
    )
}