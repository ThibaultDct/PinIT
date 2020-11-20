import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import ConnexionInput from '../components/ConnexionInput';

export default function Connexion({navigation}) {

    return (
        <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
            <ConnexionInput nav={navigation}/>
        </ImageBackground>
    );



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
})
