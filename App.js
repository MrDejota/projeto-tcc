import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider, Box } from "native-base";
import Routes from "./src/routes";


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  ); 
  }
  