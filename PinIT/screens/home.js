import React, {useState} from 'react';
import {StyleSheet, ImageBackground, FlatList, Image, Text} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BodyContainer from '../components/BodyContainer';

export default function Home({ navigation }) {

        return (
            <>
                <Header nav={navigation}/>
                <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
                    <BodyContainer nav={navigation}/>
                </ImageBackground>
                <Navbar/>
            </>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        flex: 8,
        height: '100%',
        width: '100%',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
