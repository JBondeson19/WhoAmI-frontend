import React from 'react'
import {
    Button,
    Box,
    Flex,
    FormControl, 
    Center,
    Divider,
    Input,
    Heading,
    } 
from "@chakra-ui/react"


export class Register extends React.Component {
    render() {
        return (
            <Box>
                <Center bg="#A0AEC0">
                    <Heading color="white">
                        Who Am I? Daily Mood Tracker
                    </Heading>
                </Center>
                <Divider/>
                
                <Center>
                    <Flex justify="center" height="100vh" width="50vh" direction="column" >
                    <FormControl mt="20px" align="center">
                            <Input placeholder="username" size="lg" color="white" />
                        </FormControl>
                        <FormControl mt="20px" align="center">
                            <Input placeholder="email address" size="lg" color="white" />
                        </FormControl>
                        <FormControl mt="20px" >
                            <Input placeholder="password" size="lg" />
                        </FormControl>
                        <Button mt="20px" colorScheme="yellow">
                            Register
                        </Button>
                    </Flex>
                </Center>
            </Box>
        )
    }
}

export default Register