import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Spacer from "react-native-spacer";
import {FAB} from "react-native-paper";


export default function BodyContainer() {
  return (
    <View style={styles.bodyContainer}>
        <ScrollView>

        </ScrollView>
        <Spacer backgroundColor={'transparent'}  >
            <FAB style={styles.btnnew}
                 small
                 icon="plus" />
        </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 8,
    top: 0,
    backgroundColor: '#D9D9D9',
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
    }
});
