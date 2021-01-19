import React from 'react';
import {StyleSheet, View, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import CreateAccountInput from '../components/CreateAccountInput';

export default function CreateAccount({navigation}) {

    return (
        <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
            <SafeAreaView>
                <ScrollView>
                    <CreateAccountInput nav={navigation}/>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );



}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: '100%',
        width: '100%'
    },

})