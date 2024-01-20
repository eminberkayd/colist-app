import { Stack } from "../helper"
import { WelcomeScreen, SignInScreen, SignUpScreen, LoginScreen } from "../../screens"

export const LoginStack = ({ setLogIn }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}