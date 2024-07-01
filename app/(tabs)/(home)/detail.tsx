import { View, Image, Text } from "react-native";
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
          className="w-full h-[300px] rounded-bl-3xl rounded-br-3xl"
        />
        <View className="px-5 pt-5">
          <View>
            <Text className="text-xl">
              Cappucino <Text className="text-lg">with Oatmilk</Text>
            </Text>
            <Text className="text-lg">$10.00</Text>
          </View>
          <View>
            <Text className="text-lg">Size</Text>
            <View className="flex-row gap-3 items-center py-3">
              <Text className=" bg-amber-900 p-2 rounded-full text-white">
                Small
              </Text>
              <Text>Medium</Text>
              <Text>Large</Text>
            </View>
          </View>
          <View>
            <Text>About</Text>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae consectetur ipsam cum vero! Quis quaerat expedita
              tempore corrupti exercitationem at architecto. Accusamus nam,
              corrupti perferendis quos dignissimos similique? Voluptatum, a.
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text>Volume 160ml</Text>
            <View className="p-3 bg-white rounded-full items-center justify-center">
              <View className="flex-row gap-3">
                <Text className="text-xl text-white bg-amber-900 h-6 w-6 text-center rounded-full">
                  -
                </Text>
                <Text>2</Text>
                <Text className="text-xl text-white bg-amber-900 h-6 w-6 text-center rounded-full">
                  +
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text className="text-center bg-amber-900 p-3 text-white rounded-3xl">
              Add to cart
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default Page;
