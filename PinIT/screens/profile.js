import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';

import { getProfileFromId } from "../api_calls/ProfileAPI";

export default function Profile() {

    function _loadProfile(){
        getProfileFromId('1').then(data => console.log(data));
    }

    return (
        <>
            <Text>SALUT VOUS</Text>
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
