import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    }
};

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Início',
                }}
            />
        </Tab.Navigator>
    );
}