import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { register } from '../api_calls/AuthAPI';


export default function CreateAccountInput({ nav }) {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleLastname = (text) => {
        setLastname({text})
    }
    const handleFirstname = (text) => {
        setFirstname({text})
    }
    const handleUsername = (text) => {
        setUsername({text})
    }
    const handleEmail = (text) => {
        setEmail({text})
    }
    const handlePassword = (text) => {
        setPassword({text})
    }
    const handlePassword2 = (text) => {
        setPassword2({text})
    }

    const registerAccount = () => {
        let valid = true
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (regex.test(email.text) === false){
            valid = false;
            console.log(email.text);
            alert("La syntaxe de votre mail est incorrecte.");
        }
        if (password.text !== password2.text){
            valid = false;
            console.log(password.text + ' : ' + password2.text);
            alert("Vos mots de passe doivent être identiques.");
        }
        if (password.text.length < 6 || username.text.length < 6 || lastname.text.length < 2 || firstname.text.length < 2){
            valid = false;
            alert("Vos informations ne respectent pas la longueur minimum requise.");
        }
        console.log("Valid ? " + valid)
        console.log(lastname.text + firstname.text + username.text + email.text)
        if (valid === true){
            register(lastname.text, firstname.text, username.text, email.text, password.text)
                .then(nav.navigate('Connexion'))
        }
    }

    return(
        <View style={styles.account}>
            <TextInput
                style={styles.userInput}
                placeholder="Nom"
                onChangeText = {lastname => handleLastname(lastname)}
                defaultValue = {lastname}
            />
            <TextInput
                style={styles.userInput}
                placeholder="Prénom"
                onChangeText = {firstname => handleFirstname(firstname)}
                defaultValue = {firstname}
            />
            <TextInput
                style={styles.userInput}
                placeholder="Pseudo"
                onChangeText = {username => handleUsername(username)}
                defaultValue = {username}
            />
            <TextInput
                style={styles.userInput}
                placeholder="Email"
                onChangeText = {email => handleEmail(email)}
                defaultValue = {email}
            />
            <TextInput
                style={styles.pwdInput}
                secureTextEntry={true}
                placeholder="Mot de passe"
                onChangeText = {password => handlePassword(password)}
                defaultValue = {password}
            />
            <TextInput
                style={styles.pwdInput}
                secureTextEntry={true}
                placeholder="Confirmer"
                onChangeText = {password2 => handlePassword2(password2)}
                defaultValue = {password2}
            />
            <Button
                title="Création d'un compte"
                //onPress={TestConnexion}
                onPress = {
                    () => registerAccount()
                }
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