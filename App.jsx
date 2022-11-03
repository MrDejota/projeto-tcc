import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import Routes from "./src/routes/routes";
import MainStack from "./src/stacks/MainStack";


export default function App() {
  return (
    <NavigationContainer>
      {/*<Routes />*/}
      <MainStack />
    </NavigationContainer>
  ); 
  }
  