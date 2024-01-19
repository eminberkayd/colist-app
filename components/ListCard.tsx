import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"


export const ListCard = ({ listname }: { listname: string }) => {

    const onPress = () => {
        alert("page");
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Text>{listname}</Text>
            </TouchableOpacity>
        </View>
    )
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "red"
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
})
