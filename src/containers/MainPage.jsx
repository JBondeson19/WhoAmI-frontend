import React from 'react'

import Navbar from "./Navbar"
import {Box,Grid} from "@chakra-ui/react"
import JournalContainer from './JournalContainer'
import AffirmationContainer from './AffirmationContainer'

export default function MainPage() {
    return (
        <Grid>
            <Navbar/>
            <AffirmationContainer/>
            <Box>
                <JournalContainer/>
            </Box>
        </Grid>
    )
}
