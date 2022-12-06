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
                <Save />         
            </Box> 

            <Box1>
                <Text style={{fontSize:25}}> Deprimindo a depressão </Text>
                <Mulher />
            </Box1>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Descrição </Text>
            <Linha1 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}> 
            Mais do que sentir-se mal ou com uma sensação de vazio, a depressão é uma doença que pede atenção e tratamento. No entanto, junto com toda atuação multidisciplinar, o mindfulness no tratamento da depressão pode funcionar como ferramenta para melhorar os sintomas da doença.

Antes de mais nada, é importante entender que depressão é algo sério. “Ela tem um diagnóstico amplo, caracterizado por um humor deprimido e perda de prazer nas  atividades do dia a dia. Esse sentimento causa grande comprometimento da saúde, bem-estar e qualidade de vida do paciente”, comenta a naturóloga pós-graduada em neurociência Joana Carreirão, terapeuta do Zenklub (plataforma de saúde emocional e desenvolvimento pessoal).
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Autor do Texto </Text>
            <Linha2 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}>
                Lucas Vinícius Gabrielli, um dos desenvolvedores do CalmClass, possui problemas de ansiedade
                e foi em busca de profissionais para criar seu próprio embasamento sobre 
                qual a melhor forma de enfrentar a ansiedade.
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