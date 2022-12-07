import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";

import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import Mulher from '../../../../../assets/icons/cebolas.svg'
import Leitura from '../../../../../assets/icons/leitura.svg'

import { useNavigation } from '@react-navigation/native';


export default function Basicos(){

    const navigation = useNavigation();

    return(
        <Container>

            <ScrollView> 

            <Box>
                <TouchableOpacity onPress={()=> navigation.navigate('MainTab')}> 
                    <Flecha />
                </TouchableOpacity>   
            </Box> 

            <Box1>
                <Text style={{fontSize:25, marginBottom: 30}}> Apresentação dos Básicos </Text>
                <Mulher />
            </Box1>

            <Text style={{fontSize: 18, marginTop: 10}}> O que é o CalmClass? </Text>
            <Linha1 />

            <Text style={{fontSize: 14, margin: 10, textAlign: "justify"}}>O CalmClass é um aplicativo pensado para pessoas que frequentam o ambiente escolar utilizarem para aprenderem
            a controlar específicas emoções durante determinadas situações, utilizando a técnica Mindfulness, que consiste na
            prática de se concentrar completamente no presente
            </Text>

            <Text style={{fontSize: 18, marginTop: 10}}> Como funciona </Text>
            <Linha2 />

            <Text style={{fontSize: 14, margin: 10, textAlign: "justify"}}>
                O aplicativo contém diversos textos motivacionais que possuem explicações sobre como controlar certa emoção em uma 
                determinada situação e práticas de como aliviar esses sentimentos. Além disso, na tela "Meditação" é possível encontrar
                sons e músicas relaxantes que podem agregar durante a leitura.
            </Text>

            </ScrollView>

        </Container>
    )
}