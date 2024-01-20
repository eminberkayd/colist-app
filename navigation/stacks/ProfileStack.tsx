import { Stack } from "../helper"
import { ProfileScreen } from "../../screens"

export const ProfileSectionStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}