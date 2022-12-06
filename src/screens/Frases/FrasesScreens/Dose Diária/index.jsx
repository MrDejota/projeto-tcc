import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { Container, Container1, Seta } from "./styles";

import Homem from '../../../../../assets/icons/homem.svg'
import Flecha from '../../../../../assets/icons/flecha1.svg'

import { useNavigation } from '@react-navigation/native';


export default function DoseDiaria(){

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
                <Text style={{textAlign:'center', fontSize: 25, fontWeight: 'bold', marginTop: 10}} > Insegurança </Text>

                <Text style={{textAlign:'center', fontSize: 16, fontStyle: 'italic', marginTop: 5}} > “Ansiedade é a insegurança pelo que está por vir.” </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginTop: 15, marginLeft: 10, marginRight: 10}} >     Você já percebeu que a ansiedade é o reflexo daquilo que 
                ainda nem aconteceu? Por isso, deixe essa insegurança de lado e viva o presente, caso contrário, a ansiedade por causa do amanhã 
                não sairá da sua vida. E isso pode ser extremamente desgastante para qualquer pessoa.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginLeft: 10, marginRight: 10}} >     Por isso, sempre que esses pensamentos catastróficos surgirem, 
                lembre-se dos problemas que você enfrentou no passado. Você também achava que tudo daria errado e que você não seria capaz de sair daquelas situações,
                 não é mesmo? No entanto, com a sua inteligência e com a sua resiliência, você foi capaz de vencer esses obstáculos. Revisite essas vitórias para 
                 lembrar-se do quão forte você é.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginLeft: 10, marginRight: 10}} >     Ninguém é perfeito, e todos nós temos pontos que ainda precisam
                 de mais desenvolvimento em nossas vidas. Não há problema em reconhecer isso. Acolha aquilo que você não gosta em si e esforce-se para melhorar. Nesse 
                 meio-tempo, porém, jamais deixe de amar a si mesmo. Quanto mais você reforçar pensamentos do tipo “eu sou um lixo”, “eu não sou bom em nada”, “eu nunca vou
                  conquistar os meus objetivos”, mais a sua insegurança dominará a sua mente. Evite!
                </Text>

                </ScrollView>
            </Container1>

            
        </Container>
    )
}
