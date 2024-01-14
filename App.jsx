/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigatorRoutes from './src/routes/StackNavigatorRoutes/StackNavigatorRoutes';
import { PaperProvider } from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigatorRoutes></StackNavigatorRoutes>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
