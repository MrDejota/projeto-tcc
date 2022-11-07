import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  Container, 
  Logo, 
  BoasVindas,
  Menu1,
} from './styles';

import CalmClass from '../../../assets/icons/calmclass.svg';
import Basicos from '../../../assets/icons/basicos.svg';
import Relaxar from '../../../assets/icons/relaxar.svg';

export default function App() {
  return (
    <Container>

      <Logo> 

        <CalmClass />

        <BoasVindas>
          Olá, Lucas!
        </BoasVindas>

      </Logo>

      <Menu1> 
        <Basicos />
        <Relaxar />
      </Menu1>
        
      
      
    </Container>
  );
}
