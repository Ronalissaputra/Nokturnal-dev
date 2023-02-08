import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ProfilScreen, SettingScreen} from '../../pages';
import {TabBar} from '../../components';

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
  },
});
