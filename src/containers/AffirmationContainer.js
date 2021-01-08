import React from 'react'
import {Box, Center, Heading} from '@chakra-ui/react'
import AffirmationData from '../components/AffirmationData'

export default function AffirmationContainer() {
    
    let randomElement = AffirmationData[Math.floor(Math.random() * AffirmationData.length)]

    return (
        <Box bg='gray.500' borderWidth="1px" borderBottomColor="gray.600" >
        <Center>
            <Heading color="white" as="h3" size="lg" >
                {randomElement}
            </Heading>
        </Center>
        
        </Box>
    )
}
