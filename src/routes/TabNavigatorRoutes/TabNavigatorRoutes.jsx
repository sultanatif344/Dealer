import React from 'react'
import Dashboard from '../../pages/Dashboard/Dashboard'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getHeaderTitle } from '@react-navigation/elements';
import Header from '../../pages/Dashboard/components/Header';
import { COLORS } from '../../constants/constants';
const TabNavigatorRoutes = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: COLORS.white
            }}
            screenOptions={() => ({
                headerStyle: {
                    backgroundColor: 'black'
                },
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header title={'Automatice Lot'} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                navigationOptions={{
                    title: 'Home',
                    headerTitle: 'Home',
                    tabBarLabel: 'Home'
                }
                }

                name=" " component={Dashboard} />

        </Tab.Navigator>
    );
}

export default TabNavigatorRoutes