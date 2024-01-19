import React, { useEffect, useState } from 'react'
import { View, Text } from "react-native";
import { ListCard } from '../components/ListCard';

export const ListsScreen = () => {
  const [lists, setLists] = useState<{ name: string }[]>([]);

  const fetchLists = async () => {
    return [{ name: "ali" }, { name: "mehmet" }, { name: "ayşe" }];
  }

  useEffect(() => {
    console.log("yenile")
    fetchLists()
      .then(data => {
        setLists(data);
      })
  }, [])

  return (
    <View>

      <Text>ListsScreen</Text>
      {
        lists.map((list) => {
          return <ListCard listname={list.name} />

        })
      }
    </View>
  )
}
