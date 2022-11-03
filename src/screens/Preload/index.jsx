import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';


import CalmClass from '../../../assets/icons/calmclass.svg';

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {

            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken(); 
    }, []);

    return (
        <Container>
            {/*<CalmClass />*/}
            <LoadingIcon size="large" />
        </Container>
    )
}