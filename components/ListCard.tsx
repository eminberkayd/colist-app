import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

interface Props {
    name: string,
    buyCount: number
    onPress: () => any
}
export const ListCard = ({ name, buyCount, onPress }: Props) => {
    let text: string = "";
    if (buyCount === 0) {
        text = "No items to buy.";
    } else if (buyCount === 1) {
        text = "1 item to buy.";
    } else if (buyCount > 1) {
        text = buyCount + " items to buy.";
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Text style={{ fontSize: 20 }}>{name}</Text>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        backgroundColor: "#fff",
        margin: "1%",
        marginVertical: "3%",
        marginHorizontal: "5%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
