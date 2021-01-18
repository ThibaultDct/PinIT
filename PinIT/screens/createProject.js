import React from 'react';
import {StyleSheet, View, ImageBackground, SafeAreaView, ScrollView} from 'react-native';
import CreateProjectInput from '../components/CreateProjectInput';
import Navbar from '../components/Navbar';
import imagePicker from "../components/imagePicker";

export default function CreateProject({navigation}) {



    return (
            <view>
                <ImageBackground source={require('../img/background.jpg')} style={styles.image}>
                    <SafeAreaView>
                        <ScrollView>
                            <CreateProjectInput nav={navigation}/>
                        </ScrollView>
                    </SafeAreaView>
                </ImageBackground>
                <Navbar nav={navigation}/>
            </view>
    );



}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: '100%',
        width: '100%'
    },

})