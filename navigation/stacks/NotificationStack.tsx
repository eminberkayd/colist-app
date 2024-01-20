import { Stack } from "../helper";
import { NotificationScreen } from "../../screens";

export const NotificationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}