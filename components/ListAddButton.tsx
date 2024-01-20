import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

interface Props {
    onPress: () => any
}

export const ListAddButton = ({ onPress }: Props) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                asdsd
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
