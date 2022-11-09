import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import CalmClass from '../../../assets/icons/calmclass.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null) {

            } else {
                navigation.navigate('Inicio');
            }
        }
        checkToken(); 
    }, []);

    return (
        <Container>
            <TouchableOpacity>
                <CalmClass onPress={()=> navigation.navigate('Inicio')}/>
            </TouchableOpacity>
            <LoadingIcon size="large" />
        </Container>
    )
}