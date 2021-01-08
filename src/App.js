import React, { Component } from 'react';
import Login from './components/login/login'
import MainPage from "./containers/MainPage"
import { ColorModeSwitcher } from './ColorModeSwitcher';


import {
  ChakraProvider,
  ColorModeProvider,
  CSSReset,
  extendTheme, 
} from '@chakra-ui/react';


const theme = extendTheme({
  colors: {
    brand: {
      900: "#090F58",
    800: "#32289B",
    700: "#7D67EC",
    600: "#EC336B",
    500: "#FFFFFF"
    },
  },
})


export default class App extends Component {

  state = {
    user: null,
    loggedIn: false
  }

  logIn = (userData) => {
    this.setState({
      user: userData.user.username,
      loggedIn: true
    })
  }

  render() {
      return (
        <ChakraProvider theme={theme}>
         <ColorModeProvider options={{
            useSystsemColorMode: true
          }}>
            <CSSReset/>
            <MainPage />
            
            {/* <Login logIn={this.logIn} /> */}
          </ColorModeProvider>
        </ChakraProvider>
      )
  }
}


