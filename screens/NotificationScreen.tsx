import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet } from "react-native";
import { NotificationElement } from '../components/NotificationElement';

export const NotificationScreen = ({ navigation, route }: any) => {
    const [notifications, setNotifications] = useState<any>([]);
    const fetchNotifications = async () => {

        return [{ img: "ali" }, { user: "mehmet" }]


    }

    useEffect(() => {
        fetchNotifications()
            .then(data => {
                setNotifications(data);
            })
    })
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>

                <NotificationElement imgUrl='sdsd' text='ali' seen={true} />
                <NotificationElement imgUrl='sdsd' text='ali' seen={true} />
                <NotificationElement imgUrl='sdsd' text='ali' seen={true} />
                <NotificationElement imgUrl='sdsd' text='ali' seen={true} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "red"
    }
})
