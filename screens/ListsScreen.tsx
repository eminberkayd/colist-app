import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ListCard } from '../components/ListCard';
import { api } from '../helpers/api';

export const ListsScreen = ({ navigation }: { navigation: any }) => {
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    const lists = api.getLists();
    setLists(lists);
  }, []);

  const handleOnPress = (listname: string) => {
    navigation.navigate("List", { listname })
  }

  return (

    <View style={styles.container}>
      {
        lists.length > 0 &&
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListCard name={item.name} onPress={() => handleOnPress(item.name)} buyCount={item.buyCount} />
          )}
        />
      }
      {
        lists.length === 0 &&
        <View style={styles.noItem}>
          <Text>You don't have any notifications!</Text>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2e8df"
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
