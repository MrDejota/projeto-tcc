import React from "react";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import { Container, Container1, Imagem, Seta } from "./styles";

import Homem from '../../../../../assets/icons/paz.svg'
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
            
            <Imagem>
                <Homem />
            </Imagem>

            <Container1> 
                
            <ScrollView> 
                <Text style={{textAlign:'center', fontSize: 25, fontWeight: 'bold', marginTop: 10}} > Dose Diária </Text>

                <Text style={{textAlign:'center', fontSize: 16, fontStyle: 'italic', margin: 10}} > “Busque a sua paz interior. Tente distanciar o que você pode fazer do que é inevitável.” </Text>

                <Text style={{textAlign:'justify', fontSize: 14, marginTop: 15, marginLeft: 10, marginRight: 10}} >     A ansiedade é a principal inimiga da paz interior de todos nós. Por isso,
                 você precisa saber distinguir o que é possível mudar do que é inevitável em sua vida. Esse discernimento não é fácil, mas é totalmente possível. E quando aquela sensação de paz
                  e ausência de preocupações inundar a sua mente, você não vai querer sentir outra coisa. 
                </Text>

                </ScrollView>
            </Container1>

            
        </Container>
    )
}
