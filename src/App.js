import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import React from 'react';
import {Router} from './config';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
