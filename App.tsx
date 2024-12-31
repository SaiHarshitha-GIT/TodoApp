import React from 'react';

import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';

import Splash from './src/screens/splash';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/screens/Navigation';
import Dashboard from './src/screens/Dashboard';

function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
