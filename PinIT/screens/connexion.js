import React from 'react';
import {StyleSheet, View, Text, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import ConnexionInput from '../components/ConnexionInput';

export default function Connexion({navigation}) {

    return (
        <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
            <SafeAreaView>
                <ScrollView>
                    <ConnexionInput nav={navigation}/>
                </ScrollView>
            </SafeAreaView>
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
