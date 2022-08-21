import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import { ServiceCard } from "../components";

import { COLORS, FONTS, icons, images } from "../constants";

const { height } = Dimensions.get("window");

const Welcome = ({ navigation }) => {
  const [windowHeight, setWindowHeight] = useState(height);

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) =>
      setWindowHeight(window.height)
    );
    return () => subscription?.remove();
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            minHeight: windowHeight,
          }}
        >
          <Image
            source={images.userProfile}
            resizeMode="cover"
            style={{ width: 105, height: 104 }}
          />
          <Text
            style={{
              fontFamily: FONTS.medium,
              color: COLORS.secondary,
              fontSize: 30,
              marginTop: 10,
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              color: COLORS.tertiary,
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Your new destination awaits you!
          </Text>

          <View
            style={{
              marginTop: 50,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <ServiceCard
              icon={icons.newPlan}
              name="Create New Trip Plans"
              boxWidth={100}
              boxHeight={99}
              handlePress={() => navigation.navigate("Home")}
            />
            <ServiceCard
              icon={icons.previousPlan}
              name="Continue a previous plan"
              boxWidth={100}
              boxHeight={99}
              handlePress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
