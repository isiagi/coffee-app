import React from "react";
import { Stack } from "expo-router";

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
      <Stack.Screen name="detail" />
    </Stack>
  );
};

export default HomeLayout;
