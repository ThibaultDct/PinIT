import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Navbar from '../components/Navbar';
import { AppLoading } from "expo";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import { store } from "../App";
import { SET_USER } from "../store/actions";
import { userState } from "../store/state";
import { TouchableOpacity } from "react-native-web";
import { logout } from "../api_calls/auth";

export default function Profile({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [data, setData] = useState([]);
    const user = store.getState().user;
    const token = store.getState().token;

    const pressHandler = () => {
        data.forEach(element => console.log(element))
    }

    const disconnect = () => {
        logout()
            .then(navigation.navigate('Connexion'));
    }

    async function _loadData() {
        let url = 'http://172.16.18.4:12053/api/profiles/?pseudo=' + user;
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

    if (isLoading === false && isError === false) {
        return (
            <>
                <View style={styles.profileContainer}>
                    <View style={styles.infosContainer}>
                        <View style={styles.container}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={{
                                        width: responsiveWidth(20),
                                        height: responsiveHeight(20),
                                    }}
                                    source={{uri: data[0].img}}
                                />
                            </View>
                            <View style={styles.globalInfosContainer}>
                                <Text style={styles.pseudoText}>@{data[0].pseudo}</Text>
                                <Text style={styles.nameText}>{data[0].firstname} {data[0].lastname}</Text>
                                <Text style={styles.nameText}>{data[0].age} ans</Text>
                                <Text>{data[0].country}</Text>
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
                            </View>
                        </View>
                        <View style={styles.bioContainer}>
                            <Text>{data[0].bio}</Text>
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
