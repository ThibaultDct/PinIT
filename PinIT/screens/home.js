import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BodyContainer from '../components/BodyContainer';

export default function Home({ navigation }) {

    return (
        <>
            <Header nav={navigation}/>
            <BodyContainer />
            <Navbar nav={navigation}/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
