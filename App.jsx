/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigatorRoutes from './src/routes/StackNavigatorRoutes/StackNavigatorRoutes';


function App() {
  return (

    <NavigationContainer>
      <StackNavigatorRoutes></StackNavigatorRoutes>
    </NavigationContainer>

  );
}

export default App;
