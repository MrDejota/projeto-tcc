import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import CalmClass from '../../../assets/icons/calmclass.svg';
import Mulher from '../../../assets/icons/mulher.svg';
import Comecar from '../../../assets/icons/comecar.svg';

import { Container, Texto, Logo, Botao, Imagem, Texto1, Roxo } from './styles';

export default () => {

    const navigation = useNavigation();

    return(

        <Container> 

            <Logo>

            <CalmClass />
            <Texto1> 
                Olá, seja bem vindo!
            </Texto1>
        
            <Texto> 
                Explore o app, encontre paz de espírito e prepare sua mente!
            </Texto>

            </Logo>
        
            <Imagem>

            <Mulher />

            </Imagem>

            <Botao> 

            <TouchableOpacity onPress={()=> navigation.navigate('MainTab')}>

            <Comecar/>

            </TouchableOpacity>

            </Botao>

            

            </Container>

        
        
    )
}