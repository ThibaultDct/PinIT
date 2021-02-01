import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Platform, Image} from 'react-native';
import { register } from '../api_calls/AuthAPI';
import {store} from '../App';
import {createProject} from '../api_calls/ProjectAPI';
import {updateProfileState} from '../screens/profile';
import {loadProfileById} from '../api_calls/ProfileAPI';

export default function CreateProjectInput({ nav }) {
    const [projectname, setProjectName] = useState('');
    const [projectdescription, setProjectDescription] = useState('');
    const [projectimage, setProjectPicture] = useState('');
    const token = store.getState().userReducer.token;
    const user = store.getState().userReducer.user;
    const profile = store.getState().userProfileReducer;
    const [data, setData] = useState([]);

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
               // .then();
                nav.navigate('Home')
            } catch (error) {
                console.log(error);
            }
            
        }
    }
    return(
        <View style={styles.account}>
            <TextInput
                style={styles.userInput}
                placeholder="Nom"
                onChangeText = {projectname => handleProjectname(projectname)}
                defaultValue = {projectname}
            />

            <View style={{  
                backgroundColor: '#fff',  
                borderBottomColor: '#000000',  
                borderBottomWidth: 1,  
                marginBottom: 10,
               }}  
            >  
                <TextInput  
                    multiline = {true}  
                    numberOfLines = {5}  
                    onChangeText={(text) => this.setState({text})}  
                    minHeight= '35'
                    
                    placeholder="Description" 
                    onChangeText = {projectdescription => handleProjectdescription(projectdescription)}
                    defaultValue = {projectdescription}
                />  
            </View>  

            
            <TextInput
                style={styles.userInput}
                placeholder="Url de l'image"
                onChangeText = {projectimage => handleProjectPicture(projectimage)}
                defaultValue = {projectimage} 
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
    userInput:{
        minHeight : 35,
        color: 'black',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom : 10,
    }
});