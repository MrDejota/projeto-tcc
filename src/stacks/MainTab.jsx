import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Meditacao from '../screens/Meditação';
import Frases from '../screens/Frases';
import Perfil from '../screens/Perfil';

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function MainTab(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                position: "absolute",
                backgroundColor: '#FFF',
                borderTopWidth: 0,
            }
        }}
    >

            <Tab.Screen 
            name='Home'
            component={Home} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="home" size={size} color={color='#8a2be2'} />
                    }

                    return <Ionicons name="home-outline" size={size} color={color='#8a2be2'} />
                }
            }}
            />

            <Tab.Screen 
            name="Caixinha" 
            component={Frases} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="cube" size={size} color={color='#8a2be2'} />
                    }

                    return <Ionicons name="cube-outline" size={size} color={color='#8a2be2'} />
                }
            }}
            />

            <Tab.Screen 
            name="Meditação" 
            component={Meditacao} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="cloud" size={size} color={color='#8a2be2'} />
                    }

                    return <Ionicons name="cloud-outline" size={size} color={color='#8a2be2'} />
                }
            }}
            />

            <Tab.Screen 
            name="Perfil" 
            component={Perfil} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="person" size={size} color={color='#8a2be2'} />
                    }

                    return <Ionicons name="person-outline" size={size} color={color='#8a2be2'} />
                }
            }}
            />

        </Tab.Navigator>
    )
}