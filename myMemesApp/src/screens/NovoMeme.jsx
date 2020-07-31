import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'

function NovoMeme(props) {
    return (
        <>
            <StatusBar barStyle="default" />
            <View>
                <Text>Novo Meme</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Constants.statusBarHeight
    }
});

export default NovoMeme;