import React from 'react'
import {
    Box,
    List,
    ListItem,
    Input,
    IconButton} from "@chakra-ui/react"
import {FiDelete} from "react-icons/fi"

class TagList extends React.Component {



   

   

    render() {
        return (
            <Box >
                <List>
                    <ListItem>
                        <Input placeholder="feelings" onKeyDown={this.props.enterFeelings}   />
                    </ListItem>
                    {this.props.submitTags.map(tag=> 
                    <ListItem>
                        {tag}<IconButton aria-label="Search database" icon={<FiDelete />}  onClick={() => { this.props.removeTag(); }} />
                    </ListItem>
                    )}
                    
                {/* add button to remove tags */}
                </List>
            </Box>
        )
    }
}


export default TagList

// {this.state.tags.map((tag,i) =>
//     <ListItem key={tag}>
//     {/*fix key so it matches the id of an emotion*/}
//     {tag}
//     <IconButton aria-label="Search database" icon={<FiDelete />} onClick={() => { this.removeTag(i); }} />
       
//     </ListItem>
// )}