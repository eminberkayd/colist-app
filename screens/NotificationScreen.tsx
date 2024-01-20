// NotificationsScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { NotificationElement } from '../components/NotificationElement';
import { api } from '../helpers/api';

export const NotificationScreen = () => {
    const [notifications, setNotifications] = useState<any[]>([]);

    useEffect(() => {
        const notifications = api.getNotifications()
        setNotifications(notifications);
    }, [])

    const handleOnPress = () => {

    }

    return (
        <View style={styles.container}>
            {
                notifications.length > 0 &&
                <FlatList
                    data={notifications}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <NotificationElement text={item.text} onPress={() => alert("OK")} seen={false} />
                    )}
                />
            }
            {
                notifications.length === 0 &&
                <View style={styles.noItem}>
                    <Text>You don't have any notifications!</Text>
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    noItem: {
        flex: 1,
        backgroundColor: "#e8c1c1",
        minHeight: "10%",
        maxHeight: "10%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin: "3%"
    }
})
