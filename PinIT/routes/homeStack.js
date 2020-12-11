import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Profile from '../screens/profile';
import EditProfile from '../screens/editProfile';
import Connexion from '../screens/connexion';
import CreateAccount from "../screens/createAccount";
import Project from "../screens/project";

const screens = {
    Connexion: {
        screen: Connexion
    },
    Création: {
        screen: CreateAccount
    },
    Accueil: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
    Project: {
        screen: Project
    },
    EditProfile: {
        screen: EditProfile
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
