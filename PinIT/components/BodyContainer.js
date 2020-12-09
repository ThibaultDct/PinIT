import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import Spacer from "react-native-spacer";
import {FAB} from "react-native-paper";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

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

export default function BodyContainer() {
  return (
      <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    numColumns={3}
                />
      </ImageBackground>
  );
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
    image: {
        flex: 8,
        height: '100%',
        width: '100%',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
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


});
