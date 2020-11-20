import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput, Button,} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';


export default function ConnexionInput({ nav }) {

    const TestConnexion = () => {
        nav.navigate('Accueil');
    }

    const GoToAccount = () => {
        nav.navigate('Création')
    }
    return(
        <View style={styles.container}>
            <View style={styles.connexionTop}>
                <Text style={styles.titre}>Trouvez votre prochaine idée de projet</Text>
            </View>
            <View style={styles.connexionBottom}>
                <TextInput
                    style={styles.userInput}
                    placeholder="Nom de compte"
                />
                <TextInput
                    style={styles.pwdInput}
                    secureTextEntry={true}
                    placeholder="Mot de passe"
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