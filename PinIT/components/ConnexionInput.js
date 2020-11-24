import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button,} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { store } from "../App";
import { SET_USER } from "../store/actions";
import { login } from "../api_calls/connexion";


export default function ConnexionInput({ nav }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const TestConnexion = () => {
        //nav.navigate('Accueil');
        store.dispatch({type: SET_USER, payload: {user: 'ThibaultDct'}});
        login(username.text, password.text)
            .then(nav.navigate('Accueil'))
            .catch(err => console.log(err))
    }

    const handleUsername = (text) => {
        setUsername({text})
    }
    const handlePassword = (text) => {
        setPassword({text})
    }

    const GoToAccount = () => {
        nav.navigate('Création')
    }

    console.log(store.getState());
    store.subscribe(() => console.log(store.getState()));

    return(
        <View style={styles.container}>
            <View style={styles.connexionTop}>
                <Text style={styles.titre}>Trouvez votre prochaine idée de projet</Text>
            </View>
            <View style={styles.connexionBottom}>
                <TextInput
                    style={styles.userInput}
                    placeholder="Nom de compte"
                    onChangeText = {username => handleUsername(username)}
                    defaultValue = {username}
                />
                <TextInput
                    style={styles.pwdInput}
                    secureTextEntry={true}
                    placeholder="Mot de passe"
                    onChangeText = {password => handlePassword(password)}
                    defaultValue = {password}
                />
                <Button
                    title="Connexion"
                    onPress={TestConnexion}
                    color='green'
                />
                <Text style={styles.link} onPress={GoToAccount}>
                    Crée un compte</Text>
                <StatusBar style="auto"/>
            </View>
        </View>
        );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    connexionTop:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    connexionBottom:{
        flex: 1,
        width:'100%',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: '10%'
    },
    titre:{
        textAlign: 'center',
        color:'white',
        fontSize: heightPercentageToDP('10%'),
    },
    userInput:{
        height: '17%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom : 10,
    },
    pwdInput: {
        height: '17%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom : 10
    },
    link: {
        color: 'aqua',
        textDecorationLine : 'underline',
    },
});