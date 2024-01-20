import React from 'react'
import { View, Text } from "react-native";

export const ListScreen = ({ navigation, route }: any) => {
    const listname: string = route?.params?.listname || "";

    return (
        <View>
            <Text>
                List name:  {listname}
            </Text>
        </View>
    )
}
