import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { Container, Container1, Seta } from "./styles";
import Homem from '../../../../../assets/icons/descanso1.svg'
import Flecha from '../../../../../assets/icons/flecha1.svg'
import { useNavigation } from '@react-navigation/native';


export default function Descanso(){

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
                <Text style={{textAlign:'center', fontSize: 25,  marginTop: 10}} > Descanso </Text>

                <Text style={{textAlign:'center', fontSize: 16,  fontStyle: 'italic', marginTop: 5}} > “O descanso é essencial para o bom funcionamento da nossa mente e corpo.” </Text>

                <Text style={{textAlign:'justify', fontSize: 14,  margin: 10}} >     Se você é um fanático e pensa 24 horas nos seus afazeres, a ansiedade deve estar fazendo parte da sua rotina. Para ficar livre dela, o descanso é fundamental para o corpo e para a mente. Quem não descansa não tem nenhuma disposição para encarar os desafios do cotidiano, que parecem ser intermináveis.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14,  margin: 10}} >     O segredo para viver bem é encontrar o equilíbrio em tudo. É saber quando batalhar, mas também saber o momento de parar e relaxar. Se o cansaço chegar, não desanime, ao invés disso, descanse.
                </Text>

                <Text style={{textAlign:'justify', fontSize: 14 ,  margin: 10}} >     Lembre-se: as pessoas mais preparadas são os que tiveram uma boa noite de sono depois de uma árdua jornada. Bom descanso!
                </Text>

                </ScrollView>
            </Container1>

            
        </Container>
    )
}
