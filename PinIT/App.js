import React, { useState, Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'pacifico': require('./assets/fonts/Pacifico.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <Navigator theme='dark'/>
    );
  } else {
    return (
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontsLoaded(true)}
        />
    )
  }
}
