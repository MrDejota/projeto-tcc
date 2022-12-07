import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import Flecha from '../../../../../assets/icons/flecha.svg'
import Save from '../../../../../assets/icons/save.svg'
import { useNavigation } from '@react-navigation/native';
import { Container, Box, Box1, Linha1, Linha2, Box2 } from "./styles";


export default function Leitura3(){

    const navigation = useNavigation();

    return(
        <Container>

            <ScrollView> 

            <Box>
                <TouchableOpacity onPress={()=> navigation.navigate('Ansiedade')}> 
                    <Flecha />
                </TouchableOpacity>      
            </Box> 


            <Text style={{fontSize: 18, marginTop: 10, textAlign: "center", margin: 15}}> 
            ANSIEDADE E O MINDFULNESS
            </Text>

            <Text style={{fontSize: 25, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> A Ansiedade </Text>
                <Linha1 />
            <Text style={{fontSize: 17, marginTop: 10, textAlign: "justify", margin: 15}}>
            Ansiedade é  um sentimento natural do ser humano.  Mas muitas vezes pode se tornar um transtorno que pode atrapalhar a vida de maneira significativa, interferindo no nosso desempenho profissional, nas relações e na nossa saúde. 
            </Text>

            <Text style={{fontSize: 17, marginTop: 10, textAlign: "justify", margin: 15}}>
            Mindfulness e a meditação para a ansiedade tem crescido dentro da ciência como uma ferramenta que possibilita bem estar e  equilíbrio das pressões do dia a dia. Este curso nos ajuda a reconhecer quando a ansiedade é um problema e apresenta estratégias de como mindfulness pode ser útil nesse processo de busca de uma vida mais feliz e com sentido.
            </Text>

            <Text style={{fontSize: 20, marginTop: 10, marginLeft: 15, fontWeight: "bold"}}> COMO MINDFULNESS NOS AJUDA A LIDAR COM PENSAMENTOS</Text>
            <Linha2 />
            <Text style={{fontSize: 17, marginTop: 10, textAlign: "justify", margin: 15}}>
            A atenção plena ajuda você a aprender a ficar com sentimentos difíceis sem analisá-los, suprimi-los ou incentivá-los. Quando você se permite sentir e reconhecer suas preocupações, irritações, lembranças dolorosas e outros pensamentos e emoções difíceis, isso geralmente os ajuda a se dissipar.
            </Text>

            <Text style={{fontSize: 17, marginTop: 10, textAlign: "justify", margin: 15}}>
A atenção plena permite que você explore com segurança as causas subjacentes ao seu estresse e preocupação. Ao seguir o que está acontecendo, em vez de gastar energia lutando ou se afastar, você cria a oportunidade de ter uma ideia do que está motivando suas preocupações.
            </Text>

            <Text style={{fontSize: 17, marginTop: 10, textAlign: "justify", margin: 15}}>
A atenção plena ajuda você a criar espaço em torno de suas preocupações, para que elas não o consumam. Quando você começa a entender as causas subjacentes de sua apreensão, a liberdade e uma sensação de espaço surgem naturalmente.
</Text>


            </ScrollView>

        </Container>
    )
}