import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";

export const WelcomeScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>
                Welcome!
            </Text>
            <Button title='Sign In' onPress={() => { navigation.navigate("Sign In") }} />
            <Button title='Sign up' onPress={() => { navigation.navigate("Sign Up") }} />
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
