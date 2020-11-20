import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';

export default function Profile() {
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
