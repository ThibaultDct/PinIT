import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";
import {loadProjects} from "../api_calls/ProjectAPI"
import Async from "react-async";
import {store} from "../App";
import {SET_PROFILE} from "../store/actions";
import {AppLoading} from "expo";

const DATA = [
    {
        image: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/f/b/9/fb9dd4b28f_50151034_feu-artifice-couleurs.jpg',
        titre: 'Les posts sont là !',
        author: 'PinIt',
        like: 0,

    },
    {
        image: 'https://i.pinimg.com/474x/80/1b/ba/801bba2f502da088dda5ab4c0ee7b4d7.jpg',
        titre: 'Pinit',
        author: 'Tdarty',
        like: 2000000,

    },
    {
        image: 'https://lamanu.fr/wp-content/uploads/2020/05/devenir-developpeur-web-mobile.jpg',
        titre: 'Les Posts en WIP',
        author: 'ThibaultDct',
        like: 0,
    }
]

const pressHandler = () => {

}

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} title='Mon profil' onPress={pressHandler}>
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

export default function BodyContainer({nav}) {

    const renderItem = ({item}) => (
            <TouchableOpacity style={styles.item} title='Mon profil' onPress={pressHandler(item.id)}>
                <Text style={styles.titreText}> {item.title}</Text>
                <Image style={styles.projetImage} source={{uri: item.image}}/>
                <Text style={styles.pseudoText}>
                    <Text>Proposé par </Text>
                    <Text>{item.profile}</Text>
                </Text>
                <Text syle={styles.likeContainer}>
                    <Image style={styles.likeImage} source={require('../img/like.png')}/>
                    <Text style={styles.like}> {item.likes} </Text>
                </Text>
            </TouchableOpacity>
    )

    function pressHandler(id) {
        nav.navigate("Projects")
    }

        return (
            <Async promiseFn={loadProjects}>
                <Async.Loading>
                    <Image source={require('../img/loading.gif')} style={styles.loadingImage}/>
                </Async.Loading>
                <Async.Fulfilled>{data => {
                    console.log(data)
                    return (
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            numColumns={3}
                        />
                    )
                }}
                </Async.Fulfilled>
                <Async.Rejected>
                    <Text> Erreur 400 : no projet found </Text>
                </Async.Rejected>
            </Async>
        );
}

const styles = StyleSheet.create({
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
