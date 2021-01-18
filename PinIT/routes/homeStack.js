import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
<<<<<<< Updated upstream
import Profile from '../screens/home';
=======
import Profile from '../screens/profile';
import EditProfile from '../screens/editProfile';
import Connexion from '../screens/connexion';
import CreateAccount from "../screens/createAccount";
import CreateProject from "../screens/createProject";
>>>>>>> Stashed changes

const screens = {
    Accueil: {
        screen: Home
    },
    Profil: {
        screen: Profile
    },
<<<<<<< Updated upstream
=======
    EditProfile: {
        screen: EditProfile
    },
    CreationProjet: {
        screen: CreateProject
    },
>>>>>>> Stashed changes
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);