import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";


export default function BodyProjectContainer() {
  return (
    <View style={styles.bodyProjectContainer}>
        <Text style={styles.infosContainer}>
          <Text style={styles.titleText}>
            Titre {"\n"}
          </Text>
            DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
            {"\n"}{"\n"}
            <Image style={styles.projetImage} source={require('../img/like.png')}/>
            {"\n"}
                <Image style={styles.likeImage} source={require('../img/like.png')}/>
                <Text style={styles.like}> 3
                {"\n"}</Text>
                <Text style={styles.pseudoText}>
            by Auteur {"\n"}
          </Text>
          </Text>

      </View>
  );
}

const styles = StyleSheet.create({
  bodyProjectContainer: {
  flex: 1,
  top: 0,
  backgroundColor: '#233333',
  },
  projetImage:{
    height:responsiveHeight(10),
        width:responsiveHeight(10),
    backgroundColor:'#ffff',
    flex: 1
},
  infosContainer: {
    alignItems: "center",
    textAlign: "center",
    flex: 1,
      backgroundColor: '#fff222',
      borderRadius: 10,
      margin: 20,
      padding: 20
  },
  titleText: {
    
      fontSize: 30,
      fontWeight: 'bold'
  },
  likeContainer:{
    flex:3,
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

  pseudoText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#048BB7'
  },
});