import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    bottom: 0,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
