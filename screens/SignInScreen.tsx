import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";

export const SignInScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>
                SignInScreen!
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
