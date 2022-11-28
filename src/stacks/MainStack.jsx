import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Inicio from '../screens/Inicio';
import MainTab from './MainTab';
import Basicos from '../screens/Home/HomeScreens/Basicos';
import Relaxar from '../screens/Home/HomeScreens/Relaxar';
import Autocontrole from '../screens/Home/HomeScreens/Autocontrole';
import Raiva from '../screens/Home/HomeScreens/Raiva';
import Depressao from '../screens/Home/HomeScreens/Depressão';
import Ansiedade from '../screens/Home/HomeScreens/Ansiedade';
import DoseDiaria from '../screens/Frases/FrasesScreens/Dose Diária';
import Descanso from '../screens/Frases/FrasesScreens/Descanso';
import Futuro from '../screens/Frases/FrasesScreens/Futuro';
import Inseguranca from '../screens/Frases/FrasesScreens/Insegurança';
import Pausa from '../screens/Frases/FrasesScreens/Pausa';
import Perfeicao from '../screens/Frases/FrasesScreens/Perfeição';
import Preocupacao from '../screens/Frases/FrasesScreens/Preocupação';
import Sofrimento from '../screens/Frases/FrasesScreens/Sofrimento';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Basicos" component={Basicos} />
        <Stack.Screen name="Relaxar" component={Relaxar} />
        <Stack.Screen name="Autocontrole" component={Autocontrole} />
        <Stack.Screen name="Raiva" component={Raiva} />
        <Stack.Screen name="Depressão" component={Depressao} />
        <Stack.Screen name="Ansiedade" component={Ansiedade} />
        <Stack.Screen name="Dose Diária" component={DoseDiaria} />
        <Stack.Screen name="Descanso" component={Descanso} />
        <Stack.Screen name="Futuro" component={Futuro} />
        <Stack.Screen name="Insegurança" component={Inseguranca} />
        <Stack.Screen name="Pausa" component={Pausa} />
        <Stack.Screen name="Perfeição" component={Perfeicao} />
        <Stack.Screen name="Preocupação" component={Preocupacao} />
        <Stack.Screen name="Sofrimento" component={Sofrimento} />
    </Stack.Navigator>
)