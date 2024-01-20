import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { LoginStack, ListStack, NotificationStack, ProfileSectionStack } from './stacks';
import { Tab } from './helper';

export const Navigation = () => {
    const [loggedIn, setLoggedIn] = useState(true);

    if (loggedIn) {
        return (
            <Tab.Navigator initialRouteName='Lists'>
                <Tab.Screen
                    name='Notifications'
                    component={NotificationStack}
                    options={{
                        tabBarIcon: ({ color, size }) => {
                            console.log("white color: ", color);
                            console.log("size: ", size);
                            console.log("-----------"
                            );
                            return <Icon name="notifications" color={color} size={size} />
                        },
                        tabBarShowLabel: false
                    }}
                />
                <Tab.Screen
                    name='ListStack'
                    component={ListStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="list" color={color} size={size} />
                        ),
                        tabBarShowLabel: false,
                        headerShown: false
                    }}

                />
                <Tab.Screen
                    name='Profile'
                    component={ProfileSectionStack} options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="person" color={color} size={size} />
                        ),
                        tabBarShowLabel: false
                    }}
                />
            </Tab.Navigator>
        );
    }
    else {
        return (
            <LoginStack />
        )
    }
}
