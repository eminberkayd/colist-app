import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";

export const LoginScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>
                LoginScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: "red",
        padding: "20%"
    },
});
