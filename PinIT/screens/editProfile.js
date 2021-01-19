import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import Navbar from '../components/Navbar';
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {store} from "../App";
import {TouchableOpacity, useWindowDimensions} from "react-native-web";
import {editProfile} from "../api_calls/ProfileAPI";

export default function EditProfile({ nav }) {
    const navigation = nav;
    const [data, setData] = useState([]);
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const ratio = windowHeight / windowWidth;
    let profileData = store.getState().userProfileReducer
    const token = store.getState().userReducer.token;

    const [image, setImage] = useState(profileData.image);
    const [age, setAge] = useState(profileData.age);
    const [country, setCountry] = useState(profileData.country);
    const [bio, setBio] = useState(profileData.bio);

    const handleImage = (text) => {
        setImage({text})
    }
    const handleAge = (text) => {
        setAge({text})
        console.log(navigation)
    }
    const handleCountry = (text) => {
        setCountry({text})
    }
    const handleBio = (text) => {
        setBio({text})
    }

    const pressHandler = () => {
        data.forEach(element => console.log(element))
    }

    const validate = () => {
        console.log(profileData.id + ' ' + profileData.pseudo + ' ' + token + ' ' + image.text + ' ' + parseInt(age.text) + ' ' + country.text + ' ' + bio.text)
        console.log(navigation)
        editProfile(profileData.id, profileData.pseudo, token, image, age, country, bio)
                .then(navigation.navigate('Profile'))
    }

    return (
        <>
            <View style={styles.profileContainer}>
                <View style={styles.infosContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Editer mon profil</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Image
                            style={{
                                width: responsiveWidth(10 * ratio),
                                height: responsiveHeight(10),
                            }}
                            source={{uri: image.text}}
                            defaultSource={{uri: profileData.image}}
                        />
                    </View>
                    <Text style={styles.userInputTitle}>Image de profil :</Text>
                    <TextInput
                        style={styles.userInput}
                        placeholder="Image de profil"
                        defaultValue={image}
                        editable={true}
                        onChangeText = {image => handleImage(image)}
                    />
                    <Text style={styles.userInputTitle}>Pseudo :</Text>
                    <TextInput
                        style={styles.userInputLocked}
                        placeholder="Pseudo"
                        defaultValue={profileData.pseudo}
                        editable={false}
                    />
                    <Text style={styles.userInputTitle}>Nom :</Text>
                    <TextInput
                        style={styles.userInputLocked}
                        placeholder="Nom"
                        defaultValue={profileData.lastname}
                        editable={false}
                    />
                    <Text style={styles.userInputTitle}>Prénom :</Text>
                    <TextInput
                        style={styles.userInputLocked}
                        placeholder="Prénom"
                        defaultValue={profileData.firstname}
                        editable={false}
                    />
                    <Text style={styles.userInputTitle}>Âge :</Text>
                    <TextInput
                        style={styles.userInput}
                        placeholder="Âge"
                        defaultValue={profileData.age}
                        editable={true}
                        onChangeText = {age => handleAge(age)}
                    />
                    <Text style={styles.userInputTitle}>Pays :</Text>
                    <TextInput
                        style={styles.userInput}
                        placeholder="Pays"
                        defaultValue={profileData.country}
                        editable={true}
                        onChangeText = {country => handleCountry(country)}
                    />
                    <Text style={styles.userInputTitle}>Biographie :</Text>
                    <TextInput
                        style={styles.userInput}
                        placeholder="Biographie"
                        defaultValue={profileData.bio}
                        editable={true}
                        onChangeText = {bio => handleBio(bio)}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={validate}
                    >
                        <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Valider</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Navbar/>
        </>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 8,
        top: 0,
        backgroundColor: '#D9D9D9',
        paddingLeft: '30%',
        paddingRight: '30%',
        paddingTop: '10%',
    },
    infosContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
    },
    userInput: {
        height: responsiveHeight(2),
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderColor: '#048BB7',
        borderWidth: 1
    },
    userInputLocked: {
        height: responsiveHeight(2),
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 10,
        borderColor: '#048BB7',
        borderWidth: 1
    },
    userInputTitle: {
        backgroundColor: "#fff",
        fontWeight: 'bold',
    },
    title: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    titleContainer: {
        backgroundColor: '#9CC2CF',
        borderRadius: 10,
        marginBottom: 10,
        padding: 20,
        textAlign: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#56BF12",
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
});
