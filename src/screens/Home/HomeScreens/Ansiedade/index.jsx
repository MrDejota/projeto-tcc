import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";

import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import Mulher from '../../../../../assets/icons/mulher1.svg'
import Leitura from '../../../../../assets/icons/leitura.svg'

import { useNavigation } from '@react-navigation/native';


export default function Ansiedade(){

    const navigation = useNavigation();

    return(
        <Container>

            <ScrollView> 

            <Box>
                <TouchableOpacity onPress={()=> navigation.navigate('MainTab')}> 
                    <Flecha />
                </TouchableOpacity>

                <Text style={{fontSize:20}}> Detalhes da leitura </Text>

                <TouchableOpacity>
                    <Save />
                </TouchableOpacity> 

            </Box> 

            <Box1>
                <Text style={{fontSize:25}}> Enfrentando a ansiedade </Text>
                <Mulher />
            </Box1>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Descrição </Text>
            <Linha1 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}> 
            Essa leitura te ajudará a compreender melhor como a sua mente se 
            comporta durante uma situação de ansiedade no ambiente escolar, te ensinando e propondo
            atitudes e exercícios para controlá-la.
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Autor do Texto </Text>
            <Linha2 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}>
                Lucas Vinícius Gabrielli, um dos desenvolvedores do CalmClass, possui problemas de ansiedade
                e foi em busca de profissionais para criar seu próprio embasamento sobre 
                qual a melhor forma de enfrentar a ansiedade.
            </Text>

            <Box2>
                <TouchableOpacity onPress={()=> navigation.navigate('Leitura3')}>
                    <Leitura />
                </TouchableOpacity>
            </Box2>

            </ScrollView>

        </Container>
    )
}