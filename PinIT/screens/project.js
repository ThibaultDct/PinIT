import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BodyProjectContainer from '../components/BodyProjectContainer';

export default function Project({ navigation }) {

    return (
        <>
            <Header nav={navigation}/>
            <BodyProjectContainer />
            <Navbar />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
