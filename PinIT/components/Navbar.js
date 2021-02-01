import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image} from 'react-native';



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
        <View style={styles.container}>
            <View style={styles.tamere}>
                <View style={{ backgroundColor:'#4f4663', color:'#000000'}}>
                    <TouchableOpacity title='Mon profil' onPress={HomeRoute}>
                        <Image source={require('../img/icons8-home-64.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.black}>
                    <TouchableOpacity title='Mon projet' onPress={ProfileRoute}>
                        <Image source={require('../img/icons8-user-male-64.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.black}>
                    <TouchableOpacity title='Mon projet' onPress={CreateProjectRoute}>
                        <Image source={require('../img/icons8-new-copy-64.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '10%',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
    },
    black:{
        color : '#000000',
    },
    tamere:{
        display:'flex',
        flexDirection:'row',
        alignItems:'stretch' ,
        color:'#ffffff',
        position:'absolute',
        bottom:0,
        backgroundColor:'#4f4663'
    }
})