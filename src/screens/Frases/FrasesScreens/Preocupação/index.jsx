import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { Container, Container1, Seta } from "./styles";

import Homem from '../../../../../assets/icons/raiva2.svg'
import Flecha from '../../../../../assets/icons/flecha1.svg'

import { useNavigation } from '@react-navigation/native';


export default function Preocupaçao(){

    const navigation = useNavigation();

    return(
        <Container>
            
             
            <Seta> 
                <TouchableOpacity onPress={()=> navigation.navigate('Caixinha')}>
                    <Flecha />
                </TouchableOpacity>
            </Seta>
            
            <Homem />

            <Container1> 
                
            <ScrollView> 
                <Text style={{textAlign:'center', fontSize: 25, fontWeight: 'bold', marginTop: 10}} > Raiva </Text>

                <Text style={{textAlign:'center', fontSize: 16, fontStyle: 'italic', marginTop: 5}} > “Não tente ser sempre forte e perfeito. Aceite que nem todos os dias são bons.” </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginTop: 15, marginLeft: 10, marginRight: 10}} >     Como diz o velho ditado: “Dias bons, dias ruins” Somos seres
                 humanos com imperfeições e falhas, por isso, pare de ficar exigindo demais de você. Afinal de contas, ninguém é uma máquina programável que nunca falha, certo?
                  Aceite que nem tudo será do seu jeito.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginLeft: 10, marginRight: 10}} >     Dar importância àquilo que achamos desimportante, talvez seja o primeiro passo para 
                conhecer nossa intimidade e ela, na maioria das vezes, esconde-se em nosso avesso, onde nem tudo é perfeito.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginLeft: 10, marginRight: 10}} >     Ou seja, a descoberta é que dentro dessa possível imperfeição que somos há espaços vazios, 
                abertos, feito janelas em dia de sol à espera do encontro mais importante de nossas vidas: aquele com nós mesmos.
                </Text>

                </ScrollView>
            </Container1>

            
        </Container>
    )
}
