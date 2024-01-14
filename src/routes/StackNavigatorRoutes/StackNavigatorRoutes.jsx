import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigatorRoutes from '../TabNavigatorRoutes/TabNavigatorRoutes';
import Splash from '../../pages/Splash/Splash';
import SignIn from '../../pages/SignIn/SignIn';
import { COLORS } from '../../constants/constants';
const StackNavigatorRoutes = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash}
                options={{
                    title: ' ',
                    headerLeft: () => null,
                    headerStyle: {
                        height: 0,
                        shadowColor: 'transparent',
                        borderBottomWidth: 0,
                        elevation: 0,
                    },
                    cardStyle: {
                        backgroundColor: COLORS.primary
                    }
                }}
            />
            <Stack.Screen
                options={{
                    title: ' ',
                    headerLeft: () => null,
                    headerStyle: {
                        height: 0,
                        shadowColor: 'transparent',
                        borderBottomWidth: 0,
                        elevation: 0,
                    },
                    cardStyle: {
                        backgroundColor: COLORS.primary
                    }
                }}
                name="SignIn" component={SignIn} />
            <Stack.Screen name="HomeScreen" component={TabNavigatorRoutes}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackNavigatorRoutes