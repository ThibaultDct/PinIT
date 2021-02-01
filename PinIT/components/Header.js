import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {store} from "../App";
import {responsiveFontSize} from "react-native-responsive-dimensions";




export default function Header({ nav }) {

    let data = store.getState().userProfileReducer
    console.log(data);
    const pressHandler = () => {
        nav.navigate('Profile', {navigation: nav});
    }

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Text style={styles.appTitle}>PinIT</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity title='Mon profil' onPress={pressHandler}>
                    <Image
                        style={styles.profilePicture}
                        source={{
                            uri: data.image
                        }}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        top: 0,
        width: '100%',
        backgroundColor: '#2A2A2A',
    },
    appTitle: {
        bottom: 0,
        left: 20,
        color: '#fff',
        fontSize: responsiveFontSize(5),
        fontWeight: 'bold',
    },
    profilePicture: {
        bottom: 0,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    headerLeft: {
        flex: 7,
        left: 0,
    },
    headerRight: {
        flex: 1,
        position: 'absolute',
        right: 0,
        bottom: '15%',
    },
});
