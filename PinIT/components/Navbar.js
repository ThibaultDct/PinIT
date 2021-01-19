import React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import {Accueil, Profile} from '../routes/homeStack'
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



export default function Navbar({ nav }) {

    const HomeRoute = () => {
        nav.navigate('Accueil', {navigation: nav});
    }
    const ProfileRoute = () => {
        nav.navigate('Profile', {navigation: nav});
    }
    const CreateProjectRoute = () => {
        nav.navigate('CreateProject', {navigation: nav});
    }

    return (
        <View>
            <div  theme='dark' style={{ display:'flex',  backgroundColor: '#000000', alignItems:'stretch' , color:'#fff',position:'fixed', backgroundcolor:'#4f4663'}}>
                <div style={{ backgroundcolor:'4f4663', color:'#000000'}}>
                    <TouchableOpacity title='Mon profil' onPress={HomeRoute}>                          
                            <img src={require('../img/home.png')}/>
                            <a>Home</a>
                    </TouchableOpacity>
                </div>
                <div style={{ backgroundcolor:'#4f4663', color:'#000000'}}>
                    <TouchableOpacity title='Mon projet' onPress={ProfileRoute}>                
                            <img src={require('../img/settings.png')}/>
                            <a>Profil</a>
                    </TouchableOpacity>
                </div>
                <div style={{backgroundcolor:'#4f4663', color:'#000000'}}>
                    <TouchableOpacity title='Mon projet' onPress={CreateProjectRoute}>
                        <img style={{margin:'5%'}} src={require('../img/newfolder.png')}/>
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