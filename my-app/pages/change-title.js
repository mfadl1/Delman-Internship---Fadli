import { Text, Divider, Heading, Stack, StackDivider, Flex, Button } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import randomColor from "randomcolor";
import React, { useState, useEffect } from 'react';

export default function TitleTransformer(){

    const [count, setCount] = useState(0);
    const [headingArray, setHeadingArray] = useState([]);

    const addHeading = () =>{
        setCount(prevCount => prevCount+1, s => console.log(s))
        //let coutelmt = count + 1
        const title = 'Internship Program - ' + count
        let color = randomColor();
        headingArray.push({title,color})
        
        // console.log(count)
        console.log(headingArray)
    }

    const removeHeading = () => {
        setCount(count - 1)
        setHeadingArray(headingArray.slice(0, -1))
    }

    useEffect(() => {
        addHeading();
    },[])

    return(
        <>
        <Navbar />
        <Flex alignItems="center" justifyContent="center" width="100%" minH="100vh">
            <Flex direction="column" align="center" justify="center">
                {headingArray.map((item, index) => {
                    return (
                        <Heading key={index} mb={8} color={ item.color }>{item.title}</Heading>
                    )
                })}
                <Divider mb={3}/>
                <Stack direction="column" divider={<StackDivider borderColor='gray.200' />} spacing={3}>
                    <Stack direction="row" divider={<StackDivider borderColor='gray.200' />} justify="center"> 
                        <Text>
                            Running for: 0s
                        </Text>
                        <Text>
                            Title count: {count}
                        </Text>
                    </Stack>
                    <Stack direction="row" spacing={8}>
                        <Button>
                            Randomize Color
                        </Button>
                        <Button onClick={addHeading} disabled={count == 5}>
                            Add Title
                        </Button>
                        <Button onClick={removeHeading} disabled={count == 1}>
                            Remove Title
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Flex>
        </>
    )
}