import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { Container, Container1, Seta, Imagem } from "./styles";

import Homem from '../../../../../assets/icons/pausa1.svg'
import Flecha from '../../../../../assets/icons/flecha1.svg'

import { useNavigation } from '@react-navigation/native';


export default function Pausa(){

    const navigation = useNavigation();

    return(
        <Container>
            
             
            <Seta> 
                <TouchableOpacity onPress={()=> navigation.navigate('Caixinha')}> 
                    <Flecha />
                </TouchableOpacity>
            </Seta>

            <Imagem>
                <Homem />
            </Imagem>

            <Container1> 
                
            <ScrollView> 
                <Text style={{textAlign:'center', fontSize: 25, fontWeight: 'bold', marginTop: 10}} > Pausa </Text>

                <Text style={{textAlign:'center', fontSize: 16, fontStyle: 'italic', marginTop: 5}} > “Valorize momentos de pausa e relaxamento. Sua mente precisa de descansar para ter energia.” </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     Sabe aquela hora da pausa no trabalho ou o momento de relaxamento nos finais de semana? Você deve aproveitá-los ao máximo, já que a nossa mente também precisa descansar, até mesmo para ficar livre da ansiedade do dia a dia.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     Mude sua mentalidade sobre pausas, o tempo de inatividade não é improdutivo; é essencial para o progresso. Quando você está acostumado a operar em um ritmo frenético, fazer pausas deliberadas pode parecer chocante. 
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     Mas estar ocupado não é o mesmo que ser produtivo. Mude sua perspectiva para abraçar o dom de dar a si mesmo o tempo e espaço para pensar, sentir e experimentar como algo complementar.
                </Text>

                </ScrollView>
            </Container1>

            
        </Container>
    )
}
