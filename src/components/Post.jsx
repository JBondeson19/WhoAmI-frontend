import React, { Component } from 'react'
import {Textarea, Button, Box} from "@chakra-ui/react"

class Post extends Component {

    state={
        text: null
    }

    render() {
        return (
            <Box>
                <Textarea onChange={(event) =>
                 this.setState({ text: event.target.value})
                }></Textarea>
                <Button onClick={() => this.props.addPost({content: this.state.text}) }>Submit</Button>
            </Box>
        )
    }
}

export default Post
