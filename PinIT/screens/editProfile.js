import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import Navbar from '../components/Navbar';
import { AppLoading } from "expo";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { store } from "../App";
import { TouchableOpacity } from "react-native-web";
import { logout } from "../api_calls/AuthAPI";

export default function EditProfile({ nav }) {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [data, setData] = useState([]);

    const pressHandler = () => {
        data.forEach(element => console.log(element))
    }

    let profileData = store.getState().userProfileReducer
    return (
        <>
            <View style={styles.profileContainer}>
                <View style={styles.infosContainer}>
                    <View style={styles.profileContainer}>
                        <Text style={styles.userInputTitle}>Pseudo :</Text>
                        <TextInput
                            style={styles.userInputLocked}
                            placeholder = "Pseudo"
                            defaultValue = {profileData.pseudo}
                            editable = {false}
                        />
                        <Text style={styles.userInputTitle}>Nom :</Text>
                        <TextInput
                            style={styles.userInputLocked}
                            placeholder = "Nom"
                            defaultValue = {profileData.lastname}
                            editable = {false}
                        />
                        <Text style={styles.userInputTitle}>Prénom :</Text>
                        <TextInput
                            style={styles.userInputLocked}
                            placeholder = "Prénom"
                            defaultValue = {profileData.firstname}
                            editable = {false}
                        />
                    </View>
                </View>
            </View>
            <Navbar/>
            </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    profileContainer: {
        flex: 8,
        top: 0,
        backgroundColor: '#D9D9D9',
    },
    infosContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 20,
        padding: 20,
    },
    userInput:{
        height: responsiveHeight(2),
        backgroundColor: '#fff',
        padding: 5,
        //marginBottom : 5,
        borderRadius: 10,
        borderColor: '#048BB7',
        borderWidth: 1
    },
    userInputLocked:{
        height: responsiveHeight(2),
        backgroundColor: '#D9D9D9',
        padding: 5,
        //marginBottom : 5,
        borderRadius: 10,
        borderColor: '#048BB7',
        borderWidth: 1
    },
    userInputTitle:{
        backgroundColor: "#fff",
    }
});
