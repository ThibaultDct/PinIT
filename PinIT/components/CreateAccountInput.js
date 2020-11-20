import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function CreateAccountInput({ nav }) {
    const TestConnexion = () => {
        nav.navigate('Accueil');
    }

    return(
        <View style={styles.account}>
            <TextInput
                style={styles.userInput}
                placeholder="Nom de compte"
            />
            <TextInput
                style={styles.pwdInput}
                secureTextEntry={true}
                placeholder="Mot de passe"
            />
            <TextInput
                style={styles.pwdInput}
                secureTextEntry={true}
                placeholder="Confirmer"
            />
            <Button
                title="Création d'un compte"
                onPress={TestConnexion}
                color='green'
            />
            <StatusBar style="auto"/>
        </View>
    );

}

const styles = StyleSheet.create({
    account:{
        flex: 1,
        justifyContent: 'center',
        padding: '10%'
    },
    userInput:{
        height: '10%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom : 10,
    },
    pwdInput: {
        height: '10%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom : 10,
    },
});