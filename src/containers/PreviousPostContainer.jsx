import { Heading, Spacer } from '@chakra-ui/react'
import React, { Component } from 'react'
import './App.css'

import {
    Stack,
    Box,
    Center,
    Flex, 
    Text
} from "@chakra-ui/react"



class PreviousPostContainer extends Component {
    render() {
        return (
            <Stack  direction={["column"]} spacing="10px">
            <Center>
                <Heading>Previous Posts</Heading>
            </Center>
           
            <Box  w='700px' borderWidth="1px" borderColor="black" >
               {this.props.oldPosts.map(post =>
                   <Flex>
                        <Box h="30px" m="5px" >
                            {post.post.content}
                        </Box>
                        
                        <Spacer/>
                        <Box className="tags" h="30px">
                            
                            {post.tags.map(tag => (
                                <Text justifyContent className="tags">
                                    {tag}
                                </Text>
                            ))}
                            
                        </Box>

                        
                   </Flex>
               )}
            </Box>
        </Stack>
        )
    }
}

export default PreviousPostContainer