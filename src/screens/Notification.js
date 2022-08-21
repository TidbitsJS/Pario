import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { CustomButton } from "../components";

import { COLORS, FONTS, icons } from "../constants";

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

      <View style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            color: COLORS.tertiary,
            fontSize: 25,
          }}
        >
          Notifications
        </Text>

        <View style={{ marginTop: 50 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: 20,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    color: COLORS.white,
                    fontSize: 16,
                  }}
                >
                  Flight
                </Text>
                <Image
                  source={icons.flights}
                  resizeMode="contain"
                  style={{ width: 15, height: 15, marginLeft: 10 }}
                />
              </View>
              <Image
                source={icons.close}
                resizeMode="contain"
                style={{ width: 11, height: 11, tintColor: COLORS.white }}
              />
            </View>

            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  color: COLORS.white,
                  fontSize: 10,
                }}
              >
                The flight to Morocco is cheaper now.
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <CustomButton
                bgColor={COLORS.white}
                textColor={COLORS.tertiary}
                borderColor={COLORS.white}
                title="Book Now"
                restStyles={{ marginRight: 10 }}
              />

              <CustomButton
                bgColor="transparent"
                textColor={COLORS.white}
                borderColor={COLORS.lightPrimary}
                title="Later"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
