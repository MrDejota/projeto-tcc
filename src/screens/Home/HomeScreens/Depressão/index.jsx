import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";

import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import Mulher from '../../../../../assets/icons/depressao1.svg'
import Leitura from '../../../../../assets/icons/leitura.svg'

import { useNavigation } from '@react-navigation/native';


export default function Depressao(){

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
                <Text style={{fontSize:25}}> Superando a depressão </Text>
                <Mulher />
            </Box1>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Descrição </Text>
            <Linha1 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}> 
            A depressão não está necessariamente alinhada aos acontecimentos. Tudo pode estar
             correndo muito bem na vida de uma pessoa deprimida, mas ela vai continuar apresentando
              os sinais da doença até que busque tratamento. Já a tristeza tem motivo: em geral, a 
              pessoa tem consciência dela e sabe o que gerou o sentimento.
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Autor do Texto </Text>
            <Linha2 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}>
                Lucas Vinícius Gabrielli, um dos desenvolvedores do CalmClass, conhece pessoas
                que possuem depressão e sentiu a necessidade de buscar compreender melhor como
                ela age e as melhores formas de lidar.
            </Text>

            <Box2>
                <TouchableOpacity onPress={()=> navigation.navigate('Leitura2')}>
                    <Leitura />
                </TouchableOpacity>
            </Box2>

            </ScrollView>

        </Container>
    )
}