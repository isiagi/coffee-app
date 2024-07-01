import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { Button, Card, Image, XStack } from "tamagui";
import { Link } from "expo-router";
import Animated from "react-native-reanimated";
import { sharedElementTransition } from "./SharedElements";

// coffee array with images
const coffees = [
  {
    id: 1,
    name: "Latte",
    image:
      "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    image:
      "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
  },
  {
    id: 3,
    name: "Espresso",
    image:
      "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
  },
  {
    id: 4,
    name: "Mocha",
    image:
      "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
  },
  {
    id: 5,
    name: "Mocha",
    image:
      "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
  },
];

const index = () => {
  return (
    <View className=" flex-1 ">
      <StatusBar barStyle={"light-content"} />
      <View className="w-300 h-[250px] ">
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg",
          }}
          className=" w-full h-full justify-center rounded-bl-3xl rounded-br-3xl overflow-hidden"
          resizeMode="cover"
          // style={{
          //   height: 300,
          // }}
        >
          <View>
            <Text className="text-white px-5 text-xl">Hello John</Text>
          </View>
        </ImageBackground>
      </View>

      <View className="flex-1">
        <Text className="text-xl px-5 py-3 font-bold">Find Your Coffee</Text>
        <ScrollView horizontal>
          {/* coffee types array */}
          {[
            { id: 1, name: "Latte" },
            { id: 2, name: "Cappuccino" },
            { id: 3, name: "Espresso" },
            { id: 4, name: "Mocha" },
            { id: 5, name: "Macchiato" },
            { id: 6, name: "Cafe au Lait" },
            { id: 7, name: "Cafe Mocha" },
          ].map(({ id, name }) => (
            <View
              key={id}
              className="bg-black text-white items-center justify-center py-1 px-3 mx-2 rounded-3xl"
            >
              <Text className="text-lg text-white text-center">{name}</Text>
            </View>
          ))}
        </ScrollView>
        {/* coffee cards array with images */}

        <FlatList
          data={coffees}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-around",
            marginTop: 20,
          }}
          renderItem={({ item }) => (
            // <View className="flex-1 m-1">
            //   <View>
            //     <Image
            //       source={{ uri: item.image }}
            //       style={{ width: "100%", height: 200, resizeMode: "cover" }}
            //     />
            //   </View>
            //   <Text>{item.name}</Text>
            // </View>
            <Animated.View
              sharedTransitionTag="card-tag"
              sharedTransitionStyle={sharedElementTransition}
            >
              <Link href="/detail" asChild>
                <Card
                  animation={"bouncy"}
                  elevate
                  scale={0.9}
                  hoverStyle={{ scale: 0.925 }}
                  pressStyle={{ scale: 0.875 }}
                  size="$4"
                  bordered
                  className="flex-1 m-1 h-[200px]"
                >
                  <Card.Header padded width={"100%"}>
                    {/* <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 200, resizeMode: "cover" }}
                /> */}
                    <Text className="text-white">{item.name}</Text>
                  </Card.Header>
                  <Card.Footer padded>
                    <View className="flex-row justify-between gap-3">
                      <View>
                        <Text className="text-white">Ugx 10,000</Text>
                      </View>
                      <XStack flex={1} />
                      <View>
                        <Button>+</Button>
                      </View>
                    </View>
                  </Card.Footer>
                  <Card.Background>
                    <Image
                      resizeMode="cover"
                      alignSelf="center"
                      source={{
                        uri: item.image,
                      }}
                      style={{ width: "100%", height: 200 }}
                    />
                  </Card.Background>
                </Card>
              </Link>
            </Animated.View>
          )}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default index;
