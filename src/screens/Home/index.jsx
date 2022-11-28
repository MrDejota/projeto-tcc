import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { 
  Container, 
  Logo, 
  BoasVindas,
  Menu1,
  Exercicios,
  Menu2,
  Menu3,
  Branco,
} from './styles';

import CalmClass from '../../../assets/icons/calmclass1.svg';
import Basicos from '../../../assets/icons/basicos.svg';
import Relaxar from '../../../assets/icons/relaxar.svg';
import Autocontrole from '../../../assets/icons/autocontrole.svg';
import Ansiedade from '../../../assets/icons/ansiedade.svg';
import Depressao from '../../../assets/icons/depressao.svg';
import Raiva from '../../../assets/icons/raiva.svg';


import { useNavigation } from '@react-navigation/native';

export default function App() {

const navigation = useNavigation();

  return (
    <Container>

    <ScrollView>

      <Logo> 

        <CalmClass />

        <BoasVindas>
          Boas-vindas ao CalmClass!
        </BoasVindas>

      </Logo>

      <Menu1> 

        <TouchableOpacity onPress={()=> navigation.navigate('Basicos')}> 
          <Basicos />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Relaxar')}>
          <Relaxar />
        </TouchableOpacity>

      </Menu1>
        
      <Exercicios>
        Exercícios
      </Exercicios>

      <Menu2> 

        <TouchableOpacity onPress={()=> navigation.navigate('Autocontrole')}> 
          <Autocontrole />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Raiva')}>
          <Raiva />
        </TouchableOpacity>

        </Menu2>

        <Menu3> 

        <TouchableOpacity onPress={()=> navigation.navigate('Ansiedade')}>
          <Ansiedade />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Depressão')}>
          <Depressao />
        </TouchableOpacity>

        </Menu3>

    </ScrollView>

    <Branco />
      
    </Container>
  );
}
