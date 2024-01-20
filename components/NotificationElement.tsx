import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
interface Props {
    text: string,
    seen: boolean,
    onPress: () => any
}

export const NotificationElement = ({ text, seen, onPress }: Props) => {
    return (
        <View style={{ ...styles.container, backgroundColor: seen ? '#e6e8e6' : '#e8e6e6' }}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: 50,
        paddingLeft: "5%",
        justifyContent: "center"
    },
    button: {
        flex: 1
    }
})

