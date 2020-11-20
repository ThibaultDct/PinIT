import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation} from "react-native-paper";


  const UserRoute = () => <Text>User</Text>;

  const AllProjectRoute = () => <Text>Fild'actualité</Text>;

  const NotificationsRoute = () => <Text>Notification</Text>;

  const SettingsRoute = () => <Text>Settings</Text>;

export default function Navbar() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'user', title: 'Profil', icon: 'account', color:'#303030'},
    { key: 'projects', title: 'Projets', icon: 'folder', color:'#303030' },
    { key: 'notification', title: 'Notification', icon: 'alarm-light' , color:'#303030'},
    { key: 'settings', title: 'Paramètres', icon: 'settings' , color:'#303030'},
  ]

);
  const renderScene = BottomNavigation.SceneMap({
    user: UserRoute,
    projects: AllProjectRoute,
    notification: NotificationsRoute,
    settings: SettingsRoute,
  });
  return (
      <View style={styles.navbar}>
        <BottomNavigation
            style={ styles.menu}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: 'relative',
  },
  navbar:{
    flex: 1,
  },
});
