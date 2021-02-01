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
        <View
            style={{
                width: '100%',
  height: '10%',
  backgroundColor: '#000000',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute', //Here is the trick
  bottom: 0,

            }}
        >
            <div  theme='dark' style={{ display:'flex', alignItems:'stretch' , color:'#fff',position:'fixed', backgroundcolor:'#4f4663'}}>
                <div style={{ backgroundcolor:'4f4663', color:'#000000'}}>
                    <TouchableOpacity title='Mon profil' onPress={HomeRoute}>                          
                            <img src={require('../img/icons8-home-64.png')}/>
                    </TouchableOpacity>
                </div>
                <div style={{  color:'#000000'}}>
                    <TouchableOpacity title='Mon projet' onPress={ProfileRoute}>                
                            <img src={require('../img/icons8-user-male-64.png')}/>
                    </TouchableOpacity>
                </div>
                <div style={{ color:'#000000'}}>
                    <TouchableOpacity title='Mon projet' onPress={CreateProjectRoute}>
                        <img src={require('../img/icons8-new-copy-64.png')}/>
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