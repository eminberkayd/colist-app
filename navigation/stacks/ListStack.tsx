import { Stack } from "../helper"
import { ListScreen } from "../../screens/ListScreen"
import { View, Text, Button, Alert, AlertButton } from "react-native"
import { NotificationScreen } from "../../screens"
import { ListsScreen } from "../../screens"
import { ListAddButton } from "../../components/ListAddButton"

export const ListStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="My Lists" component={ListsScreen} options={{
                headerShown: true,
                headerRight: () => {
                    return <Button title="ali" onPress={() => Alert.alert("Mehmet", "Onaylıyor musun")} />
                },
                headerLeft: () => {
                    return <><View><Text>ali</Text></View></>
                }
            }} />
            <Stack.Screen name="List" component={ListScreen} options={{ headerShown: true }} />
            <Stack.Screen name="List Item" component={NotificationScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}