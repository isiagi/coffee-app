import React from "react";
import { Stack } from "expo-router";
import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerSearchBarOptions: {
            placeholder: "Search",
            barTintColor: "#eee",
            headerIconColor: "#fff",
          },
          headerTransparent: true,
          headerTitleStyle: {
            color: "#fff",
          },
          headerTitle: "Jeff Coffee",
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          headerTitle: "",
          headerRight: () => (
            <Ionicons name="heart-outline" size={24} color={"#fff"} />
          ),
          headerTransparent: true,
          headerBackButtonMenuEnabled: true,
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
