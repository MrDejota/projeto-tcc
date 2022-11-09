import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import MainTab from './MainTab';
import Basicos from '../screens/Home/HomeScreens/Basicos';
import Relaxar from '../screens/Home/HomeScreens/Relaxar';
import Frase_Do_Dia from '../screens/Frases/FrasesScreens/Frase_Do_Dia';
import Inicio from '../screens/Inicio';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Basicos" component={Basicos} />
        <Stack.Screen name="Relaxar" component={Relaxar} />
        <Stack.Screen name="Frase_Do_Dia" component={Frase_Do_Dia} />
        <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
)