import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Profile from '../screens/profile';

const screens = {
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);