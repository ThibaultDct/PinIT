import React from 'react';
import {StyleSheet, View, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import CreateProjectInput from '../components/CreateProjectInput';
import Navbar from '../components/Navbar';

export default function CreateProject({navigation}) {



    return (
            <View>
                <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
                    <CreateProjectInput nav={navigation}/>
                </ImageBackground>
                <Navbar/>
            </View>
    );



}
const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },

})