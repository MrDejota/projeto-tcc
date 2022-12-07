import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { Container, Container1, Imagem, Seta } from "./styles";

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
            
            <Imagem>
                <Homem />
            </Imagem>

            <Container1> 
                
            <ScrollView> 
                <Text style={{textAlign:'center', fontSize: 25, fontWeight: 'bold', marginTop: 10}} > Preocupação </Text>

                <Text style={{textAlign:'center', fontSize: 16, fontStyle: 'italic', margin: 10}} > “Ser ansioso é imaginar uma tempestade antes da primeira gota d’água. Tente evitar se preocupar com o que está longe de acontecer.” </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginTop: 15, margin: 10}} >     Podemos dizer que essa é a tradução popular da palavra ansiedade. Por isso, para que se preocupar com aquilo que 
                ainda não aconteceu ou que talvez nem aconteça? Não é fácil, sabemos disso, mas evite demasiadamente pensar no futuro. Deixe as coisas acontecerem primeiro.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     Pare de querer controlar cada aspecto de sua vida. Você pode fazer dezenas de planos, mas não pode prever o 
                resultado certeiro de cada um. A vida é feita de inconstância. Aceite as situações inusitadas e trate-as como potenciais lições para enriquecer quem você é. 
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, margin: 10}} >     Não deixe que o medo do que está por vir domine a sua vida. A incerteza é uma parte fundamental da nossa existência
                 e, também, o que a torna mais dinâmica. Se não encontrássemos desafios, seria fácil demais. Abrace o desconhecido para começar a trabalhar junto com ele, e não contra.
                </Text>

                </ScrollView>
            </Container1>

            
        </Container>
    )
}
