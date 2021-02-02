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
                <View style={styles.purple}>
                    <TouchableOpacity title='Mon profil' onPress={HomeRoute}>
                        <Image source={require('../img/icons8-home-64.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.purple}>
                    <TouchableOpacity title='Mon projet' onPress={ProfileRoute}>
                        <Image source={require('../img/icons8-user-male-64.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.purple}>
                    <TouchableOpacity title='Mon projet' onPress={CreateProjectRoute}>
                        <Image source={require('../img/icons8-new-copy-64.png')}/>
                    </TouchableOpacity>
                </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
        height: '10%',
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'stretch',
        position: 'absolute', //Here is the trick
        bottom: 0,
    },
    purple:{
        backgroundColor:'#4f4663',
        color:'#000000'
    }
})