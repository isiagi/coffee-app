import { View, Text, Image } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { sharedElementTransition } from "./SharedElements";

// type Props = {};

const Page = () => {
  return (
    <View>
      <Animated.View
        sharedTransitionTag="card-tag"
        sharedTransitionStyle={sharedElementTransition}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
          }}
          className="w-full h-[300px]"
        />
        <Text>Page</Text>
      </Animated.View>
    </View>
  );
};

export default Page;
