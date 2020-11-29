import React, { useState, Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { userReducer } from "./store/reducers";

const getFonts = () => Font.loadAsync({
  'pacifico': require('./assets/fonts/Pacifico.ttf')
});

export const store = createStore(userReducer);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <Provider store={store}>
          <Navigator theme='dark'/>
        </Provider>
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
