import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { Container, Container1, Imagem, Seta } from "./styles";

import Homem from '../../../../../assets/icons/depre1.svg'
import Flecha from '../../../../../assets/icons/flecha1.svg'

import { useNavigation } from '@react-navigation/native';


export default function Sofrimento(){

    const navigation = useNavigation();

    return(
        <Container>
            
             
            <Seta> 
                <TouchableOpacity onPress={()=> navigation.navigate('Caixinha')}>
                    <Flecha />
                </TouchableOpacity>
            </Seta>

            <Imagem >
                <Homem />
            </Imagem>

            <Container1> 
                
            <ScrollView> 
                <Text style={{textAlign:'center', fontSize: 25, fontWeight: 'bold', marginTop: 10}} > Sofrimento </Text>

                <Text style={{textAlign:'center', fontSize: 16, fontStyle: 'italic', marginTop: 5}} > “A ansiedade é tentar lutar contra a calmaria do nosso coração. Não deixe que isto aconteça. Proteja-o de sofrimentos desnecessários.” </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     Durante as crises de ansiedade que muitas pessoas têm, o nosso coração é o órgão que absorve todos os sentimentos ruins. Por isso, para que prejudicá-lo com 
                sofrimentos completamente sem sentido e desnecessários? Não prejudique a sua saúde mental com preocupações excessivas.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     Mesmo que situações como rejeição, perdas e fracasso doam muito e possam deixar cicatrizes, se não forem bem cuidadas, sua mente e seu coração podem adoecer. 
                Dessa forma, assim como tudo na vida, temos que aprender a deixar a angústia ir embora e dar espaço para o novo entrar.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     
                </Text>

                </ScrollView>
            </Container1>

            
        </Container>
    )
}
