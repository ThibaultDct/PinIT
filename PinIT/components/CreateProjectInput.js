import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Platform, Image} from 'react-native';
import { register } from '../api_calls/AuthAPI';
//Rajouter le bon chemin
import * as ImagePicker from 'expo-image-picker';

export default function CreateProjectInput({ nav }) {
    const [projectname, setProjectName] = useState('');
    const [projectdescription, setProjectDescription] = useState('');

    const handleProjectname = (text) => {
        setProjectName({text})
    }
    const handleProjectdescription = (text) => {
        setProjectDescription({text})
    }
    const registerProject = () => {
        let valid = true
        if (valid === true){

            //register(projectname.text, projectdescription.text)
            //    .then(nav.navigate('Home'))
        }
    }
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    return(
        <View style={styles.account}>
            <TextInput
                style={styles.userInput}
                placeholder="Nom"
                onChangeText = {projectname => handleProjectname(projectname)}
                defaultValue = {projectname}
            />
            <TextInput
                backgroundColor="white"

                placeholder="Description"
                multiline
                numberOfLines = {5}
                minHeight={35}
                onChangeText = {projectdescription => handleProjectdescription(projectdescription)}
                defaultValue = {projectdescription}
            />
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <Button
                title="Création d'un projet"
                //onPress={TestConnexion}
                onPress = {
                    () => registerProject()
                }
                color='green'
            />
            <StatusBar style="auto"/>

        </View>
    );

}

const styles = StyleSheet.create({
    account:{
        flex: 1,
        justifyContent: 'center',
        padding: '10%'
    },
    userInput:{
        height: '10%',
        minHeight : 35,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom : 10,
        numberOfLines :5,
    },
    pwdInput: {
        height: '10%',
        minHeight : 35,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom : 10,
    },
   
});