import React, {useState} from 'react';
import {StyleSheet, ImageBackground, FlatList, Image, Text} from 'react-native';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BodyContainer from '../components/BodyContainer';
import {store} from "../App";
import {SET_PROFILE} from "../store/actions";
import {AppLoading} from "expo";

export default function Home({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [data, setData] = useState([]);
    const user = store.getState().userReducer.user;
    const token = store.getState().userReducer.token;

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

    if (isLoading === false && isError === false){
        updateProfileState()
        let profileData = store.getState().userProfileReducer
        return (
            <>
                <Header nav={navigation}/>
                <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
                    <BodyContainer nav={navigation}/>
                </ImageBackground>
                <Navbar nav={navigation} />
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
        flex: 1,
        backgroundColor: '#fff'
    },

    image: {
        flex: 8,
        height: '100%',
        width: '100%',
        top: 0,
        justifyContent: 'center',
    },

});
