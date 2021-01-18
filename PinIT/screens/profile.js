import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../components/Navbar';

<<<<<<< Updated upstream
export default function Profile() {
    return (
        <>
            <Text>SALUT VOUS</Text>
            <Navbar />
        </>
    );
=======
export default function Profile({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [data, setData] = useState([]);
    const user = store.getState().userReducer.user;
    const token = store.getState().userReducer.token;

    const pressHandler = () => {
        data.forEach(element => console.log(element))
    }

    const disconnect = () => {
        logout()
            .then(navigation.navigate('Connexion'));
    }

    const editProfile = () => {
        navigation.navigate('EditProfile', {nav: navigation})
    }

    async function _loadData() {
        let url = 'http://51.15.230.77:12053/api/profiles/?pseudo=' + user;
        await fetch(url, {
            method: 'GET',
            headers: {"Authorization": "Token " + token}})
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    }

    function updateProfileState() {
        store.dispatch({type: SET_PROFILE, payload: {
                pseudo: data[0].pseudo,
                lastname: data[0].lastname,
                firstname: data[0].firstname,
                image: data[0].img,
                age: data[0].age,
                country: data[0].country,
                bio: data[0].bio
            }})
        console.log(store.getState())
    }

    if (isLoading === false && isError === false) {
        updateProfileState()
        let profileData = store.getState().userProfileReducer
        return (
            <>
                <View style={styles.profileContainer}>
                    <View style={styles.infosContainer}>
                        <View style={styles.container}>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={{
                                        width: responsiveWidth(20),
                                        height: responsiveHeight(20),
                                    }}
                                    source={{uri: profileData.image}}
                                />
                            </View>
                            <View style={styles.globalInfosContainer}>
                                <Text style={styles.pseudoText}>@{profileData.pseudo}</Text>
                                <Text style={styles.nameText}>{profileData.firstname} {profileData.lastname}</Text>
                                <Text style={styles.nameText}>{profileData.age} ans</Text>
                                <Text>{profileData.country}</Text>
                            </View>
                            <View style={styles.profileOptions}>
                                <TouchableOpacity onPress={disconnect}>
                                    <Image
                                        style={{
                                            width: responsiveWidth(2),
                                            height: responsiveHeight(3),
                                            title: 'Déconnexion',
                                        }}
                                        source={require('../img/logout.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={editProfile}>
                                    <Image
                                        style={{
                                            width: responsiveWidth(2),
                                            height: responsiveHeight(3),
                                            title: 'Modifier profil',
                                        }}
                                        source={require('../img/edit.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.bioContainer}>
                            <Text>{profileData.bio}</Text>
                        </View>
                    </View>
                </View>
                <Navbar nav={navigation}/>
            </>
        );
    } else {
        return (
            <AppLoading
                startAsync={_loadData}
                onFinish={() => setLoading(false)}
            />
        )
    }
>>>>>>> Stashed changes
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
