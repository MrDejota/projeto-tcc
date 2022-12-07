import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";

import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import Mulher from '../../../../../assets/icons/raivamulher.svg'
import Leitura from '../../../../../assets/icons/leitura.svg'

import { useNavigation } from '@react-navigation/native';


export default function Raiva(){
    
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
                <Text style={{fontSize:25}}> Acabando com a raiva </Text>
                <Mulher />
            </Box1>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Descrição </Text>
            <Linha1 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}> 
                As pessoas costumam expressar a raiva por meio de gritos, xingamentos, brigas 
            físicas e, agora com a internet, em comentários ofensivos. Vemos esses comportamentos 
            em todo lugar, não é? Mas é possível expressá-la de forma boa, saudável para o corpo e 
            a mente.
            </Text>

            <Text style={{fontSize: 18, marginTop: 10, marginLeft: 15}}> Autor do Texto </Text>
            <Linha2 />

            <Text style={{fontSize: 14, marginTop: 10, textAlign: "justify", margin: 15}}>
                Lucas Vinícius Gabrielli, um dos desenvolvedores do CalmClass, se interessou
                sobre como a raiva descontrolada afeta a saúde mental das pessoas e foi em busca
                de especialista para compreender a melhor forma de expressar raiva da melhor maneira.
            </Text>

            <Box2>
                <TouchableOpacity onPress={()=> navigation.navigate('Leitura1')}>
                    <Leitura />
                </TouchableOpacity>
            </Box2>

            </ScrollView>

        </Container>
    )
}