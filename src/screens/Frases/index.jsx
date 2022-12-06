import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Container, Titulo, Subtitulo, Menu, Subtitulo1, Menu1, EstiloDose, Menu2, Branco } from './styles';


import Dose from '../../../assets/icons/dose.svg';
import Favs from '../../../assets/icons/favs.svg';
import All from '../../../assets/icons/todos.svg';
import Sad from '../../../assets/icons/sad.svg';
import Lightning from '../../../assets/icons/lightning.svg';
import Descanso from '../../../assets/icons/descanso.svg';
import Pausa from '../../../assets/icons/pausa.svg';
import Sofrimento from '../../../assets/icons/sofrimento.svg';
import Preocupacao from '../../../assets/icons/preocupacao.svg';
import Perfeicao from '../../../assets/icons/perfeicao.svg';
import Inseguranca from '../../../assets/icons/inseguranca.svg';


import { useNavigation } from '@react-navigation/native';


export default function Frases() {

  const navigation = useNavigation();

  return (
    
    <Container>
      
      <ScrollView>

        <Titulo> Caixinha </Titulo>

        <Subtitulo> Nós podemos aprender a reconhecer quando nossas mentes estão fazendo suas peripécias diárias </Subtitulo>

        <Menu> 

          <TouchableOpacity> 
            <All /> 
          </TouchableOpacity> 

          <TouchableOpacity>
            <Favs />
          </TouchableOpacity>

          <TouchableOpacity>
            <Sad />
          </TouchableOpacity>

          <TouchableOpacity>
            <Lightning />
          </TouchableOpacity>


        </Menu>

        <Menu1>

          <Subtitulo1> Todos </Subtitulo1>
          <Subtitulo1> Favoritos </Subtitulo1>
          <Subtitulo1> Depressão </Subtitulo1>
          <Subtitulo1> Ansiedade </Subtitulo1>

        </Menu1>

        <EstiloDose>
          <TouchableOpacity onPress={()=> navigation.navigate('Dose Diária')}>
            <Dose />
          </TouchableOpacity>
        </EstiloDose>

        <Menu2>

          <TouchableOpacity onPress={()=> navigation.navigate('Descanso')}>
          <Descanso />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Perfeição')}>
          <Perfeicao />
          </TouchableOpacity>

        </Menu2>

        <Menu2>

          <TouchableOpacity onPress={()=> navigation.navigate('Insegurança')}>
          <Inseguranca />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Pausa')}>
          <Pausa />
          </TouchableOpacity>

        </Menu2>

         <Menu2>

          <TouchableOpacity onPress={()=> navigation.navigate('Sofrimento')}>
          <Sofrimento />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Preocupação')}>
          <Preocupacao />
          </TouchableOpacity>

        </Menu2>
      </ScrollView>        

      <Branco />

    </Container>
  );
}
