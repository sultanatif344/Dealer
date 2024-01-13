import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigatorRoutes from '../TabNavigatorRoutes/TabNavigatorRoutes';
import Splash from '../../pages/Splash/Splash';
import SignIn from '../../pages/SignIn/SignIn';
const StackNavigatorRoutes = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="HomeScreen" component={TabNavigatorRoutes}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackNavigatorRoutes