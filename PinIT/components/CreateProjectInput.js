import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import {store} from '../App';
import {createProject} from '../api_calls/ProjectAPI';
import {loadProfileById} from '../api_calls/ProfileAPI';

export default function CreateProjectInput({ nav }) {
    const [projectname, setProjectName] = useState('');
    const [projectdescription, setProjectDescription] = useState('');
    const [projectimage, setProjectPicture] = useState('');
    const token = store.getState().userReducer.token;
    const user = store.getState().userReducer.user;
    const profile = store.getState().userProfileReducer;

    const handleProjectname = (text) => {
        setProjectName({text})
    }
    const handleProjectdescription = (text) => {
        setProjectDescription({text})
    }
    const handleProjectPicture = (text) => {
        setProjectPicture({text})
        console.log(text)
    }
    const buttonProject = () => {
        let valid = true
        if (valid === true){
            loadProfileById(user, token)
            console.log(store.getState())
            try {
               console.log(profile)
                createProject(token,projectimage.text,projectname.text, projectdescription.text, profile.id );
                nav.navigate('Home')
            } catch (error) {
                console.log(error);
            }
            
        }
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.userInput}
                placeholder="Nom"
                onChangeText = {projectname => handleProjectname(projectname)}
            />

            <View style={styles.description} >
                <TextInput  
                    multiline = {true}  
                    numberOfLines = {5}
                    
                    placeholder="Description"
                    onChangeText = {projectdescription => handleProjectdescription(projectdescription)}
                />  
            </View>  

            
            <TextInput
                style={styles.userInput}
                placeholder="Url de l'image"
                onChangeText = {projectimage => handleProjectPicture(projectimage)}
            />
            
            <Button
                title="Création d'un projet"
                onPress = {
                    () => buttonProject()
                }
                color='green'
            />
            <StatusBar style="auto"/>

        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: '#9f0fa5'
    },
    userInput:{
        minHeight : 35,
        color: 'black',
        backgroundColor: '#ffffff',
        padding: 10,
        margin : 10,
    },
    description : {
        backgroundColor: '#ffffff',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        margin: 10,
        minHeight: 35
    }
});