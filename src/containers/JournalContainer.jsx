import React from 'react'
import PostContainer from './PostContainer'
import PreviousPostContainer from "./PreviousPostContainer"

import {
    Grid,
    Box,
    Heading,
    Flex,
} from "@chakra-ui/react"
import { FiRepeat } from 'react-icons/fi'

let oldPosts = [
   {post: {id: 1, content: "Today I watched the world burn"},tags:["angry", "happy", "complex", "curious"]},
   {post: {id: 2, content: "What's going on, where are my shoes?"},tags:["cool"]},
   {post: {id: 3, content: "We are moving on"}, tags:["relieved"]},
]

class JournalContainer extends React.Component {

    state = {
        oldPosts: oldPosts,
        tags: []
    }

    inputKeyDown = (e) => {
        const val = e.target.value;
            if (e.key === 'Enter' && val) {
                this.setState({ tags: [...this.state.tags, val]});
                console.log(e.clear)
            }    
    }
    removeTag = (i) => {
        const newTags = [ ...this.state.tags ];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
      }

    addPost = (post) => {
        let newPost = { post: post, tags: this.state.tags }
        this.setState({
            oldPosts: [...this.state.oldPosts, newPost]
        })
    }

    render() {
        return (
            <Grid templateColumns="repeat(auto-fit, minmax(350px, 1fr))" columnGap={6} >
    
                <PostContainer 
                    addPost={this.addPost}
                    enterFeelings={this.inputKeyDown} 
                    submitTags={this.state.tags}
                    removeTag={this.removeTag}
                />
                
                <Box>
                    <PreviousPostContainer oldPosts={this.state.oldPosts} tags={this.state.tags} />
                </Box>
                
           

        </Grid>
        )
    }
}

export default JournalContainer