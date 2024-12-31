import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './splash';
import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';
import AddTasks from './AddTasks';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Registration" component={Registration}></Stack.Screen>
      <Stack.Screen name="Dashboard" component={Dashboard}></Stack.Screen>
      <Stack.Screen name="AddTasks" component={AddTasks}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default Navigation;
