import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import NovoMeme from './NovoMeme'
import MeusMemes from './MeusMemes'

const Stack = createStackNavigator();

function MainApp(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={NovoMeme}
                options={{
                    title: 'Criar Meme',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    )
}

export default MainApp