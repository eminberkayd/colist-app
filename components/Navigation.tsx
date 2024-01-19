import React, { useState } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, NotificationScreen, ListsScreen, ProfileScreen, WelcomeScreen, SignInScreen, SignUpScreen } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { ListScreen } from '../screens/ListScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const LoginStack = ({ setLogIn }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const ListStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Lists" component={ListsScreen} options={{ headerShown: true }} />
            <Stack.Screen name="List" component={ListScreen} options={{ headerShown: true }} />
            <Stack.Screen name="List Item" component={NotificationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const NotificationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

const ProfileSectionStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}



export const Navigation = () => {
    const [loggedIn, setLoggedIn] = useState(true);

    if (loggedIn) {
        return (
            <Tab.Navigator initialRouteName='Lists'>
                <Tab.Screen
                    name='Notifications'
                    component={NotificationStack}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="notifications" color={color} size={size} />
                        ),
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
