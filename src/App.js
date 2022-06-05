import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import  Nav  from './Navbar';
import SignUp from './SignUp';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <Router>
          <Routes>

          <Route path="/"  element={
          <ChakraProvider theme={theme}>
              <Nav></Nav>
              <Login/>

          </ChakraProvider>}>
          </Route>




      </Routes>
    </Router>

  );
}

export default App;
