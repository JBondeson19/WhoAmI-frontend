import React from 'react'
import TagList from '../components/TagList'
import Post from "../components/Post"
import {
    Stack,
    Box,
    Heading,
    Center,
    Spacer
} from "@chakra-ui/react"

export default function PostContainer(props) {
    return (
        <Stack  direction={["column"]} spacing="10px">
            <Center>
                <Heading>My Journal</Heading>
            </Center>
           
            <Box borderWidth="1px" borderColor="black">
                <Box >
                    <Box p="6" >
                        <Center>
                            <Heading as="h5" size="sm">Today I'm feeling:</Heading>
                        </Center>
                    </Box>
                    <TagList 
                        enterFeelings={props.enterFeelings} 
                        submitTags={props.submitTags}
                        removeTag={props.removeTag}
                        addTags={props.addPost}
                    />
                    <Spacer />
                </Box>
                    <Center>
                        <Heading as="h5" size="sm">Today I'm thinking about:</Heading>
                    </Center>
                    <Post addPost={props.addPost} />
                </Box>
        </Stack>
    )
}
