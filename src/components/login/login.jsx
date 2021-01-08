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


export class Login extends React.Component {

    state = {
        username: null,
        password: null
    }

    onSubmit = () => {
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        let reqObj = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }

        fetch('http://localhost:3000/api/v1/login', reqObj)
        .then(res => res.json()).then(userData => {
            this.props.logIn(userData)
            }
        )
    }

    


    


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
                            <Input placeholder="username" size="lg" color="white" onChange = {(event) => this.setState({ username: event.target.value }) } />
                        </FormControl>
                        <FormControl mt="20px" >
                            <Input placeholder="password" size="lg" onChange = {(event) => this.setState({ password: event.target.value }) }/>
                        </FormControl> 
                        <Button mt="20px" colorScheme="yellow" onClick = {this.onSubmit} >
                            Login
                        </Button>
                    </Flex>
                </Center>
            </Box>
        )
    }
}

export default Login