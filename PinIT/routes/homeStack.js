import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Profile from '../screens/home';

const screens = {
    Accueil: {
        screen: Home
    },
    Profil: {
        screen: Profile
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);