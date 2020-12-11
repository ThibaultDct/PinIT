import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Navbar from '../components/Navbar';
import { AppLoading } from "expo";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { store } from "../App";
import { SET_PROFILE, SET_USER } from "../store/actions";
import {TouchableOpacity, useWindowDimensions} from "react-native-web";
import { logout } from "../api_calls/AuthAPI";

export default function Profile({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [data, setData] = useState([]);
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const ratio = windowHeight/windowWidth;
    const user = store.getState().userReducer.user;
    const token = store.getState().userReducer.token;

    const pressHandler = () => {
        data.forEach(element => console.log(element))
    }

    const disconnect = () => {
        logout()
            .then(navigation.navigate('Connexion'));
    }

    const editProfile = () => {
        console.log("Nav : " + navigation)
        navigation.navigate('EditProfile')
    }

    async function _loadData() {
        let url = 'http://51.15.230.77:12053/api/profiles/?pseudo=' + user;
        await fetch(url, {
            method: 'GET',
            headers: {"Authorization": "Token " + token}})
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }

    function updateProfileState() {
        store.dispatch({type: SET_PROFILE, payload: {
                id: data[0].id,
                pseudo: data[0].pseudo,
                lastname: data[0].lastname,
                firstname: data[0].firstname,
                image: data[0].img,
                age: data[0].age,
                country: data[0].country,
                bio: data[0].bio
            }})
        console.log(store.getState())
    }

    if (isLoading === false && isError === false) {
        updateProfileState()
        let profileData = store.getState().userProfileReducer
        return (
            <>
                <View style={styles.profileContainer}>
                    <View style={styles.infosContainer}>
                        <View style={styles.container}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={{
                                        width: responsiveWidth(20*ratio),
                                        height: responsiveHeight(20),
                                    }}
                                    source={{uri: profileData.image}}
                                />
                            </View>
                            <View style={styles.globalInfosContainer}>
                                <Text style={styles.pseudoText}>@{profileData.pseudo}</Text>
                                <Text style={styles.nameText}>{profileData.firstname} {profileData.lastname}</Text>
                                <Text style={styles.nameText}>{profileData.age} ans</Text>
                                <Text>{profileData.country}</Text>
                            </View>
                            <View style={styles.profileOptions}>
                                <TouchableOpacity onPress={disconnect}>
                                    <Image
                                        style={{
                                            width: responsiveWidth(2),
                                            height: responsiveHeight(3),
                                            title: 'Déconnexion',
                                        }}
                                        source={require('../img/logout.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={editProfile}>
                                    <Image
                                        style={{
                                            width: responsiveWidth(2),
                                            height: responsiveHeight(3),
                                            title: 'Modifier profil',
                                        }}
                                        source={require('../img/edit.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.bioContainer}>
                            <Text>{profileData.bio}</Text>
                        </View>
                    </View>
                </View>
                <Navbar/>
            </>
        );
    } else {
        return (
            <AppLoading
                startAsync={_loadData}
                onFinish={() => setLoading(false)}
            />
        )
    }
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
    profileOptions: {
        flex: 1,
    },
    nameText: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    imageContainer: {
        flex: 1
    },
    globalInfosContainer: {
        flex: 2
    },
    pseudoText: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: '#048BB7'
    },
    bioContainer: {
        backgroundColor: '#9CC2CF',
        borderRadius: 10,
        marginTop: 20,
        padding: 20,
    },
});
