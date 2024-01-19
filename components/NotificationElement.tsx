import React from 'react'
import { View, Text, StyleSheet } from "react-native";

interface Props {
    imgUrl: string,
    text: string,
    seen: boolean
}

export const NotificationElement = ({ imgUrl, text, seen }: Props) => {
    return (
        <View style={styles.container}>
            <Text>
                NotificationElement
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
        borderWidth: 2,
        backgroundColor: "#eff1ed"
    }
})
