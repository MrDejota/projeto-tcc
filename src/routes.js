import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './telas/Home';
import Meditacao from './telas/Meditação';
import Frases from './telas/Frases';
import Perfil from './telas/Perfil';

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarStyle:{
                position: "absolute",
                backgroundColor: '#e4e4e4',
                borderTopWidth: 0,
            }
        }}
    >

            <Tab.Screen 
            name="Home" 
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
            name="Frases" 
            component={Frases} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="book" size={size} color={color='#8a2be2'} />
                    }

                    return <Ionicons name="book-outline" size={size} color={color='#8a2be2'} />
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