import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Spacer from "react-native-spacer";
import {FAB} from "react-native-paper";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import {loadProjects} from "../api_calls/ProjectAPI"
import {AppLoading} from "expo";

export default function BodyContainer({nav}) {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [proj, setProj] = useState([]);

    function renderItem(item){
        return (
            <TouchableOpacity style={styles.item} title='Mon profil' onPress={pressHandler(item.id)}>
                <Text style={styles.titreText}> {item.titre}</Text>
                <Image style={styles.projetImage} source={{uri: item.image}}/>
                <Text style={styles.pseudoText}>
                    <Text>Proposer par </Text>
                    <Text>{item.author}</Text>
                </Text>
                <Text syle={styles.likeContainer}>
                    <Image style={styles.likeImage} source={require('../img/like.png')}/>
                    <Text style={styles.like}> {item.like} </Text>
                </Text>
            </TouchableOpacity>
            )
    }

    function pressHandler(id) {
        nav.navigate("Projects")
    }

    if(isLoading === false && isError === false){
        return (
            <FlatList
                data={proj}
                renderItem={renderItem}
                numColumns={3}
            />
        );
    }
    else if (isLoading === true){
        return (
            <>
                <Image source={require('../img/loading.gif')} style={styles.loadingImage}/>
                <AppLoading
                startAsync={setProj(loadProjects)}
                onFinish={() => setLoading(false)}
                onError={() => setError(true)}
                />
            </>
        )
    }else {
        return (
            <Text>Erreur 404, serveur not found</Text>
        )
    }

}

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 8,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnnew:{
        margin: '1%',
        backgroundColor: '#36c23b',
    },

    item: {
        width: '33%',
        height: 200,
    },
    titreText:{
        flex:2,
        color:'white',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(1),
        textAlignVertical: 'center'
    },
    projetImage:{
        flex: 8
    },
    pseudoText: {
        fontSize : responsiveFontSize(0.5),
        fontWeight: 'bold',
        color: '#048bb7',
        textAlignVertical: 'top'
    },
    likeContainer:{
        flexDirection: 'column',
    },
    likeImage:{
        height:responsiveHeight(2),
        width:responsiveHeight(2)
    },
    like:{
        flex:2,
        color: 'red',
        fontSize: responsiveFontSize(0.7),
        textAlignVertical: 'top'
    },
    loadingImage: {
        height: responsiveHeight(5),
        width: responsiveHeight(5),
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }


});
