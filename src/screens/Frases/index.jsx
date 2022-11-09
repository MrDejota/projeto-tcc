import React from 'react';
import { Container, Logo, Frase } from './styles';


import FraseDoDia from '../../../assets/icons/frasedodia.svg';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Frases() {

  const navigation = useNavigation();

  return (
    
    <Container>
      
      <ScrollView>

      <Frase> 
        <FraseDoDia onPress={()=> navigation.navigate('Frase_Do_Dia')}/>
      </Frase>

      </ScrollView>        

    </Container>
  );
}
