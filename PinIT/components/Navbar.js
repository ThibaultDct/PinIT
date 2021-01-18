import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
//import {Accueil, Profile} from '../routes/homeStack'
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



export default function Navbar({ nav }) {

    const HomeRoute = () => {
        nav.navigate('Home', {navigation: nav});
    }
    const ProfileRoute = () => {
        nav.navigate('Profile', {navigation: nav});
    }
    const CreateProjectRoute = () => {
        nav.navigate('CreationProjet', {navigation: nav});
    }

    return (
        <View>
            <div style={{display: 'flex', position:'fixed'}}>
                <div style={{flex: 'auto', width: '20%', backgroundcolor:'red'}}>
                    <TouchableOpacity title='Mon profil' onPress={HomeRoute}>
                            <a>Home</a>
                    </TouchableOpacity>
                </div>
                <div style={{flex: 'auto', width: '20%', backgroundcolor:'blue'}}>
                    <TouchableOpacity title='Mon projet' onPress={ProfileRoute}>
                            <a>Profil</a>
                    </TouchableOpacity>
                </div>
                <div style={{flex: 'auto', width: '20%', backgroundcolor:'blue'}}>
                    <TouchableOpacity title='Mon projet' onPress={CreateProjectRoute}>
                        <a>Nouveau Projet</a>
                    </TouchableOpacity>
                </div>
            </div>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        position:'absolute',
    }
    }

)