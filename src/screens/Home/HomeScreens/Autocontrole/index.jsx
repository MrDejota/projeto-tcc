import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";
import { Ionicons } from '@expo/vector-icons'
import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import Mulher from '../../../../../assets/icons/auto1.svg'
import Leitura from '../../../../../assets/icons/leitura.svg'

import { useNavigation } from '@react-navigation/native';


export default function Autocontrole( ){

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
                <Text style={{fontSize:25}}> Sabendo como se controlar </Text>
                <Mulher />
            </Box1>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Descrição </Text>
            <Linha1 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}> 
            O autocontrole ajuda a ter inteligência emocional para guiar as emoções negativas, 
            como a ansiedade, o estresse e o nervosismo. Na maioria das vezes, não é possível 
            impedir que emoções ruins nos aflijam, uma vez que são espontâneas e automáticas em 
            certas situações. No entanto, a pessoa que tem autocontrole consegue lidar melhor 
            com esses sentimentos, fazendo com que a resposta a eles seja a melhor possível.
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Autor do Texto </Text>
            <Linha2 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}>
                Lucas Vinícius Gabrielli, um dos desenvolvedores do CalmClass, desde sempre
                observou a importância do autocontrole perante situações difíceis e foi em 
                busca de especialistas para entender qual a sua importância e a melhor forma de reagir.
            </Text>

            <Box2>
                <TouchableOpacity onPress={ () => navigation.navigate('Leitura') } >
                    <Leitura  />
                </TouchableOpacity>
            </Box2>

            </ScrollView>

        </Container>
    )
}