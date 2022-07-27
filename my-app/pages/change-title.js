import { Text, Divider, Heading, Stack, StackDivider, Flex, Button } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import randomColor from "randomcolor";
import React, { useState, useEffect } from 'react';

export default function titleTransformer(){

    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0)
    const [startRandom, setStartRandom] = useState(false)
    const [buttonText, setButtonText] = useState("Randomize Color")
    const [headingArray, setHeadingArray] = useState([]);

    const addHeading = () =>{
        setCount(prevCount => prevCount + 1)
        let coutelmt = count + 1
        const title = 'Internship Program - ' + coutelmt
        let color = randomColor();
        headingArray.push({title,color})
        
        console.log(headingArray)
    }

    const removeHeading = () => {
        setCount(count - 1)
        setHeadingArray(headingArray.slice(0, -1))
    }

    const setHeadingColor = (state) => {
        if (state){
            headingArray.map((item, index) => {
                let color = randomColor();
                item.color = color
            })
        }
        else{
            headingArray.map((item, index) => {
                item.color = "black"
            })
        }
    }
    
    const randomizeTitleColor = () => {
        if(!startRandom){
            setStartRandom(true)
            setButtonText("Clear Color")
        }
        else{
            setStartRandom(false)
            setButtonText("Randomize Color")
            setHeadingColor(false)
        }
    }

    useEffect(() => {
        let interval;

        if(count == 0){
            addHeading();
        }
        if (startRandom){
            interval = setInterval(() => {
                setHeadingColor(true)
                setTimer((seconds) => seconds + 1);
                }, 1000);
        }
        else if (!startRandom){
            clearInterval(interval)
            setTimer(0)
        }
        return () => clearInterval(interval)
    },[startRandom])

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
                            Running for: {timer}s
                        </Text>
                        <Text>
                            Title count: {count}
                        </Text>
                    </Stack>
                    <Stack direction="row" spacing={8}>
                        <Button onClick={randomizeTitleColor}>
                            {buttonText}
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