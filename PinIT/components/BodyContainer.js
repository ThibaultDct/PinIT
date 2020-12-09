import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View , ImageBackground} from 'react-native';
import Spacer from "react-native-spacer";
import {FAB} from "react-native-paper";


export default function BodyContainer() {
  return (
      <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
            <ScrollView>

            </ScrollView>
            <Spacer backgroundColor={'transparent'}  >
                <FAB style={styles.btnnew}
                     small
                     icon="plus" />
            </Spacer>
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
  item: {
      width: 130,
      height: 130,
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
});
