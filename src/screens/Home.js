import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, images } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <ScrollView>
        <View style={{ flex: 1, padding: 20 }}>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  color: COLORS.tertiary,
                  fontSize: 25,
                }}
              >
                Hi Olivia
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  color: COLORS.tertiary,
                  fontSize: 14,
                  marginTop: 5,
                }}
              >
                All you need for your new trip right here.
              </Text>
            </View>

            <TouchableOpacity
              style={{ width: 42, height: 42, borderRadius: 21 }}
            >
              <Image
                source={images.userProfile}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 21 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
