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

import { ServiceCard } from "../components";
import { COLORS, FONTS, icons, images, services } from "../constants";

const Home = ({ navigation }) => {
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
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                source={images.userProfile}
                resizeMode="cover"
                style={{ width: "100%", height: "100%", borderRadius: 21 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 50,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {/**
             *  Using map instead of Flatlist to avoid a clash between the scrollView and Flatlist nested orientation
             *  It's a fix data, so a map justifies more than Flatlist which is primarily used to handle a long list of data
             */}
            {services.map((service, index) => (
              <ServiceCard
                key={`service-${index}`}
                icon={service.icon}
                name={service.name}
                boxWidth={78}
                boxHeight={79}
                restStyles={{
                  marginBottom: 40,
                }}
                handlePress={() => {}}
              />
            ))}
          </View>

          <TouchableOpacity
            style={{
              width: "100%",
              minHeight: 78,
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: COLORS.primary,
              flexDirection: "row",
              borderRadius: 5,
              paddingHorizontal: 30,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                color: COLORS.white,
                fontSize: 14,
              }}
            >
              Expenses Planner
            </Text>
            <Image
              source={icons.expenses}
              resizeMode="contain"
              style={{ width: 47, height: 44 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
