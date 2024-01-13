import React from 'react'
import Dashboard from '../../pages/Dashboard/Dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons'
const TabNavigatorRoutes = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Dashboard" component={Dashboard} />

        </Tab.Navigator>
    );
}

export default TabNavigatorRoutes